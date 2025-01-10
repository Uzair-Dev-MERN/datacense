import { Avatar } from "antd";

export function Header() {
  return (
    <header className="bg-primary px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white ">All Users</h2>
        <div className="flex items-center gap-2">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <span className=" text-gray-600 text-lg">Admin</span>
        </div>
      </div>
    </header>
  );
}
