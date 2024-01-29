import React from 'react'
import Sidebar from './component/Sidebar'
import Textfield from './component/Textfield'
import About from './component/About'
import Contact from './component/Contact'


function App() {

  return (
    <>
    <Sidebar/>
   {/* <About/>
    <Contact/>*/}
    <Textfield hiding={"Enter ur Text here"}/>
    </>
  )
}

export default App
