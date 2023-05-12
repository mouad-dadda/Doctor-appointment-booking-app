<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
  use HasFactory;

  protected $fillable = [
    'firstname',
    'lastname',
    'cin',
    'phoneNumber',
    'email',
    'password',
    'avatar',
    'Matricule',
    'specialite',
    'nom_cabinet',
    'address_cabinet',
    'date_debut_work',
    'date_fin_work'
  ];
}
