const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "Crispy lettuce, peppers, olives and feta cheese, garnished with crunchy garlic croutons.",
  },
  {
    title: "Bruschetta",
    price: "$7.99",
    description: "Grilled bread smeared with garlic and seasoned tomatoes, basil, and olive oil.",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "Authentic homemade lemon dessert with a sweet and tangy finish.",
  },
];

export default function Specials() {
  return (
    <section className="py-16 px-4 bg-[#edefee]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">This Week's Specials!</h2>
          <button className="bg-[#f4ce14] text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300">
            Online Menu
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {specials.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between">
              <div className="h-40 bg-gray-200 rounded-md mb-4" />
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-[#ee9972] font-medium">{item.price}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">{item.description}</p>
                <button className="text-sm font-semibold text-[#495e57] underline">
                  Order a delivery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
