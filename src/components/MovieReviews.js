// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  return(
    <ul className='review-list'>
      {props.reviews.map((review, id) => <li className='review' key={id}>{review.display_title}</li>)}
    </ul>
  )
}

export default MovieReviews 