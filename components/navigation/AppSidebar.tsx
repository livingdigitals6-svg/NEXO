"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavigationItem={

  title:string;

  href:string;

  icon:React.ComponentType<{

    className?:string;

  }>;

};

export default function AppSidebar({

  items,

}:{

  items:NavigationItem[];

}){

  const pathname=

    usePathname();

  return(

    <aside

      className="

      hidden

      lg:flex

      w-72

      flex-col

      border-r

      border-slate-800

      bg-slate-950

      "

    >

      <div

        className="

        h-16

        px-7

        flex

        items-center

        border-b

        border-slate-800

        "

      >

        <h1

          className="

          text-2xl

          font-bold

          tracking-tight

          text-white

          "

        >

          NEXO

        </h1>

      </div>

      <div

        className="

        flex-1

        overflow-y-auto

        px-4

        py-6

        "

      >

        <nav

          className="space-y-1"

        >

          {items.map((item)=>{

            const Icon=item.icon;

            const active=

              pathname===item.href;

            return(

              <Link

                key={item.href}

                href={item.href}

                className={cn(

                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",

                  active

                  ?"bg-white text-slate-950 shadow"

                  :"text-slate-400 hover:bg-slate-900 hover:text-white"

                )}

              >

                <Icon

                  className="h-5 w-5"

                />

                {item.title}

              </Link>

            );

          })}

        </nav>

      </div>

      <div

        className="

        border-t

        border-slate-800

        px-6

        py-5

        "

      >

        <div

          className="

          rounded-xl

          bg-slate-900

          p-4

          "

        >

          <p

            className="

            text-xs

            uppercase

            tracking-widest

            text-slate-500

            "

          >

            Version

          </p>

          <p

            className="

            mt-2

            text-sm

            font-semibold

            text-white

            "

          >

            NEXO V3

          </p>

        </div>

      </div>

    </aside>

  );

}
