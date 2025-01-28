import { useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  const OnlineStatus = useOnlineStatus();

  if(OnlineStatus === false ) {
    return (
      <h1>Looks like you're Offline!! Please check you Internet connection</h1>
    )
  }





  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-800">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search Your Delicious"
            className="border border-solid border-gray-900 rounded-lg px-4 py-2 bg-gray-200"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={() => {
            
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className='m-4 p-4 flex items-center' >
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        

        <div className='m-4 p-4 flex items-center' >
          
    </div>

      </div>
      <div className="flex flex-wrap">

        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id}to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard  resData={restaurant} />
            )}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
