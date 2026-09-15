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
import ScriptFormSend from "../scripts/pageScript";



function Pages(){
    
    ScriptFormSend();
    
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
                                <h1> Software Engineer </h1>                            
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
                                            Olá! Me chamo Vinícius Medeiros, comecei na programação aos 15 anos e, aos 17, concluí meu primeiro tecnólogo em Informática para Internet. Atualmente, sou formado em Ciência da Computação e direciono meus estudos para Inteligência Artificial, com foco em Agentes de IA. Sou apaixonado por tecnologia e por transformar problemas reais em soluções simples, eficientes e inteligentes. Meu objetivo é construir minha carreira na interseção entre Software Engineering e Artificial Intelligence. 
                                        </p>
                                        <br></br>
                                        <p>"Você não aprende a andar seguindo as regras. Você aprende fazendo e caindo." -Sir Richard Branson</p>
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
                    <div class="slide slide_1" id="slide01">
                    <div className="tec-paragrafo">
                        <div id="tec-titulos">
                            <h1>Java </h1>
                            <p>
                            Entrei no mundo de Java desde o final de 2021 até o início de 2022. Nunca deixei de estudar java, mas o meu início foi muito pesado, sempre ficava passando noites estudando e por isso hoje compreendo muito coisa quem nem imaginava saber. Meus estudos em java foram focados dentro na parte de JPA, APIs, Rest, Banco de Dados.
                            </p>
                        </div>
                       
                    </div>
                    </div>
                    <div class="slide slide_2" id="slide02">
                    <div className="tec-paragrafo">
                        <div id="tec-titulos">
                            <h1>Spring Boot </h1>
                            <p>
                            Depois de ter entrado no mundo de Java e terminar POO por completo, eu começei a estudar Spring onde aprendi sobre aplicações, metologia Rest e conexões com Banco de Dados, Tokens, Containers, SpringSecurity...  E por ai vai! Eu pretendo entrar de cara nessa carreira, por isso estou tão focado e sempre esforçado, quero muito mostrar oque eu sei e ganhar mais experiências dentro dessa area
                            </p>
                        </div>
                       
                    </div>
                    </div>
                    <div class="slide slide_3" id="slide03">
                    <div className="tec-paragrafo">
                        <div id="tec-titulos">
                            <h1>PostgreSQL</h1>
                            <p>
                            No mesmo ano de Java eu também precisei estudar alguns Bancos de Dados e um deles foi exatamente o PostgreSQL, me apronfundei e criei conhecimento sobre comandos SQL e na interface do PostgreSQL.
                            </p>
                        </div>
                       
                    </div>
                    </div>
                    <div class="slide slide_4" id="slide04">
                    <div className="tec-paragrafo">
                        <div id="tec-titulos">
                            <h1>JavaScript</h1>
                            <p>
                            Pegando pela métade de 2022 eu começei a revisar o FrontEnd. Eu já tinha experiências com HTML, CSS e um pouco de JS dévido ao meu Ensino Médio, onde eu concluí um Tecnólogo de "Informatica para Internet". Então nesse meio tempo de JavaScript conheci o famoso ReactJs e depois de conhecer sempre estou utilizando ele!
                            </p>
                        </div>
                       
                    </div>
                    </div>
                    <div class="slide slide_5" id="slide05">
                    <div className="tec-paragrafo">
                        <div id="tec-titulos">
                            <h1>Html 5</h1>
                            <p>
                            Conheci HTML dentro da minha escola. No ensino médio você era obrigado a escolhe um curso"tecnólogo" para fazer, então escolhi Informática para Internet, desde os meu 15 anos que eu uso HTML.
                            </p>
                        </div>
                       
                    </div>
                    </div>
                    <div class="slide slide_6" id="slide06">
                    <div className="tec-paragrafo">
                        <div id="tec-titulos">
                            <h1>Css 3</h1>
                            <p>
                            O CSS foi da mesma forma que o HTML, para fazer as interface era obvio que você teria que utilizar o CSS, então criando as minhas pagínas eu fui editando e aprendendo sobre div, alinhamentos, reponsividade e contudo eu continuo a estudar, melhorar minhas habilidades dentro do FrontEnd, apesar de meu foco ser Java mas eu gosto de ser bom no que eu faço, por isso matenho essa disciplina.
                            </p>
                        </div>
                       
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
                        <div className="main-form">

                            <div className="left-form">
                                <h1 style={{color: "white"}}>
                                    Vamos conversar?
                                </h1>

                                <h1>
                                    Caso queira entrar em contato comigo,
                                    fique à vontade para enviar um e-mail.
                                </h1>

                                <h1>
                                    Estou aberto a oportunidades, projetos
                                    e conversas relacionadas à tecnologia.
                                </h1>
                            </div>

                            <div className="right-form">
                                <div className="card-form">

                                    <h1>Contato</h1>

                                    <div className="contact-info">

                                        <div className="contact-item">
                                            <span>E-mail: </span>
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinicius.medeiros.engineersoft@gmail.com">
                                                vinicius.medeiros.engineersoft@gmail.com
                                            </a>
                                        </div>

                                        <div className="contact-item">
                                            <span>Nome: Vinícius Medeiros</span>
                                        </div>
                                    </div>

                                    <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vinicius.medeiros.engineersoft@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    
                                        className="btn-form"
                                    >
                                        Enviar Email
                                    </a>

                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </body>
            </AreaStylePages>   
    );
}


export default Pages;