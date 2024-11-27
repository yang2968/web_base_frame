import { create } from 'zustand';

interface ModeState {
  isDarkMode: boolean; // 다크/라이트 모드 변수 추가
  setIsDarkMode: (data: boolean) => void; // 다크/라이트 모드 변수를 설정하는 액션 추가
}

const useDarkModeStore = create<ModeState>((set) => ({
  isDarkMode: false, // 초기값 설정
  setIsDarkMode: (data) => set({ isDarkMode: data }), // 다크/라이트 모드를 설정하는 액션 구현
}));

export default useDarkModeStore;
