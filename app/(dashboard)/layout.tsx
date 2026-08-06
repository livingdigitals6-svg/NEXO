import AppSidebar from "@/components/navigation/AppSidebar";
import Topbar from "@/components/navigation/Topbar";

import {

  USER_NAVIGATION,

} from "@/lib/constants/navigation";

export default function DashboardLayout({

  children,

}:{

  children:React.ReactNode;

}){

  return(

    <div className="flex min-h-screen bg-slate-950">

      <AppSidebar

        items={USER_NAVIGATION}

      />

      <main className="flex-1 flex flex-col">

        <Topbar />

        <section

          className="

          flex-1

          p-8

          bg-slate-950

          "

        >

          {children}

        </section>

      </main>

    </div>

  );

}
