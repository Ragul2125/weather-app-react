// main file (e.g., index.js or main.jsx)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import weatherReducer from './features/weather.jsx'; // Import reducer correctly

const store = configureStore({
  reducer: {
    weather: weatherReducer, // Use the correct reducer reference
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
