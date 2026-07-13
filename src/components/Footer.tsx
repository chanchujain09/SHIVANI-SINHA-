export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 pb-12">
      <div className="w-full max-w-7xl mx-auto bg-text-dark text-white/60 py-5 px-8 rounded-full flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-mono uppercase tracking-widest shadow-xl">
        <span>© {new Date().getFullYear()} Shivani Sinha</span>
        <span className="mt-2 md:mt-0">Made with precision</span>
      </div>
    </footer>
  );
}
