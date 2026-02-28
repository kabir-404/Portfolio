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

        <p className="text-slate-400 leading-relaxed text-lg">
          I am a Frontend Engineer with over 3 years of experience building
          scalable, interactive web applications using React.js and modern
          frontend technologies. I specialize in crafting reusable component
          architectures and delivering pixel-perfect, responsive user
          interfaces.
        </p>

        <p className="text-slate-400 leading-relaxed text-lg mt-6">
          At Red Nucleus, I contributed to a proprietary React-based framework
          and developed 70+ interactive e-learning modules for enterprise
          clients in the life sciences domain. I focus on clean code,
          performance optimization, accessibility, and maintainable UI systems.
        </p>

        <p className="text-slate-400 leading-relaxed text-lg mt-6">
          I enjoy collaborating across teams, translating design systems into
          scalable implementations, and continuously improving development
          workflows using modern tools and AI-assisted development practices.
        </p>
      </div>
    </section>
  );
}

export default About;