import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({ isActve }) => (isActive ? 'activeLink' : 'link')}
        to="."
        end
      >
        {/* деструктуризируем значение как переменную для функции
        и далее станддартнаая функция тернарного оператора
        если isActive true то приминяется класс activeLink
        иначе класс link */}
        Home
      </NavLink>
      {/* end добовляем для того, чтобы
        избежать применение стиля когда ссылка
        неактивна
        т.к. это корневая ссылка */}

      <NavLink to="courses">Courses</NavLink>

      <NavLink
        className={({ isActve }) =>
          isActive ? 'activeLink anotherLink' : 'link'
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActve }) =>
          isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
        }
        to="/contacts"
      >
        Contacts
      </NavLink>
      {/* выше показано как можно использовать style сразу напрямую
        как в html но только сами стили это обект js и их надо писать в camel case */}
      {/* наше меню где вместо
        тега а мы используем NavLink который заранее
        был импортирован*/}

      {/* получается три способо стилизования
        1 это просто класс active
        2 это className вместе с тернарным оператором
        3 это это style как в html вместе с тернарным оператором */}
    </nav>
  )
}

export default Menu
/* можно установить es7+ react/redux/react-native
extension для болле быстрого ввода export import
()() */
