import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  File,
  CreditCard,
  Users,
  Plus,
} from "lucide-react";

export const navigation = [
  { id: 1, name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { id: 2, name: "Catalog", href: "", icon: ShoppingCart },
  { id: 3, name: "Blogs", href: "", icon: FileText },
  { id: 4, name: "Pages", href: "", icon: File },
  { id: 5, name: "Payments", href: "", icon: CreditCard },
  { id: 6, name: "Users", href: "/users", icon: Users },
  { id: 7, name: "Add User", href: "/users/adduser", icon: Plus }, // Added "Add User" to the navigation array
];
