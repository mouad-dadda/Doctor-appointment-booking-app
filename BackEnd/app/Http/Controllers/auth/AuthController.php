<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
  public function signup(SignupRequest $request)
  {

    $data = $request->validated();

    $user = User::create([
      'firstname' => $data['firstname'],
      'lastname' => $data['lastname'],
      'cin' => $data['cin'],
      'email' => $data['email'],
      'password' => bcrypt($data['password'])
    ]);

    $token = $user->createToken('main')->plainTextToken;

    return response(
      [
        'user' => $user,
        'token' => $token
      ]
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

    $token = $user->createToken('main')->plainTextToken;

    return response([
      'user' => $user,
      'token' => $token
    ]);
  }

  public function Logout(Request $request)
  {
    $user = Auth::user();
    $user->currentAccessToken()->delete();

    return response([
      'success' => true
    ]);
  }
}
