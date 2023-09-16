import Header from "./Header"
import login from "../assets/login.png"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRef, useState } from "react"
import { validate } from "../utils/formValidate"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/stores/userSlice";

const Login = () => {
    const [isUser, setIsUser] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const dispatchAction = useDispatch()
    const navigate = useNavigate()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    
   
    const handleSign = () => {
        // console.log("handle")
        let username = isUser ? "user" : name.current.value 
        // console.log("Name",name)
        const {valid, msg} = validate(email.current.value, password.current.value, username)
        setErrorMessage(msg)
        // console.log("Msg",msg,"=",valid)
        if(!valid){
            return
        }

        if(isUser){
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // const user = userCredential.user;
                // console.log("User signed in", user)
                navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " : " + errorMessage)
            });
        }else{
            console.log("Signed up")
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // console.log("Signed up promise")
                updateProfile(auth.currentUser, {
                    displayName: name.current.value
                  }).then(() => {
                    const {uid, email, displayName } = auth.currentUser;
                    dispatchAction(setUser({uid, email, displayName }))
                    // console.log("Display promise", name)
                    navigate("/browse")
                  }).catch((error) => {
                    setErrorMessage("Profile Updation error : "+ error)
                  });   
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " : " + errorMessage)
            });
        }
    }

    return(
        <div className="flex flex-col relative">
            <Header />
            <img src={login} alt="background for login of myflix app" className="h-[100vh]" />
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-transparent bg-gradient-to-b  w-2/3 lg:w-1/2  from-black p-5 flex flex-col gap-5 top-[75px] left-[10px] lg:top-[15%] lg:left-[25%]">
                <h1 className="text-white self-start font-bold text-2xl">{isUser ? 'Sign In' : 'Sign Up'}</h1>
                {
                    !isUser ? 
                        (<input ref={name} type="text" placeholder="name" className="rounded-lg border-white border-2 text-white p-2 bg-transparent bg-gradient-to-b from-black"/>) : null
                }
                <input ref={email} type="text" placeholder="email" className="rounded-lg border-white border-2 text-white p-2 bg-transparent bg-gradient-to-b from-black"/>
                <input ref={password} type="password" placeholder="password" className="rounded-lg border-white border-2 text-white p-2 bg-transparent bg-gradient-to-b from-black"/>
                {errorMessage && <h2 className="text-white bg-gradient-to-b flex-wrap from-black p-5">{errorMessage}</h2>}
                <button onClick={handleSign} className="bg-red-900 text-white border-2 border-white rounded-lg p-3 text-2xl hover:bg-yellow-400 hover:text-black">{isUser ? 'Start Watching' : 'Sign Up'}</button>
                {
                    isUser ? 
                    (<h2 onClick={() => setIsUser(value => !value)} className="text-white bg-gradient-to-b cursor-pointer from-black p-5 hover:text-yellow-400">No account, yet? What? Sign up now!!</h2>) :
                    (<h2 onClick={() => setIsUser(value => !value)} className="text-white bg-gradient-to-b cursor-pointer from-black p-5 hover:text-yellow-400">Go to Sign In</h2>)
                }
            </form>
        </div>
    )
}
export default Login
