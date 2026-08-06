import AppSidebar from "@/components/navigation/AppSidebar";
import Topbar from "@/components/navigation/Topbar";

import {
  ADMIN_NAVIGATION,
} from "@/lib/constants/navigation";

export default function AdminLayout({
  children,
}:{
  children:React.ReactNode;
}){

  return(

    <div className="flex min-h-screen bg-slate-950">

      <AppSidebar
        items={ADMIN_NAVIGATION}
      />

      <main className="flex flex-1 flex-col">

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
