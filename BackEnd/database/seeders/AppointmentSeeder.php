<?php

namespace Database\Seeders;

use App\Models\Appointment;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
  public function run()
  {
    Appointment::factory()->count(20)->create();
  }
}
