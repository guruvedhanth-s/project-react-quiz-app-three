import React from 'react'
import Home from "./component/Home"
import Quiz from "./component/Quiz"
import Result from './component/Result'
import {Route,Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </div>
  )
}

export default App