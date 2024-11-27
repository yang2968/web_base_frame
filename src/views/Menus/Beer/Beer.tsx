import { useEffect, useState } from 'react';
import api from '@/apis';
import BeerType from '@/types/beer.type';

import CircularProgress from '@mui/material/CircularProgress';
/**
 * Beer API 테스트 페이지입니다.
 *
 * @author heewoong
 * @since 2024-11-27

 */

const Beer: React.FC = () => {
  const [beers, setBeers] = useState<BeerType[]>([]);

  async function getBeersData() {
    const result = await api.getBeers();
    console.log(result);

    setBeers(result);
  }

  useEffect(() => {
    getBeersData();
  }, []);

  return (
    <div className='beer-container'>
      {beers.length <= 0 ? (
        <div className='loading-container'>
          <CircularProgress sx={{ color: 'white' }} size={100} />
        </div>
      ) : (
        <div className='beer-container2'>
          {beers.map((beer) => (
            <BeerItem {...beer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Beer;

const BeerItem: React.FC<BeerType> = ({ name, image, price, rating }) => {
  return (
    <div className='beer-item'>
      <img src={image} alt={name} />
      <div className='beer-item-info'>
        <div>{`이름 : ${name}`}</div>
        <div>{`가격 : ${price}`}</div>
        <div>{`평점 : ${rating.average.toFixed(1)}`}</div>
        <div>{`리뷰 : ${rating.reviews}`}</div>
      </div>
    </div>
  );
};
