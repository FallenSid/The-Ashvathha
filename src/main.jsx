import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CreateBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Volume from './Pages/Volume.jsx'
import Character from './Pages/Character.jsx'
import Feedback from './Pages/Feedback.jsx'
import About from './Pages/About.jsx'

const router = CreateBrowserRouter([
  {path: "/", element:<App />},
  {path: "/Volume", element:<Volume/>},
  {path: "/Character", element:<Character/>},
  {path: "/FeedBack", element:<Feedback/>},
  {path: "/About", element:<About/>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
