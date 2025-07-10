const testimonials = [
  {
    name: "Emily R.",
    image: "https://via.placeholder.com/100",
    rating: 5,
    comment: "Amazing food and excellent service!"
  },
  {
    name: "John D.",
    image: "https://via.placeholder.com/100",
    rating: 4,
    comment: "Lovely ambiance and great value."
  },
  {
    name: "Priya S.",
    image: "https://via.placeholder.com/100",
    rating: 5,
    comment: "One of the best dining experiences I've had!"
  }
];

export default function CustomersSay() {
  return (
    <section style={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
      <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem", fontWeight: "800" }}>
        Testimonials
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {testimonials.map((customer, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "16px",
              width: "250px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center"
            }}
          >
            <img
              src={customer.image}
              alt={customer.name}
              style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "1rem" }}
            />
            <h4 style={{ fontSize: "1.125rem", fontWeight: "bold" }}>{customer.name}</h4>
            <p style={{ color: "#F4CE14", margin: "0.5rem 0" }}>{"⭐".repeat(customer.rating)}</p>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>"{customer.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
