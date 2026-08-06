import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h1 className="text-3xl font-bold text-white">
        Reset Password
      </h1>

      <p className="mt-2 text-slate-400">
        Enter your email to receive a reset link.
      </p>

      <div className="mt-8 space-y-4">

        <input
          placeholder="Email"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
        />

        <button
          className="w-full rounded-xl bg-white py-3 font-semibold text-slate-950"
        >
          Send Reset Link
        </button>

      </div>

      <div className="mt-6 text-center">

        <Link
          href="/login"
          className="text-yellow-400"
        >
          Back to Login
        </Link>

      </div>

    </div>
  );
}
