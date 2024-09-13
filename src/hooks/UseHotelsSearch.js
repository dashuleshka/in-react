import React, {useCallback} from 'react';
import {apiUrl} from "../services/constants";
import axios from "axios";

export const UseHotelsSearch = () => {
  const searchHotels = useCallback(async (searchStr) => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          search: searchStr,
        }
      });
      return await response.data;
    }
    catch (error) {
      console.log(error.message);
    }
  }, []);

  return { searchHotels };
};