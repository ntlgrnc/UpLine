<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publicacion extends Model
{
    protected $table = 'publicaciones';
    protected $primaryKey = 'idPublicacion';
    protected $fillable = ['FK_idTipoPublicacion','FK_idUsuario','estadoPublicacion','fechaPublicacion'];
    const UPDATED_AT = null;
    const CREATED_AT = 'fechaPublicacion';
}
