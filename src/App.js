import Navbar from './component/navbar/navbar';
import Principal from './component/principal/principal';
import About from './component/about/about';
import Rodape from './component/rodape/rodape';
import Indicacoes from './component/indicacoes/indicacoes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Principal/>
        <About/>
        <Indicacoes/>
        <Rodape/>
      </header>
    </div>
  );
}

export default App;
