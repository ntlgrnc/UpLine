<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publicacion;
use App\Http\Controllers\UsuarioController;

class PublicacionController extends Controller
{
    public function guardarPubli(Request $request) {

        //$idUs = \Session::get('idUsuario');

        // $u = new UsuarioController;
        // $idusuario = $u->index();

        $publicacion = new Publicacion();
        $fecha = new \DateTime();
        $publicacion->idPublicacion = 0;
        $publicacion->FK_idUsuario = 2;
        $publicacion->fechaPublicacion = $fecha->format('Y-m-d'); 
        $publicacion->estadoPublicacion = "A";
        $publicacion->contenido = $request['contenido'];

        $publicacion->save();
    }
}
