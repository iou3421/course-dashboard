const Register = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <input type="text" placeholder="Name" className="w-full border p-2 mb-3 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 mb-3 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 mb-4 rounded" />
          <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
            Register
          </button>
        </div>
      </div>
    );
  };
  
  export default Register;
  