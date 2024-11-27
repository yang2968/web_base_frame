import { useState } from 'react';
/**
 * 로딩 상태를 관리하는 커스텀 훅입니다.
 *
 * @author heewoong
 * @since 2024-11-27

 */
const useLoading = () => {
  const [loading, setLoading] = useState(true);

  const startLoading = () => {
    setLoading(true);
  };

  const endLoading = () => {
    setLoading(false);
  };

  return { loading, startLoading, endLoading };
};

export default useLoading;
