import React from "react";
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import { AreaStylePages } from './PagesStyles';
import Java from '../assets/Java.png';
import JavaScript from '../assets/JavaScript.png';
import PostgreesSql from '../assets/PostgreesSql.png';
import SpringBoot from '../assets/SpringBoot.png';
import Html5 from '../assets/Html5.png';
import Css3 from '../assets/Css3.png';
import JavaSlide from '../assets/JavaSlide.jpg';
import SpringBootSlide from '../assets/SpringBootSlide.jpg';
import PostgressSqlSlide from '../assets/PostgressSqlSlide.jpg';
import JavaScriptSlide from '../assets/JavaScriptSlide.jpg';
import Html5Slide from '../assets/Html5Slide.jpg';
import Css3Slide from '../assets/Css3Slide.jpg';

function Pages() {
    return (
        <AreaStylePages>
            <body>    
                <div className="container"> 

                    <section id="Home" className="Home">
                        <div className="principal">
                            <div className="MyName">
                                <h1> Olá eu sou,<br></br></h1>
                                    <span className="typing-animation"> 
                                        Vinicius Medeiros
                                    </span>
                                <h1> Desenvolvedor Full-Stack </h1>                            
                            </div>
                            <div className="principal-botao">
                                <a href="https://www.linkedin.com/in/vinícius-medeiros-52a501235/" target="_blank" rel="noopener noreferrer">
                                    <div className="botao-linkedin">
                                        <img src={linkedin} />
                                        <p>Linkedin</p>
                                    </div>
                                </a>

                                <a href="https://github.com/abcvinicius" target="_blank" rel="noopener noreferrer">
                                    <div className="botao-github">
                                    <img src={github} />
                                        <p>GitHub</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>



                    <section id="espaco1" className="espaco1"></section>
                    
        

                    <section id="sobre" className="Sobre"> 
                        
                        <div className="descricao-sobre">
                            <h1> Sobre mim</h1>
                                <h2>Paraíba, Brasil</h2>
                                    <div className="sobre-paragrafo">
                                        <p>
                                            Olá meu nome Vinícius Medeiros, tenho 17 anos(um mês para 18), sou um jovem que entrou no mundo da programação aos 15 anos, terminei meu primeiro tecnólogo de informática para internet quando fiz 17 anos. Hoje faço Bacharelado de Ciências da Computação.
                                            Sendo bem direto com vocês eu amo oque eu faço, minha vontade é chegar a um nível onde, eu seja capaz de ajudar de forma absurda a vida das pessoas no dia a dia. 
                                            Tudo isso que eu guardo vem desde pequeno, sempre observei a forma que a tecnologia avança e simplifica os processos que antes eram robustos e pesados ou até mesmo considerados “impossíveis”. 
                                        </p>
                                    </div>
                        </div>

                    </section>
                    
                    

                    <section id="espaco2" className="espaco2"><h1> </h1></section>



                    
                    <section id="tecnologia"  className="Tecnologias">
                    
                    <div id="slider">
                        <input type="radio" name="slider" id="slide1" />
                        <input type="radio" name="slider" id="slide2" />
                        <input type="radio" name="slider" id="slide3" />
                        <input type="radio" name="slider" id="slide4" />
                        <input type="radio" name="slider" id="slide5" />
                        <input type="radio" name="slider" id="slide6" />
                    <div id="slides">
                    <div id="overflow">
                    <div class="inner">            
                    <div class="slide slide_1" >
                        <div class="slide-content"> 
                        <a><p>oi</p></a>
                        <img src={JavaSlide} />                       
                        </div>
                    </div>
                    <div class="slide slide_2">
                        <div class="slide-content">
                        <img src={SpringBootSlide} />
                       </div>
                    </div>
                    <div class="slide slide_3">
                        <div class="slide-content">
                        <img src={PostgressSqlSlide} />                            
                        </div>
                    </div>
                    <div class="slide slide_4">
                        <div class="slide-content">
                        <img src={JavaScriptSlide} />                        
                        </div>
                    </div>
                    <div class="slide slide_5">
                    <img src={Html5Slide} />
                        <div class="slide-content">               
                        </div>
                    </div>
                        <div class="slide slide_6">
                        <img src={Css3Slide} />
                        <div class="slide-content">
                        </div>
                    </div>
    


                    </div>
                    </div>
                    </div>
                        
                        
                        <div id="controls">
                            <label for="slide1" id="slide1id" ><img src={Java} /> </label>
                            <label for="slide2" id="slide2id"><img src={SpringBoot}/></label>
                            <label for="slide3" id="slide3id"><img src={PostgreesSql}/></label>
                            <label for="slide4" id="slide4id"><img src={JavaScript}/></label>
                            <label for="slide5" id="slide5id"><img src={Html5}/></label>
                            <label for="slide6" id="slide6id"><img src={Css3}/></label>
                        </div>
                        
                    </div>
                    </section>
    


                    <section id="espaco3" className="espaco3"><h1> </h1></section>



                    <section id="Contato" className="Contato"> 
                    </section>                    

                </div>
            </body>
            </AreaStylePages>   
    );
}

export default Pages;