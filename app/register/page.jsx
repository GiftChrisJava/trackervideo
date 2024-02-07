"use client";
export default function page() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mx-auto max-w-sm mt-24">
      <form action="../auth/signup" method="post" className="flex flex-col">
        <label
          htmlFor="email"
          className="block text-gray-200 font-bold text-lg"
        >
          Email
        </label>
        <input
          required
          type="text"
          name="email"
          id="email"
          className="p-2 mb-3 text-gray-800 rounded w-full focus:outline-none focus:shadow-lg"
        />
        <label
          htmlFor="password"
          className="block text-gray-200 font-bold text-lg"
        >
          Password
        </label>
        <input
          required
          type="password"
          name="password"
          id="password"
          className="p-2 text-gray-800 rounded w-full focus:outline-none focus:shadow-lg"
        />
        <div className=" flex justify-between mt-8">
          <button className="bg-gray-800 text-gray-200 border border-gray-400 hover:text-gray-600 hover:cursor-pointer font-bold rounded-lg shadow-xl py-2 px-3">
            Sign Up
          </button>

          <p className="text-gray-300 hover:text-gray-400 hover:cursor-pointer rounded-lg py-2 px-3 hover:border hover:border-gray-200">
            <a href="/login">Already have an account</a>
          </p>
        </div>
      </form>
    </div>
  );
}
