import React, { useEffect, useRef } from 'react'
import { LANGUAGES } from '../utils/language'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../utils/stores/languageSlice'

const ModalLanguage = () => {
    const selectedLanguage = useRef("")
    const dispatchActions = useDispatch()
    const languages = LANGUAGES.map(el => (
        <option key={el} value={el} className='flex items-center'>{el}</option>
    ))

    const handleLanguageChange = () => {
            dispatchActions(setLanguage(selectedLanguage.current.value))
    }

    
    return (
        <select onChange={handleLanguageChange} ref={selectedLanguage} id="languageSelect" className='bg-slate-800 text-white mr-2 text-sm p-1 w-16 rounded-lg cursor-pointer'>
            {languages}
        </select>
    )
}

export default ModalLanguage