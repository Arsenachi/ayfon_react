export default function Cart({img,title,price,category}) {
    return (
        <div className="cart">
            
            <h3>{title}</h3>
            <h2>{price}</h2>
            <h2>{category}</h2> 
            <img src={img} alt={title} />
        </div>
    ) 
}