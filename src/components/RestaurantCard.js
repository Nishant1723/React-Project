
const truncateText = (text, wordLimit) => {
  const wordsArray = text.split(''); 
  if (wordsArray.length > wordLimit) {
    return wordsArray.slice(0, wordLimit).join('') + '...'; 
  }
  return text;
};


export const RestaurantCard = (props , text) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    areaName,
    sla,
  } = resData?.info;

  return (
<div>
<div className="mx-7 p-5 w-[320] h-[400px]  rounded-3xl ease-out duration-200 hover:md:scale-95">
      <img
        className="w-[290px] h-[190px] rounded-3xl"
         alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }
        />       
        <h3 className='font-bold  text-white pt-2 text-lg'>{name}</h3>
        <h4 className='font-bold text-white'>{avgRating} - {sla?.slaString}</h4>     
        <p className='text-white '>{truncateText(cuisines.join(', '), 30)}</p>
        <p className='text-white '>{areaName}</p>
    
      </div>
      </div>

  );
};


export const withPromotedLabel= (RestaurantCard) => {
  return(props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;
