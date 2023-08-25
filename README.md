<h1 align="center">
  <img alt="logo" src="./FrontEnd/public/img/logo.png" width="224px"/><br/> <em>DocAppoint</em> Is For Doctors To Manage Patient Appointment
</h1>

---

<p align="center">

<a href="./LICENSE" >  
  <img alt="GitHub Language Count" src="https://img.shields.io/github/license/mouad-dadda/Doctors-Appointment-Management/markdown-badges?style=for-the-badge&color=0085CA" />
</a>

  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/mouad-dadda/Doctors-Appointment-Management/github-badges?style=for-the-badge&color=0033FF" />

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/mouad-dadda/Doctors-Appointment-Management/github-badges?style=for-the-badge&color=00ACC1" />

  <img alt="" src="https://img.shields.io/github/repo-size/mouad-dadda/Doctors-Appointment-Management/github-badges?style=for-the-badge&color=1877F2" />

  <img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/mouad-dadda/Doctors-Appointment-Management/github-badges?style=for-the-badge&color=E8E8E8" />

</p>

<p align="center"><em> Welcome to DocAppoint, a comprehensive platform designed to simplify management patient appointment . This project facilitates doctors in registering , enabling doctors to efficiently engage with patients through appointment requests.</em> </p>

<hr>
### 🃏Running Locally

**⚡Prerequisites**

- npm v8.15.0
- node v16.17.0
- composer v2.4.2
- php v8.1.4

Follow these steps to set up and run DocAppoint on your local machine:

#### 📌Clone the project

```bash
  git clone https://github.com/mouad-dadda/Doctors-Appointment-Management.git
```

go to the project directory

Navagate to the backend and frontend folder, install dependencies and start the server

#### 📌For the frontend

```bash
  cd FrontEnd
  npm install
  npm start
```

#### 📌For the backend

- Create your database

  - Rename .env.example to .env Or copy it and paste at project root directory and name the file .env.You can also use this command.

```bash
cd BackEnd
cp .env.example ./.env
```

- Generate app key with this command

```bash
php artisan key:generate
```

- Set database connection to your database in the .env file.

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=YourDatabease
DB_USERNAME=Name
DB_PASSWORD=Pass
```

- Start the local server and browser to your app.

```bash
  composer install
  php artisan serve
```

- if you want to have some sample data run

```bash
  php artisan migrate
  php artisan db:seed
```

or

```bash
php artisan migrate --seed
```

<hr>

### 💻Key Features:

- **Doctor Registration:** Effortlessly create accounts by providing professional details and credentials.

- **Administrator :** Verify and activate doctor accounts.

- **Seamless Appointment Requests:** Verified doctors manage schedules; patients request appointments based on availability.

- **Comprehensive Dashboard:** Empower administrators to manage doctor accounts, verify registrations, and monitor platform activity.

⚠ <em> The Project is not complete and there is more to be added </em>

<hr>

### 🌙Technologies

<p align="center">
    <img src="https://skillicons.dev/icons?i=laravel,react,redux,mysql,tailwind"  alt=" Language" />
</p>

<hr>

### 📃License:

This project is licensed under the <a href="./LICENSE">MIT License.</a>

<hr>

### 📩Contact:

  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"  alt="Gmail" />

  <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"  alt="Twitter" />

