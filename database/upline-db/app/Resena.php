<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resena extends Model
{
    public $timestamps = false;
    protected $table = 'resenas';
    protected $primaryKey = 'idResenas';
    protected $fillable = ['autor','msjResena','estado','fecha','resenado'];
    const UPDATED_AT = null;
    const CREATED_AT = 'fecha';
}
