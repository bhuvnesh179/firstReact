import MovieList from "./MovieList";
import React from "react";
import NavBar from "./NavBar";
import {movies} from "./MovieData";
class App extends React.Component {

  constructor(){
    super();
    this.state = {
        movies:  movies,
        cartCount: 0
    }
}

handleIncStar = (movie) =>{
    const {movies}  = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid].stars >= 5){
        return;
    }
    movies[mid].stars += 0.5;
    
    this.setState({
        movies: movies
    })
}
handleDecStars = (movie) => {
    const {movies} = this.state;
       const mid = movies.indexOf(movie);
       if(movies[mid].stars <= 0){
        return ;
       }
       movies[mid].stars -= 0.5;

       this.setState({
        movies: movies
       })
       
}

handletoggleFav = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
        movies: movies
    })
}
handletoggleCart = (movie) => {
    let {movies,cartCount} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    if(movies[mid].isInCart){
      cartCount++;
    }else{
      cartCount--;
    }
    this.setState({
        movies,
        cartCount
    })
}
  render(){
    const {movies} = this.state;
    
    return (
      <>
      <NavBar cartCount = {this.state.  cartCount}/>
      <MovieList movies = {movies}
                 addStars = {this.handleIncStar}
                 decStars = {this.handleDecStars}
                 toggleFav = {this.handletoggleFav}
                 toggleCart = {this.handletoggleCart}/>
      </>
    );
  }
  
}


export default App;
