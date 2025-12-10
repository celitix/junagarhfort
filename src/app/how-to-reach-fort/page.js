import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <section className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#d4a15a] mb-4 mt-16">
          Directions Of Junagarh Bikaner Rajasthan
        </h2>

        {/* Text content */}
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Bikaner Rajasthan is a wonderful land, a beautiful city and is
            famous for temples, palaces, carved jharokas and bikaneri bhujia.
            Bikaner is situated in the northern part of the huge state. It
            shares its borders with the desert cities like Jaisalmer and
            Jodhpur. These three cities form a triangle that covers the Thar
            Desert. Further the{" "}
           <Link href="https://en.wikipedia.org/wiki/Aravalli_Range" target="_blank" rel="noopener noreferrer"> <span className="text-blue-600">Aravali mountain range</span></Link>{" "}
            beautifies this city. Ancient monuments and mouth-watering food is
            the main source of attraction to tourists in Bikaner Rajasthan.
          </p>

          <p>
            Firstly one needs to reach the city of Bikaner to see the beautiful{" "}
           <Link href="/" > <span className="text-blue-600">Junagarh fort</span></Link>. The city of
            Bikaner is easily accessible from all the major cities like Delhi,
            Kolkata, Agra, and Jaipur.
          </p>

          <p>
            <span className="font-semibold">By air –</span> the airport is
            located around 13 kilometers west of Bikaner in the Indian state of
            Rajasthan.
          </p>

          <p>
            <span className="font-semibold">By train –</span> all major cities
            are well connected to the city of Bikaner and trains are a
            convenient mode of travelling in India.
          </p>

          <p>
            <span className="font-semibold">By road –</span> National highway 11,
            15 and 89 link the city of Bikaner to the major cities. Buses,
            personal vehicles and other modes of transport are all available for
            the travel.
          </p>
        </div>

        {/* Images row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6">
          <div className="relative w-full md:w-1/2 h-60 overflow-hidden rounded-lg group">
            <Image
              src="/assets/reach1.jpg"
              alt="Junagarh Fort Bikaner View 1"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative w-full md:w-1/2 h-60 overflow-hidden rounded-lg group">
            <Image
              src="/assets/reach2.jpg"
              alt="Junagarh Fort Bikaner View 2"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Final Paragraphs */}
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-6">
          <p>
            Once you reach the historical city, you can choose a place of your
            choice to stay. The entire city of Bikaner welcomes you with its
            heartwarming hospitality. The hot climate adds to the flavor of
            Rajasthan. The various monuments of Bikaner await your arrival.
          </p>

          <p>
            The local buses, auto-rickshaws and other cab facilities take you to
            the majestic Bikaner fort. The tourism department of Rajasthan has
            taken efforts to provide buses and trains dedicatedly running for
            the <Link href="https://en.wikipedia.org/wiki/Tourism_in_Rajasthan" target="_blank" rel="noopener noreferrer"> <span className="text-blue-600">Rajasthan tourism</span></Link>. These
            buses and trains take passengers to the dedicated monuments and
            historical cities. Local city buses also take the responsibility of
            dropping you at the door step of the fort.
          </p>

          <p>
            Your stay at Bikaner can be coupled with the mouthwatering Bikaner
            flavors of snacks and Indian savory. Enjoy your stay and travel in
            the most historic state of India and take back memories and essence
            of hospitality.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default page