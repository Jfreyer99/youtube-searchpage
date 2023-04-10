import { useState, FC, Suspense} from 'react'
import './App.css'

import VideoRendererWrapper from './components/VideoRendererWrapper';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';

const App:FC = () => {

  return (
    <>
    <Routes>
      <Route path="/search" element={<VideoRendererWrapper/>}></Route>
      <Route path="/search/:handleUrl" element={<VideoRendererWrapper/>}></Route>
      <Route path="/Register" element={<Register></Register>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
    </>
  )
}
 
export default App