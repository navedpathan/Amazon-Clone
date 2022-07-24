import Image from "next/image"
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToCart } from "../slice/cartSlice";
import { store } from "../app/store";

const MAX_RATING = 5;
const MIN_RATING = 1;
const MAX_PRICE = 10000;
const MIN_PRICE = 1000;

function Product({ id, title, description, category, image }) {

    const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);

    const [price] = useState(
        Math.floor(Math.random() * (MAX_PRICE - MIN_PRICE + 1)) + MIN_PRICE
    );

    const addItemsToCart = () => {
       const product = {
        id, title, description, category, price, rating, image, hasPrime
       };
         
    //    Sending the product as an action to the redux store... the cart slice
       dispatch(addToCart(product));
    }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

        <Image src={image} width={200} height={200} objectFit='contain' />

        <h4 className="my-3 font-bold">{title}</h4>
        
        <div className="flex">
            {Array(rating).fill().map((_, index) => (
                <StarIcon key={index} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2">{description}</p>

        <div className="mb-5 font-bold">
            <Currency quantity={price} currency="INR" />
        </div>

        {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
                <img src="https://links.papareact.com/fdw" height='60px' width='60px' objectFit='contain' alt="" />
                <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
            </div>
        )}

        <button onClick={addItemsToCart} className="mt-auto btn">Add to Cart</button>
    </div>
  )
}

export default Product