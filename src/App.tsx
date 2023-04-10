import { useState, FC, Suspense} from 'react'
import './App.css'

import VideoRendererWrapper from './components/VideoRendererWrapper';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom'


const App:FC = () => {

  return (
    <>
    <Routes>
      <Route path="/search" element={<VideoRendererWrapper/>}></Route>
      <Route path="/search/:handleUrl" element={<VideoRendererWrapper/>}></Route>
      <Route path="/Login" element={<h1>Login</h1>}></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
    </>
  )
}
 
export default App