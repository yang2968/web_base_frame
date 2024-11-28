import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header/Header';

import Main from '@/views/Main/Main';
import Beer from '@/views/Menus/Beer/Beer';
import Menu2 from '@/views/Menus/Menu2/Menu2';
import Menu3 from '@/views/Menus/Menu3/Menu3';
import Menu4 from '@/views/Menus/Menu4/Menu4';
import MyPage from '@/views/Menus/MyPage/MyPage';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/beer' element={<Beer />} />
          <Route path='/menu2' element={<Menu2 />} />
          <Route path='/menu3' element={<Menu3 />} />
          <Route path='/menu4' element={<Menu4 />} />
          <Route path='/mypage' element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
