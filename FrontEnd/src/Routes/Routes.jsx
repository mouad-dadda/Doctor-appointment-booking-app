import { PageNotfond } from "../Components";
import AuthGuard from "../Middleware/AuthGuard";
import {
  SearchDoctors,
  Home,
  Login,
  Signup,
  DocotrDashboard,
  DoctorRendezVous,
  DoctorHistorique,
  DocotrSettings,
} from "../Pages";
import Profile from "../Pages/Users/Profile";

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

  // Users Router

  {
    path: "/user/profile",
    element: (
      <AuthGuard>
        <Profile />
      </AuthGuard>
    ),
  },

  //Doctors Router

  {
    path: "/doctor/dashboard",
    element: <DocotrDashboard />,
  },
  {
    path: "/docotr/rendezvous",
    element: <DoctorRendezVous />,
  },
  {
    path: "/doctor/historique",
    element: <DoctorHistorique />,
  },
  {
    path: "/doctor/settings",
    element: <DocotrSettings />,
  },
]);

export default router;
