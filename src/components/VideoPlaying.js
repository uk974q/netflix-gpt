import React from 'react'
import useTrending from '../utils/hooks/useTrending'
import { useSelector } from 'react-redux'
import useVideoKey from '../utils/hooks/useVideoKey'
import { YOUTUBE_LINK, YOUTUBE_LINK_SUFFIX } from '../utils/constants'

const VideoPlaying = () => {
    useTrending()
    const latest = useSelector((store) => store.movie.trending)
    useVideoKey(latest?.id)    
    const videoKey = useSelector((store) => store.movie.videoKey)
    if(!latest || !videoKey) return

    return (
        <div>
            <iframe src={YOUTUBE_LINK+videoKey+YOUTUBE_LINK_SUFFIX} title="YouTube video player" 
            className='w-screen aspect-video h-[70vh]'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            
        </div>
    )
}

export default VideoPlaying