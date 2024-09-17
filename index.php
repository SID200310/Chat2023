<!--Pagina de login-->
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chat2023-Projeto de PRW">
    <link rel="stylesheet" href="./static/css/loginstyle.css">
    <title>Chat2023-Login</title>
</head>

<body>
    <div class="titulo">
        <h1>Chat2023</h1>
    </div>
    <div class="container">
        <div class="janeladelogin">
            <h1>Login</h1>
            <br>
            <!--esse input vai coletar a cor do usuario-->
            <label for="CorDoUsuario">Cor do usuario</label>
            <input type="color" name="CorDoUsuario" id="CorDoUsuario">
            <br>
            <br>
            <!--seleção de avatar-->
            <label for="avatar">Selecione um avatar</label>
            <select name="imgDoUsuario" id="imgDoUsuario">
                <option value="anonimo">Anonimo</option>                
                <option value="neymar">Neymar</option>
                <option value="canetaazul">Manoel</option>
                <option value="coringa">Coringa</option>
            </select>
            <br>
            <br>
            <!--esses sao os inputs que vai coletar os dados-->
            <input type="text" name="nome" id="nome" placeholder="Nome">

            <!--esse botao chama a funcao login-->
            <button onclick="Login()">Login</button>
        </div>
    </div>
    <!--esse script salva o nome no cache do navegador do usuario na sessao-->
    <script src="./static/js/login.js"></script>
</body>

</html>