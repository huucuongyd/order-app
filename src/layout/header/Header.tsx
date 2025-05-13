import { useState } from 'react'
import Logo from '../../assets/header/E-Coffee.png'
import MenuIcon from '../../assets/header/menu-icon.svg'
import SearchIcon from '../../assets/header/search-icon.svg'
import { SearchOverlay } from './components/Search'

export default function Header () {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="header">
      <img src={Logo}></img>
      <div className='search-input'>
        <SearchOverlay isOpen={openSearch} onClose={() => setOpenSearch(false)}/>
        <span 
          className='input'
          onClick={() => setOpenSearch(true)}
        >
          <SearchIcon/>
          <p>
            Tìm kiếm...
          </p>
        </span>
      </div>
      <div className='menu-button'>
        <MenuIcon/>
      </div>
    </div>
  )
}