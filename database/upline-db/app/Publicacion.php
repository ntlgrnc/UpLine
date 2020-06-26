<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publicacion extends Model
{
    public $timestamps = false;
    protected $table = 'publicaciones';
    protected $primaryKey = 'idPublicacion';
    protected $fillable = ['FK_idUsuario','estadoPublicacion','fechaPublicacion','contenido'];
    const UPDATED_AT = null;
    const CREATED_AT = 'fechaPublicacion';
}
