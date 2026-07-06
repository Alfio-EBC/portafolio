import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-commerce Redesign",
      image: "/images/ecommerce.jpg",
      short: "Modern shopping experience.",
      description:
        "Complete redesign of an e-commerce platform focused on usability, accessibility, responsive design, user flows, wireframes, and high-fidelity prototypes created in Figma.",
    },
    {
      title: "Banking Mobile App",
      image: "/images/banking.jpg",
      short: "Mobile banking experience.",
      description:
        "Designed an intuitive banking application with simplified navigation, interactive prototypes, and accessibility improvements for all users.",
    },
    {
      title: "Healthcare Dashboard",
      image: "/images/healthcare.jpg",
      short: "Medical dashboard.",
      description:
        "Responsive dashboard designed for healthcare professionals with data visualization, user research, and usability testing.",
    },
    {
      title: "Education Platform",
      image: "/images/education.jpg",
      short: "Learning platform.",
      description:
        "UX research, information architecture, and responsive interfaces for an online education platform.",
    },
    {
      title: "Task Manager",
      image: "/images/tasks.jpg",
      short: "Productivity application.",
      description:
        "Task management application including user journey, wireframes, design system, and interactive prototypes.",
    },
    {
      title: "Corporate Website",
      image: "/images/corporate.jpg",
      short: "Responsive website.",
      description:
        "Corporate website focused on branding, accessibility, responsive layouts, and improving the customer experience.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 "
    >
     <div className="container mx-auto px-6">


        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Selected UI/UX projects focused on creating accessible,
            user-centered, and visually engaging digital experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.short}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white transition"
                >
                  View Project
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Modal */}

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">

          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full overflow-hidden relative">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-5 text-white text-3xl"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mt-5 leading-8">
                {selectedProject.description}
              </p>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Projects;