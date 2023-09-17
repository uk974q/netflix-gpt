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
    <div className="bg-black relative">
      <Header />
      {
        aiSearch ? 
          <AISearch />  :
          <Hero />
      }
      {/* <ModalLanguage /> */}
    </div>
  )
}

export default Browse

// Video Container
//   Video Background
//   Title  
// Carousel container 
//   Movie lists 
//     Cards
//       Movie Image
