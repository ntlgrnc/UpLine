<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\resena;

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
}
