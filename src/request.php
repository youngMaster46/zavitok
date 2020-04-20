<?php
// сюда нужно вписать токен вашего бота
define('TELEGRAM_TOKEN', '1198992183:AAEscgmBlrf-Ndzu4Go3xTBKVZxFxzRW3gc');

// сюда нужно вписать ваш внутренний айдишник
define('TELEGRAM_CHATID', '549290685');


$success = 'Сообщение отправлено';
$text_error = 'Форма не заполнена';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

//данные из форм
$name = $_POST['name'];
$tel = $_POST['tel'];
$text = $_POST['text'];

// сообщение
$tmtext = array(
"Имя" => $name,
"Телефон" => $phone,
"Текст" => $text
);
//собираем все в кучу
$txt='';
foreach($tmtext as $key => $value) { 
     $txt .= "<b>".$key."</b>: ".$value."%0A"; 
  }


message_to_telegram($txt);
function message_to_telegram($txt)
{
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                'text' => $txt,
            ),
            CURLOPT_PROXY => 'IP',
            CURLOPT_PROXYUSERPWD => 'admin:login',
            CURLOPT_PROXYTYPE => CURLPROXY_HTTP,
            CURLOPT_PROXYAUTH => CURLAUTH_BASIC,
        )
    );
    curl_exec($ch);
    echo 'Успех';
} 



?>