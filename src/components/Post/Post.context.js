import React, { createContext, useState } from "react";

export const PostContext = createContext({
  searchVal: null,
  searchState: (val) => {},
});

export const contextProvider = ({ children }) => {
  const [searchVal, searchState] = useState("");
  return (
    <PostContext.Provider value={{ searchVal, searchState }}>
      {children}
    </PostContext.Provider>
  );
};
