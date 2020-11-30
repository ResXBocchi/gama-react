import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom';



function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{
      const repositories = response.data;
      const repositoriesName = [];
      repositories.forEach((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    }).catch(err =>{
      setErro(true)
    });
  }

  return (
    <S.Omni>
    <S.Container>
      <S.Input name='usuario' id='usuario' className='usuarioInput' value={ usuario } placeholder='Usuário' onChange={e => setUsuario(e.target.value) }/>
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      
    </S.Container>
    <S.Container>
      {erro ? <S.Erro>Usuário não encontrado</S.Erro> : ''}
    </S.Container>
    </S.Omni>
  );
  }

export default App;