import React, { createContext, useContext, useState, useEffect } from 'react';

const STATEContext = createContext({});

export const STATEProvider = ({ children }) => {
  return (
    <STATEContext.Provider
      value={{
      }}
    >
      {children}
    </STATEContext.Provider>
  );
};

export function STATE() {
  const context = useContext(STATEContext);

  if (!context) {
    throw new Error('STATE must be used within an STATEProvider');
  } else {
    return context;
  }
}
