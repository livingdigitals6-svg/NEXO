"use client";

import {

  Bell,
  Search,
  UserCircle,

} from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Topbar() {

  return (

    <header
      className="
      h-16
      border-b
      border-slate-800
      bg-slate-950
      flex
      items-center
      justify-between
      px-6
      "
    >

      <div
        className="
        relative
        w-full
        max-w-md
        "
      >

        <Search
          className="
          absolute
          left-3
          top-3
          h-4
          w-4
          text-slate-500
          "
        />

        <Input
          placeholder="Search..."
          className="pl-10"
        />

      </div>

      <div
        className="
        flex
        items-center
        gap-5
        "
      >

        <Bell
          className="
          h-5
          w-5
          text-slate-400
          cursor-pointer
          "
        />

        <UserCircle
          className="
          h-8
          w-8
          text-slate-300
          cursor-pointer
          "
        />

      </div>

    </header>

  );

}
