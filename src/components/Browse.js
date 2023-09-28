import Header from "./Header"
import useNowPlaying from "../utils/hooks/useNowPlaying"
import Hero from "./Hero"
import { useSelector } from "react-redux"
import AISearch from "./AISearch"
import ModalLanguage from "./ModalLanguage"

const Browse = () => {

  useNowPlaying()
  const aiSearch = useSelector((store) => store.toggle.aiSearch)

  return (
    <div className="bg-black relative h-[100vh] flex flex-col flex-grow overflow-hidden">
      <Header />
      {
        aiSearch ? 
          <AISearch />  :
          <Hero />
      }
    </div>
  )
}

export default Browse
