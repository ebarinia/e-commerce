import Item from "./Item";

const ItemList = ({ items, onAddToBasket }) => {

    const shopItem = items.map((item, index) => {
        return <Item key={index} item={item} onAddToBasket={onAddToBasket}/>
    })
    return ( 
        <ul>
            {shopItem}
        </ul>
    );
}
 
export default ItemList;