import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotePage from './pages/NotePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/notes' element={<NotePage></NotePage>}/>
      </Routes>
    </>
  )
}

export default App
