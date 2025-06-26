import './App.css'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Header from './components/Header'

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
      <div className="page-container">
        <div key={location.pathname} className="page-content">
          <Outlet />
        </div>
      </div>
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
        path: "work",
        element: <Work />,
      },
      {
        path: "work/:id",
        element: <WorkDetail />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App