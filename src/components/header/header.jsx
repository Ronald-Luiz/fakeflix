import React from 'react';


//Importing our routers to use on the page
import { Link } from 'react-router-dom';


// the library to use translate in the page
import { useTranslation } from 'react-i18next';
import '../language/i18n'

// the style of our page
import styled, { createGlobalStyle } from 'styled-components';


// importing the elements to our page
// import Movies from '../../pages/movies';


// import Home from '/';
import Logo from '../../assets/netflix-94.svg'

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
`

const Header = styled.header``;


const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LanguageSelect = styled.select`
  width: 100px;
  padding: 5px;
  border: none;
  background-color: transparent;
`;

const NavBar = styled.nav`
    padding:20px;

    ul{
        display:flex;
        justify-content:space-between;
        margin-left:10%;
        margin-right:10%;
    }
    li{
        display:flex;
    }

    @media (max-width: 768px){

        ul{
            justify-content:space-evenly;
            margin:5px;
        }

        .logo{
            width:18vw;
        }
    }
`;

const Imagem = styled.img`
width:150px;
`;

const Button = styled.button`
background-color:red;
border-radius:5px;
border-color:red;
margin-left:10px;
color:white;
width:75px;
height:35px;

&&:hover{
    cursor:pointer;
    transform:scale(110%);
    transition:1s;
}

`;


export default function header({ buttonLink, Movies, buttonLink2 }) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }


    const changeBack = () => {


        if (document.body.style.backgroundColor == 'black' && document.body.style.color == 'white') {
            document.body.style.backgroundColor = '#f5f5f5';
            document.body.style.color = 'black';

        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';

        }

    }


    return (
        <>
            <GlobalStyle />
            {/* <BrowserRouter> */}
            <Header>

                <NavBar>


                    <ul>
                        <li>
                            <Imagem className="logo" src={Logo} alt="" />
                        </li>
                        <li>

                            <SelectContainer>
                                <LanguageSelect value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
                                    <option value="en">English</option>
                                    <option value="pt">Portuguese</option>
                                </LanguageSelect>
                            </SelectContainer>

                            <Link to={buttonLink2}>
                                <Button>
                                    {t('button')}
                                </Button>
                            </Link>

                            <Link to={buttonLink}>
                                <Button>
                                    {Movies}
                                </Button>
                            </Link>

                            <Button onClick={changeBack}>
                                <i class="fa-solid fa-sun"></i>
                            </Button>
                            {/* 
                                <Routes>
                                    <Route path="/" />
                                    <Route element={<Movies />} path="/movies" />
                                </Routes> */}

                        </li>
                    </ul>




                </NavBar>

            </Header>
            {/* </BrowserRouter > */}
        </>
    )
}