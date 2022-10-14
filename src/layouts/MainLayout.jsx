import { Outlet } from "react-router-dom"
import Menu from '../components/Menu'
/* самый главный наш файл 
тут мы монтируем наше меню которой
будет всегда на месте сверху
+ никогла не исчезнет
это самая главно я страница сайта*/

const MainLayout = () => {
    return <>
        <Menu />
        /* сюда можно добавить
        компонент который необходимо
        вынести за рамки */
        <Outlet />
        </>
}

/* Это наша главная страница
на которой мы будем менять
тест согласно нажатой ссылке */

export default MainLayout
/* можно установить es7+ react/redux/react-native
extension для болле быстрого ввода export import
()() */