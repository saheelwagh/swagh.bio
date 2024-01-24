import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hero">
        <div className="text-6xl">I write therefore I am <span className="text-green-500">Happy</span></div>
        <div className="text-3xl">I code therefore I am not <span className="text-yellow-200">Hungry</span></div>
      </div>
      <div className="intr-list">
        <div className="underline">A collection of my interests</div>
        <ul className="list-none">
          <li><a href="">Work : My agency</a></li>
          <li><a href="">Writing : My blog</a></li>
          <li><a href="">Design : My case studies</a></li>
          <li><a href="">My hobbies</a></li>
        </ul>
      </div>
    </main>
  );
}
