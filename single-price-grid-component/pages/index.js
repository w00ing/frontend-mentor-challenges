import Head from "next/head";

export default function Home() {
  return (
    <div className="py-10 px-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="rounded-lg overflow-hidden md:w-2/4 mx-auto lg:w-1/3">
        <section className="p-8 bg-white">
          <h1 className="text-xl text-teal-600 font-semibold">Join our community</h1>
          <h2 className="text-yellow-600 font-semibold pt-4">30-day hassle-free money back guarantee</h2>
          <p className="pt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint odit, libero placeat facere asperiores eos cumque qui, laborum labore atque iste. Velit aperiam labore omnis, officia
            asperiores illum nemo?
          </p>
        </section>
        <section className="text-white md:flex md:flex-row">
          <div className="bg-teal-500 p-8 md:w-1/2">
            <h2 className="text-lg font-semibold">Money Subscription</h2>
            <div className="flex items-center pt-2">
              <p className="text-2xl font-semibold">$29</p>
              <p className="ml-2 font-thin">per month</p>
            </div>
            <p className="font-light text-sm">Full access for less than $1 a day</p>
            <button className="bg-yellow-600 w-full shadow-md text-white font-bold py-2 px-4 rounded mt-6">Sign Up</button>
          </div>
          <div className="bg-teal-400 p-8 md:w-1/2">
            <h2 className="font-semibold text-lg">Why Us</h2>
            <div className="text-xs font-light pt-2">
              <p>Tutorials by industry experts</p>
              <p>Coding exercises Access</p>
              <p>Peer & expert code review</p>
              <p>Access to our Github repos</p>
              <p>Community forum</p>
              <p>Flashcard decks</p>
              <p>New videos every week</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
