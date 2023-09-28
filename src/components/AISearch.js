import React from 'react'
import Searchbar from './Searchbar'
import { useSelector } from 'react-redux'
import useSuggestions from '../utils/hooks/useSuggestions'
import MovieListCarousel from './MovieListCarousel'

const AISearch = () => {
  const movies = useSelector((store) => store.movie.chatSuggestions)
  useSuggestions(movies)
  const suggestions = useSelector((store) => store.movie.suggestedMovies)
  return (
    <div className='flex flex-col flex-grow overflow-y-auto'>
        <Searchbar />
        <MovieListCarousel value={suggestions} title="Similar" isWrap={true}/>
    </div>
  )
}

export default AISearch