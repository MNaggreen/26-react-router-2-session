import { useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
/* вызов функции похожей на useState */
import courses from '../data/courses'
import NotFound from './NotFound'

const SingleCourse = () => {
  const params = useParams()
  /* так мы получим доступ к информации
  о параметрах которые мы указали
  в path="courses/:courseSlug" т.е. courseSlug */
}

const navigate = useNavigate()
/* функция которая позволяет сменить локацию
  перенаправить пользователя на другую страницу */

const location = useLocation()
/* Данная переменная вернет обьект
с парамнтрами какkey pathname search
локацию пути согласно 
адресной строки и покажет такие переменные
ка а */

/* С ПОМОЩЬЮ ?SORT=ID 
НАМ МОЖНО ПОЛЬЗОВТАЬСЯ ПОИСКОМ */

/* также чтобы полезоваться поиском через useLocation нам нужно
установить npm пакет query string
который пребразует строку в обект java script */

const course = courses.find((course) => course.slug === params.courseSlug)
/* если в списке course.slug равен params.course.slug 
  то переменной присвоется значение course.slug */
/* if (!course) { */
/* если мы не нашли нашего курса
    то к course добавляется undefined
    и есле это так мы возвращаем
    Not Found */
/* return <NotFound /> */
/* внизу можно добавить список курсов */
/* } */

useEffect(() => {
  if (!course) {
    navigate('..', { relative: 'path' })
  }
}, [course, navigate])

/* если курс не найден мы попадаем на страницу выше
    '..' согласно данному пути relative: 'path' 
  + данный код моно помещать только в скобки 
useEffect
useEffect работает так, что при изменении course
даная коллбэк функция сразу срабатывает */

return (
  <>
    <h1>{course?.title}</h1>
    {/* можно дабавить знак вопроса в конце переменной это поможет избежать ошибки если course равно undefined */}
    <h2>{course?.slug}</h2>
    <h3>{course?.id}</h3>
    <Link to=".." relative="path">
      All courses
    </Link>
    {/* тут можно использовать to=".."
      по аналогии как мы переходим в css
       */}
    {/* относительная to=".."*/}
    {/* to="/courses" прямая ссылка */}
    {/* переходить на один уровень выше
       относительо 
       relative="path" это использовать обязательно
       если мы вдруг заменим названеию корневой папки
       это называется относительная ссылка*/}
  </>
  /* так как мы нашли в нашем списке обект 
    у которого slug
    равен courses/:courseSlug" 
    то теперь все эти четыре строки выведуться сюда*/
)

export default SingleCourse
