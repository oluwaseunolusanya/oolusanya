export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto py-16 px-6 text-center md:text-left"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions. Feel free to reach out to me
        via email at{" "}
      </p>
      <a
          href="mailto:oj.olusanya@gmail.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
            Say Hello
        </a>
    </section>
  );
}