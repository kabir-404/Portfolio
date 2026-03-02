function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800 bg-slate-950">
      <div className="max-w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        
        <p>
          © {new Date().getFullYear()} Kabir Chandrikapure's Portfolio. All rights reserved.
        </p>

        <p className="mt-3 md:mt-0">
          Built with React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;