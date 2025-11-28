import ProductItem from "./ProductItem";
import useFetchProducts from "../utils/useFetchProducts"; //Import the custom hook for api

function ProductList() {
    const { products, loading, error } = useFetchProducts();

    if (loading) {
        return <div className="text-center mt-10 text-xl">Loading products...</div>;
    }
    if (error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    // Passing data via props and using a unique key 
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;