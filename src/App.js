import './App.css';

const foods = ['pizza', 'pasta', 'spaghetti', 'ramen', 'eggs benedict', 'dumplings', 'noodles', 'pork bun']

function App(){
  return (
    <div className="App">
      <h1>Our Menu!</h1>
      <ul>
        {
          foods.map(food => {
            return <li>{food}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App;