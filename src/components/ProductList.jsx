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

    // Filterd logic
    const filteredProducts = products.filter(product => {
        const lowerChar = searchTerm.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(lowerChar);
        const matchesTags = product.tags?.some((tag) =>
            tag.toLowerCase().includes(lowerChar));
        return matchesTitle || matchesTags;
    }
    );

    return (
        <div className="container mx-auto p-4">
            {filteredProducts.length === 0 ? (
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-bold text-gray-600">No products found</h2>
                    <p className="text-red-400 mt-2">
                        We couldn't find any matches for "<span className="font-semibold text-black">{searchTerm}</span>".
                    </p>
                    <p className="text-gray-400">Try searching for generic terms like "Beauty", "Perfumes", or "Food".</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        // Passing data via props and using a unique key 
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            )
            }
        </div>
    );
};

export default ProductList;