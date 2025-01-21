import { Link } from "react-router-dom";

export default function Home(params) {
    return <>
        <h1>My home page</h1>
        <p>
            Go to <Link to="/products">The list of products</Link>
        </p>
    </>
};
