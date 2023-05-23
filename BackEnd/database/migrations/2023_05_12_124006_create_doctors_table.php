<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('doctors', function (Blueprint $table) {
      $table->id();
      $table->string('firstname');
      $table->string('lastname');
      $table->string('cin')->unique()->nullable();
      $table->string('phoneNumber');
      $table->string('email')->unique();
      $table->string('password');
      $table->string('avatar_doctor')->nullable();
      $table->string('Matricule')->unique();
      $table->string('about')->nullable();
      $table->string('specialite')->nullable();
      $table->boolean('verified')->default(false);
      $table->string('nom_cabinet')->nullable();
      $table->string('premium')->default(true);
      $table->string('address_cabinet')->nullable();
      $table->string('day_debut_work')->nullable();
      $table->string('day_fin_work')->nullable();
      $table->string('time_debut_work')->nullable();
      $table->string('time_fin_work')->nullable();
      $table->string('appointment_time')->nullable();
      $table->string('available')->default(true);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('doctors');
  }
};
