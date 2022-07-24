import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { removeFromCart } from "../slice/cartSlice";


function CheckOutProduct({ id, title, description, category, image, price, rating, hasPrime }) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id, title, description, category, image, price, rating, hasPrime
    }
    // Push item into redux 
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    // Remove item from redux
    dispatch(removeFromCart({ id }))
  };
  
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p className="my-3 font-bold">{title}</p>
        <div className="flex">
          {Array(rating).fill().map((_, index) => (
            <StarIcon key={index} className='h-5 text-yellow-500' />
          ))}
        </div>

        <p className="text-xs my-2">{description}</p>
        <div className="mb-5 font-bold">
            <Currency quantity={price} currency="INR" />
        </div>

        {hasPrime && (
          <div className="flex item-center space-x-2">
            <img loading="lazy" src="https://links.papareact.com/fdw" alt="" />

            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="btn" onClick={addItemToCart}>Add To Cart</button>
        <button className="btn" onClick={removeItemFromCart}>Remove from Cart</button>
      </div>

    </div>
  )
}

export default CheckOutProduct