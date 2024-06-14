
import { useState } from "react";

export default function MenuItem({item}) {
    const [isFavorite,setIsFavorite]= usestate (item.isFavorite);
    const handleFavorite =()=>{
        setIsFavorite(!isFavorite);
    };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props */}
        <img src={item.foodImage} alt={item.description}  />
        <figcaption>
          {/* the h2 will receive the item name from the props */}
          <h2>{item.itemName}</h2>
          {/* the p will receive the item description from the props */}
          <p>{item.description}</p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <span>{item.price} €</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button onClick={handleFavorite}>{isFavorite? "❤️" : "🖤"}</button>
    </section>
  );
}
