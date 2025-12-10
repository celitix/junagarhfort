import Link from "next/link";
import HeroSection from "./components/hero";

export default function Home() {
  return (
   <>
   <HeroSection />
   
   {/*=== About Section ===*/}
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#d4a15a] mb-3">
          About Junagarh Fort
        </h2>

        {/* Divider line */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Bikaner fort Rajasthan is an age old heritage site. The Fort is one of
          the most looked after places to visit in Bikaner. India is a country
          of rich history and Rajasthan is the land of royal history of the
          country. The Bikaner fort was originally called Chintamani. This was
          renamed as the Junagarh and ‘Old fort’ around 20
          <sup>th</sup> century. The Bikaner fort is one amongst the massive
          Rajasthan forts that is not situated at an elevated hill top. The
          Beautiful and massive Bikaner fort is an important feather on the cap
          of Rajasthan Tourism in India.
          <Link
            href="/junagarh-fort-history"
            className="text-blue-600 hover:text-blue-800 ml-1 underline"
          >
            Read More..
          </Link>
        </p>
      </div>
    </section>
   </>
  );
}
