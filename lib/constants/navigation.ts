import {

  LayoutDashboard,
  Sparkles,
  Megaphone,
  Users,
  PenSquare,
  BarChart3,
  Workflow,
  FolderOpen,
  CreditCard,
  Bell,
  Settings,
  UserCircle,

  Shield,
  UserCog,
  Bot,
  Activity,
  Lock,

} from "lucide-react";

export const USER_NAVIGATION = [

  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "AI Workspace",
    href: "/dashboard/ai",
    icon: Sparkles,
  },

  {
    title: "Facebook Ads",
    href: "/dashboard/facebook",
    icon: Megaphone,
  },

  {
    title: "CRM",
    href: "/dashboard/crm",
    icon: Users,
  },

  {
    title: "Content Studio",
    href: "/dashboard/content",
    icon: PenSquare,
  },

  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },

  {
    title: "Automation",
    href: "/dashboard/automation",
    icon: Workflow,
  },

  {
    title: "Files",
    href: "/dashboard/files",
    icon: FolderOpen,
  },

  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },

  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },

  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: UserCircle,
  },

  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },

];

export const ADMIN_NAVIGATION = [

  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: Shield,
  },

  {
    title: "Users",
    href: "/admin/users",
    icon: UserCog,
  },

  {
    title: "Subscriptions",
    href: "/admin/subscriptions",
    icon: CreditCard,
  },

  {
    title: "AI Agents",
    href: "/admin/agents",
    icon: Bot,
  },

  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: Activity,
  },

  {
    title: "System",
    href: "/admin/system",
    icon: Settings,
  },

  {
    title: "Security",
    href: "/admin/security",
    icon: Lock,
  },

];
