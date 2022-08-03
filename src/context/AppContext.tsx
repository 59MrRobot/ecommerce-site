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
  priceRange: [number, number] | [];
  priceFilter: number | undefined;
  handlePriceFilter: (range: number) => void;
  facets: Facet[];
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
  priceRange: [],
  priceFilter: undefined,
  handlePriceFilter: () => {},
  facets: [],
});