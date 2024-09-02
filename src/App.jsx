import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio'
import CV from './CV'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;