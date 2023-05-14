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

    return  response(
      [
        'user' => $user,
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

    return response([
      'user' => $user,
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
}
