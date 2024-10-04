import { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline} from '@mui/material';
import { Provider } from 'react-redux';
import { Store } from './redux/Store.js';


const Root = () => {
  const themeStorage = window.localStorage.getItem("themeMode");
  const [mode, setMode] = useState(themeStorage || "light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "light"
            ? {
              text:{
                primary:"#2B3445"
              },
              mycolor:{
                main:"#f6f9fc"
              },
              bg:{
                main:"#f6f6f6"
              }
                
              }
            : {
              mycolor:{
                main:"#252b32"
              },
              bg:{
                main:"#1d2021"
              }
                
              }),
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

 
<Provider store={Store} >
        <App toggleTheme={toggleTheme} />
       </Provider>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Root />
  </StrictMode>
);
