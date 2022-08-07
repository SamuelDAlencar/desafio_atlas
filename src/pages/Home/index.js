import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userContext from '../../contexts/UserContext';
import './index.css';

export default function Home() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(userContext);

  const warningNotify = () => toast.warn('Informe um nome de usuário válido do Github', {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const errorNotify = () => toast.error('Usuário não encontrado no github. Verifique se você digitou o nome corretamente', {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleClick = async () => {
    if (!input) {
      warningNotify();
    } else {
      try {
        const user = await axios.get(`https://api.github.com/users/${input}`);

        setUser(user);

        navigate(`/user/${input}/repos`);
      } catch (error) {
        if (error.response.status == 404) {
          errorNotify();
        }
      }
    }
  };

  return (
    <>
      <main className='home_main'>
        <section className='home_searchSection'>
          <input
            className='home_searchSection_input'
            placeholder='Nome do usuário no GitHub'
            value={input}
            onChange={handleChange} />

          <button
            className='home_searchSection_button'
            onClick={handleClick}
          >
            Search
          </button>
        </section>
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
