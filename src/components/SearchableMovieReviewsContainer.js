import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'phyPOeO3G2Lh7I5S8cmTFbnCw0SQDITw';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchReviews()
  }

  searchReviews = () => {
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(data => {this.setState({reviews: data.results})})
  }

  render() {
    return(
      <div>
        <h2>Search!</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name='searchTerm' value={this.state.searchTerm} onChange={event => this.setState({ searchTerm: event.target.value})}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer