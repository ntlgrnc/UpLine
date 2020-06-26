<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\resena;
use Illuminate\Support\Facades\DB;

class ResenaController extends Controller
{
    public function guardarRese(Request $request) {

        //$idUs = \Session::get('idUsuario');
   
        $resena = new Resena();
        $fecha = new \DateTime();
        $resena->idResenas = 0;
        $resena->autor = 1;
        $resena->msjResena = $request['msjResena'];
        $resena->estado = "A";
        $resena->fecha = $fecha->format('Y-m-d'); 
        $resena->resenado = 2;

        $resena->save();
    }

    public function mostrarTodasRese($idUs)
    {
        $resena = DB::table('usuario')
            ->join('resenas', 'usuario.idUsuario', '=', 'resenas.autor')
            ->join('datosu', 'usuario.idUsuario', '=', 'datosu.FK_idUsuario')
            ->select('usuario.*', 'resenas.*', 'datosu.*')
            ->where('resenas.estado', 'A')
            ->where('resenas.resenado', $idUs)
            ->orderBy('resenas.idResenas', 'desc')            
            ->get();
            // $publicacion = DB::table('publicaciones')->where('estadoPublicacion', 'A')->orderBy('fechaPublicacion', 'desc')->get();
        return response()->json($resena, 200);
    }

    public function mostrarTodas($idUs)
    {
        $publicacion = DB::table('usuario')
            ->join('publicaciones', 'usuario.idUsuario', '=', 'publicaciones.FK_idUsuario')
            ->join('datosu', 'usuario.idUsuario', '=', 'datosu.FK_idUsuario')
            ->select('usuario.*', 'publicaciones.*', 'datosu.*')
            ->where('estadoPublicacion', 'A')
            ->where('idUsuario', $idUs)
            ->orderBy('idPublicacion', 'desc')            
            ->get();
            // $publicacion = DB::table('publicaciones')->where('estadoPublicacion', 'A')->orderBy('fechaPublicacion', 'desc')->get();
        return response()->json($publicacion, 200);
    }
}
