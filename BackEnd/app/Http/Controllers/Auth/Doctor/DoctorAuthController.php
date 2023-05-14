<?php

namespace App\Http\Controllers\Auth\Doctor;

use App\Http\Controllers\Controller;
use App\Http\Requests\Doctor\LoginRequest;
use App\Http\Requests\Doctor\RegisterRequest;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DoctorAuthController extends Controller
{

  public function register(RegisterRequest $request)
  {
    $data = $request->validated();

    $doctor = Doctor::create(
      [
        'firstname' => $data['firstname'],
        'lastname' => $data['lastname'],
        'cin' => $data['cin'],
        'phoneNumber' => $data['phoneNumber'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
        'Matricule' => $data['Matricule']
      ]
    );

    $token = $doctor->createToken('mainDoctor')->plainTextToken;

    return  response(
      [
        'doctor' => $doctor,
        'token' => $token
      ],
      200
    );
  }


  public function login(LoginRequest $request)
  {
    $credentials = $request->validated();

    $credentials = $request->only('email', 'password');

    if (Auth::guard('doctor')->attempt($credentials)) {

      $doctor = Auth::guard('doctor')->user();

      $token = $doctor->createToken('mainDoctor')->plainTextToken;

      return response([
        'token' => $token,
        'doctor' => $doctor
      ], 200);
    }

    return response(['message' => 'Invalid login credentials'], 401);
  }



  public function logout()
  {

    $user = Auth::guard('doctor')->user();
    $user->currentAccessToken()->delete();

    return response([
      'success' => true
    ]);
  }

  public function doctor(Request $request)
  {
    return response($request->user(), 200);
  }
}
