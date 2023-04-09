<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
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
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'firstname' => 'required|string',
      'lastname' => 'required|string',
      'cin' => 'required|string|unique:users,cin',
      'email' => 'required|email|string|unique:users,email',
      'password' => [
        'required',
        'confirmed'
      ]
    ];
  }

}

