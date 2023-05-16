<?php

use App\Http\Controllers\Auth\Doctor\DoctorAuthController;
use App\Http\Controllers\Auth\User\UserAuthController;
use App\Http\Controllers\UsersManagementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(
  function () {

    // DOCTOR ROUTE

    Route::get('/doctor', [DoctorAuthController::class, 'doctor']);

    Route::post('/doctor/logout', [DoctorAuthController::class, 'login']);

    //USER ROUTE


    Route::get('/user', [UserAuthController::class, 'user']);

    Route::post('/user/logout', [UserAuthController::class, 'login']);
  }
);


//USER ROUTE


Route::post('/user/login', [UserAuthController::class, 'login']);

Route::post('/user/register', [UserAuthController::class, 'register']);

Route::put('/user/update' ,[UsersManagementController::class , 'update']) ;


// DOCTOR ROUTE


Route::post('/doctor/login', [DoctorAuthController::class, 'login']);

Route::post('/doctor/register', [DoctorAuthController::class, 'register']);
