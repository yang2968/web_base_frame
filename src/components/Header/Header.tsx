import { useNavigate } from 'react-router-dom';
import DarkModeButton from '@components/DarkModeButton/DarkModeButton';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='header-container'>
      <HeaderText text={'Web Base'} onClick={() => navigate('/')} />
      <DarkModeButton />
    </div>
  );
};

export default Header;

const HeaderText: React.FC<{ text: string; onClick: () => void }> = ({ text, onClick }) => {
  return (
    <div className='header-view' onClick={onClick}>
      {text}
    </div>
  );
};
