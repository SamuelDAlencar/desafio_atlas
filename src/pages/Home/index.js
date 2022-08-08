import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import userContext from '../../contexts/UserContext';
import icon from '../../images/loupe.png';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import fetchUser from '../../utils/fetchUser';
import { warningNotify, errorNotify } from '../../utils/toastifyErrors';

export default function Home() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(userContext);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleClick = async () => {
    if (!input) {
      warningNotify();
    } else {
      const user = await fetchUser(input);

      if (!user) {
        errorNotify();
      } else {
        setUser(user.data);
        navigate(`/user/${input}/repos`);
      }
    }
  };

  return (
    <>
      <main className='home_main'>
        <p className='home_p'>Buscar Repositório no Github</p>
        <section className='home_searchSection'>
          <input
            className='home_searchSection_input'
            placeholder='Nome do usuário no GitHub'
            value={input}
            onChange={handleChange}
            data-testid='search_input'
          />

          <button
            className='home_searchSection_button'
            onClick={handleClick}
            data-testid='search_button'
          >
            <img
              src={icon}
              className='home_icon_img'
            />
            Search
          </button>
        </section>
      </main>

      {/*
        -> Container que cuida da notificação de erro/aviso <- 
      */}
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
