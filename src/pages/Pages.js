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
                                            Olá meu nome Vinícius Medeiros, tenho 18 anos, sou um jovem que entrou no mundo da programação aos 15 anos, terminei meu primeiro tecnólogo de informática para internet quando fiz 17 anos. Hoje faço Bacharelado de Ciências da Computação, estou no 3° período.
                                            Sendo bem direto com vocês eu amo oque eu faço, minha vontade é chegar a um nível onde, através da tecnologia eu seja capaz de ajudar de forma absurda a vida das pessoas no dia a dia. 
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
                    <div class="slide slide_1" id="slide01">
                    <div className="tec-paragrafo">
                        <div id="tec-titulos">
                            <h1>Java </h1>
                            <p>
                            Entrei no mundo de Java desde o final de 2021 até o início de 2022. Nunca deixei de estudar java, mas o meu início foi muito pesado, sempre ficava passando noites estudando e por isso hoje compreendo muito coisa quem nem imaginava saber. Meus estudos em java foram focados dentro na parte de JPA, APIs, Rest, Banco de Dados.
                            </p>
                        </div>
                       <div className="botao-java-tecnologia">
                            <p>Java GitHub</p>
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
                       <div className="botao-java-tecnologia">
                            <p>SpringBoot GitHub</p>
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
                       <div className="botao-java-tecnologia">
                            <p>PostgreSQL GitHub</p>
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
                       <div className="botao-java-tecnologia">
                            <p>JavaScript GitHub</p>
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
                       <div className="botao-java-tecnologia">
                            <p>Html5 GitHub</p>
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
                       <div className="botao-java-tecnologia">
                            <p>Css3 GitHub</p>
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
                                <h1 style={{color: "white"}}>Preencher o formulário caso queira entrar em Contato. </h1>
                                <h1>Esse Formulario é conectado a uma API onde dentro do Banco eu acesso as informações das pessoas que entraram em contato comigo.</h1>
                                <br></br>
                                <h1>obs: (Como o projeto está no github ainda não é possivel enviar uma mensagem, mas toda a API e a conexão com servidor está feita mas é nescesasrio um dominio)</h1>
                            </div>
                            <div className="right-form">
                                <div className="card-form">
                                    <h1>Formulario</h1>
                                    <div className="textfield">
                            <form  action="">



                                    <div className="textfield-name">
                                        <label for="Nome">Nome</label>
                                        <input type={"text"} class="nome" name="nome" placeholder="Nome" ></input>
                                    </div>




                                    <div className="textfield-email">
                                        <label for="email">Email</label>
                                        <input type={"text"} class="email" name="email" placeholder="Email"></input>                                    
                                    </div>



                                    <div className="textfield-telefone">
                                        <label for="telefone">Telefone</label>
                                        <input type={"text"} class="telefone" name="telefone" placeholder="(XX)-9XXXX-XXXX"></input>                                    
                                    </div>



                                    <div className="textfield-descricao">
                                        <label for="desc">Descrição</label>
                                        <input type={"text"} class="descricao" name="descricao" placeholder="Digite sobre o porque de entrar em contato:"></input>                                    
                                    </div>



                                <button type="submit" className="btn-form">Enviar</button>

                                
                                </form>
                                </div>
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