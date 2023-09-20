import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import BasketList from '../components/BasketList';

const ShopContainer = () => {
    const [items, setItems] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    const getItems = (() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setItems(data))
    })

    // const addToBasket = (item) => {
    //     return setBasket((basket) => {[...basket, item]})
    // }

    const addToBasket = (item) => {
        setBasket((currentBasket) => {
          if (!currentBasket.some(basketItem => basketItem.title === item.title)) {
            return [...currentBasket, item];
          } else {
            return currentBasket;
          }
        });
      };

    return ( 
        <>        
        <h1>e-Commerce</h1>
        <ItemList items={items} onAddToBasket={addToBasket}/>
        {/* <BasketList basket={basket}/> */}
        </>
     );
}
 
export default ShopContainer;