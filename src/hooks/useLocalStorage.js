import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue = null) => {
    
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    if (value != null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
