import styled from "styled-components";
import Java from '../assets/JavaSlide.jpg';

export const AreaStylePages = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap');
body {
    display: flex;
    background-color: rgb(77, 77, 77);
  }
  
  .container {
  
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
  }
section{
  display:flex;
  }
.Home {
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    height: 100vh;
    color: white;
    padding: 40px;
    box-sizing: border-box;
    background-color:#151515;
  }
.Home p:hover{
  color: white;
}
.principal h1 {
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
}
.MyName h1 {
  font-size: 1.3rem;  
}
@media only screen and (min-width:200px) and (max-width: 311px) {
  .MyName h1 { 
    font-size: 0.8rem;
  }
}

@media only screen and (min-width:312px) and (max-width: 381px) {
  .MyName h1 { 
    font-size: 1rem;
  }
}
.principal span {
border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #DB2B39;
  letter-spacing: 2px;  
  overflow: hidden;
}
@media only screen and (min-width:200px) and (max-width: 288px) {
  .MyName span {
    font-size:1rem;  
    }
  }
@media only screen and (min-width:289px) and (max-width: 381px) {
.MyName span {
  font-size: 1.2rem;  
  }
}
.typing-animation{
animation: blinkCursor 500ms steps(40) infinite normal, typing 4s steps(40) 1s normal both;
}
@keyframes typing {
from {
  width: 0;
}
to{
  width: 18em;
}
}
@keyframes blinkCursor{
from {
  border-right-color: rgba(255, 255, 255, 0.75);
}
to{
  border-right-color: transparent;
}
}


.botao-principal {
  width: 350px;
  justify-content: space-between;
}

}
.botao-linkedin{
  display: inline-block;
  align-items: left;
  width: 140px;
  border-radius: 8px;
  background-color: #121212;
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  height: 40px;
}
@media only screen and (min-width:200px) and (max-width: 320px) {
  .botao-linkedin { 
    width:80px;
  }
}
@media only screen and (min-width:321px) and (max-width: 381px) {
  .botao-linkedin { 
    width: 110px;
  }
}

.botao-linkedin p {  
  text-align: center;
  color: #DB2B39;
  cursor: pointer;
  box-sizing: border-box; 
  margin-left: 15px;
  margin-top: -24px;
}
@media only screen and (min-width:200px) and (max-width: 320px) {
  .botao-linkedin p { 
    font-size: 12px;
    margin-left: 15px;
    margin-top: -19px;
  }
}
@media only screen and (min-width:321px) and (max-width: 381px) {
  .botao-linkedin p { 
    font-size: 15px;
    margin-left: 25px;
    margin-top: -23px;
  }
}
.botao-linkedin img {
  margin-left: 15px;
  margin-top: 12px;
  width: 15px;
  align-items: center;
  justify-content: center;
}
@media only screen and (min-width:200px) and (max-width: 320px) {
  .botao-linkedin img { 
    margin-left: 5px;
    margin-top: 12px;
    width:10px;
  }
}
.botao-github{
  display: inline-block;
  align-items: center;
  width: 140px;
  border-radius: 8px;
  background-color: #121212;
  margin-top: 1rem;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  height: 40px;
}
@media only screen and (min-width:200px) and (max-width: 320px) {
  .botao-github { 
    width: 80px;
  }
}
@media only screen and (min-width:321px) and (max-width: 381px) {
  .botao-github { 
    width: 110px;
  }
}

.botao-github p {
  text-align: center;
  color: #DB2B39;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 15px;
  margin-top: -24px;
}
@media only screen and (min-width:200px) and (max-width: 320px) {
  .botao-github p { 
    font-size: 12px;
    margin-left: 15px;
    margin-top: -19px;
  }
}
.botao-github img {
  margin-left: 15px;
  margin-top: 12px;
  width: 15px;
  align-items: center;
  justify-content: center;
}
@media only screen and (min-width:200px) and (max-width: 320px) {
  .botao-github img { 
    margin-left: 5px;
    margin-top: 12px;
    width:10px;
  }
}










.Espaco1 {
  height: 15vh;
  font-size: 20px;
  font-weight: bold;
  padding: 40px;
  box-sizing: border-box;
  background-color: #151515;
}












.Sobre {
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  height: 100vh;
  color: gray;
  font-size: 30px;
  font-weight: bold;
  padding: 40px;
  box-sizing: border-box;
  background-color: #111111;
}
.Sobre h1{
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
}
@media only screen and (min-width:170px) and (max-width: 282px) {
  .Sobre h1 { 
    font-size: 22px;
  }
}
@media only screen and (min-width:282px) and (max-width: 400px) {
  .Sobre h1 { 
    font-size: 28px;
  }
}
@media only screen and (min-width:400px) and (max-width: 470px) {
  .Sobre h1 { 
    font-size: 32px;
  }
}
@media only screen and (min-width:470px) and (max-width: 570px) {
  .Sobre h1 { 
    font-size: 34px;
  }
}
@media only screen and (min-width:570px) and (max-width: 660px) {
  .Sobre h1 { 
    font-size: 38px;
  }
}
@media only screen and (min-width:660px) and (max-width: 690px) {
  .Sobre h1 { 
    font-size:40px;
  }
}

.Sobre h2{
  font-family: 'Roboto', sans-serif;
  font-weight: ligther;
  font-size: 20px; 
  margin: 0;
}
@media only screen and (min-width:170px) and (max-width: 282px) {
  .Sobre h2 { 
    font-size: 6px;
  }
}
@media only screen and (min-width:282px) and (max-width: 400px) {
  .Sobre h2 { 
    font-size: 8px;
  }
}
@media only screen and (min-width:400px) and (max-width: 470px) {
  .Sobre h2 { 
    font-size: 12px;
  }
}
@media only screen and (min-width:470px) and (max-width: 570px) {
  .Sobre h2 { 
    font-size: 16px;
  }
}
@media only screen and (min-width:570px) and (max-width: 660px) {
  .Sobre h2 { 
    font-size: 18px;
  }
}
@media only screen and (min-width:660px) and (max-width: 690px) {
  .Sobre h2 { 
    font-size: 20px;
  }
}

.Sobre p {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: ligther;
}
@media only screen and (min-width:170px) and (max-width: 282px) {
  .Sobre p { 
    font-size: 4px;
  }
}
@media only screen and (min-width:282px) and (max-width: 400px) {
  .Sobre p { 
    font-size: 8px;
  }
}
@media only screen and (min-width:400px) and (max-width: 470px) {
  .Sobre p { 
    font-size: 12px;
  }
}
@media only screen and (min-width:470px) and (max-width: 570px) {
  .Sobre p { 
    font-size: 14px;
  }
}
@media only screen and (min-width:570px) and (max-width: 660px) {
  .Sobre p { 
    font-size: 16px;
  }
}
@media only screen and (min-width:660px) and (max-width: 690px) {
  .Sobre p { 
    font-size: 18px;
  }
}
.sobre-paragrafo {
  line-height: 30px;
}
.descricao-sobre {
  --angle: 0deg;
  border-left: 1px solid;
  line-height: 3rem;
  width: 95%;
  padding: 10px;
  border-image: conic-gradient(from var(--angle), Crimson, red, MediumVioletRed, DarkMagenta, purple,  red) 1;
  animation: 3s rotate linear infinite;
}
@media only screen and (min-width:170px) and (max-width: 282px) {
  .descricao-sobre { 
    line-height: 1.2rem;
    width: 95%; 
  }
}
@media only screen and (min-width:282px) and (max-width: 400px) {
  .descricao-sobre { 
    line-height: 2rem;
    width: 95%; 
  }
}
@media only screen and (min-width:400px) and (max-width: 470px) {
  .descricao-sobre { 
    line-height: 2.3rem;
    width: 95%; 
  }
}
@media only screen and (min-width:470px) and (max-width: 570px) {
  .descricao-sobre { 
    line-height: 2.5rem;
    width: 95%; 
  }
}
@media only screen and (min-width:570px) and (max-width: 660px) {
  .descricao-sobre { 
    line-height: 2.7rem;
    width: 95%; 
  }
}
@media only screen and (min-width:660px) and (max-width: 690px) {
  .descricao-sobre { 
    line-height: 2.7rem;
    width: 95%;    
  }
}
@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}










.Espaco2 {
  height: 15vh;
  font-size: 20px;
  font-weight: bold;
  padding: 40px;
  box-sizing: border-box;
  background-color: #151515;
}

.Tecnologias {
  scroll-snap-align: start;
  height: 100vh;
  color: gray;
  box-sizing: border-box;
  background-color: #252525;
  justify-content: center;
} 


.inner p{
  font-size: 10px;
}
#slider {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
}
#slider input[type=radio] {
  display: none;
}
#slider section {
  cursor:pointer;
}
#slides {
  border-bottom: 1px solid;
  border-image: conic-gradient(from var(--angle),  #000066, #ff9933, #ffcc00, gray, green, transparent) 1;
  animation: 7s rotate linear infinite;
}
#slides .slide {
  width: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#overflow {
  width: 100%;
}
#slide1:checked ~ #slides .inner {
  margin-left: 0;
}
#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}
#slide3:checked ~ #slides .inner {
  margin-left: -200%;
  
}
#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}
#slide5:checked ~ #slides .inner {
  margin-left: -400%;
}
#slide6:checked ~ #slides .inner {
  margin-left: -500%;
}
#slides .inner {
  transition: margin-left 700ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  width: 625%;
  line-height: 0;
  height: 100%;
}

#slides .slide {
  width: 16%;
  float:left;
  display: flex;
  margin: 0px;
  align-items: center;
  height: 100%;
  color: #fff;
}
#slides .slide_1 img{
  width: 100%;
  height: 100%;
}
#slides .slide_2 img{
  width: 100%;
  height: 100%;
}
#slides .slide_3 img{
  width: 100%;
  height: 100%;
}
#slides .slide_4 img{
  width: 100%;
  height: 100%;
}
#slides .slide_5 img{
  width: 5000rem;
  height: 100rem;
}

#slides .slide_6 img{
  width: 14000%;
  height: 100%;
}
#controls {
  margin: -1050px 0 0;

}
#controls img {
  cursor:pointer;
  width: 70px;
  margin: 20px;
  padding: 10px; 
  transition: padding 0.3s ease-out;
}

#slide1id img:hover {
  --angle: 0deg;
  padding: 5px;
  border-bottom: 1.7px solid;
  border-image: conic-gradient(from var(--angle),  Black, Red, Black) 1;
  animation: 2s rotate linear infinite;
}
#slide2id img:hover {
  --angle: 0deg;
  padding: 5px;
  border-bottom: 1.7px solid;
  border-image: conic-gradient(from var(--angle),  Black, limegreen, Black) 1;
  animation: 2s rotate linear infinite;
}
#slide3id img:hover {
  --angle: 0deg;
  padding: 5px;
  border-bottom: 1.7px solid;
  border-image: conic-gradient(from var(--angle),  Black, SkyBlue, Black) 1;
  animation: 2s rotate linear infinite;
}
#slide4id img:hover {
  --angle: 0deg;
  padding: 5px;
  border-bottom: 1.7px solid;
  border-image: conic-gradient(from var(--angle),  Black, Yellow, Black) 1;
  animation: 2s rotate linear infinite;
}
#slide5id img:hover {
  --angle: 0deg;
  padding: 5px;
  border-bottom: 1.7px solid;
  border-image: conic-gradient(from var(--angle),  Black, Orange, Black) 1;
  animation: 2s rotate linear infinite;
}
#slide6id img:hover {
  --angle: 0deg;
  padding: 5px;
  border-bottom: 1.7px solid;
  border-image: conic-gradient(from var(--angle),  Black, RoyalBlue , Black) 1;
  animation: 2s rotate linear infinite;
}
#controls label {
  transition: opacity 0.2s ease-out;  
  width: 50px;
  height: 50px;
  opacity: .8;
}
#controls label:hover {
  opacity: 1;
  
}

#slides {
  max-width: calc(100%);
  margin: 0 auto;
}
}



 
.Espaco3 {
  height: 15vh;
  font-size: 20px;
  font-weight: bold;
  padding: 40px;
  box-sizing: border-box;
  background-color: #151515;
}



.Contato {
  overflow-x: scroll;
  scroll-snap-type: x proximity;
    scroll-snap-align: start;
    height: 100vh;
    width: 100%;
    color: gray;
    font-size: 30px;
    font-weight: bold;
    box-sizing: border-box;
    background-color: #111111;
  }
 
`;