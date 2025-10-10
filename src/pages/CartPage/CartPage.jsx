
import { useContext } from "react"
import  {cartContext} from "../../context/CartContext"


export default function Cart (){
const [Cart]=useContext(cartContext)

    return (
    <div>
      <h2>Your Cart 🛒</h2>

  
        <>
          {Cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Qty: {item.quantity}</p>

            
            </div>
          ))}

         
        
        </>

    </div>
  );
}