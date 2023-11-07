import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useTranslation } from 'react-i18next';
import '../components/language/i18n'; //importing the i18n instance


const Movies = styled.div`
margin-left:10px;
margin-right:10px;
`;

const H2 = styled.h2`
display:flex;
justify-content:center;
font-size:40px;
color:red;
-webkit-text-stroke: 1px white;
`;

const Div = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;

figure{
  display:flex;
  align-items:center;
  flex-direction:column;
  margin:40px;   
  box-shadow: 10px 0px blue; 
  border:1px solid white;
}

figure:hover{
    cursor:pointer;
    transform:scale(110%);
    transition:1s;
}

figcaption{
    font-size:24px;
    color:white;
}


`;

export default function movie() {
    const [MoviesArray, setMoviesArray] = useState([]);

    const GetDates = () => {

        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                include_adult: 'true',
                include_video: 'true',
                language: 'en-US',
                page: '1',
                sort_by: 'popularity.desc'
            },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDQ0MTQ1ZjdiYzZlZTc5NDY5YjU3ZGJhZThkMTYxMCIsInN1YiI6IjY1NDk4ZTQyMWFjMjkyN2IzMzg4NTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IoKli2nrK5Ya2scviL_LDT18hcZyWHds9VwKmfVXTUg'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                setMoviesArray(response.data.results);
                console.log(response.data.results);
            })
            .catch(function (error) {
                setMoviesArray(error);
                console.log(error);
            });
    }

    useEffect(() => {
        GetDates();
    }, []);

    const { t, i18n } = useTranslation();

    return (
        <Movies>
            <H2>
                {t('text3')}
            </H2>

            <Div>
                {MoviesArray.map((item) => (
                    <figure>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" width='250px' />
                        {/* <figcaption>{item.title}</figcaption> */}
                    </figure>
                ))};
            </Div>
        </Movies>
    )
}