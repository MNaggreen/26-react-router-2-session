import { useParams } from 'react-router-dom'
/* вызов функции похожей на useState */
import courses from '../data/courses'

const SingleCourse = () => {
  const params = useParams()

  console.log(params)
  /* так мы получим доступ к информации
  о параметрах которые мы указали
  в path="courses/:courseSlug" т.е. courseSlug */

  const course = courses.find((course) => course.slug === params.courseSlug)
  /* если в списке course.slug равен params.course.slug 
  то переменной присвоется значение course.slug */

  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h3>{course.id}</h3>
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
}

export default SingleCourse
