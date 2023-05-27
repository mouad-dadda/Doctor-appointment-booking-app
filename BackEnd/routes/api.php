<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentManagementController;
use App\Http\Controllers\Auth\Admin\AdminAuthController;
use App\Http\Controllers\Auth\Doctor\DoctorAuthController;
use App\Http\Controllers\Auth\User\UserAuthController;
use App\Http\Controllers\DoctorManagementController;
use App\Http\Controllers\UsersManagementController;
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

    Route::post('/doctor/logout', [DoctorAuthController::class, 'logout']);

    Route::get('/doctor/{id}', [DoctorManagementController::class, 'DoctoroInfo']);

    Route::post('/doctor/update/info', [DoctorManagementController::class, 'updateInfo']);


    //USER ROUTE


    Route::get('/user', [UserAuthController::class, 'user']);

    Route::post('/user/logout', [UserAuthController::class, 'logout']);

    Route::put('/user/update', [UsersManagementController::class, 'update']);

    //ROUTE APPOINTMENT

    // ROUTE ADMIN

    Route::get('/admin', [AdminAuthController::class, 'admin']);
  }
);


//USER ROUTE


Route::post('/user/login', [UserAuthController::class, 'login']);

Route::post('/user/register', [UserAuthController::class, 'register']);

Route::delete('/user/delete', [UsersManagementController::class, 'delete']);


// DOCTOR ROUTE


Route::post('/doctor/login', [DoctorAuthController::class, 'login']);

Route::post('/doctor/register', [DoctorAuthController::class, 'register']);

Route::post('/doctor/update/info/time', [DoctorManagementController::class, 'UpdateInfoTimeWork']);

Route::post('/doctor/home', [DoctorManagementController::class, 'getRandomPremiumDoctors']);

Route::post('/search/doctors', [DoctorManagementController::class, 'SearchDoctors']);


//ROUTE APPOINTMENT


Route::post('/take/appointment', [AppointmentManagementController::class, 'TakeAppointment']);

Route::get('/doctor/appointmentoldday/{doctorId}', [AppointmentManagementController::class, 'GetAppointmentOldDate']);

Route::get('/doctor/appointmenttoday/{doctorId}', [AppointmentManagementController::class, 'GetAppointmentToday']);

Route::get('/doctor/newappointment/{doctorId}', [AppointmentManagementController::class, 'GetNewAppointment']);


// ROUTE ADMIN

Route::post("/admin/login", [AdminAuthController::class, 'login']);

Route::get('/admin/doctor', [AdminController::class, 'GetAllDocter']);

Route::get('/admin/patient', [AdminController::class, 'GetAllPatient']);

Route::post('/admin/verified', [AdminController::class, 'VerifiedDoctor']);

Route::post('/doctor/noverified', [AdminController::class, 'DoctorNoVerified']);
