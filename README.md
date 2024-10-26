# ShopOrion

ShopOrion is an e-commerce application designed to deliver a smooth shopping experience with a complete frontend and an actively developed backend. This project utilizes React for the frontend and Node.js with Express for the backend to provide a full-featured online store solution.

## Project Structure

### Frontend
- **Components**: Includes reusable UI components like `Navbar`, `Footer`, `ProductItem`, `RelatedProducts`, and more, ensuring an interactive and responsive user experience.
- **Pages**: Organized pages such as `Home`, `Collection`, `Cart`, `Login`, and `About` that cover all essential e-commerce functionalities.
- **Context**: Uses `ShopContext` for centralized state management across the application.

### Backend
- **Config**: Contains configuration files for connecting to the database (`mongodb.js`) and handling file uploads (`cloudinary.js`).
- **Controllers**: Houses `userController` and `productController` to manage the logic behind user and product actions.
- **Models**: Defines MongoDB models for `userModel` and `productModel`.
- **Routes**: API routes, including `userRoute` and `productRoute`, to handle HTTP requests and responses.

## Current Status

- The **frontend** is fully functional, allowing users to browse products, view details, manage their cart, and access account-related features.
- The **backend** setup is in progress with MongoDB and route configurations established. Currently, work is focused on the `productRoute` to finalize product-related API functionality.

## Current Issue

I'm currently troubleshooting an issue while testing the `productRoute`. When making requests via Thunder Client, I receive the following error:

```json
{
    "success": false,
    "message": "Cannot read properties of undefined (reading '1')"
}
```

Switching to Postman yielded the same error. I'm still looking into solutions and hope to resolve this issue soon.

## Feedback(?)

Sure! Feel free to submit pull requests to improve the project. Contributions are welcome!
