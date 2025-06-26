import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/work/:id",
    element: <WorkDetail />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App