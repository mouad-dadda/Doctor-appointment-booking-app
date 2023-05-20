<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
  protected $model = User::class;

  public function definition()
  {
    return [
      'firstname' => $this->faker->firstName,
      'lastname' => $this->faker->lastName,
      'cin' => $this->faker->numerify('############'),
      'phoneNumber' => $this->faker->phoneNumber,
      'email' => $this->faker->unique()->safeEmail,
      'password' => bcrypt('password'),
    ];
  }
}
