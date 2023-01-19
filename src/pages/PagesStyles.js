import styled from "styled-components";
import Java from '../assets/JavaSlide.jpg';
import SpringBoot from '../assets/SpringBootSlide.jpg';
import PostgressSql from '../assets/PostgressSqlSlide.jpg';
import JavaScript from '../assets/JavaScriptSlide.jpg';
import Html5 from '../assets/Html5Slide.jpg';
import Css3 from '../assets/Css3Slide.jpg';


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

#slider {
  margin: 0 auto;
  text-align: center;
}
#slider input[type=radio] {
  display: none;
}

#slides .slide {
  width: 100%;
  float: left;
  display: flex;
  height: 100vh;  
}

.tec-paragrafo{
  padding: 75px;

}
.tec-paragrafo #tec-titulos h1 {
  font-size: 5rem;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  text-align: initial;
}
.tec-paragrafo #tec-titulos p{
  text-align: left;
  width: 65%;
  
  margin-top: 60px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
}
.botao-java-tecnologia{
  box-shadow:0px 3px 20px #010101;
  cursor: pointer;  
  width: 200px;
  border-radius: 8px;
  background-color: #151515;
  margin-top: 3rem;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  height: 45px;
}

.botao-java-tecnologia p{
  text-align: center;
  color: #DB2B39;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 10px;
}
.botao-java-tecnologia p:hover{
  color: #fff;
}
;


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



#slide01{
  background:url(${Java}); 
  background-size: cover;
  background-repeat: no-repeat;
}
#slide02{
  background: url(${SpringBoot}); 
  background-size: cover;
  background-repeat: no-repeat;
}
#slide03{
  background:url(${PostgressSql});
  background-size: cover;
  background-repeat: no-repeat;
}
#slide04{
  background: url(${JavaScript});
  background-size: cover;
  background-repeat: no-repeat;
}
#slide05{
  background: url(${Html5});
  background-size: cover;
  background-repeat: no-repeat;
}
#slide06{
  background: url(${Css3});
  background-size: cover;
  background-repeat: no-repeat;
}
#slides .inner {
  transition: margin-left 700ms cubic-bezier(0.970, 0.000, 0.100, 1.000);
  width: 625%;
  height: 100%;
}

#slides .slide {
  width: 16%;
  float:left;
  display: flex;
  margin: 0px;
  align-items: center;
  color: #fff;
}

#controls {
  margin: -120px 0 0;

}
#controls img {
  cursor:pointer;
  width: 70px;
  margin: 20px;
  padding: 10px; 
  transition: padding 0.3s ease-out;
  
}

#slide1id img:hover {
  padding: 5px;

}
#slide2id img:hover {
  padding: 5px;

}
#slide3id img:hover {
  padding: 5px;
}
#slide4id img:hover {
  padding: 5px;
}
#slide5id img:hover {
  padding: 5px;
}
#slide6id img:hover {
  padding: 5px;
}
#controls label {
  transition: opacity 0.2s ease-out;  
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
  padding-left: 100px;
  scroll-snap-type: y proximity;
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
  color: gray;
  box-sizing: border-box;
  background-color: #111111;
  }
.main-form{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-form{
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
.left-form h1{
  margin-bottom: 10px;
  font-weight: 1;
}
.right-form{
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;  
}
.card-form {
  background-color: #252525;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  border-radius: 30px;
  box-shadow:0px 10px 40px #010101;
}
.card-form h1{
  color: #DB2B39;
  font-weight: 1;
  font-size: 40px;
  margin: 0;
}
.textfield {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
}
.textfield input {
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background: #101010;
  color: #fff;
  outline: none;
  box-sizing: border-box;
}
.textfield-name input {
  width: 22rem;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background: #101010;
  color: #fff;
  outline: none;
  box-sizing: border-box;
}
.textfield-email input {
  width: 22rem;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background: #101010;
  color: #fff;
  outline: none;
  box-sizing: border-box;
}
.textfield-telefone input {
  width: 22rem;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background: #101010;
  color: #fff;
  outline: none;
  box-sizing: border-box;
}
.textfield-descricao input {
  width: 22rem;
  height: 10rem;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background: #101010;
  color: #fff;
  outline: none;
  box-sizing: border-box;
}
.textfield-descricao input::placeholder {
  position: relative;
  margin-top: auto; 
}
.btn-form{
  cursor: pointer;
  width: 80%;
  padding: 15px;
  color: #010101;
  background-color: #DB2B39;
  outline: none;
  text-transform: uppercase;
  margin: 25px;
  border: none;
  border-radius: 20px;
  letter-spacing: 5px;
  transition: letter-spacing 0.4s ease-out;
}
.btn-form:hover{
  color: #fff;
  letter-spacing: 15px;
}
`;