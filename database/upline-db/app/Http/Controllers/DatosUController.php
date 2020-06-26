<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\DatosU;
use Illuminate\Support\Facades\Session;

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
        $datosU->foto = "foto.png";
        $datosU->estado = 'A';

        $datosU->save();
        $idUs = $datosU->FK_idUsuario;
        return $idUs;

        //Cache::put('idUsuario', $idUs, 30);
        //Session::put('idUsuario', $idUs);
    }

    
    public function consultarUsuario($idUs) {

        //$idUsu = Session::get('idUsuario');
        //$idUsu = Cache::get('idUsuario');
        
        $perfil = DB::table('datosu')->where('FK_idUsuario', $idUs)->get();

        return response()->json($perfil, 200);
    }
}
