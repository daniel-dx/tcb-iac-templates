import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Capp_x6eb00wj from 'app_x6eb00wj/App'
// <!-- Don't touch add import here -->

function Home() {
  return (
    <div>
      <h1>选择应用：</h1>
      <ul>
        {/* <li><Link to="/app_x6eb00wj">app_x6eb00wj 预览</Link></li> */}
        {/* <!-- Don't touch add item here --> */}
      </ul>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/app_x6eb00wj" element={<Capp_x6eb00wj />} /> */}
        {/* <!-- Don't touch add route here --> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
) 