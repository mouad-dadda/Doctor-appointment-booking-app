<?php

use App\Http\Controllers\auth\AuthController;
use App\Models\Doctor;
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



Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', function (Request $request) {
    return $request->user();
  });
  Route::post('/logout', [AuthController::class, 'Logout']);
});

Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/login', [AuthController::class, 'login']);

Route::get('/doctors/search/{key}', function ($key) {
  $doctors = Doctor::where('specialite', 'LIKE', "%$key%")
    ->orWhere('address_cabinet', 'LIKE', "%$key%")
    ->orWhere('firstname', 'LIKE', "%$key%")
    ->orWhere('nom_cabinet', 'LIKE', "%$key%")
    ->get();
  return response()->json($doctors);
});
