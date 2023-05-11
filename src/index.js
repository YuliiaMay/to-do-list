import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { App } from 'components/App';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/to-do-list">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
