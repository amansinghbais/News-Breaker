import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Main from './components/Main';
import { useState } from 'react';

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar category={category} setCategory={setCategory} />
      <Main category={category} />
    </>
  )
}

export default App