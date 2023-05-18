<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersManagementController extends Controller
{

  public function update(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'firstname' => 'required',
      'lastname' => 'required',
      'cin' => 'required',
      'email' => 'required|email',
      'id' => 'required|exists:users,id'
    ]);

    $this->validateWith($validator, $request);

    $data = $validator->validated();

    if ($request->file('user_avatar')) {
      $image = $request->file('user_avatar');
      $path = $image->store('public/images');
      $imageName = basename($path);
      $user_img = User::find($data['id']);
      $user_img->user_avatar = $imageName ;
      $user_img->save();
    };

    $user = User::find($data['id']);

    $user->firstname = $data['firstname'];
    $user->lastname = $data['lastname'];
    $user->cin = $data['cin'];
    $user->email = $data['email'];

    $user->save();

    return response([
      'updated' => 'success',
      'user' => $user
    ], 200);
  }



  public function delete(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'id' => 'required|exists:users,id'
    ]);

    $this->validateWith($validator, $request);

    $data = $validator->validated();

    $user = User::find($data['id']);
    $user->tokens()->delete();
    $user->delete();

    return response([
      'deleted' => 'succes',
    ], 200);
  }
}
