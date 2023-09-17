import React from 'react'
import { MOVIE_SEARCH_HEADING, MOVIE_SEARCH_PLACEHOLDER } from '../utils/language'
import { useSelector } from 'react-redux'

const Searchbar = () => {
    const languageSelected = useSelector((store) => store.language.value)
    return (
        <div className='p-3'>
            <h1 className='font-bold text-3xl text-white'>{MOVIE_SEARCH_HEADING[languageSelected]}</h1>
            <div className='my-3'>
                <input type='text' placeholder={MOVIE_SEARCH_PLACEHOLDER[languageSelected]} 
                    className='p-2 text-black rounded-lg rounded-r-none w-1/2'/>
                <button className='p-2 rounded-lg rounded-l-none text-white bg-red-800 hover:bg-red-900'>
                    <i className="las la-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Searchbar