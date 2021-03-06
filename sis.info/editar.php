<?php
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



$id=$_GET['id'];
include("funcion/conectarse.php");


$query="SELECT * FROM user where codigo='$id'";
$resultado=$conexion->query($query);
$row=$resultado->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="es">
<head>
   <meta charset="UTF-8">
   <title>Usuarios</title>
   <meta name="title" content="Gabo's Web Page">
   <meta name="description" content="Gabo's Web Page the best as is possible">
   <meta name="author" content="Juan Gabriel Mogollón Martínez">
   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
<div class="all-container-users">
   <section>
   <fieldset class="user-fieldset">
      <legend class="legend-user-form"><h1>Nuevo usuario</h1></legend>
      <form action="editando_usuario.php" class="user-form"  method="post" enctype="multipart/form-data">
      <input value="<?php echo $row['codigo'];?>" type="hidden" name="codigo" id="create-user-input-name" class="create-user-input">

         <label for="create-user-input-name" class="create-user-label">
            <h2 class="create-user-label-text">Nombres</h2>
            <input value="<?php echo $row['nombre_use'];?>" type="text" name="nombre" id="create-user-input-name" class="create-user-input">
         </label>

         <label for="create-user-input-lastName" class="create-user-label">
            <h2 class="create-user-label-text">Apellidos</h2>
            <input value="<?php echo $row['apellido_use'];?>" type="text"name="apellido" id="create-user-input-lastName" class="create-user-input">
         </label>

         <label for="create-user-input-gen" class="create-user-label">
            <h2 class="create-user-label-text">Género</h2>
            <select  name="genero" class="create-user-select" id="create-user-input-gen">
                <option value="<?php echo $row['genero_use'];?>"><?php echo $row['genero_use'];?></option>  
            <option value="Masculino">Masculino</option>
               <option value="Femenino">Femenino</option>
            </select>
         </label>

         <label for="create-user-input-birth" class="create-user-label">
            <h2 class="create-user-label-text">Fecha de nacimiento</h2>
            <input value="<?php echo $row['fechanaci'];?>" type="date" name="nacimiento" id="create-user-input-birth" class="create-user-input birth">
         </label>

         <label for="create-user-input-rol" class="create-user-label">
            <h2 class="create-user-label-text">Cargo - Rol</h2>
            <select name="cargo" class="create-user-select" id="create-user-input-rol">
               <option value="<?php echo $row['cargo_use'];?>"><?php echo $row['cargo_use'];?></option>
            <option value="Administrador">Administrador</option>
               <option value="Asesor">Asesor</option>
            </select>
         </label>

         <label for="create-user-input-user" class="create-user-label">
            <h2 class="create-user-label-text">Usuario</h2>
            <input  value="<?php echo $row['usuario_use'];?>" name="usuario" type="text" id="create-user-input-user" class="create-user-input">
         </label>

         <label for="create-user-input-pass" class="create-user-label">
            <h2 class="create-user-label-text">Contraseña</h2>
            <input value="<?php echo $row['contra_use'];?>" required  name="contra" type="password" id="create-user-input-pass" class="create-user-input">
         </label>

         <input type="submit" class="user-form-button create-user-input" value="Editar">
         <div class="container-right-close icon-close" id="close-create-user"></div>
      </form>
   </fieldset>
</section>
  
</div>
</body>
</html>
<?php }  ?>