import { Link, useLocation } from 'react-router-dom'
import queryString from 'query-string'
/* чтобы это импортировать нужно установить
пакет query string */
import { useState } from 'react'
import courses from '../data/courses'

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  /* тут мы берем параметр, из обекта location, полученный из строки 
  котрую пользовать добавил в конце алреса ?sort=id
  и превращает её в обычную строку */
  /* const query вернет {sort: id}*/
  console.log(location)
  /* проверяем что пользователь добавил ли пользовать
   ?sort=id можно так ?sort=id&filter=react
   вернет {sort: id, filter: react}*/

  const [sortKey, setSortKey] = useState(query.sort)
  /* здесь мы получаем значение свойстава sort обекта query
  а именно просто 'id'  или же Undefined если строки запроса нет*/

  const [sortedCourses, setSortedCourses] = useState()
  /* тут будет уже отсортированный массив
  объектов согласно нашему запросу */

  return (
    <>
      <h1>Courses</h1>
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
