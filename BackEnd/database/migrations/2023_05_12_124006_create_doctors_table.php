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
      $table->string('cin')->unique();
      $table->string('phoneNumber');
      $table->string('email')->unique();
      $table->string('password');
      $table->string('avatar')->nullable();
      $table->string('Matricule')->unique();
      $table->string('about')->unique();
      $table->string('specialite')->nullable();
      $table->string('nom_cabinet')->nullable();
      $table->string('address_cabinet')->nullable();
      $table->date('date_debut_work')->nullable();
      $table->date('date_fin_work')->nullable();
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
