import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function Home() {
  const [input, setInput] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleClick = async () => {
    if (!input) {
      setInvalidInput(true);

      setTimeout(() => {
        setInvalidInput(false);
      }, 3000);
    } else {
      try {
        await axios.get(`https://api.github.com/users/${input}`);

        navigate(`/user/${input}/repos`);
      } catch (error) {
        if (error.response.status == 404) {
          setNotFound(true);

          setTimeout(() => {
            setNotFound(false);
          }, 3000);
        }
      }
    }
  };

  useEffect(() => {
    // setInvalidInput(input.length === 0);
  }, [input]);

  return (
    <main className='home_main'>
      <section className='home_searchSection'>
        <input
          className='home_searchSection_input'
          placeholder='Nome do usuário no GitHub'
          value={input}
          onChange={handleChange}
        />

        <button
          className='home_searchSection_button'
          // disabled={ invalidInput }
          onClick={handleClick}
        >
          Search
        </button>
      </section>
      {invalidInput && (
        <h2 className='home_searchSection_warning_h2'>
          Informe um nome de usuário válido do Github
        </h2>
      )}
      {notFound && (
        <h2 className='home_searchSection_warning_h2'>
          Usuário não encontrado no github. Verifique se você digitou o nome corretamente
        </h2>
      )}
    </main>
  );
}
