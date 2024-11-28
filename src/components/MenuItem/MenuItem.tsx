import { NavLink } from 'react-router-dom';
import MenuType from '@/types/menu.type';

interface MenuItemProps {
    menu: MenuType;
    getMenuStyle: (menuName: string) => string;
    onSelect: (menu: MenuType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ menu, getMenuStyle, onSelect }) => {
    return (
        <NavLink
            key={menu.name}
            className={() => getMenuStyle(menu.name)}
            onClick={() => onSelect(menu)}
            to={menu.path}>
            {menu.name}
        </NavLink>
    );
};

export default MenuItem;