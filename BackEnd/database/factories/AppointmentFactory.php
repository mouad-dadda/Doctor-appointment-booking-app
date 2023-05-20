<?php

namespace Database\Factories;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class AppointmentFactory extends Factory
{
  protected $model = Appointment::class;

  public function definition()
  {
    return [
      'user_id' => rand(1, 20), // Adjust the range based on the number of user records you have
      'doctor_id' => rand(1, 20), // Adjust the range based on the number of doctor records you have
      'date_appointment' => Carbon::now()->addDays(rand(1, 30))->toDateString(),
      'time_appointment' => $this->faker->time('H:i'),
      'cancel_appointment' => false,
    ];
  }
}
