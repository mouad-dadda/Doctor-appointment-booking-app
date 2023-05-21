<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DoctorManagementController extends Controller
{


  public function SearchDoctors(Request $request)
  {

    $key = $request->post('key');

    // return  $key ;

    $doctors = Doctor::where('specialite', 'LIKE', "%$key%")
      ->orWhere('address_cabinet', 'LIKE', "%$key%")
      ->orWhere('firstname', 'LIKE', "%$key%")
      ->orWhere('nom_cabinet', 'LIKE', "%$key%")
      ->get();

    if ($doctors !== []) {
      return response([
        'DataSearch' => $doctors
      ], 200);
    } else {
      return  response([
        'DataSearch' => 'No Doctor'
      ], 404);
    }
  }


  public function getRandomPremiumDoctors()
  {
    $doctors = Doctor::inRandomOrder()
      ->where('premium', true)
      ->limit(5)
      ->get();


    return response()->json($doctors);
  }

  public function updateInfo(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'id' => 'required',
      'cin' => 'required|string',
      'phoneNumber' => 'required',
      'email' => 'required|email',
    ]);

    $this->validateWith($validator, $request);

    $data = $validator->validated();

    if ($request->file('avatar_doctor')) {
      $image = $request->file('avatar_doctor');
      $path = $image->store('public/images/doctors');
      $imageName = basename($path);
      $doctor_img = Doctor::find($data['id']);
      $doctor_img->avatar_doctor = $imageName;
      $doctor_img->save();
    }

    $doctor = Doctor::find($data['id']);
    $doctor->firstname = $request->put('firstname');
    $doctor->lastname = $request->put('lastname');
    $doctor->cin = $request->put('cin');
    $doctor->phoneNumber = $request->put('phoneNumber');
    $doctor->email = $request->put('email');
    $doctor->Matricule = $request->put('Matricule');
    $doctor->specialite = $request->put('specialite');
    $doctor->nom_cabinet = $request->put('nom_cabinet');
    $doctor->address_cabinet = $request->put('address_cabinet');
    $doctor->available = $request->put('available');
    $doctor->save();


    return response([
      'updated' => 'success',
      'doctor' => $doctor
    ], 200);
  }


  public function UpdateInfoTimeWork(Request $request)
  {

    $doctor = Doctor::find($request->put('id'));
    $doctor->day_debut_work = $request->put('day_debut_work');
    $doctor->day_fin_work = $request->put('day_fin_work');
    $doctor->time_debut_work = $request->put('time_debut_work');
    $doctor->time_fin_work = $request->put('time_fin_work');
    $doctor->save();

    return response([
      'updated' => 'success',
      'doctor' => $doctor
    ], 200);
  }
}
