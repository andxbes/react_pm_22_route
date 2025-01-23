import { Link, useParams } from "react-router-dom";

export default function ProductDetails(params) {
    const restParams = useParams();
    return <>
        <h1>Product Details</h1>
        <p>{restParams.productId}</p>
        <p><Link to=".." relative="path">back</Link></p>
    </>;
};
