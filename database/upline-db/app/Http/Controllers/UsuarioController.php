<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Usuario;


class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->idUsuario = 0;
        $usuario->correo = $request['correo'];
        $usuario->clave = $request['clave'];
        $usuario->estado = "A";

        $usuario->save();

        $idUs = DB::table('usuario')->where('correo', $usuario->correo)->value('idUsuario');

        session(['idUsuarii' == $idUs]);
    
        //\Session::push('idUsuario', $idUs);
        return $idUs;
    }

    public function login(Request $request){

        $usuario = new Usuario();
        $usuario->correo = $request['correo'];
        $usuario->clave = $request['clave'];

        try {

            $consulta = DB::table('usuario')->where('correo', $usuario->correo)->where('clave', $usuario->clave)->value('idUsuario');
            if($consulta == ""){
                return response()->json('error',200);
            } else {
                return response()->json($consulta,200);
            }
        
        }catch(Exception $e) {
            $error = ['error' =>'No dio'];
            return response()->json($error,400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
