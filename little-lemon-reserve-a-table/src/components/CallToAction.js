export default function CallToAction() {
  return (
    <section className="bg-[#495e57] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-medium mb-4">Little Lemon</h1>
          <h2 className="text-2xl font-semibold text-[#f4ce14] mb-2">Chicago</h2>
          <p className="text-lg mb-6">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="bg-[#f4ce14] text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300">
            Reserve a Table
          </button>
        </div>
        <div className="w-full h-64 bg-gray-200 rounded-lg"> {/* Replace with actual image later */}
          <span className="sr-only">Hero Image</span>
        </div>
      </div>
    </section>
  );
}
