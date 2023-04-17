import { FC } from 'react'
import './App.css'

import VideoRendererWrapper from './components/VideoRendererWrapper';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App:FC = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<VideoRendererWrapper/>}></Route>
      <Route path="/:handleUrl" element={<VideoRendererWrapper/>}></Route>
      <Route path="/Register" element={<Register></Register>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
    </>
  )
}
 
export default App