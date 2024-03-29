import Link from "next/link";

export default function About() {
  return (
    <section>
      <h3 className="text-4xl font-bold mb-8">About</h3>
      <div className="text-xl">
        <p className="mb-4">Hello! I&apos;m Benjamin.</p>
        <p className="mb-4">
          I have interests in machine learning (ML), web development, and
          software development in general.
        </p>
        <p className="mb-4">
          Below are some of my projects. Click on each one to learn more. Feel
          free to check out my{" "}
          <Link href="https://github.com/bvsam/" className="underline">
            Github
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
