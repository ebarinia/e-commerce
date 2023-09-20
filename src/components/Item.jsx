const Item = ({ item, index, onAddToBasket }) => {

    const handleClick = function() {
        onAddToBasket(item)
    }
    return ( 
    <div>
       <li>
            <img src={item.image}></img>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>£{item.price}</p>
            <button onClick={handleClick}>Add to basket</button>
       </li>
    </div>
     );
}
 
export default Item;
