<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publicacion;
use App\Http\Controllers\UsuarioController;

class PublicacionController extends Controller
{
    public function guardarPubli(Request $request) {

        //$idUs = \Session::get('idUsuario');

        $u = new UsuarioController;
        $idusuario = $u->index();

        $publicacion = new Publicacion();
        $publicacion->idPublicacion = 0;
        $publicacion->FK_idTipoPublicacion = $request['idTipoPublicacion'];
        $publicacion->FK_idUsuario = $idusuario;
        $publicacion->fechaPublicacion = ''; 
        $publicacion->estadoPublicacion = "A";

        $publicacion->save();

        print_r($idusuario);
    }
}
