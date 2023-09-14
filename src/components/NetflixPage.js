import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const appRoutes = createBrowserRouter([
   { 
        path:"/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
])
const NetflixPage = () => {
  return (
    <RouterProvider router={appRoutes} />
  )
}

export default NetflixPage