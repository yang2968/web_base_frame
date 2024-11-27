import useDarkModeStore from '@hooks/useDarkModeStore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
/**
 * 다크/라이트 모드 설정 버튼입니다.
 *
 * @author heewoong
 * @since 2024-11-27
 */
const DarkModeButton: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkModeStore();

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const Icon = isDarkMode ? DarkModeIcon : LightModeIcon;

  return (
    <IconButton onClick={() => handleClick()}>
      <Icon style={{ fontSize: '1.5rem' }} />
    </IconButton>
  );
};

export default DarkModeButton;

const IconButton: React.FC<{
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ style, onClick, children }) => {
  return (
    <div className='dark-mode-button-container' style={style} onClick={onClick}>
      {children}
    </div>
  );
};
