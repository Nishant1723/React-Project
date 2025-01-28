import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategorie";
import {useState} from "react"

const RestaurantMenu = () => {

    const {resId} = useParams(); // Call useParams as a function to get the resId

    const resInfo = useRestaurantMenu(resId); // Assuming useRestaurantMenu fetches data
    
    const [showIndex , setShowIndex] = useState(null)


    if (resInfo === null) {
        return <Shimmer />;
    }


    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card  || []

 const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );
//  console.log(categories);


    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
        {/* {CATEGORIES ACCORDIAN} */}

        {categories.map((category, index) => (
            <RestaurantCategories key={category?.card?.card.title} data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}/>
        ))}
        </div>
    );
};

export default RestaurantMenu;
