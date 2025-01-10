
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../content/Sidebar";

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-primary text-white">
      <div className="flex h-16 items-center px-6">
        <h1 className="text-2xl font-bold">Datacense</h1>
      </div>
      <nav className="space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.href}
              className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-700 ${
                location.pathname === item.href ? "bg-gray-700" : "transparent"
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
