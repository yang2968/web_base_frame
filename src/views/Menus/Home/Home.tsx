import { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    // console.log('Test');
  }, []);

  return (
    <div>
      <div>{'Home'}</div>
    </div>
  );
};

export default Home;
