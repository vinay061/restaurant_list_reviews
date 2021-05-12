import express from "express"
import RestaurantCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(RestaurantCtrl.apiGetRestaurants)
router.route("/id/:id").get(RestaurantCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantCtrl.apiGetRestaurantCuisines)
//router.route("/api/v1/restaurants").get((req,res) => res.send("Reached the api/v1 endpoint"))

router.route("/review")
      .post(ReviewsCtrl.apiReview)
      .put(ReviewsCtrl.apiUpdateReview)
      .delete(ReviewsCtrl.apiDeleteReview)

export default router