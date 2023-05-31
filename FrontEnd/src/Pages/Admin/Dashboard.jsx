import { NavBarAdmin, SidebarAdmin, TableDashboard } from "../../Components";
import GetAuthAdmin from "../../hooks/GetAuthAdmin";

const Dashboard = () => {
  document.title = "Doctor Dashboard";

  GetAuthAdmin()

  return (
    <>
      <NavBarAdmin />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SidebarAdmin />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <TableDashboard />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
