const express = require("express")
const cors = require("cors")

const restaurantController = require("./controllers/restaurantController")
const userController = require("./controllers/userController")
const favouriteController = require("./controllers/favouriteController")
const categoryController = require("./controllers/categoryController")
const reviewController = require("./controllers/reviewController")
const hoursController = require("./controllers/hoursController")

const app = express()

app.use(express.static("./public"))
app.use(express.json()) 
app.use(cors())

app.route("/user").get(userController.getAllUsers)
app.route("/user/:id").get(userController.getUserById)
app.route("/user/update/:id").put(userController.updateUser)
app.route("/user/delete/:id").delete(userController.deleteUser)
app.route("/user/register").post(userController.addUser)
app.route("/user/login").post(userController.userLogin)

app.route("/restaurant").get(restaurantController.getAllRestaurants)
app.route("/restaurant/:id").get(restaurantController.getRestaurantById)

app.route("/hours/:id").get(hoursController.getHoursByRestaurant)

app.route("/category/:id").get(categoryController.getRestaurantCategories)

app.route("/favourite").get(favouriteController.getAllFavourites)
app.route("/favourite/user/:id").get(favouriteController.getUserFavourites)
app.route("/favourite/restaurant/:id").get(favouriteController.getTotalRestaurantFavourites)
app.route("/favourite/add").post(favouriteController.addFavourite)
app.route("/favourite/delete/:id").delete(favouriteController.deleteFavourite)

app.route("/review").get(reviewController.getAllReviews)
app.route("/review/:id").get(reviewController.getReviewsByRestaurant)
app.route("/review/add").post(reviewController.addReview)
app.route("/review/update/:id").put(reviewController.updateReview)
app.route("/review/delete/:id").delete(reviewController.deleteReview)



app.listen(8080, () => console.log("web server running @ http://localhost:8080"))