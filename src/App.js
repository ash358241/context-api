import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext =createContext();

function App() {
  const [category, setCategory] = useState(0)


  return (
    <CategoryContext.Provider value={[category, setCategory]}>
   <div>
     <h3>let us start from the beginning okk {category} times</h3>
     <Header></Header>
     <Home></Home>
     <Shipment></Shipment>
   </div>
   </CategoryContext.Provider>
  );
}

export default App;
