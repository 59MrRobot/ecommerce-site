import React from "react";

interface Context {
  search: string;
  selectedSectionTitle: string | undefined;
  selectedCategoryId: number;
  handleCategorySelection: (categoryId: number) => void;
}

export const AppContext = React.createContext<Context>({
  search: '',
  selectedSectionTitle: 'men',
  selectedCategoryId: 0,
  handleCategorySelection: () => {},
});