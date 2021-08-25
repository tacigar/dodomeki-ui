import React from 'react';

export interface TableGroupContextType {
  group: 'head' | 'body';
}

export const TableGroupContext = React.createContext<
  TableGroupContextType | undefined
>(undefined);

export const useTableGroupContext = () => {
  const ctx = React.useContext(TableGroupContext);
  if (!ctx) {
    throw new Error('Need to set TableGroupContext');
  }
  return ctx;
};

export const TableGroupContextProvider = TableGroupContext.Provider;
