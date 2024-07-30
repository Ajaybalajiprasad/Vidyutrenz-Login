import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import LandingPage from './components/LandingPage'
import GitHubLink from './components/Github';
import './App.css'

export default function App() {
  return (
    <div>
      <GitHubLink />
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  )
}
 