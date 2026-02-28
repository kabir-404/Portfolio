import { experience } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-900 scroll-mt-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        <div className="space-y-10">
          {experience.map((job, index) => (
            <div
              key={index}
              className="border border-slate-800 rounded-xl p-6 bg-slate-950"
            >
              <h3 className="text-xl font-semibold text-indigo-500">
                {job.role}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {job.company} • {job.duration}
              </p>

              <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;