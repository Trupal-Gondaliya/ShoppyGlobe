import ProductItem from "./ProductItem";
import useFetchProducts from "../utils/useFetchProducts"; //Import the custom hook for api
import { useSelector } from "react-redux";

function ProductList() {
    const { products, loading, error } = useFetchProducts();
    const searchTerm = useSelector((state) => state.cart.searchItem); 

    if (loading) {
        return <div className="text-center mt-10 text-xl">Loading products...</div>;
    }
    if (error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }

    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    // Passing data via props and using a unique key 
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;