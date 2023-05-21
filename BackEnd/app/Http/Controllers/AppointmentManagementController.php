<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AppointmentManagementController extends Controller
{

  public function TakeAppointment(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'user_id' => 'required|exists:users,id',
      'doctor_id' => 'required|exists:doctors,id',
      'date_appointment' => 'required',
      'time_appointment' => 'required',
    ]);


    $this->validateWith($validator, $request);

    $data = $validator->validated();

    $apointment = Appointment::create(
      [
        'user_id' => $data['user_id'],
        'doctor_id' => $data['doctor_id'],
        'date_appointment' => $data['date_appointment'],
        'time_appointment' => $data['time_appointment'],
      ]
    );

    return response([
      'appointment' => $apointment
    ], 200);
  }
}
