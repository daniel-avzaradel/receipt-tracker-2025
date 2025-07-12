import Link from "next/link";

export default function Home() {

  const linkVideo = "https://www.youtube.com/watch?v=-2yUgcBqgSM&list=PLXE2Bj4edhg7wF-6TEeBRNS67VweiyLCi1:24:00"

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-4">Home</h1>
      <Link href={linkVideo} className="text-blue-400" target="_blank" rel="noopener noreferrer">1:24:00</Link>
    </div>
  );
}
