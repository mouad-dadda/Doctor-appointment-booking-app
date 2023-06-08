<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class AppointmentManagementController extends Controller
{
  // Method to take a new appointment

  public function TakeAppointment(Request $request)
  {


    $validator = Validator::make($request->all(), [
      'user_id' => 'required|exists:users,id',
      'doctor_id' => 'required|exists:doctors,id',
      'date_appointment' => 'required',
      'time_appointment' => 'required',
      'type_appointment' => 'required'
    ]);


    $this->validateWith($validator, $request);


    $data = $validator->validated();


    $appointment = Appointment::create([
      'user_id' => $data['user_id'],
      'doctor_id' => $data['doctor_id'],
      'date_appointment' => $data['date_appointment'],
      'time_appointment' => $data['time_appointment'],
      'type_appointment' => $data['type_appointment']
    ]);

    $doctor = Doctor::find($data['doctor_id']);
    $user = User::find($data['user_id']);

    $DataView = [
      'doctor' => $doctor,
      'user' => $user,
      'appointment' => $appointment
    ];


    $pdf = Pdf::loadView('Appointment', $DataView);

    $nameFile = $user->firstname . time() . '.pdf';

    Storage::put('public/storage/pdf/' . $nameFile, $pdf->output());

    return response([
      'appointment' => $appointment,
      "namefile" => $nameFile
    ], 200);
  }



  // Method to get all appointments for a specific doctor

  public function GetAppointmentDoctor($id)
  {

    $appointments = Appointment::with('user')
      ->where('doctor_id', $id)
      ->get();


    return response()->json($appointments);
  }



  // Method to get all appointments for a specific doctor on the current date

  public function GetAppointmentToday($doctorId)
  {

    $appointments = Appointment::with('user')
      ->where('doctor_id', $doctorId)
      ->whereDate('date_appointment', Carbon::today())
      ->get();

    return response()->json($appointments);
  }


  // Method to get all appointments for a specific doctor on past dates
  public function GetAppointmentOldDate($doctorId)
  {

    $appointments = Appointment::with('user')
      ->where('doctor_id', $doctorId)
      ->whereDate('date_appointment', '<', Carbon::today())
      ->get();

    return response()->json($appointments);
  }

  // Method to get all New appointments for a specific doctor on past dates
  public function GetNewAppointment($doctorId)
  {

    $appointments = Appointment::with('user')
      ->where('doctor_id', $doctorId)
      ->whereDate('date_appointment', '>', Carbon::today())
      ->get();

    return response()->json($appointments);
  }
}
