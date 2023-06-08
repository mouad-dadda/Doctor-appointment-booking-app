<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
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
    $doctor->firstname = $request->post('firstname');
    $doctor->lastname = $request->post('lastname');
    $doctor->cin = $request->post('cin');
    $doctor->phoneNumber = $request->post('phoneNumber');
    $doctor->email = $request->post('email');
    $doctor->Matricule = $request->post('Matricule');
    $doctor->specialite = $request->post('specialite');
    $doctor->nom_cabinet = $request->post('nom_cabinet');
    $doctor->address_cabinet = $request->post('address_cabinet');
    $doctor->available = $request->post('available');
    $doctor->about = $request->post('about');

    $doctor->save();


    return response([
      'updated' => 'success',
      'doctor' => $doctor
    ], 200);
  }


  public function UpdateInfoTimeWork(Request $request)
  {

    $doctor = Doctor::find($request->post('id'));
    $doctor->day_debut_work = $request->post('day_debut_work');
    $doctor->day_fin_work = $request->post('day_fin_work');
    $doctor->time_debut_work = $request->post('time_debut_work');
    $doctor->time_fin_work = $request->post('time_fin_work');
    $doctor->appointment_time = $request->post('appointment_time');

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

  public function GetTimeSpiceficDate(Request $request)
  {

    $idDoctor = $request->post("id");
    $DateApointment = $request->post("dateApointment");

    $reservedTime = Appointment::where('doctor_id', $idDoctor)
      ->where('appointment_date', $DateApointment)
      ->get();

    return response()->json($reservedTime);
  }
}
