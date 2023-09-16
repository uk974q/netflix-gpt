import React from 'react'
import MovieCard from './MovieCard'

const MovieListCarousel = ({value, title}) => {
    const movies = value.map(movie => (
        <MovieCard key={movie.id} src={movie.poster_path} movieTitle={movie.title}/>
    ))
    return (
        <div className='h-[30h] flex flex-col items-start px-5 py-2 overflow-x-scroll no-scrollbar'>
            <h1 className='font-bold text-white'>{title}</h1>
            <div className='flex flex-nowrap mt-2 gap-2'>
                {movies}
            </div>
        </div>
    )
}

export default MovieListCarousel