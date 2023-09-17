import React from 'react'
import MovieListCarousel from './MovieListCarousel'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {
    const nowPlaying = useSelector((store) => store.movie.nowPlayingData)
    const trending = useSelector((store) => store.movie.trendingList)
    return (
        <div className=''>
            <MovieListCarousel value={nowPlaying} title="Now Playing" isWrap={false}/>
            <MovieListCarousel value={trending} title="Trending" isWrap={false} />
        </div>
    )
}

export default MovieListContainer