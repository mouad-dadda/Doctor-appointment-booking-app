<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    body {
      background-color: #f7f7f7;
      font-family: 'Poppins', sans-serif;
    }

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .section {
      padding: 2rem;
      width: 70%;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .infoDoctor {
      margin-bottom: 2rem;
    }

    .infoDoctor h2 {
      font-size: 28px;
      margin-bottom: 1rem;
      color: #333333;
    }

    .adress {
      font-size: 18px;
      margin: 0;
      margin-bottom: 1.5rem;
      color: #555555;
    }

    .tel {
      font-size: 16px;
      font-weight: 500;
      color: #555555;
    }

    .UserInfo {
      font-weight: 500;
      font-size: 14px;
      margin-top: 2rem;
      color: #888888;
    }

    .textRen {
      margin-top: 1.5rem;
      font-size: 18px;
      color: #333333;
    }

    .RendezDate {
      margin-top: 1rem;
      font-size: 22px;
      font-weight: bold;
      color: #000000;
    }
  </style>

</head>

<body>
  <div class="card">
    <div class="section">
      <div class="infoDoctor">
        <h2>Doctor {{ $doctor->firstname }} {{$doctor->lastname}} </h2>
        <p class="adress">{{ $doctor->address_cabinet }}</p>
        <p class="tel">Tél: {{ $doctor->phoneNumber }}</p>
      </div>
      <div class="UserInfo">
        Nom: {{ $user->firstname }} {{$user->lastname}} | CIN: {{ $user->cin }}
      </div>
      <div class="textRen">
        Votre prochain rendez-vous :
      </div>
      <div class="RendezDate">
        Date: {{ $appointment->date_appointment }} | Heure: {{ $appointment->time_appointment }}
      </div>
    </div>
  </div>
</body>

</html>