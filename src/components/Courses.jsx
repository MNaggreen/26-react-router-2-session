import { Link } from 'react-router-dom'
import courses from '../data/courses'

const Courses = () => {
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
