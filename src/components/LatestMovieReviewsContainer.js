import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'phyPOeO3G2Lh7I5S8cmTFbnCw0SQDITw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  }

  componentDidMount() {
    this.fetchLatestReviews()
  }

  fetchLatestReviews = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {this.setState({ reviews: data.results })})
  }

  // console.log(data)

  render() {
    return(
      <div className='latest-movie-reviews'>
        <h2>Latest Reviews</h2>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer