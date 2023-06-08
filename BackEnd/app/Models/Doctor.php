<?php

namespace App\Models;

use App\Notifications\VerifyEmailNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Doctor extends Authenticatable implements MustVerifyEmail
{
  use HasApiTokens, HasFactory, Notifiable;

  protected $fillable = [
    'firstname',
    'lastname',
    'cin',
    'phoneNumber',
    'email',
    'password',
    'avatar_doctor',
    'Matricule',
    'specialite',
    'nom_cabinet',
    'address_cabinet',
    'day_debut_work',
    'day_fin_work',
    'time_debut_work',
    'time_fin_work',
    'available',
    'premium',
    'about',
    'verified',
    'email_verified_at'
  ];


  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];


  public function  sendEmailVerificationNotification()
  {
    $this->notify(new VerifyEmailNotification);
  }

  public function appointments()
  {
    return $this->hasMany(Appointment::class);
  }
}
