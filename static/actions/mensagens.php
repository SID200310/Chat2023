<?php
//o include_once vai incluir o arquivo conexao.php
include_once('../includes/conexao.php');

//o sql vai selecionar os dados da tabela chat e ordenar do mais recente para o mais antigo
$sql = "SELECT * FROM chat ORDER BY id DESC LIMIT 10";

//o resultado vai executar o sql
$resultado = $conexao->query($sql);

//o values vai ser um array
$values = array();

//variavel para filtrar injeção de codigo
$pattern = '/<a\s+(?:[^>]*?\s+)?href=([\'"])(.*?)\1[^>]*>.*?<\/a>/i';

//o foreach vai percorrer o resultado
foreach ($resultado as $linha) {
    //o array vai receber os valores do banco de dados e transformar em json
    $values[] = '{"nome": "' . preg_replace($pattern, '', str_replace('"', '&quot;', $linha['nome'])) . '", "mensagem": "' . preg_replace($pattern, '', str_replace('"', '&quot;', $linha['mensagem'])) . '", "data": "' . $linha['data'] . '", "cor": "' . $linha['cor'] . '", "img": "' . $linha['img'] . '"}';
}

//o array reverse vai inverter a ordem do array
$values = array_reverse($values);

//o implode vai juntar os valores do array em uma string
echo "[" . implode(",", $values) . "]";