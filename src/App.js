import './App.css';
import { useState } from 'react';
import Button from "./components/Button";
import Alert from './components/Alert';



function App() {

  const [isOpenAlert, setOpenAlert] = useState(false);
  const handleOpen = () => setOpenAlert(true);
  const handleClose = () => setOpenAlert(false);
  return (
    <div className="App">
      Secondary:
      <Button color="secondary">Click</Button>
      Secondary disabled:
      <Button color="secondary" disabled>Click</Button>
      Secondary small:
      <Button color="secondary" size="small">Click</Button>
      Primary:
      <Button color="primary">Click</Button>
      Primary disabled:
      <Button color="primary" disabled>Click</Button>
      Primary large:
      <Button color="primary" size="large">Click</Button>

      <>
        Компонент Alert:
        <button onClick={handleOpen}>Open alert</button>

        {isOpenAlert && <Alert color="primary" onClose={handleClose}>Some text</Alert>}
        {isOpenAlert && <Alert color="warning" onClose={handleClose}>Some text</Alert>}
        {isOpenAlert && <Alert color="error" onClose={handleClose}>Some text</Alert>}
      </>

    </div>
  );
}

export default App;
