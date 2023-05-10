<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorsController extends Controller
{
    // API endpoint to search for doctors
    public function search($key)
    {
        $doctors = Doctor::where('specialite', 'LIKE', "%$key%")
            ->orWhere('address_cabinet', 'LIKE', "%$key%")
            ->orWhere('firstname','LIKE', "%$key%")
            ->orWhere('nom_cabinet', 'LIKE', "%$key%")
            ->get();
    
        return response()->json($doctors);
    }

//get 5 Doctors with a premium account 
public function getRandomPremiumDoctors()
{
    $doctors = Doctor::inRandomOrder()
    ->where('premium',true)
    ->limit(5)
    ->get();


    return response()->json($doctors);
}

}
