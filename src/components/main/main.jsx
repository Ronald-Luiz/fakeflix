
import { useTranslation } from 'react-i18next';
import '../language/i18n'; //importing the i18n instance

import styled from 'styled-components';
import background from '../../assets/background.jpg'

const Main = styled.main`
display:flex;
justify-content:center;
align-items:center;
.imagem{
    width:100vw;
}
`;

const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
@media (max-width: 768px){
    .imagem{
        height:300px;
    }
    .h1{
        margin-left:10%;
        margin-right:10%;
        top:110px;
        font-size:4.8vw;   
    }

    .paragraph{
        top:250px;
        left:45%;
        // width:280px;
        font-size:15px;
    }

    .input{
        margin-right:15%;
        width:250px;
        height:30px;
        
    }

    .div2{
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .button{
        margin-right:20%;
        height:35px;
        width:105px;

        margin-top:20px;
    }

}

@media (min-width: 1024px) {
    .imagem {
      height: 700px; 
    }
    .h1 {
        display:flex;
        justify-content:center;
        top:280px;
    }

    .paragraph{
        top:500px;
        font-size:34px;
    }

    .input{
        top:50px;
        width:550px;
        height:50px;
    }

  }
`;

const Div2 = styled.div`
display:flex;
justify-content:center;
margin-top:20px;
`;

const H1 = styled.h1`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:180px;
color:white;
font-size:4vw;

text-shadow: 1px 1px 2px black;
`;

const P = styled.p`
display:flex;
justify-content:center;
flex-direction:column;
margin:30px;
position:absolute;
top:400px;
left:50%;
transform: translate(-50%, -50%);
color:white;
font-size:3vw;

text-shadow: 1px 1px 2px black;
`;

const Imagem = styled.img`
//   width: 100%;
  height: 50%;
  opacity:0.4;
  position: relative;
`;

const Input = styled.input`
border-radius:6px;
width:550px;
height:50px;
color:white;
font-size:1.5vw;
background-color:black;
border-color:white;
opacity:0.4;
`;

const Button = styled.button`
background-color:red;
border-radius:5px;
border-color:red;
width:200px;
color:white;
margin-left:20px;
`;

export default function main() {

    const { t, i18n } = useTranslation();

    const email = () => {

        if (i18n.language === 'en') {
            alert('Let go')
        } else {
            alert('Vamos lá')
        }

    }


    return (
        <>
            <Main>
                <Div className='div'>
                    <Imagem className="imagem" src={background} alt="teste" />

                    <H1 className="h1">{t('text')}</H1>

                    <P className="paragraph">{t('text2')}
                        <Div2 className='div2'>
                            <Input className='input' type="email" autocomplete="email" />
                            <Button className='button' onClick={email}>{t('button2')}</Button>
                        </Div2>
                    </P>
                </Div>
            </Main >
        </>
    )
}
