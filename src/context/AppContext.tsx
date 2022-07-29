import React from "react";

interface Context {
  search: string;
}

export const AppContext = React.createContext<Context>({
  search: '',
});