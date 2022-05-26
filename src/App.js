import Button from "./components/Button";



function App() {
  return (
    <div>
      Default styled:
      <Button border="3px solid black" background="red">Click</Button>
      Secondary:
      <Button color="secondary">Click</Button>
      Secondary disabled:
      <Button color="secondary" disabled>Click</Button>
      Primary:
      <Button color="primary">Click</Button>
      Primary disabled:
      <Button color="primary" disabled>Click</Button>
    </div>
  );
}

export default App;
