import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { auth } from '../utils/firebase'
import { removeUser, setUser } from '../utils/userSlice'

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
  const dispatchAction = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName } = user;
        dispatchAction(setUser({uid, email, displayName }))
      } else {
        dispatchAction(removeUser())
      }
    });
  },[])
  return (
    <RouterProvider router={appRoutes} />
  )
}

export default NetflixPage