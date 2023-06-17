import React, {useState, useEffect} from "react";
import "../content-item/Content-item.css";
import json from "../data.json";

const ContentItem = (props) => {
  const {theme} = props.theme;
  const inputvalue = props.themeTwo
  const filterValue = props.themeThree

  const [data, setData] = useState(false)
  const [filter, setFilter] = useState(false)

  const handleSearchValue = () => {
    const value = json.map((data) => data).find(data => data.name === inputvalue)
    if (value) {
      setData(value)
    } else if (!value) {
      setData(false)
    }
  }


  const handleInternal = () => {
      console.log("", inputvalue)
  }

  const handleFilter = () => {
    const value = json.map((data) => data).filter(data => data.region === filterValue)
    
    if (value) {
      setFilter(value)
    } else if (!value) {
      setFilter(false)
    }
  }

  useEffect(() => {
    if (inputvalue) {
      handleSearchValue()
    }
  }, [inputvalue])

  useEffect(() => {
    if (filterValue) {
      handleFilter()
    }
  }, [filterValue])

  if (data) {
    return (
      <main>
        <div className="container-main">
            <div onClick={handleInternal} className={`content-div ${theme}`}>
               <img src={data.flag} alt="flag" className="flag-div" />
               <p className="name">{data.name}</p>
               <p className="para">Population: {data.population}</p>
               <p className="para">Region: {data.region}</p>
              <p className="para">Capital: {data.capital}</p>
              </div>
        </div>
      </main>
    ); 
  }

  if (filter) {
    return (
      <main>
      <div className="container-main">
        {filter.map((data) => {
        return (
          <div className={`content-div ${theme}`}>
          <img src={data.flag} alt="flag" className="flag-div" />
          <p className="name">{data.name}</p>
          <p className="para">Population: {data.population}</p>
          <p className="para">Region: {data.region}</p>
          <p className="para">Capital: {data.capital}</p>
        </div>
        )
        })}
      </div>
    </main>
    ); 
  }

  return (
    <main>
      <div className="container-main">
        {json.map((data) => {
        return (
          <div className={`content-div ${theme}`}>
          <img src={data.flag} alt="flag" className="flag-div" />
          <p className="name">{data.name}</p>
          <p className="para">Population: {data.population}</p>
          <p className="para">Region: {data.region}</p>
          <p className="para">Capital: {data.capital}</p>
        </div>
        )
        })}
      </div>
    </main>
  );

};

export default ContentItem;
