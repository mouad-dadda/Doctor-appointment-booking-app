<?php

namespace App\Http\Controllers;

use App\Mail\testmail;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminController extends Controller
{
  public function GetAllDocter()
  {
    $doctor = Doctor::all();
    return response()->json($doctor);
  }

  public function GetAllPatient()
  {
    $user = User::all();
    return response()->json($user);
  }

  public function VerifiedDoctor(Request $request)
  {

    $id = $request->post('id');

    $doctor = Doctor::find($id);
    $doctor->verified = true;
    $doctor->save();

    $doctor = Doctor::all();

    return response()->json($doctor);
  }

  public function DoctorNoVerified()
  {
    $doctors = Doctor::where('verified', false)->get();
    return response()->json($doctors);
  }

  public function test()
  {

    Mail::to('manlolo339@gmail.com')->send(new testmail()) ;

  }
}
