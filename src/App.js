import logo from './logo.svg';
import './App.css';
import CardProfile from './CardProfile';

import { Fab } from "@material-ui/core";
import { useState } from 'react';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


function App() {
  const [opacity, setOpacity] = useState('0');
  
  return (
    <div>
      <div style={{opacity}}>
      <CardProfile />
      </div>
    <Fab
     aria-label="save"
     color="secondary"
     onClick={()=>{
      if(opacity==='1'){
        console.log('hide');
        setOpacity('0');
      }else{
        setOpacity('1');
        console.log('show');
      }
     }}
     style={{    
      color: '#FFFFF',
      position: "fixed",
      bottom: '1rem',
      left: '1rem',
      zIndex: 10,}}
     elevation={0}>
        <LibraryMusicIcon/>
     </Fab>
    </div>
  );
}

export default App;
