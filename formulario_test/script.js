function verifica() {
    if (document.getElementById("nome").value == "") {
        alert("Por favor, preencha o seu nome.");
        return;
    } else if (document.getElementById("telefone").value == "") {
        alert("Por favor, preencha o seu telefone.");
        return;
    } else if (document.getElementById("cep").value == "") {
        alert("Por favor, escreva a seu cep");
        return;
    } else {
        alert("Obrigado pelo seu contato. Em breve, retornaremos!");
    }
}
    async function cepbuscar() {
        let cep = document.querySelector("#cep").value;
        let api = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
        let pegar = await api.json();
        montarform(pegar);
      }
      //Montagem do HTML/CSS do Viacep
      
      function montarform(lista) {
        let inputlog = document.querySelector("#logradouro");
        let inputbairro = document.querySelector("#bairro");
        let inputcidade = document.querySelector("#localidade");
        let inputUF = document.querySelector("#uf");
        let log = lista.logradouro;
        let bair = lista.bairro;
        let cidad = lista.localidade;
        let UF = lista.uf;
        document.querySelector("#bairro").setAttribute("value", bair);
        document.querySelector("#logradouro").setAttribute("value", log);
        document.querySelector("#localidade").setAttribute("value", cidad);
        document.querySelector("#uf").setAttribute("value", UF);
      }
      let email1 = [];
      let senha1 = [];
      let nick1 = [];