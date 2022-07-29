import React from "react";

interface Context {
  search: string;
  selectedSectionTitle: string | undefined;
}

export const AppContext = React.createContext<Context>({
  search: '',
  selectedSectionTitle: 'men',
});