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
    price: 0.01,
    description: 'anonymus',
    mintable: 0,
  },
  {
    id: 2,
    name: 'NFT2',
    price: 0.01,
    description: 'anonymus',
    mintable: 1,
  },
  {
    id: 3,
    name: 'NFT3',
    price: 0.01,
    description: '',
    mintable: 0,
  },
];
