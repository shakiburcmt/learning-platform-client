import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    // theme toggle here
    setTheme(current => (current === 'light' ? "dark" : 'light'))
  };
  return (
    // this context is for theme with toggle
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {/* from structured folder */}
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
