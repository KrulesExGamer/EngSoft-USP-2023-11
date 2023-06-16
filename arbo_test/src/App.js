import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <nav>
            <input type="checkbox" id="check" checked/>
            <label for="check" class="checkbtn">
            <FontAwesomeIcon icon={faBars} />
            </label>
            <a id="logo" href="#"><label class="logo"><FontAwesomeIcon icon={faTree} /> Arbo <FontAwesomeIcon icon={faTree} /></label></a>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Cadastrar</a></li>
              <li><a href="#">Contatos</a></li>
            </ul>
		  </nav>
    </div>
  );
}

export default App;
