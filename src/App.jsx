import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Home from './routes/home/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
