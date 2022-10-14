const About = () => {
    return <div>
    <h1>About</h1>
    {/* <a href="/">Go to home </a> */}
    {/* при нажатии на ссылку страница
    полностью обновляется клиент 
    запрашивает страницу с сервера
    так как у нас React приложение
    то мы можем обойтись без тега a*/}

    {/* вместо этого мы используем компонент
    link который используется для
    всех внутренних ссылок*/}
    {/* <Link href заменяем на to 
    to="/">Go to Home</Link>
    <br/> */}
    {/* Благодаря link все 
    изменяется мгновенно никаких 
    запросов и переходо не осуществляется*/}

    {/* <Link href заменяем на to 
    to="/contacts">Go to Contacts</Link>*/}
    </div> 
    }

export default About
{/* можно установить es7+ react/redux/react-native
extension для болле быстрого ввода export import */}