import { useState,Suspense } from 'react'
import {GlobalStyle} from './style'
import Routes from '@/routes'
import './App.css'




function App() {
  

  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
      <GlobalStyle/>
      <Routes/>
      </Suspense>
    </div>
  )
}

export default App
