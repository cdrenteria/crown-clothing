import "./product-card.styles.scss";
import Button from "../button/button.componenet"

const ProductCard = ({product}) => {
    const {id, name, price, imageUrl} = product;
    return (
        <div key={id} className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button style="inverted"> Add to Cart</Button>
        </div>
    )

};

export default ProductCard;