import styles from "./Item.module.css";
const Item = ({foodItem, bought, handleBuyButton}) => {

    const handleBuyButtonClicked = (event) => 
    {
        console.log(event)
        console.log(`${foodItem} button clicked.`)
    }
   
 return ( <li  className= {`list-group-item ${ bought && 'active' }`}> 
 {foodItem}
 <button
  className={`${styles.button} btn btn-info`}
  onClick = {handleBuyButton} 
 >Buy</button> 
 </li>
 );
};
export default Item;
