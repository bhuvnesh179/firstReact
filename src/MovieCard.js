import React from "react";

class MovieCard extends React.Component{
    // reduceStars = () => {
    //     if(this.state.stars <= 0){
    //         return;
    //     }
    //     //form1
    //     this.setState({
    //         stars: this.state.stars - 0.5
    //     });
    // }
    
    // addStars = () => {
    //     if(this.state.stars >= 5){
    //         return;
    //     }
    //     this.setState({
    //         stars: this.state.stars + 0.5}
    //     );
    // }
    // toggleFev = () => {
        
    //     this.setState({
    //         fav: !this.state.fav
    //     });
    // }
    // toggleCart = () => {
    //     this.setState({
    //         isInCart: !this.state.isInCart
    //     });
    // }
    render(){
        const {title, plot, price, rating, stars,fav, isInCart, poster} = this.props.movies;
        const {addStars, decStars, toggleFav, movies, toggleCart} = this.props;
        return (
             <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img alt="decrease" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" onClick={() => {decStars(this.props.movies)}}/>

                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>

                                <img alt="increase" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={() => {addStars(this.props.movies)}} />
                           

                                <span>{stars}</span>
                            </div>

                            <button className={ fav?"unfavourite-btn": "favourite-btn"} onClick={() => {toggleFav(movies)}}> {fav?"Un-favourite":"Favourite"}</button>
                            
                            <button className={isInCart?"unfavourite-btn":"cart-btn"} onClick=
                            {() => {toggleCart(movies)}}>{isInCart?"Remove from Cart":"Add to cart"}</button>

                        </div>
                    </div>

                </div>
            </div>
        )       
    }
}
export default MovieCard;