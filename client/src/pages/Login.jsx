import React from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Login form submitted");
    // You can add your authentication logic here, such as calling an API to verify credentials
    // Redirect to dashboard or another page upon successful login
    window.location.href = "/"; // Redirect to the dashboard
  }

  // Create a response login page for users to login to their account, or register if they don't have one
  return ( 
    <div className="login-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="login-box bg-white p-8 rounded-lg shadow-md w-full max-w-md h-screen">
        <h2 className="text-2xl font-bold mb-6 mt-6 text-center">Login to Your Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Username:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your username" />
          </div>
          <div>
            <label className="block text-gray-700">Password:</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600 transition duration-200">Login</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </p>
      </div>
    </div>
   );
}

export default Login;