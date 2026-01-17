import projects from "../data/projects.json";

type Feature = {
  imageSrc: string;
  title: string;
  description: string;
  tryMeLink: string;
};

const AlternatingProjects = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
      }}
    >
      {projects.map((item: Feature, index: number) => {
        const isFlipped = index % 2 !== 0;

        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: isFlipped ? "row-reverse" : "row",
              alignItems: "center",
              gap: "3rem",
              border: "1px solid black",
              padding: "2rem",
            }}
          >
            {/* Make the image bigger */}
            <img
              src={item.imageSrc}
              alt={item.title}
              style={{
                width: "60%",       // image takes 60% of the row
                maxWidth: "700px",  // allow it to grow
                height: "auto",     // keep aspect ratio
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />

            {/* Text area */}
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {item.title}
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                {item.description}
              </p>

              <a href={item.tryMeLink}>
                <button
                  style={{
                    padding: "0.8rem 1.5rem",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  Try me
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlternatingProjects;
