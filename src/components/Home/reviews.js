import React, { useState, useEffect } from 'react'
import './reviews.css'

import REVIEWS_DATA from './reviewsdata'

const Reviews = () => {
    const [author, setAuthor] = useState(1)
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("working")
            if (author === 5) {
                setAuthor(1)
            } else {
                setAuthor(auth => auth + 1);
            }
        }, 5000);
        return () => clearTimeout(timer);
    })

    const reviewData = () => {
        return REVIEWS_DATA[author - 1].review
    }
    const reviews = REVIEWS_DATA.map(data => {
        return (
            <div
                key={data.id}
                className={author === data.id ? "reviews-single-body reviews-single-active" : "reviews-single-body reviews-single-unactive"}
                onClick={() => setAuthor(data.id)}>
                <div className="review-body-holder">
                    <div className="review-img-holder" style={{ backgroundImage: `url(${data.img})` }}>
                    </div>
                    <div className="review-content-holder">
                        <p className="review-author">{data.heading} </p>
                        <p className="review-author-job"> {data.text}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="reviews-main">
            <div className="container">
                <div className="review-text-holder">
                    <i className="fa fa-heart" aria-hidden="true" />
                    <h3>Loved by some of our favourite people on earth.</h3>
                    <div className="review-data-holder container">
                        <p>{reviewData()}</p>
                    </div>
                </div>
                <div className="reviews-authors-holder">
                    {reviews}
                </div>
            </div>
        </div>
    )
}

export default Reviews