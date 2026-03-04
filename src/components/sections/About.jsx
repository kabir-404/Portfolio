function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-b border-slate-800 scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-slate-400 leading-relaxed text-lg">I hold a B.Tech degree in Information Technology from Vishwakarma Institute of Information Technology, Pune (2022), and I am a Frontend Developer with 3+ years of experience building scalable and interactive web applications using JavaScript and React.js. I specialize in creating reusable component architectures and developing <span className="whitespace-nowrap">pixel-perfect</span>, responsive user interfaces.</p>

        <p className="text-slate-400 leading-relaxed text-lg mt-6">
          At Red Nucleus, a global company focused on the life sciences industry, I contributed to the development of a proprietary React-based framework and built 70+ interactive e-learning modules for enterprise clients. <span className="whitespace-nowrap">I implemented</span> responsive interfaces from design mockups using Tailwind CSS and developed dynamic UI components such as quizzes, modals, carousels, and video players. 
        </p>
        <p className="text-slate-400 leading-relaxed text-lg mt-6">
          My core stack includes React.js, JavaScript, Tailwind CSS, React Router DOM, Axios, and modern frontend tooling. I enjoy collaborating across teams, translating design systems into
          scalable implementations, and continuously improving development
          workflows.
        </p>
      </div>
    </section>
  );
}

export default About;