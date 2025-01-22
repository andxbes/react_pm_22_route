import { Link, useNavigate } from "react-router-dom";

export default function Home(params) {
    const navigate = useNavigate();
    return <>
        <h1>My home page</h1>
        <p>
            Go to <Link to="/products">The list of products</Link>
        </p>
        <p>
            <button onClick={() => {
                navigate('/products');
            }}>Products</button>
        </p>
    </>
};
