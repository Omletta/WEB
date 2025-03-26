const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Dish = require('./models/dish');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    return Dish.insertMany([
      {
        name: "Spaghetti Bolognese",
        description: "Classic pasta with meat sauce",
        price: 3.20,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272",
        available: true,
      },
      {
        name: "Grilled Chicken",
        description: "With vegetables and rice",
        price: 3.80,
        image: "https://example.com/chicken.jpg",
        available: true,
      },
      {
        name: "Chocolate Mousse",
        description: "Rich and creamy dessert",
        price: 1.20,
        image: "https://example.com/mousse.jpg",
        available: true,
      }
    ]);
  })
  .then(() => {
    console.log("Dishes inserted");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
