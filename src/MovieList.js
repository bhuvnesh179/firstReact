import { Component } from "react";  
import MovieCard from "./MovieCard";

class MovieList extends Component{
    
    render(){
        // const {title, plot, price, rating, stars, fav, isInCart} = this.state;
        const {movies, addStars, decStars, toggleCart, toggleFav} = this.props;
        console.log(this.props);
        return(
            <>
            {/* <MovieCard movies = {this.state}
                        /> */}
            {movies.map((movie, index) => <MovieCard key = {index}
                                                     movies = {movie}
                                                     addStars={addStars}
                                                     decStars={decStars}
                                                     toggleFav={toggleFav} 
                                                     toggleCart={toggleCart}/>)}
           
            
            </>
        )
    }
}

export default MovieList;