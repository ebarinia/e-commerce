const BasketList = ({ basket }) => {

    const BasketItems = basket.map((item, index) => 
    <li key={index}>
        <img src={item.image}></img>
        <h4>{item.title}</h4>
    </li>);

    return ( 
        <>
        <h2>This is your basket</h2>
        <ul>{BasketItems}</ul>
        </>
     );
}
 
export default BasketList;