import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Form from './form'
import Index from './index'
import Final from './final'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />}>
          <Route index element={<Index />} />
          <Route path = "/YES" element={<Final/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
