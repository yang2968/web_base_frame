import { create } from 'zustand';
import MenuType from '@/types/menu.type';

interface NavState {
  selectedMenu: MenuType;
  setSelectedMenu: (data: MenuType) => void;
}

const useNavStore = create<NavState>((set) => ({
  selectedMenu: { name: '홈', path: '/' },
  setSelectedMenu: (data) => set({ selectedMenu: data }),
}));

export default useNavStore;
