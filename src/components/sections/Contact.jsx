function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900 border-t border-slate-800 scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Connect
        </h2>

        <p className="text-slate-400 text-lg mb-12">
          I’m open to frontend engineering opportunities and impactful UI
          challenges. Feel free to reach out via email, phone, or LinkedIn.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* Email */}
          <a
            href="mailto:kchandrikapure@outlook.com"
            className="flex items-center justify-center gap-2 border border-slate-700 hover:border-indigo-500 px-8 py-3 rounded-lg text-sm font-medium transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            📧 Email
          </a>

          {/* Phone */}
          <a
            href="tel:+918446532079"
            className="flex items-center justify-center gap-2 border border-slate-700 hover:border-indigo-500 px-8 py-3 rounded-lg text-sm font-medium transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            📞 +91 8446532079
          </a>

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/kabir-chandrikapure-663331213"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-slate-700 hover:border-indigo-500 px-8 py-3 rounded-lg text-sm font-medium transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            🔗 LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;