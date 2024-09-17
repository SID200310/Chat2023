//pega o nome do usuário salvo no sessionStorage
var nome = sessionStorage.getItem("nome");
//pega a cor do usuário salvo no sessionStorage
var cor = sessionStorage.getItem("cor");
//pega a img do usuário salvo no sessionStorage
var img = sessionStorage.getItem("img");
//variavel para colocar o nome do usuário no chat
var usuario = document.getElementById("usuario");
//pega o campo mensagem
var mensagem = document.getElementById("mensagem");
//array para salvar as iformações do usuário e da mensagem
var dados = { nome: nome, mensagem: "", cor: cor, img: img};
console.log(dados);


//coloca o nome do usuário no chat
usuario.innerHTML = nome;

//função para enviar a mensagem
async function Enviar() {
    //remove os espaços do começo e do final da mensagem
    mensagem.value = mensagem.value.trim();

    //verifica se o usuário está logado
    if (nome == null) {
        alert("Você não está logado");
        window.location = "index.php";
    }
    //verifica se o campo mensagem está vazio
    if (mensagem.value == "") {
        alert("Preencha o campo mensagem");
    } else {
        //salva a mensagem no array dados
        dados.mensagem = mensagem.value;

        //envia a mensagem para o arquivo recebe.php
        res = await fetch("./static/actions/recebe.php", {
            //define o método como POST
            method: "POST",
            //converte o array dados em JSON
            body: JSON.stringify(dados),
            //define o cabeçalho da requisição
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        console.log(mensagem.value);
        console.log(dados);
        if (res.ok) {
            console.log(res);
            mensagem.value = "";
        } else {
            alert("Erro ao enviar a mensagem");
            href = "index.php";
        }


    }
}

//verifica se o usuário apertou enter
document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        //chama a função Enviar
        Enviar();
    }
})

//função para buscar as mensagens
// Variável para rastrear se o usuário rolou o chat para cima
var usuarioRolouParaCima = false;

// Função para verificar a posição do scroll
function verificarPosicaoScroll() {
    // Obtenha o elemento do chat
    var chat = document.getElementById('chat');

    // Verifique se o usuário rolou para cima (subtraindo 10 pixels como margem)
    usuarioRolouParaCima = chat.scrollTop < chat.scrollHeight - chat.clientHeight - 10;
}

// Adicione um evento de rolagem ao chat para verificar a posição
var chat = document.getElementById('chat');
chat.addEventListener('scroll', verificarPosicaoScroll);

// Função para buscar mensagens
async function getMessages() {
    console.log("Buscando mensagens...");
    // Busca as mensagens no arquivo mensagens.php
    results = await fetch("./static/actions/mensagens.php")
        .then((data) => {
            return data.json();
        })

    // Variável para colocar as mensagens
    var mensagens = document.getElementById("mensagens");
    // Limpa as mensagens
    mensagens.innerHTML = "";
    // Coloca as mensagens no chat
    results.forEach((result) => {
        // Verifica se a mensagem é do usuário
        if (result.nome == nome) {
            mensagens.innerHTML += `<div class="mensagemUsuario"><h1  style="color: ${result.cor};"><img src="./static/img/${result.img}.jpg" alt="neymar" style="height: 80px; width: 80px; border-radius: 100%;">${result.nome}:</h1> <p>${result.mensagem}</p> <p>${result.data}</p></div>`;
            // Verifica se a mensagem é do sistema
        } else {
            mensagens.innerHTML += `<div class="mensagem"><h1  style="color: ${result.cor};"><img src="./static/img/${result.img}.jpg" alt="neymar" style="height: 80px; width: 80px; border-radius: 100%;">${result.nome}:</h1> <p>${result.mensagem}</p> <p>${result.data}</p></div>`;
        }
    });

    // Se o usuário não rolou para cima, mantenha-o no final
    if (!usuarioRolouParaCima) {
        chat.scrollTop = chat.scrollHeight;
    }
}

// Execute a função getMessages a cada segundo
buscaMessages = setInterval(getMessages, 1000);

// Chame a função getMessages inicialmente
getMessages();