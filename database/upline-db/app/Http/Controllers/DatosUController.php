<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\DatosU;

class DatosUController extends Controller
{
    public function guardarDatosU(Request $request){
        $datosU = new DatosU();

        $datosU->idDatosU = 0;
        $datosU->FK_idUsuario = $request['FK_idUsuario'];
        $datosU->nombres = $request['nombres'];
        $datosU->apellidos = $request['apellidos'];
        $datosU->usuario = $request['usuario'];
        $datosU->fechaNacimiento = $request['fechaNacimiento'];
        $datosU->sexo = $request['sexo'];
        $datosU->celular = 0;
        $datosU->ubicacion = "";
        $datosU->foto = "";
        $datosU->estado = 'A';

        $datosU->save();
    }

    
    public function verUsuario(Request $request) {
        
        $usuario = new DatosU();
        $usuario->FK_idUsuario = $request['FK_idUsuario'];
        
        $perfil = DB::table('datosu')->where('FK_idUsuario', $usuario->FK_idUsuario)->get();

        return $perfil;
    }
}
