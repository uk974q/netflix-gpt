import Header from "./Header"
import useNowPlaying from "../utils/hooks/useNowPlaying"
import Hero from "./Hero"

const Browse = () => {

  useNowPlaying()

  return (
    <div className="bg-black">
      <Header />
      <Hero />
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
