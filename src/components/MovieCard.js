import React from 'react'
import { IMAGE_PATH } from '../utils/constants'

const MovieCard = ({src, movieTitle}) => {
  return (
    <div className='relative w-32 h-32'>
        <img src={IMAGE_PATH+src} alt={movieTitle} className='text-center w-[95%] h-[95%] aspect-square' />
        {/* <div className='absolute'>
            <h1>{movieTitle}</h1>
        </div> */}
    </div>
  )
}

export default MovieCard