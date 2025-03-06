# 🍽️ Swiggy API Integration 

This is a **React-based application** that interacts with the **Swiggy API** to fetch restaurant data, display menus, and allow users to manage their cart. The app uses **React Router, Redux Toolkit, and React Context API** for state management.  

## 🚀 Features  

✅ **Dynamic Restaurant Listings**: Fetch and display restaurant data from Swiggy's API.  
✅ **Menu Display**: Show menu items of a selected restaurant.  
✅ **Search Functionality**: Search for restaurants by name.  
✅ **Top Rated Restaurants Filter**: Filter restaurants based on their ratings.  
✅ **User Context**: Manage logged-in user details globally using React Context.  
✅ **Cart Management**: Add, remove, and clear items from the cart using Redux.  
✅ **Lazy Loading**: Grocery component is loaded lazily for performance optimization.  
✅ **Online Status Detection**: Detects if the user is offline.  

## 📂 Project Structure

src/
│── components/
│   ├── Header.js
│   ├── Body.js
│   ├── About.js
│   ├── Contact.js
│   ├── Error.js
│   ├── RestaurantMenu.js
│   ├── Cart.js
│   ├── Grocery.js (Lazy Loaded)
│   ├── User.js
│   ├── UserClass.js
│── utils/
│   ├── userContext.js
│   ├── appStore.js
│   ├── cartSlice.js
│   ├── useOnlineStatus.js
│   ├── useRestaurantMenu.js
│── App.js
│── index.js
│── README.md

## 🛠️ Technologies Used  

- **React.js** - Core library for building UI  
- **React Router** - Client-side navigation  
- **Redux Toolkit** - State management for cart  
- **React Context API** - Global user state management  
- **Tailwind CSS** - Basic styling  
- **Swiggy API** - Fetching restaurant and menu data  
- **Lazy Loading** - Optimized component loading  



