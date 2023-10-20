


type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    // ... (additional fields if needed)
};

const Products = ({ products }: { products: Product[] }) => {

    return (
        <div>
            <h1>Product List</h1>
            <p>
                (This page is <strong>statically generated</strong> and then
                updated <strong>at runtime</strong>.)
            </p>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        {/* Add more fields as needed */}
                    </li>
                ))}
            </ul>
            <ul>
                <li>Data Above</li>
            </ul>
        </div>
    );
};

export default Products;
