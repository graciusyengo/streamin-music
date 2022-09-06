import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './util/StateProvider';
import reducer,{initialState} from './util/reducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <StateProvider initialState={initialState} reducer={reducer}>
        {console.log({"environnement": process.env.REACT_APP_CLIENT_ID})}
      <App />
      </StateProvider>
    
    </React.StrictMode>
  
);

