import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import 'uno.css'

import routes from '~react-pages'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
