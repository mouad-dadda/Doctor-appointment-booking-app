<?php

namespace App\Http\Requests\Doctor;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
   */
  public function rules(): array
  {
    return [
      'firstname' => 'required|string',
      'lastname' => 'required|string',
      'Matricule' => 'required|string|unique:doctors,Matricule',
      'phoneNumber' => 'required',
      'email' => 'required|email|string|unique:doctors,email',
      'password' => [
        'required',
        'confirmed'
      ],
      'Matricule' => 'required|string|unique:doctors,Matricule'
    ];
  }
}
