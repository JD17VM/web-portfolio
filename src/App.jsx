import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Portfolio from './Portfolio'
import CV from './CV'

function App() {
  return (
    <BrowserRouter basename="/web-portfolio">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/:language" element={<Portfolio />} />
        <Route path="/:language/cv" element={<CV />} />
      </Routes>
      <Link to="/:language/cv" className='cv-link'></Link>
    </BrowserRouter>
  )
}

export default App;