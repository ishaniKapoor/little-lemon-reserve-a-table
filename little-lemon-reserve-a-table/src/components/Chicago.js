export default function Chicago() {
    return (
      <section style={{ padding: "4rem 2rem", backgroundColor: "#ffffff" }}>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#495E57" }}>Little Lemon</h2>
            <h3 style={{ fontSize: "1.25rem", textTransform: "uppercase", margin: "1rem 0", fontWeight: "700" }}>
              Chicago
            </h3>
            <p style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>
              About us: Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.
              We are passionate about fresh ingredients and delivering authentic flavor with every dish.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Little Lemon Restaurant"
            style={{
              borderRadius: "16px",
              flex: "1 1 300px",
              maxWidth: "300px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
            }}
          />
        </div>
      </section>
    );
  }
  