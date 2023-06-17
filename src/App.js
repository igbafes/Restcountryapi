import React, {useState, useEffect} from 'react';
import './App.css';
import Content from './content/Content';

function App() {
  const [theme, setTheme] = useState('App');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('App');
    } else {
      setTheme('light');
    }
  };

  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return (
    <div className={`App ${theme}`}>
    
      <div>
      <nav>
        <ul className={`nav-ul`}>
            <li className='nav-li'><h3>Where in the world?</h3></li>
            <li className='nav-li pointer' onClick={toggleTheme}>Dark Mode</li>
        </ul>
      </nav>
    </div>
      <Content theme={theme}/>
    </div>
  );
}

export default App;
