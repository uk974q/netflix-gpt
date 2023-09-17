import { useDispatch } from "react-redux"
import { HERO_TYPE, VIDEO_API_ENDPOINT} from "../constants"
import { setVideoKey } from "../stores/movieSlice"
import { useEffect } from "react"

const useVideoKey = (id) => {
    const dispatchActions = useDispatch()
    useEffect(() => {
        if(!id) return
        getVideo(id)
    },[id])

    const getVideo = async (id) => {
        const data = await fetch(`${VIDEO_API_ENDPOINT}?id=${id}`)
        const json = await data.json()
        json?.results.forEach(el =>{
            if(el.type === HERO_TYPE){
                dispatchActions(setVideoKey(el.key))
            }
        })
    }
}

export default useVideoKey