import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/home/Home.jsx'
import App from './pages/app/App.jsx'
import Web from './pages/web/Web.jsx'
import Graphic from './pages/graphic/Graphic.jsx'
import Locations from './pages/locations/Locations.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import DesignLayout from './layouts/DesignLayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "locations",
        element: <Locations />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/",
    element: <DesignLayout />,
    children: [
      {
        path: "web-design",
        element: <Web />
      },
      {
        path: "graphic-design",
        element: <Graphic />
      },
      {
        path: "app-design",
        element: <App />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
