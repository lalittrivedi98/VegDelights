export default function Login() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="border p-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </form>
      </div>
    );
  }
  