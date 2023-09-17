import React, { useRef } from 'react'
import { MOVIE_SEARCH_HEADING, MOVIE_SEARCH_PLACEHOLDER } from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import { SEARCHAPI_ENDPOINT } from '../utils/constants'
import { setAiTerm, setChatSuggestions } from '../utils/stores/movieSlice'

const Searchbar = () => {
    const languageSelected = useSelector((store) => store.language.value)
    const dispatchActions = useDispatch()
    const searchText = useRef(null)
    const handleSearch = async () => {
        dispatchActions(setAiTerm(searchText.current.value))
        const data = await fetch(`${SEARCHAPI_ENDPOINT}?query=${searchText.current.value}`)
        const res = await data.json()
        dispatchActions(setChatSuggestions(res?.split(",")))   
    }

    return (
        <div className='p-3'>
            <h1 className='font-bold text-3xl text-white'>{MOVIE_SEARCH_HEADING[languageSelected]}</h1>
            <div className='my-3'>
                <input ref={searchText} type='text' placeholder={MOVIE_SEARCH_PLACEHOLDER[languageSelected]} 
                    className='p-2 text-black rounded-lg rounded-r-none w-1/2'/>
                <button onClick={handleSearch} className='p-2 rounded-lg rounded-l-none text-white bg-red-800 hover:bg-red-900'>
                    <i className="las la-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Searchbar