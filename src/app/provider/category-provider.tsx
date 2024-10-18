"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SubCategoryContextType {
  selectedSubCategory: string | null;
  setSelectedSubCategory: (subcategory: string) => void;
}

const SubCategoryContext = createContext<SubCategoryContextType | undefined>(
  undefined
);

export const SubCategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );

  return (
    <SubCategoryContext.Provider
      value={{ selectedSubCategory, setSelectedSubCategory }}
    >
      {children}
    </SubCategoryContext.Provider>
  );
};

export const useSubCategory = () => {
  const context = useContext(SubCategoryContext);
  if (context === undefined) {
    throw new Error(
      "useSubCategory must be used within a SubCategoryProvider"
    );
  }
  return context;
};
