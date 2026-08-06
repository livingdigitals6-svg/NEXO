import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="mt-2 text-slate-400">
        Sign in to your NEXO workspace.
      </p>

      <div className="mt-8 space-y-4">

        <input
          placeholder="Email"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
        />

        <button
          className="w-full rounded-xl bg-white py-3 font-semibold text-slate-950"
        >
          Sign In
        </button>

      </div>

      <div className="mt-6 flex justify-between text-sm">

        <Link
          href="/forgot-password"
          className="text-yellow-400"
        >
          Forgot password?
        </Link>

        <Link
          href="/signup"
          className="text-yellow-400"
        >
          Create account
        </Link>

      </div>

    </div>
  );
}
