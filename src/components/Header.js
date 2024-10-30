import React from 'react'
import { faSearch, faBookBookmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Categories from './Categories'
function Header() {
    return (
        <div className='header'>
            <div className='navbar'>
            <h1 className='logo'>NomiinSan</h1>
            <SearchBar></SearchBar>
            <SavedBooks></SavedBooks>
            </div>
        
        </div>
        
    )
}

function SearchBar() {
    return (
        <div className='searchbar'>
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input placeholder='ном хайх...' className='search-input' />
            </div>
            <button className='search-button'>Хайх</button>
        </div>
    )
}

function SavedBooks() {
    let saved = 3
    return (
        <div className='saved-books'>
            <button className='save-icon'>            <FontAwesomeIcon icon={faBookBookmark}/>
            </button>
            <div className='saved-book-number'>
                {saved}
            </div>
        </div>
    )
}

export default Header