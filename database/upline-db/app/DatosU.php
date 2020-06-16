<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DatosU extends Model
{
    protected $table = 'datosu';
    protected $primaryKey = 'idDatosU';
    protected $fillable = ['FK_idUsuario','nombres','apellidos','usuario','fechaNacimiento','sexo','celular','ubicacion','foto','estado'];
    public $timestamps = false;
}
