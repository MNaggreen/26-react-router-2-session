import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* импорт BrowserRouter 
для дальнейшего его использования */
/* Route работает только вместе с Routes и 
не может быть отрендерен вне него */

import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import NotFound from './components/NotFound'
/* импорт наших компонентов для дальнейшего использования
как свойства Route */

import './App.css'


function App() {
  return (
    <BrowserRouter>
      {/* тут унас сбудет компонент
        обьект у которого будет свойство div 
        со значением children тот див что ниже
        у нас появились доступ к 
        к поиску, хэшу, путь,
        и navigater, push, replace,
        можно самостоятельно выполнять 
        навигуцию между страницами
        это делает при помощт определенного метода
        все что дает BrowserRouter*/}
      <div className="App">
        <Routes>
          <Route path="*" element={<NotFound />} />
          {/* это наш маршрут по умолчанию
          т.е. если мы ввели какую нибудь страницу
          отсутсвующую снизу, нам покажет
          страницу not found 
          так же в новой версии react теперь можно
          не саблюдать порядок страниц как
          мы сделали снизу*/}

          <Route path="/" element={<Home />} />
          {/* </Route> */}
          {/* Напрямую теги нельзя размещать в Route 
          но можно это сделать добавив как свойство со
          значением, также закрывающий тег можно опустить*/}
          {/* path необходим чтобы сказать reactRouter
          где и как отображать компонент
          в данном случае / это значить
          домашняя страница котора идет сразу после
          название.ru/ */}

          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          {/* Теперь в зависимости от изменения страницы
          в браузере у нас будут отобрааться разные
          страницы, например если напишем
          localhost: 3000/about то нам покажет страницу
          с about и т. д. остальные страницы 
          согласно тексту будут отображаться*/}

          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
