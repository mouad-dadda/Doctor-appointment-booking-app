<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorManagementController extends Controller
{


  public function SearchDoctors(Request $request)
  {

    $key = $request->post('key');

    $doctors = Doctor::where('specialite', 'LIKE', "%$key%")
      ->orWhere('address_cabinet', 'LIKE', "%$key%")
      ->orWhere('firstname', 'LIKE', "%$key%")
      ->orWhere('nom_cabinet', 'LIKE', "%$key%")
      ->get();

    if (!$doctors === '') {
      return response([
        'DataSearch' => $doctors
      ], 200);
    } else {
      return  response([
        'DataSearch' => 'No Doctor'
      ], 250);
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

  public function update()
  {
  }
}
