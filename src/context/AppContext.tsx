import React from "react";

interface Context {
  search: string;
  selectedSectionTitle: string | undefined;
  selectedCategoryId: number;
  handleCategorySelection: (categoryId: number) => void;
  selectedCategoryTitle: string,
  handleCategorySelectionTitle: (categoryTitle: string) => void;
  selectedChildTitle: string,
  handleChildSelectionTitle: (childTitle: string) => void;
  products: Product[];
  sortBy: string;
  handleSort: (sort: string) => void;
  priceRangeFacet: Facet | undefined;
  priceValue: number;
  handlePriceFilter: (range: number) => void;
  brandsFacet: Facet | undefined;
  selectedBrands: string[],
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>,
  selectedProductId: number;
  handleProductSelection: (productId: number) => void;
  productDetails: ProductDetails | undefined;
  cart: ProductDetails[];
  setCart: React.Dispatch<React.SetStateAction<ProductDetails[]>>;
}

export const AppContext = React.createContext<Context>({
  search: '',
  selectedSectionTitle: 'men',
  selectedCategoryId: 0,
  handleCategorySelection: () => {},
  selectedCategoryTitle: '',
  handleCategorySelectionTitle: () => {},
  selectedChildTitle: '',
  handleChildSelectionTitle: () => {},
  products: [],
  sortBy: 'none',
  handleSort: () => {},
  priceRangeFacet: undefined,
  priceValue: 0,
  handlePriceFilter: () => {},
  brandsFacet: undefined,
  selectedBrands: [],
  setSelectedBrands: () => {},
  selectedProductId: 0,
  handleProductSelection: () => {},
  productDetails: undefined,
  cart: [],
  setCart: () => {},
});