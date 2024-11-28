import { useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import menuData from '@/constants/menuData';
import MenuType from '@/types/menu.type';
import MenuItem from '@/components/MenuItem/MenuItem';

interface MenuProps {
  selectedMenu: MenuType;
  onSelect: (menu: MenuType) => void;
}

const Menu: React.FC<MenuProps> = ({ selectedMenu, onSelect }) => {
  const location = useLocation();

  const getMenuStyle = useMemo(
    () => (menuName: string) => (menuName === selectedMenu.name ? 'menu-item-active' : 'menu-item'),
    [selectedMenu.name]
  );

  useEffect(() => {
    const currentMenu = menuData.find((menu) => menu.path === location.pathname) ||
      (location.pathname === myPage.path ? myPage : undefined);

    if (currentMenu && currentMenu.name !== selectedMenu.name) {
      onSelect(currentMenu);
    }
  }, [location.pathname, onSelect, selectedMenu.name]);

  return (
    <nav className='menu-container'>
      <div className='menu-item-container'>
        <div className='menu-item-view'>
          {menuData.map((menu) => (
            <MenuItem
              key={menu.name}
              menu={menu}
              getMenuStyle={getMenuStyle}
              onSelect={onSelect}
            />
          ))}
        </div>

        <div className='menu-other-view'>
          <MenuItem
            menu={myPage}
            getMenuStyle={getMenuStyle}
            onSelect={onSelect}
          />
        </div>
      </div>
    </nav>
  );
};

export default Menu;

const myPage: MenuType = {
  name: '마이 페이지',
  path: '/mypage',
};
