<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
  use HasFactory;


  protected $fillable = [
    'user_id',
    'doctor_id',
    'date_appointment',
    'time_appointment',
    'cancel_appointment',
    'type_appointment'
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function doctor()
  {
    return $this->belongsTo(Doctor::class);
  }
}
