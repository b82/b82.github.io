import './App.css'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Home from './pages/Home'
import Works from './pages/Works'
import DailyCoachDetail from './pages/DailyCoachDetail'
import RestAppDetail from './pages/RestAppDetail'
import Header from './components/Header'
import Contacts from './components/Contacts'

// Simple layout with page transitions
function Layout() {
  const location = useLocation()

  useEffect(() => {
    // Simple scroll to top on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <div className="page-container lg:pb-20">
        <div key={location.pathname} className="page-content">
          <Outlet />
        </div>
      </div>
      <Contacts />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "works/dailycoach",
        element: <DailyCoachDetail />,
      },
      {
        path: "works/restapp",
        element: <RestAppDetail />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App