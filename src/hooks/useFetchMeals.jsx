// useFetchMeals.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMeals = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setData(response.data.recipes); // Adjust according to the API response
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return { data, loading, error };
};

export default useFetchMeals;
