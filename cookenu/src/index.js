import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { DarkModelContextProvider } from './context/darkModelContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModelContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModelContextProvider>
  </React.StrictMode>
);

