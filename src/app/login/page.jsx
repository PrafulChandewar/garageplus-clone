
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Frontend UI only. Authentication API baad mein connect hogi.
    console.log({ emailOrMobile, password });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-8 font-sans">
      <section className="w-full max-w-[448px] rounded-[8px] border border-[#e0e0e6] bg-[#f7f7f8] px-6 py-8 sm:px-8 sm:py-9">
        {/* Logo and heading */}
        <div className="mb-6 flex items-center gap-4">
          <div
            aria-label="Garage Plus logo"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center text-[#ff9418]"
          >
            <svg
              viewBox="0 0 48 48"
              className="h-11 w-11"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M34 8C24 2 12 7 10 17"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M8 23H25L18 30H8"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 19H39V28C39 36 32 41 24 39"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M17 31V40M12 35H22"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <p className="text-[11px] tracking-[1.4px] text-[#687080]">
              GARAGE PLUS
            </p>
            <h1 className="mt-1 text-[17px] font-bold leading-5 text-black">
              Sign in
            </h1>
            <p className="mt-1 text-[12px] text-[#687080]">
              Sign in to your Garage Plus account
            </p>
          </div>
        </div>

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="emailOrMobile"
              className="mb-2 block text-[11px] font-medium tracking-[0.5px] text-[#303747]"
            >
              EMAIL OR MOBILE NUMBER
            </label>

            <input
              id="emailOrMobile"
              name="emailOrMobile"
              type="text"
              autoComplete="username"
              value={emailOrMobile}
              onChange={(event) => setEmailOrMobile(event.target.value)}
              placeholder="name@example.com or 10-digit mobile"
              required
              className="h-[41px] w-full rounded-[6px] border border-[#dedee5] bg-white px-3 text-[13px] text-[#343434] outline-none placeholder:text-[#778094] focus:border-[#ff9418]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-[11px] font-medium tracking-[0.5px] text-[#303747]"
            >
              PASSWORD
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                className="h-[41px] w-full rounded-[6px] border border-[#dedee5] bg-white px-3 pr-11 text-[13px] text-[#343434] outline-none placeholder:text-[#778094] focus:border-[#ff9418]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-[#727783]"
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 3L21 21M10.6 10.6a2 2 0 002.8 2.8" strokeLinecap="round" />
                    <path d="M9.9 5.2A10.7 10.7 0 0112 5c5 0 8.5 5 8.5 5a13 13 0 01-3 3.6M6.2 6.2C3.9 7.7 2 10 2 10s3.5 5 10 5c.9 0 1.7-.1 2.4-.3" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="2.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-1 h-[33px] w-full rounded-[4px] bg-[#ff9418] text-[12px] font-semibold text-white transition hover:bg-[#f1870b]"
          >
            Login
          </button>
        </form>

        {/* Secondary links */}
        <div className="mt-6 flex flex-col items-center gap-6 text-[12px]">
          <Link
            href="/forgot-password"
            className="text-[#ff7900] hover:underline"
          >
            Forgot password?
          </Link>

          <Link
            href="/signup"
            className="text-[#ff7900] hover:underline"
          >
            Sign up
          </Link>
        </div>
      </section>
    </main>
  );
}
