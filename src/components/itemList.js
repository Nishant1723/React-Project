import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({items, dummy}) => {

        const dispatch = useDispatch();
    
    const handledAddItems = (item) => {
        dispatch(addItems(item))
    };

    return (
    <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className = "w-9/12">
                <div className="py-2">   
                <span>{item.card.info.name}</span>
                <span>- ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                </div>
                <p className="text-xs text-gray-400">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4"> 
                <div className="absolute">
                    <button className="px-6 py-2 mx-7  rounded-lg bg-white text-black shadow-2xl" onClick = {() => handledAddItems(item)}>Add+</button>
                </div>
                        <img  className="w-full rounded-lg"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}></img>
                    </div>
                    </div>
                
            ))}      
    </div>
    );
};


export default ItemList;