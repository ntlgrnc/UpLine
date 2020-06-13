<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuario';
    protected $primaryKey = 'idUsuario';
    protected $fillable = ['correo','clave','estado'];
    public $timestamps = false;
}
