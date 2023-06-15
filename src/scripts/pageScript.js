export default function ScriptFormSend (){

    window.onload = function() {
        const formulario = document.querySelector("form");
        const Inome = document.querySelector(".nome");
        const Iemail = document.querySelector(".email");
        const Itelefone = document.querySelector(".telefone");
        const Idescricao = document.querySelector(".descricao");
      
        function cadastrar() {
          fetch("http://localhost:8080/portifolio/formulario", {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                telefone: Itelefone.value,
                descricao: Idescricao.value
              })
      
            })
            .then(function(res) {
              console.log(res)
            })
            .catch(function(res) {
              console.log(res)
            })
      
        };
      
        function limpar() {
          Inome.value = "";
          Iemail.value = "";
          Itelefone.value = "";
          Idescricao.value = "";
        };
      
        formulario.addEventListener('submit', function(event) {
          event.preventDefault();
          cadastrar();
          limpar();
        });
      }
      
}
