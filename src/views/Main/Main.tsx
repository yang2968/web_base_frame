import { Outlet } from 'react-router-dom';
import useDarkModeStore from '@hooks/useDarkModeStore';
import { darkModeStyle, lightModeStyle } from '@/styles/styles';

import Menu from '@/components/Menu/Menu';

import useNavStore from '@/hooks/useNavStore';
import Home from '@/views/Menus/Home/Home';

const Main: React.FC = () => {
  const { isDarkMode } = useDarkModeStore();
  const { selectedMenu, setSelectedMenu } = useNavStore();
  const isHomeMenu = selectedMenu.name === '홈';
  const currentThemeStyle = isDarkMode ? darkModeStyle : lightModeStyle;

  return (
    <div className='home-container'>
      <Menu selectedMenu={selectedMenu} onSelect={setSelectedMenu} />

      <div className='outlet-container' style={currentThemeStyle}>
        {isHomeMenu ? <Home /> : <Outlet />}
      </div>
    </div>
  );
};

export default Main;
