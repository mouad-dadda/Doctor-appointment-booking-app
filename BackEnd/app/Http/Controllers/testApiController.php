<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class testApiController extends Controller
{
    //

    public function index()
    {
        $patient = DB::select('select * from patient');
        return $patient ;
    }
}
