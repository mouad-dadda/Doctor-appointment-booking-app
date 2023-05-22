<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DoctorManagementController extends Controller
{


  public function searchDoctors(Request $request)
  {
    $specialite = $request->post('specialite');
    $addressCabinet = $request->post('address_cabinet');
    $firstname = $request->post('firstname');
    $nomCabinet = $request->post('nom_cabinet');

    $doctors = Doctor::where(function ($query) use ($specialite, $addressCabinet, $firstname, $nomCabinet) {
      if (!empty($specialite)) {
        $query->where('specialite', 'LIKE', "%$specialite%");
      }
      if (!empty($addressCabinet)) {
        $query->orWhere('address_cabinet', 'LIKE', "%$addressCabinet%");
      }
      if (!empty($firstname)) {
        $query->orWhere('firstname', 'LIKE', "%$firstname%");
      }
      if (!empty($nomCabinet)) {
        $query->orWhere('nom_cabinet', 'LIKE', "%$nomCabinet%");
      }
    })->get();

    if ($doctors->isNotEmpty()) {
      return response()->json([
        'DataSearch' => $doctors
      ], 200);
    } else {
      return response()->json([
        'message' => 'No doctors found'
      ], 404);
    }
  }



  public function getRandomPremiumDoctors()
  {
    $doctors = Doctor::inRandomOrder()
      ->where('premium', true)
      ->limit(4)
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

  public function DoctoroInfo($id)
  {

    $doctor = Doctor::find($id);
    return response([
      $doctor
    ], 200);
  }
}
