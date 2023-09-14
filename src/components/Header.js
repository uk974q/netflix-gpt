import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate()
  const userPresent = useSelector((store) => store.user.user)

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")      
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='h-12 bg-black flex items-center justify-between'>
      <div className="flex items-center">
        <img src={logo} className="w-16 h-10"/>
        <span className="font-bold text-white text-2xl">MyFlix</span>
      </div>
      {userPresent && 
        <div className="mr-4 flex items-center">
            <h2 className="text-white mr-2">
              <span className="text-sm mr-2">Hello,</span> 
              <span className="text-xl">{userPresent.displayName}</span>
            </h2>
            <i onClick={handleSignOut} className="las la-sign-out-alt text-white text-2xl cursor-pointer hover:text-red-600"></i>
        </div>
      }
    </div>
  )
}

export default Header