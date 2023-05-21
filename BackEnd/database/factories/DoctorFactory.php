<?php

namespace Database\Factories;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DoctorFactory extends Factory
{
  protected $model = Doctor::class;

  public function definition()
  {
    return [
      'firstname' => $this->faker->firstName,
      'lastname' => $this->faker->lastName,
      'cin' => $this->faker->numerify('############'),
      'phoneNumber' => $this->faker->phoneNumber,
      'email' => $this->faker->unique()->safeEmail,
      'password' => bcrypt('password'),
      'avatar_doctor' => null,
      'Matricule' => $this->faker->unique()->randomNumber(5),
      'specialite' => $this->faker->randomElement(['Cardiology', 'Dermatology', 'Neurology']),
      'nom_cabinet' => $this->faker->company,
      'address_cabinet' => $this->faker->address,
      'premium' => $this->faker->boolean(30),
      'day_debut_work' => $this->faker->randomElement(['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']),
      'day_fin_work' => $this->faker->randomElement(['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']),
      'time_debut_work' => $this->faker->time('H:i'),
      'time_fin_work' => $this->faker->time('H:i'),
      'available' => $this->faker->boolean(),
  ];

  }
}
