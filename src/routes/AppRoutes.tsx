import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Poster from '../pages/Poster'
import Explain from '../pages/Explain'

const appRoutes = () => {
  const basename = process.env.NODE_ENV === 'development' ? '' : '/ar-project/'
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/explain" element={<Explain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default appRoutes
