import { useState, useEffect } from "react";

function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching from the required API endpoint 
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setProducts(result.products); // Storing data in state
            } 
            catch(err){
                setError(err.message); //Handling Error
            }
            finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { products, loading, error };
}
export default useFetchProducts;