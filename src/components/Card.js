import React from 'react';

const Card = ({movie}) => {

    //? retire la date en anglais pour la remplacer par la date en français
    const dateFormater = (date) => {
        //? on split la date pour la mettre dans un tableau
        let [yy,mm,dd] = date.split('-')
        //? on retourne le tableau avec les valeurs inversées
        return [dd,mm,yy].join('/')}


        const genreFinder = (genreId) => {
            let genreArray = [];
            for (let i= 0; i < movie.genre_ids.length; i++) {
                switch(movie.genre_ids[i]) {
                    case 28:
                        genreArray.push('Action')
                        break;
                    case 12:
                        genreArray.push('Aventure')
                        break;
                    case 16:
                        genreArray.push('Animation')
                        break;
                    case 35:
                        genreArray.push('Comédie')
                        break;
                    case 80:
                        genreArray.push('Crime')
                        break;
                    case 99:
                        genreArray.push('Documentaire')
                        break;
                    case 18:
                        genreArray.push('Drame')
                        break;
                    case 10751:
                        genreArray.push('Familial')
                        break;
                    case 14:
                        genreArray.push('Fantastique')
                        break;
                    case 36:    
                        genreArray.push('Histoire')
                        break;
                    case 27:    
                        genreArray.push('Horreur')
                        break;  
                    case 10402:
                        genreArray.push('Musique')
                        break;
                    case 9648:
                        genreArray.push('Mystère')
                        break;
                    case 10749:
                        genreArray.push('Romance')  
                        break;
                    case 878:
                        genreArray.push('Science-Fiction')
                        break;
                    case 10770:
                        genreArray.push('Téléfilm')
                        break;
                    case 53:
                        genreArray.push('Thriller')
                        break;
                    case 10752:
                        genreArray.push('Guerre')
                        break;
                    case 37:
                        genreArray.push('Western')
                        break;
                    default:
                        break;
                         
                
            }
        }
        //? on retourne le tableau avec les valeurs du nouveau tableau de genre
        return genreArray.map((genre) => <li key={genre}>{genre}</li>)
    }


   const addStorage = () => {
         //? on récupère les données du local storage et si il n'y en a pas on met un tableau vide
        let storedData = window.localStorage.movies ? window.localStorage.movies.split(',') : [];


        //? si le tableau ne contient pas l'id du film on l'ajoute
        if(!storedData.includes(movie.id.toString())) {
            //? on ajoute l'id du film au tableau
            storedData.push(movie.id);
            //? on met à jour le local storage
            window.localStorage.movies = storedData 
        }

    }

    const deleteStorage = () => {
        let storedData = window.localStorage.movies.split(',');
        //? on filtre le tableau pour retirer l'id du film
        let newData = storedData.filter((id) => id != movie.id);
        //? on met à jour le local storage
        window.localStorage.movies = newData;
    }

    
    return (
        <div className='card'>
            <img 
            src={
                movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path 
            : "./img/poster.jpg"} alt={movie.title} />
            <h2>{movie.title}</h2>
            {movie.release_date ? (<h5>Sorti le : {dateFormater(movie.release_date)}</h5> ) : null}
            <h4>Note : {movie.vote_average.toFixed(1)}/10 <span>⭐</span></h4>
            <ul>
                {
                    //? si le film n'a pas de genre on affiche rien sinon on affiche les genres
                    movie.genre_ids ? genreFinder() : movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
                }
            </ul>
{/*             //? si il y a une description on affiche le titre sinon on affiche rien
 */}            {movie.overview ? (<h3>Synopsis</h3>) : ""}
            <p>{movie.overview}</p>

            {movie.genre_ids ? 
            (

            <div className="btn" onClick={
                () => {addStorage()}}>Ajouter au coups de coeur</div>
            )
            :(
                <div className="btn" onClick={ () =>
                    {
                        deleteStorage();
                        window.location.reload();
                    }
                
                }> Supprimer de la liste</div>

            )}
        </div>





    

    );
};

export default Card;