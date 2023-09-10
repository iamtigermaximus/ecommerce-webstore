//import { Category } from './category';

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: {
    _id: string;
    name: string;
  };
}

// export interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   category: {
//     _id: string;
//     categoryName: string;
//   };
// }

export interface SearchResultsProps {
  filteredProducts: Product[];
  searchTerm: string;
  onItemClick: () => void;
  showSearchResults: boolean;
}

export interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: {
    _id: string;
    name: string;
  };
}

// export interface ProductCardProps {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   category: {
//     _id: string;
//     categoryName: string;
//   };
// }
