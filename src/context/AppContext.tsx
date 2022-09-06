import React from "react";

interface Context {
  selectedSectionTitle: string | undefined;
  selectedCategoryId: number;
  handleCategorySelection: (categoryId: number) => void;
  selectedCategoryTitle: string,
  handleCategorySelectionTitle: (categoryTitle: string) => void;
  selectedChildTitle: string,
  handleChildSelectionTitle: (childTitle: string) => void;
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
  selectedProductName: string;
  handleProductNameSelection: (productName: string) => void;
  cart: ProductDetails[];
  setCart: React.Dispatch<React.SetStateAction<ProductDetails[]>>;
  totalPrice: number;
  handleTotalPrice: (price: number) => void;
  handleFacetsSelection: (facets: Facet[]) => void;
  handleCategoryName: (categoryName: string) => void;
  handleSectionSelection: (sectionTitle: string) => void;
}

export const AppContext = React.createContext<Context>({
  selectedSectionTitle: 'men',
  selectedCategoryId: 0,
  handleCategorySelection: () => {},
  selectedCategoryTitle: '',
  handleCategorySelectionTitle: () => {},
  selectedChildTitle: '',
  handleChildSelectionTitle: () => {},
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
  selectedProductName: '',
  handleProductNameSelection: () => {},
  cart: [],
  setCart: () => {},
  totalPrice: 0,
  handleTotalPrice: () => {},
  handleFacetsSelection: () => {},
  handleCategoryName: () => {},
  handleSectionSelection: () => {},
});