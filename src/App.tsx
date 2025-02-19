
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NavBar from './Components/Shared/NavBar'
import ErrorPage from './Pages/Errors'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/user/:userId" element={<Home />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
