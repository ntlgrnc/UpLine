<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Rutas para la tabla usuario

Route::get('usuarios', 'UsuarioController@index');
Route::post('registroini', 'UsuarioController@store');
Route::post('login', 'UsuarioController@login');

Route::post('validarcorreo', 'UsuarioController@validarCorreo');

//Rutas para la tabla datos de usuario
Route::post('registro','DatosUController@guardarDatosU');
Route::get('perfil/{idUsu}','DatosUController@consultarUsuario');

// Rutas para la tabla publicación

Route::post('addpublicacion', 'PublicacionController@guardarPubli');


// Rutas para la tabla reseña

Route::post('resena', 'ResenaController@guardarRese');

// Ruta para la tabla publicacion

Route::post('publicaciones', 'PublicacionController@guardarPubli');