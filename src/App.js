import './App.css';
import Calculator from './components/Calculator';
import ShowQuote from './components/Quote';

function App() {
  return (
    <section>
      <h1>Math Magician</h1>
      <main className="contents">
        <ShowQuote />
        <Calculator />
      </main>
    </section>
  );
}

export default App;
