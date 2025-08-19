import './App.css'
import { createHashRouter, RouterProvider, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Home from './pages/Home'
import Works from './pages/Works'
import DailyCoach from './pages/case_study/DailyCoach'
import RestAppDetail from './pages/RestAppDetail'
import Header from './components/Header'
import Contacts from './components/Contacts'
import StudyGroup from './pages/case_study/StudyGroup'

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

const router = createHashRouter([
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
        element: <DailyCoach />,
      },
      {
        path: "works/restapp",
        element: <RestAppDetail />,
      },
      {
        path: "works/studygroup",
        element: <StudyGroup />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App