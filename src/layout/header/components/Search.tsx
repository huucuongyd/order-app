// src/components/SearchOverlay.tsx
import { useEffect, useState, type KeyboardEvent } from 'react'
import SearchIcon from '../../../assets/header/search-icon.svg'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [valueInput, setValueInput] = useState('');
  console.log(isOpen);
  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.code)
    console.log(valueInput);
  }

  return (
    <div className='search-overlay' style={{
      display: isOpen ? 'flex' : 'none'
    }}>
      <div className='input-search'>
        <input
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          onKeyDown={(e) => handleKeydown(e)}
        />
        <button>
          <SearchIcon/>
        </button>
      </div>
      <div className='result'>
        
      </div>
    </div>
  )
}
