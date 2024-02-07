export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 mt-6">
      <div className="container mx-auto max-w-md p-6 ">
        <h1 className="text-2xl font-extrabold text mb-6 text-gray-200">
          Malawi Education Enhancement Program
        </h1>
        <p className="text-lg text-gray-300 mb-6 ">
          Expand your knowledge and understand complex lessons taught in class
          by watching videos, reading docs and practice quizez
        </p>

        <div className=" flex justify-between">
          <button className="bg-gray-800 text-gray-200 hover:text-white hover:cursor-pointer font-bold rounded-lg shadow-lg py-2 px-3">
            <a href="/login">Login</a>
          </button>

          <button className="bg-gray-800 text-gray-200 hover:text-white hover:cursor-pointer font-bold rounded-lg shadow-lg py-2 px-3">
            <a href="/register">Register</a>
          </button>
        </div>
      </div>
    </div>
  );
}
