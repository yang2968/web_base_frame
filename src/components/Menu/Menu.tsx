import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import menuData from '@/constants/menuData';
import MenuType from '@/types/menu.type';

interface MenuProps {
  selectedMenu: MenuType;
  onSelect: (menu: MenuType) => void;
}

const Menu: React.FC<MenuProps> = ({ selectedMenu, onSelect }) => {
  const getMenuStyle = useMemo(
    () => (menuName: string) => (menuName === selectedMenu.name ? 'menu-item-active' : 'menu-item'),
    [selectedMenu.name]
  );

  return (
    <nav className='menu-container'>
      <div className='menu-item-container'>
        {menuData.map((menu) => (
          <NavLink
            key={menu.name}
            className={() => getMenuStyle(menu.name)}
            onClick={() => onSelect(menu)}
            to={menu.path}>
            {menu.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
