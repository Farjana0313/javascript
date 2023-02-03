import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor','Alomgir'];
  const products=[
    {name:'photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$70.99'},
    {name:'pdf',price:'$60.99'},
  ]
  const productNames=products.map(product=>product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {
          nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
          products.map(product=><li>{product.name}</li>)
          }
          
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
          }
        <Person name="Rakib"></Person>
        <Person name={nayoks[1]}></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    float:'left',
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px',
    padding:'10px'
  }
  console.log(props);
  return <h1 style={personStyle}>Name: {props.name}</h1>
}

export default App;
