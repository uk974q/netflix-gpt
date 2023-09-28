import React from 'react'
import VideoPlaying from './VideoPlaying'
import { useSelector } from 'react-redux'
import MovieListContainer from './MovieListContainer'

const Hero = () => {
  const trending = useSelector((store) => store.movie.trending)
  return (
    <div className='relative bg-black flex flex-col flex-grow overflow-auto'>
      {
        trending && 
        <div className="h-[70vh] bg-gradient-to-r gradient from-slate-900 to-90% text-left pl-5 w-1/3 absolute text-white flex flex-col justify-center">
            <h1 className='text-3xl font-bold'>{trending.title}</h1>
            <p className='text-xl font-semibold h-14 overflow-hidden'>{trending.overview}</p>
            <div className='mt-5 flex'>
                <button className='lg:w-16 py-1 px-2 rounded-md whitespace-nowrap flex flex-nowrap items-center text-black bg-white hover:bg-slate-100 border-2 border-black mr-2 text-sm'><i className="las la-play-circle mr-1"></i><span>Play</span></button>
                <button className='lg:w-30 py-1 px-2 rounded-md whitespace-nowrap bg-slate-600 bg-opacity-50 hover:bg-slate-400 hover:text-black border-2 border-black text-white text-sm'><i className="las la-info-circle mr-1"></i><span>More Info</span></button>
            </div>
        </div>
      }
        <VideoPlaying />
        <MovieListContainer />
    </div>
  )
}

export default Hero