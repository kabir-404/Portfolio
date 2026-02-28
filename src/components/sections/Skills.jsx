const skills = [
  "React",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Vite",
  "Git & GitHub",
  "Responsive Design",
];

function Skills() {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-slate-800 rounded-full text-sm border border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;