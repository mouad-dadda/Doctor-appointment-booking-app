<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAuthController extends Controller
{


  public function register(RegisterRequest $request)
  {
    $data = $request->validated();

    $user = User::create([
      'firstname' => $data['firstname'],
      'lastname' => $data['lastname'],
      'cin' => $data['cin'],
      'email' => $data['email'],
      'password' => bcrypt($data['password'])
    ]);

    $token = $user->createToken('mainUser')->plainTextToken;
    $user->sendEmailVerificationNotification();

    $userData = User::find($user->id);

    return  response(
      [
        'user' => $userData,
        'token' => $token
      ],
      200
    );
  }

  public function login(LoginRequest $request)
  {
    $credentials = $request->validated();
    if (!Auth::attempt($credentials)) {
      return response(
        [
          'error' => 'Email or Password not correct'
        ],
        422
      );
    }
    $user = Auth::user();

    $token = $user->createToken('mainUser')->plainTextToken;

    $userData = User::find($user->id);

    return response([
      'user' => $userData,
      'token' => $token
    ]);
  }

  public function logout()
  {
    $user = Auth::user();
    $user->currentAccessToken()->delete();

    return response([
      'success' => true
    ]);
  }

  public function user(Request $request)
  {
    return response($request->user(), 200);
  }

  public  function  verify($id, Request $request)
  {
    if (!$request->hasValidSignature()) {
      return response()->json(["msg" => "Invalid/Expired url provided."], 401);
    }
    $user = User::find($id);
    if (!$user->hasVerifiedEmail()) {
      $user->markEmailAsVerified();
    }
    $URL = env("REDIRECT_URL_VIRIFIED_EMAIL");
    return redirect($URL);
  }

  public function resend($id)
  {
    $user = User::find($id);
    if ($user->hasVerifiedEmail()) {
      return response()->json(["msg" => "Email already verified."], 400);
    }

    $user->sendEmailVerificationNotification();

    return response()->json(["msg" => "Email verification link sent on your email id"]);
  }
}
