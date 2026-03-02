import kabir from "../../assets/kabir.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-indigo-500">Kabir Chandrikapure</span>
          </h1>

          <p className="text-slate-400 text-lg mb-8">
            Frontend Engineer with 3+ years of experience building scalable
            React-based applications and interactive learning systems.
          </p>

          <div className="flex gap-4">
            <a
              href="#experience"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-sm transition"
            >
              View Experience
            </a>

            <a
              href="#contact"
              className="border border-slate-700 hover:border-indigo-500 px-6 py-3 rounded-lg text-sm transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center relative">
        <div className="absolute w-80 md:w-96 h-80 md:h-96 bg-indigo-600/20 blur-3xl rounded-full"></div>
        
        <img
            src={kabir}
            alt="Kabir Chandrikapure"
            className="relative w-80 md:w-96 h-auto object-contain rounded-2xl border border-slate-800"
        />
        </div>
      </div>
    </section>
  );
}

export default Hero;