import React from "react";

const Register = () => {
  return (
    <div className="login-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="login-box bg-white p-8 rounded-lg shadow-md w-full max-w-md h-screen">
        <h2 className="text-2xl font-bold mb-6 mt-6 text-center">Create Your Account</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please fill out the form below to create your account. Ensure your password meets the requirements.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Username:</label>
            <input type="username" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your username" required/>
          </div>
          <div>
            <label className="block text-gray-700">Password:</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1 mb-4" placeholder="Enter your password" required/>
            <ul className="password-instructions">
              <li className="text-sm text-gray-600">Must be at least 8 characters long</li>
              <li className="text-sm text-gray-600">Must contain at least one uppercase letter</li>
              <li className="text-sm text-gray-600">Must contain at least one lowercase letter</li>
              <li className="text-sm text-gray-600">Must contain at least one number</li>
            </ul>
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password:</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Confirm your password" required/>
          </div>
          <button type="submit" className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600 transition duration-200">Create Account</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;