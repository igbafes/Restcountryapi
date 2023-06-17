import React, {useState} from "react";
import "./Content.css";
import ContentItem from "../content-item/Content_item";

const Content = (theme) => {
  const [input, setInput] = useState("")
  const [value, setValue] = useState("")

  const handleSearch = (e) => {
    const data = e.target.value
    setInput(data)
  }

  const handleFilter = (e) => {
    e.preventDefault()
    const value = e.target.value  
    setValue(value)

  }

  return (
  
    <div className={`container ${theme.theme} `}>
      <div className="input-div">
        
        <input className="input-cont" onChange={handleSearch} placeholder="Search for a country......"></input>

        <select name="cars" id="cars" onChange={handleFilter} className="filter-content">
          <option value="" disabled selected hidden><li>Filter by Region</li></option>
          <option  value="Africa"><li className="filtervalue">Africa</li></option>
          <option className="filtervalue" value="Americas">America</option>
          <option className="filtervalue" value="Asia">Asia</option>
          <option className="filtervalue" value="Europe">Europe</option>
          <option className="filtervalue" value="Oceania">Oceania</option>
        </select>
      </div>
     


      <main> 
        <ContentItem theme={theme} themeTwo={input} themeThree ={value} />
      </main>
    </div>
  );
};

export default Content;
