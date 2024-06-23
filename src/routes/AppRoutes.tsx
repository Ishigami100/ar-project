import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Poster from '../pages/Poster'

const appRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poster" element={<Poster />} />
      </Routes>
    </BrowserRouter>
  )
}

export default appRoutes
