import React, { useState } from "react";


const SearchBar = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("")
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onChange(inputValue)
    }
  }

  return (
    <div className="input-group mb-3">
      <input onKeyPress={e => onKeyPress(e)} onChange={e => setInputValue(e.target.value)} type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  )
}

export default SearchBar;