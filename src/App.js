import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
    const nayoks =['Hazrat Omar', 'Hazrat Osman', 'Hazrat Ali', 'Hazrat Abu Bakar', 'Hazrat Muhammad S.', 'Hazrat Adam A.']

    const products= [
      {name: 'Photoshop', price: '190.99', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue nisi, elementum id aliquet et, tempus ac metus'},
      {name: 'Illustrator', price: '$60.99', detail: 'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections'},
      {name: 'PDF Reader', price: '$6.99', detail: 'Ipsum dolor sit amet, consectetur adipiscing elit. Duis augue nisi, elementum id aliquet et, tempus ac metus'}
    ]
    const productNames = products.map(product => product.name)
    const nayokNames = nayoks.map(nayok => nayok.name)
    
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <h3 style={{color: 'blue', fontFamily: 'roboto', backgroundColor: 'white'}}>This is Nayoks List...</h3>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
          <li>{nayoks[4]}</li>
          <li>{nayoks[5]}</li> */}
          <h3 style={{color: 'blue', fontFamily: 'roboto', backgroundColor: 'white'}}>This is products List..</h3>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Product name={products[0].name} price={products[0].price} detail={products[0].detail}></Product>
        <Product name={products[1].name} price={products[1].price} detail={products[1].detail}></Product>
        <Product name={products[2].name} price={products[2].price} detail={products[2].detail}></Product>


        {/* <Person name="Red Apple" quantity="12 pices" price="$100"></Person>
        <Person name="Banana" quantity="60 pices" price="$99"></Person>
        <Person name="Water Millon" quantity="6 pices" price="$37"></Person> */}
      </header>
    </div>
  );
}

function Counter () {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount (count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount ( count + 1)}>Increase</button>
      <button onMouseMove={ () => setCount ( count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul> 
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '300px',
    width: '280px',
    float: 'left',
    margin: '10px'
  }
  return (
    <div style={productStyle}>
      <h3 style={{color: 'skyblue'}}>Name: {props.name}</h3>
      <h5 style={{color: 'pink'}}>{props.price}</h5>
      <p style={{fontSize: '14px', textAlign: 'justify', padding: '10px', marginTop: '-20px'}}>{props.detail}</p>
      <button style={{backgroundColor: 'green', padding: '5px 10px', borderRadius: '5px', color: 'white', fontWeight: 'bold', border: 'none'}}>Buy Now</button>
    </div>
  )
}


// function Person(props) {
//   const personStyle={
//     border: '2px solid yellow',
//     margin: '10px',
//     padding: '12px',
//     backgroundColor: 'gray',
//     width: '500px'
//   }
//   console.log(props)
//   return (
//     <div style={personStyle}>
//        <h1>Name: {props.name}</h1>
//        <h3>Quantity: {props.quantity}</h3>
//        <h4>Price: {props.price}</h4>
//     </div>
//   )
// }
export default App;
