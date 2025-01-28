import ItemList from "./itemList";
import {useState} from "react"

const   RestaurantCategories = ({data, showItems,setShowIndex}) => {
    // console.log(data)

    // const {title} = data
    // console.log(title)




    const handleClick = () => {
        setShowIndex()
    };



    return (
        <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    )
}

export default RestaurantCategories;