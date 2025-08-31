export default function Footer() {
  return (
    <footer className="text-center p-6 text-gray-600 border-t mt-12">
      <p>
        © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}