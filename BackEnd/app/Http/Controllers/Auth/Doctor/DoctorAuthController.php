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
        'phoneNumber' => $data['phoneNumber'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
        'Matricule' => $data['Matricule']
      ]
    );

    // $doctor->sendEmailVerificationNotification();

    $token = $doctor->createToken('mainDoctor')->plainTextToken;
    $doctorData=Doctor::find($doctor->id) ;

    return  response(
      [
        'doctor' => $doctorData,
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

    return response(['message' => 'Invalid login credentials'], 422);
  }



  public function logout()
  {
    $user = Auth::user();

    $user->currentAccessToken()->delete();

    return response([
      'success' => true
    ]);
  }


  public function doctor(Request $request)
  {
    return response($request->user(), 200);
  }

  public  function  verify($id, Request $request)
  {
    if (!$request->hasValidSignature()) {
      return response()->json(["msg" => "Invalid/Expired url provided."], 401);
    }
    $doctor = Doctor::find($id);
    if (!$doctor->hasVerifiedEmail()) {
      $doctor->markEmailAsVerified();
    }
    $URL = env("REDIRECT_URL_VIRIFIED_EMAIL");
    return redirect($URL);
  }

  public function resend($id)
  {
    $doctor = Doctor::find($id);
    if ($doctor->hasVerifiedEmail()) {
      return response()->json(["msg" => "Email already verified."], 400);
    }

    $doctor->sendEmailVerificationNotification();

    return response()->json(["msg" => "Email verification link sent on your email id"]);
  }
}
