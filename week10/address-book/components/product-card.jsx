export default function ProductCard({product}){
    if(!product) return null;
    return (
        <>
        <div key={product.id} className="cocktail-card">
            <img src={product.image.url} alt="" className="cockatail-img"/>
            <div className="cocktail-info">
                <div className="content-text">
                    <h2 className="coctail-name">{product.name}</h2>
                    <span className="info">{product.info}</span>
                </div>
                <Link to={`/products/${product.slug}`}>
                    <div className="btn">View Details</div>
                </Link>
            </div>
        </div>
        </>
    );
}