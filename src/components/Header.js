import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleAIMovie } from "../utils/stores/toggleSlice";
import { SALUTATION } from "../utils/language";
import ModalLanguage from "./ModalLanguage";
const Header = () => {
  const navigate = useNavigate()
  const dispatchActions = useDispatch()
  const userPresent = useSelector((store) => store.user.user)
  const language = useSelector((store) => store.language.value)
  const isAISearch = useSelector((store) => store.toggle.aiSearch)
  

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")      
    }).catch((error) => {
      navigate("/error")
    });
  }
  
  const handleAISearch = () => {
    dispatchActions(toggleAIMovie())
  }

  return (
    <div className='h-12 bg-transparent flex items-center justify-between ml-5 mr-5'>
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16 h-10"/>
        <span className="font-bold text-white text-2xl">MyFlix</span>
      </div>
      {userPresent && 
        <div className="mr-4 flex items-center">
          <ModalLanguage />
          <button onClick={handleAISearch} className="bg-red-800 hover:bg-red-900 text-white rounded-lg py-1 px-3 mr-2">{isAISearch ? 'Browse' : 'AI Search'}</button>
          <h2 className="text-white mr-2">
            <span className="text-sm mr-2">{SALUTATION[language]}</span> 
            <span className="text-xl">{userPresent.displayName}</span>
          </h2>
          <i onClick={handleSignOut} className="las la-sign-out-alt text-white text-2xl cursor-pointer hover:text-red-600"></i>
        </div>
      }
    </div>
  )
}

export default Header