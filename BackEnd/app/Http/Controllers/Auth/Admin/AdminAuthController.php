<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
  public function login(LoginRequest $request)
  {
    $credentials = $request->validated();

    $credentials = $request->only('email', 'password');

    if (Auth::guard('admin')->attempt($credentials)) {

      $doctor = Auth::guard('admin')->user();

      $token = $doctor->createToken('mainAdmin')->plainTextToken;

      return response([
        'token' => $token,
        'admin' => $doctor
      ], 200);
    }

    return response(['message' => 'Invalid login credentials'], 422);
  }

  public function admin(Request $request)
  {
    return response($request->user(), 200);
  }

}
