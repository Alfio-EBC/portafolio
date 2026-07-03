import {
  Palette,
  Accessibility,
  PenTool,
  Code2,
  Atom,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      icon: <Palette className="w-10 h-10 text-green-500" />,
      title: "UI/UX",
    },
    {
      icon: <Accessibility className="w-10 h-10 text-green-500" />,
      title: "Accessibility",
    },
    {
      icon: <PenTool className="w-10 h-10 text-green-500" />,
      title: "Prototyping",
    },
    {
      icon: <Code2 className="w-10 h-10 text-green-500" />,
      title: "Front-End",
    },
    {
      icon: <Atom className="w-10 h-10 text-green-500" />,
      title: "React",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-5xl font-bold mb-14 text-white">
        Habilidades
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-white hover:border-green-500 hover:shadow-lg transition-all duration-300"
          >
            {skill.icon}
            <span className="font-medium text-lg text-white">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;