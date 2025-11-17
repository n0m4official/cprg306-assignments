"use client";

import "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context.js";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error("GitHub Sign-In Error:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold mb-6">CPRG 306 Shopping List</h1>

        {!user ? (
          <>
            <p className="text-gray-600 mb-4">
              Please sign in with GitHub to continue.
            </p>
            <button
              onClick={handleLogin}
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-5 py-2 rounded-lg transition"
            >
              Login with GitHub
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">
              Welcome, <strong>{user.displayName}</strong>
              <br />
              <span className="text-sm text-gray-500">{user.email}</span>
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/week-9/shopping-list"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
