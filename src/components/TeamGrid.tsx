// Guys for the 'none' just add the URL of the image. Add yo shi to the public folder. I OBVIOUSLY forgot a bunch of names so yeah
const teamSections: {
  title: string;
  members: [string, string][];
}[] = [
  {
    title: "Computer Science Team",
    members: [
      ["Eddie", "none"],
      ["Darren", "none"],
      ["Caden", "none"],
    ],
  },
  {
    title: "Physics Team",
    members: [
      ["Moiz", "none"],
      ["Parth", "none"],
      ["Arjun", "none"],
    ],
  },
  {
    title: "Math Team",
    members: [
      ["Adham", "none"],
      ["Shawn", "none"],
    ],
  },
];

export function TeamGrid() {
  return (
    <div className="mt-12 max-w-5xl mx-auto flex flex-col gap-16 md:flex-row md:gap-20">
      {teamSections.map(({ title, members }) => (
        <section key={title} className="flex-1">
          <h3 className="text-white text-xl font-semibold mb-6 text-center">
            {title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {members.map(([name, photoUrl], index) => (
              <div key={name + index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0, 130, 54, 0.25) 0%, rgba(0, 102, 41, 0.25) 30%, transparent 100%)",
                      padding: "2px",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-xl relative"
                      style={{ backgroundColor: "#001002" }}
                    >
                      {photoUrl !== "none" && (
                        <img
                          src={photoUrl}
                          alt={name}
                          className="w-full h-full object-cover rounded-xl"
                          draggable={false}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-white text-sm font-medium">{name}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
