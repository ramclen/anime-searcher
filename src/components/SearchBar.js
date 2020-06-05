import React, { useState } from "react";
import "./autocomplete.css"
import kitsu from "../api/kitsu";

const SearchBar = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("")
  const [isSearching, setSearching] = useState(false)
  const [animes, setAnimes] = useState([])

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onChange(inputValue)
    }
  }

  const searchTitle = (value) => {
    kitsu.get(`anime?fields[anime]=titles,id&page[limit]=3&filter[text]=${value}`)
      .then(res => res.data)
      .then(res => {
        setAnimes(res.data.map(e => ({ title: e.attributes.titles.en_jp, id: e.id })))
      });
  }

  const onBlur = () => {
    setTimeout(() => {
      setSearching(false)
    }, 250)
  }

  const elementSelected = (value) => {
    setInputValue(value);
    onChange(value);
  }

  const _onChange = (value) => {
    setInputValue(value);
    searchTitle(value);
  }

  return (
    <div className=" mb-3"  >
      <input value={inputValue}
        onClick={() => setSearching(true)}
        onChange={e => _onChange(e.target.value)}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        type="text"
        className="form-control"
        placeholder="Search"
      />
      <div className={`autocomplete mb-3 ${isSearching ? 'show' : ''}`}>
        <ul>
          {animes.map(anime => {
            return <li key={anime.id} onClick={(e) => elementSelected(anime.title)}> {anime.title} </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default SearchBar;