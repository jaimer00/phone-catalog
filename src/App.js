import './App.css';
import Header from './components/Header';
import Phones from './components/Phones';
import Popup from './components/Popup';
import { useState, useEffect } from "react";

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const classes = useStyles();
  const [phones, setPhones] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [currentPhoneID, setCurrentPhoneID] = useState(-1);

  useEffect(() => {
    fetch('http://localhost:4000/phones')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setPhones(data);
      });
  }, []);

  return (
    <div className="App">
      <Header title='Hello'/>
      {phones ? <Phones phones={phones} updateClick={(buttonPopup, currentPhoneID) => {setButtonPopup({ buttonPopup }); setCurrentPhoneID({ currentPhoneID })}}/> : <Backdrop className={classes.backdrop} open={true}> <CircularProgress color="inherit" /> </Backdrop>}
      {phones && currentPhoneID !== undefined && <Popup trigger={buttonPopup} setTrigger={setButtonPopup} phones={phones} phoneID={currentPhoneID} />}
    </div>
  );
}

export default App;
