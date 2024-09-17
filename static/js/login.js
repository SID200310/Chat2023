//pega o campo nome
var nome = document.getElementById("nome");
var cor = document.getElementById("CorDoUsuario");
var img = document.getElementById("imgDoUsuario");

//função para logar
function Login() {
    //verifica se o campo nome está vazio
    if (nome.value == "") {
        alert("Preencha o campo nome");
    } else {
        //salva o nome no sessionStorage
        sessionStorage.setItem("nome", nome.value);
        sessionStorage.setItem("cor", cor.value);
        sessionStorage.setItem("img", img.value);
        //redireciona para a página do chat
        window.location = "chat.php";
    }
}

//verifica se o usuário apertou enter
document.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        Login();
    }
})