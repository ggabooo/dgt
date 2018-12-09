<?php
$_SERVER['HTTP_USER_AGENT'];
date_default_timezone_set("America/Bogota");
setlocale(LC_ALL,"es_ES");

include("funcion/conectarse.php");
require_once("sesion.class.php");

$sesion = new sesion();
$usuario = $sesion->get("usuario");

if( $usuario == false )
{
    header("Location: cerrarsesion.php");
}
else
{
?>

    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>DGT Dashboard</title>
        <meta name="title" content="Digital Global Textiles Dashboard">
        <meta name="description" content="Digital Global Textiles Dashboard">
        <meta name="author" content="Juan Gabriel Mogollón Martínez">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/estilos.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bowser/1.9.4/bowser.min.js"></script>
    </head>
<body>
<?php require("funcion/conectarse.php");
$consulta="SELECT * FROM user where usuario_use = '$usuario'";
$resultado=$conexion->query($consulta);
while($row1=$resultado->fetch_assoc()) {
    ?>

    <form action="validar_logs.php"  method="post" id="formulario_log" enctype="multipart/form-data">
       <input type="hidden" value="<?php echo $row1['codigo']; ?>" name="codigo" >
       <input type="hidden" value="<?php echo $row1['nombre_use']; ?>" name="nombre" >
       <input type="hidden" value="<?php echo $row1['apellido_use']; ?>" name="apellido" >
       <input type="hidden" value="<?php echo $row1['cargo_use']; ?>" name="cargo" >
       <input type="hidden" value="<?php echo  date('r') ?>" name="timestamp" >
       <input type="hidden" value="<?php echo  $_SERVER['HTTP_USER_AGENT'] ?>" name="browser" id="browser">
       <input type="submit" name="submit_log" id="submit_log" style="z-index: 100; margin-left:10em;background: transparent;border:none;" value=" "></input>

    </form>
   <img src="data:image/png;base64,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" alt="" style="display:block;width:15em;margin:2em auto">
   <img src="img/Rolling-0.8s-163px.gif" style="display:block;;margin:auto">
   </body>
   <script>
function click(){
    document.getElementById("submit_log").click()
}
click()
   </script>
</html>
<?php }} ?>