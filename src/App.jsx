import React from 'react'
import MainApp from './AllFoulder/MainApp'
import './App.css'
import '../src/AllFoulder/AllCss/Responsive.css'
import '../src/AllFoulder/AllCss/About.css'
import '../src/AllFoulder/AllCss/Katigoriya.css'
import '../src/AllFoulder/AllCss/CardMini.css'
import '../src/AllFoulder/AllCss/Card.css'
import '../src/AllFoulder/AllCss/Ofarmileniya.css'
import '../src/AllFoulder/AllCss/Filter.css'
import { store } from './AllFoulder/components/store/configureStore'
import '../src/AllFoulder/AllCss/Contact.css'
import '../src/AllFoulder/AllCss/ContactResponsive.css'

import { Provider } from 'react-redux'
import ScrollTop from './ScrollTop'
export default function App() {
  return (
    <div>
      <ScrollTop />
      <Provider store={store}>
        <div className="body">
          <MainApp />
        </div>
      </Provider>
    </div>
  )
}
