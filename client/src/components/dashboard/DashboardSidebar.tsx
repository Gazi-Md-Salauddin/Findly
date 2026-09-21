"use client"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import {House, FileText, ShieldCheck, MessagesSquare, Bell, Settings} from 'lucide-react';
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {

  const pathName = usePathname();


  const navContent = (
    <nav className="flex flex-col gap-1">

      <Link
        className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-xl text-foreground transition-colors ${
          pathName === "/dashboard" ? "bg-blue-500 text-white" : "hover:bg-blue-200"
        }`}
        type="button" 
        href="/dashboard"
      ><House/>Overview
      </Link>
      <Link
        className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-xl text-foreground transition-colors ${
          pathName === "/dashboard/my-reports" ? "bg-blue-500 text-white" : "hover:bg-blue-200"
        }`}
        type="button"
        href="/dashboard/my-reports"
      ><FileText/>My Reports
      </Link>
      <Link
        className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-xl text-foreground transition-colors ${
          pathName === "/dashboard/matches" ? "bg-blue-500 text-white" : "hover:bg-blue-200"
        }`}
        type="button"
        href="/dashboard/matches"
      ><ShieldCheck/>Matches
      </Link>
      <Link
        className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-xl text-foreground transition-colors ${
          pathName === "/dashboard/messages" ? "bg-blue-500 text-white" : "hover:bg-blue-200"
        }`}
        type="button"
        href="/dashboard/messages"
      ><MessagesSquare/>Messages
      </Link>
      <Link
        className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-xl text-foreground transition-colors ${
          pathName === "/dashboard/notifications" ? "bg-blue-500 text-white" : "hover:bg-blue-200"
        }`}
        type="button"
        href="/dashboard/notifications"
      ><Bell/>Notifications
      </Link>
      <Link
        className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-xl text-foreground transition-colors ${
          pathName === "/dashboard/settings" ? "bg-blue-500 text-white" : "hover:bg-blue-200"
        }`}
        type="button"
        href="/dashboard/settings"
      ><Settings/>Settings
      </Link>
    </nav>
  );


  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>
      <Drawer swipeDirection="left">
        <DrawerTrigger className="lg:hidden" render={<Button variant="secondary">Menu</Button>} />
        <DrawerContent className="relative h-screen">
          <DrawerClose render={<button className="absolute top-3 right-4 rounded-full px-3 py-1 hover:bg-gray-200">X</button>} />
          <DrawerHeader className="pt-2">
            <DrawerBody>{navContent}</DrawerBody>
          </DrawerHeader>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default DashboardSidebar;