import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LikePage = () => {

    const [listData, setListData] = useState([]);

    useEffect(() => {

        let movieArray = [];

        //? on recupere le local storage si il y a des données sinon on met un tableau vide
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];


        //? on boucle sur le tableau des id pour récupérer les données de chaque film
        for(let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
            //? on push les données dans le tableau movieArray
            .then((res) => movieArray.push(res.data))
            //? on met à jour le state listData avec le tableau movieArray
            .then(() => setListData(movieArray))


        }

    }, [])

    



    return (
        <div className='user-list-page'>
            <Header />
            <h2>Coups de coeur <span>💖</span> </h2>
            <div className="result">

            </div>
          
            
        </div>
    );
};

export default LikePage;