interface RatingType {
  average: number;
  reviews: number;
}

interface BeerType {
  id: number;
  image: string;
  name: string;
  price: string;
  rating: RatingType;
}

export default BeerType;
