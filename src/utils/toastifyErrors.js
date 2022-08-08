import { toast } from 'react-toastify';

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

export { errorNotify, warningNotify };
