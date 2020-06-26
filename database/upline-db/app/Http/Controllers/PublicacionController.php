<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publicacion;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\DB;

class PublicacionController extends Controller
{
    public function guardarPubli(Request $request) {

        //$idUs = \Session::get('idUsuario');

        // $u = new UsuarioController;
        // $idusuario = $u->index();

        $publicacion = new Publicacion();
        $fecha = new \DateTime();
        $publicacion->idPublicacion = 0;
        $publicacion->FK_idUsuario = $request['FK_idUsuario'];
        $publicacion->fechaPublicacion = $fecha->format('Y-m-d'); 
        $publicacion->estadoPublicacion = "A";
        $publicacion->contenido = $request['contenido'];

        $publicacion->save();
    }

    public function mostrarTodas()
    {
        $publicacion = DB::table('usuario')
            ->join('publicaciones', 'usuario.idUsuario', '=', 'publicaciones.FK_idUsuario')
            ->join('datosu', 'usuario.idUsuario', '=', 'datosu.FK_idUsuario')
            ->select('usuario.*', 'publicaciones.*', 'datosu.*')
            ->where('estadoPublicacion', 'A')
            ->orderBy('idPublicacion', 'desc')            
            ->get();
            // $publicacion = DB::table('publicaciones')->where('estadoPublicacion', 'A')->orderBy('fechaPublicacion', 'desc')->get();
        return response()->json($publicacion, 200);
    }
}
