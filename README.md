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

src/ │── components/ │ ├── Header.js # Navbar with navigation links │ ├── Body.js # Main content with restaurant listings │ ├── About.js # About page │ ├── Contact.js # Contact page │ ├── Error.js # Error handling page │ ├── RestaurantMenu.js # Displays restaurant menu details │ ├── Cart.js # Shopping cart page │ ├── Grocery.js # Lazily loaded grocery component │ ├── User.js # Functional component for user profile │ ├── UserClass.js # Class-based component for user profile │── utils/ │ ├── userContext.js # React Context for managing user state │ ├── appStore.js # Redux store setup │ ├── cartSlice.js # Redux slice for cart management │ ├── useOnlineStatus.js # Custom hook to detect online status │ ├── useRestaurantMenu.js # Custom hook to fetch menu details │── App.js # Main component │── index.js # Entry point of the app │── README.md # Documentation


## 🛠️ Technologies Used  

- **React.js** - Core library for building UI  
- **React Router** - Client-side navigation  
- **Redux Toolkit** - State management for cart  
- **React Context API** - Global user state management  
- **Tailwind CSS** - Basic styling  
- **Swiggy API** - Fetching restaurant and menu data  
- **Lazy Loading** - Optimized component loading  



