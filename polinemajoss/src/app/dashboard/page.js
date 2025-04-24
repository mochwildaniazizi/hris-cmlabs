export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <aside className="w-64 h-screen bg-white shadow-md fixed">
        <div className="p-6 text-lg font-bold">HRIS Admin</div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block text-blue-600 font-semibold">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Employees</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Attendance</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Settings</a>
        </nav>
      </aside>

      <main className="ml-64 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="text-gray-500">Total Employees</p>
            <p className="text-2xl font-bold">208</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="text-gray-500">New Employees</p>
            <p className="text-2xl font-bold">20</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="text-gray-500">Active</p>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="text-gray-500">Resigned</p>
            <p className="text-2xl font-bold">10</p>
          </div>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Attendance Overview</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>On Time</span><span>142</span>
            </li>
            <li className="flex justify-between">
              <span>Late</span><span>4</span>
            </li>
            <li className="flex justify-between">
              <span>Absent</span><span>9</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
