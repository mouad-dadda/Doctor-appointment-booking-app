import { PageNotfond } from "../Components";
import AuthGuard from "../Middleware/AuthGuard";
import AppointmentGuard from "../Middleware/AppointmentGuard";
import {
  SearchDoctors,
  Home,
  Login,
  Signup,
  DocotrDashboard,
  DoctorRendezVous,
  DoctorHistorique,
  DocotrSettings,
  UserSettings,
  UserProfile,
  UserChangePassword,
  BookingAppointment,
  DoctorsLogin,
  DoctorsSignup,
  AuthAdmin,
  DashboardAdmin,
  DoctorsList,
} from "../Pages";
import AuthDoctorGuard from "../Middleware/AuthDoctorGuard";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotfond />,
    element: <Home />,
  },
  {
    path: "/recherche",
    element: <SearchDoctors />,
  },
  {
    path: "/Connexion",
    element: <Login />,
  },
  {
    path: "/identifier",
    element: <Signup />,
  },
  {
    path: "/bookingappointment/:id",
    element: (
      <AppointmentGuard>
        <BookingAppointment />
      </AppointmentGuard>
    ),
  },

  // Users Router

  {
    path: "/user/profile",
    element: (
      <AuthGuard>
        <UserProfile />
      </AuthGuard>
    ),
  },

  {
    path: "/user/settings",
    element: (
      <AuthGuard>
        <UserSettings />
      </AuthGuard>
    ),
  },
  {
    path: "/user/changepassword",
    element: (
      <AuthGuard>
        <UserChangePassword />
      </AuthGuard>
    ),
  },
  //Doctors Router
  {
    path: "/doctor/login",
    element: <DoctorsLogin />,
  },
  {
    path: "/doctor/signup",
    element: <DoctorsSignup />,
  },

  {
    path: "/doctor/dashboard",
    element: (
      <AuthDoctorGuard>
        <DocotrDashboard />
      </AuthDoctorGuard>
    ),
  },
  {
    path: "/docotr/rendezvous",
    element: (
      <AuthDoctorGuard>
        <DoctorRendezVous />
      </AuthDoctorGuard>
    ),
  },
  {
    path: "/doctor/historique",
    element: (
      <AuthDoctorGuard>
        <DoctorHistorique />
      </AuthDoctorGuard>
    ),
  },
  {
    path: "/doctor/settings",
    element: (
      <AuthDoctorGuard>
        <DocotrSettings />
      </AuthDoctorGuard>
    ),
  },

  // ADMIN ROUTE

  {
    path: "/admin/login",
    element: <AuthAdmin />,
  },
  {
    path: "/admin/dashboard",
    element: <DashboardAdmin />,
  },
  {
    path: "/admin/doctors",
    element: <DoctorsList />,
  },
]);

export default router;
