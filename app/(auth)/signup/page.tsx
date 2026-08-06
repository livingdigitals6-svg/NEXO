import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h1 className="text-3xl font-bold text-white">
        Create Account
      </h1>

      <p className="mt-2 text-slate-400">
        Start using NEXO today.
      </p>

      <div className="mt-8 space-y-4">

        <input
          placeholder="Full Name"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
        />

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
          Create Account
        </button>

      </div>

      <div className="mt-6 text-center">

        <Link
          href="/login"
          className="text-yellow-400"
        >
          Already have an account?
        </Link>

      </div>

    </div>
  );
}
