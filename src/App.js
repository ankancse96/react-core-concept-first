import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var style={
    backgroundColor: "blue",
    color:"red"
  }
  let person = {
    name: "ankan",
    age: 23,
    mobile: 1345,
  }
  const Products = [
    {name:"mobile",price:"$50"},
    {name:"laptop",price:"$80"},
    {name:"tab",price:"$20"},
    {name:"year-phone",price:"$5"},
  ]
  const nayoks = ["razzak","alamgir","manna","faridi"]
  const familys = [
    { father: "Dipak", mother:"Purnima"},
    { father: "Dilip", mother:"snigdha"},
    { father: "Alok", mother:"Poly"},
    { father: "Prodip", mother:"Chandana"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <User></User>
        <ul>
          {
              nayoks.map(nayok=><li>{nayok}</li>)
          }
          <li>{nayoks[0]}</li>
        </ul>
        <h1 style={style}>hero alam</h1>
        <h2>{person.name + ' '+ person.mobile}</h2>
        {
          Products.map(pd=><Product Product={pd}></Product>)
        }
        {
          familys.map(fa=><Family family={fa}></Family>)
        }
        <Person name="Nazmus Sakib" designation="EEE Engineer"></Person>
        <Person name="Hridoy Saha" designation="Marketing officer"></Person>
        <Person name="Ankan Lahiri" designation="Web Developer"></Person>
         
      </header>
    </div>
  );
}

function Product(props){
  var productStyle={
    border:"1px solid gray",
    borderRadius:"10px",
    margin:"10px",
    float:"left",
    backgroundColor:"lightGray",
    height:"200px",
    width:"200px",
    color:"black"
  }
  return(
    <div style={productStyle}>
      <h3>{props.Product.name}</h3>
      <h5>{props.Product.price}</h5>
      <button>Button</button>
    </div>
  );
}

function Person(props){
  var personStyle={
    border: '2px solid yellow',
    margin: "10px",
    padding: "5px"
  }
  return(
    <div style={personStyle}>
      <h1>Name:{props.name}</h1>
      <h2>Designation:{props.designation}</h2>
    </div>
  );
}

function Family(props){
  return(
    <div>
      <h4>{props.family.father}</h4>
      <h5>{props.family.mother}</h5>
      <p>Our family is educated</p>
    </div>
  );
}

function Count(){
  const[count,setCount] = useState(0);
  const handleIncrease = () => { setCount(count + 1 );}
  const handleDecrease = () => {setCount(count-1);}

  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

function User(){
  const[users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
