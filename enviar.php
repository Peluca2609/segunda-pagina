<?php

// Llamando a los campos
$nombre = $_POST['Nombre'];
$dni = $_POST['dni'];
$edad = $_POST['edad'];
$peso = $_POST['peso'];
$talla = $_POST['talla'];
$preguntauno = $_POST['preguntauno'];
$preguntados = $_POST['preguntados'];
$preguntatres = $_POST['preguntatres'];
$preguntacuatro = $_POST['preguntacuatro'];
$checkbox1 = $_POST['checkbox1'];
$checkbox2 = $_POST['checkbox2'];
$checkbox3 = $_POST['checkbox3'];
$checkbox4 = $_POST['checkbox4'];
$checkbox5 = $_POST['checkbox5'];
$checkbox6 = $_POST['checkbox6'];
$checkbox7 = $_POST['checkbox7'];
// Datos para el correo
$destinatario = "javiergalvezsordones@gmail.com";
$asunto = "DC:Tamizaje por COVID-19";

$carta = "De: $Nombre \n";
$carta .= "DNI: $dni \n";
$carta .= "Edad: $edad \n";
$carta .= "Su peso es: $peso \n";
$carta .= "Su talla es: $talla \n";
$carta .= "la pregunta a) $preguntauno \n";
$carta .= "la pregunta b) $preguntados \n";
$carta .= "la pregunta c) $preguntatres \n";
$carta .= "la pregunta d) $preguntacuatro \n";
$carta .= "Padezco de: $checkbox1 \n";
$carta .= "Padezco de: $checkbox2 \n";
$carta .= "Padezco de: $checkbox3 \n";
$carta .= "Padezco de: $checkbox4 \n";
$carta .= "Padezco de: $checkbox5 \n";
$carta .= "Padezco de: $checkbox6 \n";
$carta .= "Padezco de: $checkbox7";
// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje.html');

?>
