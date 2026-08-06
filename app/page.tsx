import Link from "next/link";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white">

      <section
        className="
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        flex-col
        items-center
        justify-center
        px-6
        text-center
        "
      >

        <span
          className="
          rounded-full
          border
          border-slate-700
          px-4
          py-2
          text-sm
          text-slate-300
          "
        >
          AI Business Operating System
        </span>

        <h1
          className="
          mt-8
          max-w-4xl
          text-5xl
          font-bold
          leading-tight
          md:text-7xl
          "
        >
          Run your entire business
          <br />
          from one intelligent platform.
        </h1>

        <p
          className="
          mt-8
          max-w-2xl
          text-lg
          text-slate-400
          "
        >
          NEXO brings AI, CRM, Facebook Ads,
          automation, analytics and business
          operations together into one workspace.
        </p>

        <div
          className="
          mt-10
          flex
          gap-4
          "
        >

          <Link
            href="/signup"
            className="
            rounded-xl
            bg-white
            px-6
            py-3
            font-semibold
            text-slate-950
            transition
            hover:bg-slate-200
            "
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="
            rounded-xl
            border
            border-slate-700
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-slate-900
            "
          >
            Sign In
          </Link>

        </div>

      </section>

    </main>

  );

}
