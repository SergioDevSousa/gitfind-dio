import { useState } from 'react'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className='background' alt='background app'/>
        <div className='info'>
      <Input />
          <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/166451865?s=400&u=d2746a18715250730950244bec7d1a734f7be404&v=4" className="profile" alt="avatar"/>
            <div>
              <h3>Sérgio Sousa</h3>
              <span>Descrição</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr/>
          <div>
            <h4 className="repositorios" >Repositórios</h4>
            <ItemList title='Nome do Repositório' description='Descrição do Repositório' />
            <ItemList title='Nome do Repositório' description='Descrição do Repositório' />
            <ItemList title='Nome do Repositório' description='Descrição do Repositório' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
