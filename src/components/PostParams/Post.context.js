import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  return (
    <PostContext.Provider value={{ hotels, setHotels }}>
      {children}
    </PostContext.Provider>
  );
};
