import logo from './logo.svg';
import './App.css';
import { Stack, Button } from '@mui/material';
import AppMenu from './layers/menu/appMenu';
import Area from './layers/createSpace/mineCad';

function App() {
  return (
    <div className="App">
      <div className="tools-wrapper">
        <AppMenu/>
        <div className="area-wrapper">
        <Area/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
