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
<br>
│   ├── Header.js
<br>
│   ├── Body.js
<br>
│   ├── About.js
<br>
│   ├── Contact.js
<br>
│   ├── Error.js
<br>
│   ├── RestaurantMenu.js
<br>
│   ├── Cart.js
<br>
│   ├── Grocery.js (Lazy Loaded)
<br>
│   ├── User.js
<br>
│   ├── UserClass.js
<br>
│── utils/
<br>
│   ├── userContext.js
<br>
│   ├── appStore.js
<br>
│   ├── cartSlice.js
<br>
│   ├── useOnlineStatus.js
<br>
│   ├── useRestaurantMenu.js
<br>
│── App.js
<br>
│── index.js
<br>
│── README.md
<br>

## 🛠️ Technologies Used  

- **React.js** - Core library for building UI  
- **React Router** - Client-side navigation  
- **Redux Toolkit** - State management for cart  
- **React Context API** - Global user state management  
- **Tailwind CSS** - Basic styling  
- **Swiggy API** - Fetching restaurant and menu data  
- **Lazy Loading** - Optimized component loading  



