import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './util/StateProvider';
import reducer,{initialState} from './util/reducer'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
    </BrowserRouter>
    </React.StrictMode>
  
);

