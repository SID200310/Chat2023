<?php
//o include_once vai incluir o arquivo conexao.php
include_once('../includes/conexao.php');

//date_default_timezone_set vai definir o fuso horário importante para o banco de dados
date_default_timezone_set('America/Sao_Paulo');

//o if vai verificar se o post existe
if (isset($_POST)) {
    //o data vai receber os dados do post
    $data = file_get_contents("php://input");

    //o msg vai receber os dados do json
    $msg = json_decode($data, true);

    //o print_r vai imprimir o array
    print_r($msg);

    //o nome vai receber o nome do usuario
    $nome = filter_var($msg['nome'], FILTER_SANITIZE_SPECIAL_CHARS);
    if (empty($nome)) {
        header('location: index.php');
        exit;
    }

    //a mensagem vai receber a mensagem do usuario
    $mensagem = filter_var($msg['mensagem'], FILTER_SANITIZE_SPECIAL_CHARS);

    //pega a cor do usuario
    $cor = filter_var($msg['cor'], FILTER_SANITIZE_SPECIAL_CHARS);

    //pega a imagem do usuario
    $img = filter_var($msg['img'], FILTER_SANITIZE_SPECIAL_CHARS);

    //o data vai receber a data atual
    $data = date('Y-m-d H:i:s');

    //o sql vai inserir os dados no banco de dados
    $sql = "INSERT INTO chat (nome, mensagem, cor, img, data) VALUES ('$nome', '$mensagem', '$cor', '$img', '$data')";

    //o conexao vai executar o sql
    $conexao->query($sql);
}
