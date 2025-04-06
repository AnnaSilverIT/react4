import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Выберите тариф</h1>
      </header>
      <div className='cardWrapper'>
      <Card variant="variant1" title =' 300' price='300' speed='10'/>
      <Card variant="variant2" title =' 450' price='450' speed='50'/>
      <Card variant="variant3" title =' 550' price='550' speed='100'/>
      <Card variant="variant4" title =' 1000' price='1000' speed='200'/>
      </div>
    </div>
  );
}

export default App;
