<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "bonitapeluqueria";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM empleados WHERE id=".$_GET["borrar"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombres;
    $correo=$data->correo;
    $fecha=$data->fecha;
    $hora=$data->hora;
    $procedimiento=$data->procedimiento;
    $celular=$data->celular;
    if(($correo!="")&&($nombre!="") &&($celular!="")&&($procedimiento!="")&&($hora!="")&&($fecha!="")){ 
        $sqlVerificarCita = mysqli_query($conexionBD, "SELECT * FROM citas WHERE fecha='$fecha' AND hora='$hora' "); 
        if(mysqli_num_rows($sqlVerificarCita) > 0) {
            echo json_encode(["success" => 0, "message" => "Ya existe una cita para esa hora"]);
        } else {
            $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO citas(nombre,correo,fecha,hora,procedimiento,celular)
            VALUES('$nombre','$correo','$fecha','$hora','$procedimiento','$celular') ");
            echo json_encode(["success"=>1, "message" =>" Su cita ha sido registrada exitosamente, 
            Nuestro personal se comunicará con usted un día antes para conformar la cita o cancelarla, 
            si desea cancelar la cita puede comunicarse a nuestro WhatsApp"]);
        } 
    }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nombre=$data->nombre;
    $correo=$data->correo;
    
    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE empleados SET nombre='$nombre',correo='$correo' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla empleados
$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }


?>
