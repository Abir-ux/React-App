import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'PhotoShop', price:'$90.99'},
    {name: 'Illustrator', price:'$90.99'},
    {name: 'PDF reader', price:'$90.99'}

  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a react person</p>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {setCount(count + 1); };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
    
  )

}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
    <h3>Dynamic Users: {users.length}</h3>
   <ul>
     {
       console.log(users)
     }
   {
      users.map(users => <li>{users.phone}</li>)
    }
     {
      users.map(users => <li>{users.email}</li>)
    }
     {
      users.map(users => <li>{users.website}</li>)
    }
     {
      users.map(users => <li>{users.name}</li>)
    }
   </ul>
  </div>
  )
 
}










function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'gray',
    height:'220px',
    width:'300px',
    float:'left'

  }
  return (
    <div style={productStyle}>

      <h3>Name:{props.name}</h3>
      <h1>{props.price}</h1>
      <button>buy now</button> 


    </div>


  )

}





export default App;
