export default function Contact() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-black font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-xl text-black">Name</label>
            <input type="text" className="border rounded border-black bg-white p-2 w-full text-black" />
          </div>
          <div className="mb-4">
            <label className="block text-xl text-black">Email</label>
            <input type="email" className="border rounded border-black bg-white p-2 w-full text-black" />
          </div>
          <div className="mb-4">
            <label className="block text-xl text-black">Message</label>
            <textarea className="border rounded border-black bg-white p-2 w-full text-black"></textarea>
          </div>
          <button type="submit" className="bg-green-800 text-white px-6 py-4 rounded">Send</button>
        </form>
      </div>
    );
  }
  