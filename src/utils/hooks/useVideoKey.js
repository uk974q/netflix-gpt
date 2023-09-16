import { useDispatch } from "react-redux"
import { API_MOVIES_OPTIONS, HERO_TYPE, VIDEO_PREFIX, VIDEO_SUFFIX } from "../constants"
import { setVideoKey } from "../stores/movieSlice"
import { useEffect } from "react"

const useVideoKey = (id) => {
    const dispatchActions = useDispatch()
    useEffect(() => {
        if(!id) return
        getVideo(id)
    },[id])

    const getVideo = async (id) => {
        const data = await fetch(VIDEO_PREFIX+id+VIDEO_SUFFIX, API_MOVIES_OPTIONS)
        const json = await data.json()
        json?.results.forEach(el =>{
            if(el.type === HERO_TYPE){
                dispatchActions(setVideoKey(el.key))
            }
        })
    }
}

export default useVideoKey