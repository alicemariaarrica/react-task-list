import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/appheader.jsx'
import AppMain from './components/appmain.jsx'
import AppFooter from './components/appfooter.jsx'

function App() {


  return (
    <div>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>


  )
}


export default App
