import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Card from './Card';




const Form = () => {

    //? on crée un state pour stocker les données de l'api
    const[moviesData, setMoviesData] = useState([])

    //? on crée un state pour stocker la valeur de l'input
    const [search, setSearch] = useState('code')

    //? on crée un state pour stocker la valeur du tri
    const [sortGoodBad, setSortGoodBad] = useState(null)


    //? on crée un useEffect pour faire la requête à l'api avec une requête get pour récupérer les données
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`)
        .then((res) => setMoviesData(res.data.results))

    },
    //? on met search dans les dépendances pour que le useEffect se lance à chaque fois que search change
     [search])



    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Entrer le titre d'un film" id='search-input' 
                    onChange={(e) => setSearch(e.target.value)} />

                    <input type="submit" value="Rechercher" id='submit-btn' />
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad"
                    onClick={() => setSortGoodBad('goodToBad')}
                    
                    >Top 🤩</div>
                    <div className="btn-sort" id="badToGood"
                    onClick={() => setSortGoodBad('badToGood')}
                    
                    > Flop 🤮 </div>
                </div>

                <div className="result">
                    {moviesData
                    
                    .slice(0, 12)
                    .sort((a, b) => {
                        if (sortGoodBad === 'goodToBad') {
                            return b.vote_average - a.vote_average
                        } else if (sortGoodBad === 'badToGood') {
                            return a.vote_average - b.vote_average
                        } else {
                            return null
                        }
                    })


                    .map((movie) =>
                    
                    <Card movie={movie} key={movie.id} />
                    )}


                



                  
                  

                   

                </div>

            </div>
        </div>
    
    );
};

export default Form;