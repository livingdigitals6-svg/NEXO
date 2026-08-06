export default function DashboardPage() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome to your NEXO Business Operating System.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          ["Active Campaigns","0"],
          ["CRM Leads","0"],
          ["AI Tasks","0"],
          ["Revenue","₦0"],
        ].map(([title,value])=>(

          <div
            key={title}
            className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-6
            "
          >

            <p className="text-sm text-slate-400">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              {value}
            </h2>

          </div>

        ))}

      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-2xl font-semibold text-white">
          Workspace
        </h2>

        <p className="mt-3 text-slate-400">
          This area will display your AI insights,
          campaign performance, CRM activity,
          automation status, and business metrics.
        </p>

      </div>

    </div>

  );

}
