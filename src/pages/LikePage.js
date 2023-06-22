import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const LikePage = () => {

    const [listData, setListData] = useState([]);

    useEffect(() => {

 

        //? on recupere le local storage si il y a des données sinon on met un tableau vide
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];


        //? on boucle sur le tableau moviesId pour récupérer les données de chaque film et on les ajoute dans le tableau listData avec setListData 
        for (let i = 0; i < moviesId.length; i++) {
            axios
              .get(
                `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`
                )
                .then((res) => setListData((listData) => [...listData, res.data]));
            }
          }, []);



    



    return (
        <div className='user-list-page'>
            <Header />
            <h2>Coups de coeur <span>💖</span> </h2>
            <div className="result">
{/*                 //? si le tableau listData est supérieur à 0 on affiche les données sinon on affiche un message
 */}                {listData.length > 0 ?
                (
                    listData.map((movie) => <Card key={movie.id} movie={movie} />)
                ):(
                    <h2> Vous n avez pas encore de coups de coeur</h2>
                    )}

            </div>
          
            
        </div>
    );
};

export default LikePage;