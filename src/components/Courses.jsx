import { Link, useLocation } from 'react-router-dom'
import queryString from 'query-string'
/* queryStrng это обект
у которого есть метод parse
чтобы это импортировать нужно установить
пакет query string */
import { useEffect, useState } from 'react'
import courses from '../data/courses'

const SORT_KEYS = ['title', 'slug', 'id']
/* это наш список для проверки на наличие
данных в нашем списке отортированных курсов */

function sortCourses(courses, key) {
  /* 1 это массив, 2 это ключ по которому мы сортруем */
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.inckudes(key)) {
    /* мы просто вызразаем список
    если у нас нет ключа или если ключ введенный пользователем
    не находится в списке SORT_KEYS */
    return sortedCourses
  }
  /* если ключ undefined то мы возвращаем спискок
  если ключ нормальный ты мы производим сортировку */
  sortedCourses.sort((a, b) =>
    a[key] > b[key] ? 1 : -1
  ) /*тут ортировка по убыванию  */
  /* вычитаем одно из другого чтобы получить большее и меньшее
  значение для сортировки 
  но с помощью - минуса можгл сортировать только числа
  для сортировки строк мы испольуем знаки больше >< меньше
  но тогда мы получим логическое значение true false для этого 
  мы будет использовать тернарный оператор*/
  return sortedCourses
}
const Courses = () => {
  const location = useLocation()
  /* useLocation создает обьект у которого будут свойства
  одно свойств sort */

  const query = queryString.parse(location.search)
  /* тут мы берем параметр, из обекта location, полученный из строки 
  котрую пользовать добавил в конце алреса ?sort=id
  и превращает её в обычную строку */
  /* const query вернет {sort: id}*/

  const navigate = useNavigate()

  console.log(location)
  /* проверяем что пользователь добавил ли пользовать
   ?sort=id можно так ?sort=id&filter=react
   вернет {sort: id, filter: react}*/

  const [sortKey, setSortKey] = useState(query.sort)
  /* здесь мы получаем значение свойстава sort обекта query
  а именно просто 'id'  или же Undefined если строки запроса нет*/

  console.log(sortCourses(courses, sortKey))
  /* если мы добавляем строку ?sort=id то наш
  массив будет отсортирован по вохврастанию id */

  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )
  /* тут будет уже отсортированный массив
  объектов согласно нашему запросу */

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey))
      /* если нет ключа мы вызываем navigate */
      navigate('.')
    /* переход на главную страницу */
    setSortKey()
    /* сброс ключа сортировки 
      значение будет undefined*/
    setSortedCourses([...courses])
    /* возврат массива курсов в первоначально состоянии
      если кдюча нет как мыговорили выше */
  }, [sortKey, navigate])
  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {/* в зависимости от нашего ключа сортировки
      свер будет выводиться текст как отсортированы курсы */}
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
        /* значением для свойства 
        to долна быть всегда строка */
        /* c помощью метода map
        мы генерируем наше меню с курсами
        и там же мы генерируем имя курса */

        /* конвертация чила в строку 
        в строку course.id.toString() 
        в map обьекте
        не рекомендуется использовать число
        для создание ссылки только
        слова будет луше
        для этого мы и создали slug свойство*/
      ))}
    </>
  )
}

export default Courses
