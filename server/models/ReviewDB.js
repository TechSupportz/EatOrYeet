const db = require("../dbConnections")

class ReviewDB {
	getReviewById(reviewId, callback) {
		const query = "SELECT * FROM eatoryeet.reviews WHERE id = ?"
		db.query(query, [reviewId], callback)
	}

	getReviewsByRestaurant(restaurantId, callback) {
		const query = "SELECT reviews.*, users.username, users.profile_pic FROM eatoryeet.reviews LEFT JOIN users on users.id = reviews.user_id WHERE restaurant_id = ?"
		db.query(query, [restaurantId], callback)
	}

	addReview(review, callback) {
		const query =
			"INSERT INTO eatoryeet.reviews (restaurant_id, user_id, title, detail, rating, date_posted, is_edited) VALUES (?, ?, ?, ?, ?, ?, 0)"
		db.query(
			query,
			[
				review.restaurantId,
				review.userId,
				review.title,
				review.detail,
				review.rating,
				review.datePosted,
			],
			callback
		)
	}

	updateReview(review, callback) {
		const query =
			"UPDATE eatoryeet.reviews SET restaurant_id = ?, user_id = ?, title = ?, detail = ?, rating = ?, date_posted = ?, is_edited = 1 WHERE id = ?"
		db.query(
			query,
			[
				review.restaurantId,
				review.userId,
				review.title,
				review.detail,
				review.rating,
				review.datePosted,
				review.id
			],
			callback
		)
	}

	deleteReview(reviewId, callback) {
		const query = "DELETE FROM eatoryeet.reviews WHERE id = ?"
		db.query(query, [reviewId], callback)
	}
}

module.exports = ReviewDB
