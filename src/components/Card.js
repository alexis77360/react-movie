import React from 'react';

const Card = ({movie}) => {

    //? retire la date en anglais pour la remplacer par la date en français
    const dateFormater = (date) => {
        //? on split la date pour la mettre dans un tableau
        let [yy,mm,dd] = date.split('-')
        //? on retourne le tableau avec les valeurs inversées
        return [dd,mm,yy].join('/')}
    
    


    
    return (
        <div className='card'>
            <img 
            src={
                movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path 
            : "./img/poster.jpg"} alt={movie.title} />
            <h2>{movie.title}</h2>
            {movie.release_date ? (<h5>Sorti le : {dateFormater(movie.release_date)}</h5> ) : null}
            <h4>Note : {movie.vote_average}/10 ⭐</h4>


        </div>

    );
};

export default Card;