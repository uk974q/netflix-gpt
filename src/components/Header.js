import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className='h-[8vh] bg-black flex items-center'>
        <img src={logo} className="w-16 h-12"/>
        <span className="font-bold text-white text-2xl">MyFlix</span>
    </div>
  )
}

export default Header