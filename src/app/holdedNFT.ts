export interface NFTs {
  id: number;
  name: string;
  price: number;
  description: string;
  mintable: boolean;
}

export const products = [
  {
    id: 1,
    name: 'NFT1',
    price: 799,
    description: 'A large phone with one of the best screens',
    mintable: 0,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    mintable: 1,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    mintable: 0,
  },
];
