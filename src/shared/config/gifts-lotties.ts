import blueStar from '../assets/lotties/gift-blue-star.json';
import deliciousCake from '../assets/lotties/gift-delicious-cake.json';
import greenStar from '../assets/lotties/gift-green-star.json';
import redStar from '../assets/lotties/gift-red-star.json';

export const giftsLottiesMapping: Record<number, object | {default: object} | undefined> = {
  1: redStar,
  2: greenStar,
  3: blueStar,
  5: deliciousCake
};
