import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
     <section className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#d4a15a] mb-4 mt-16">
          Bikaner Fort Architecture
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            If you are at Bikaner Rajasthan you are sure to lose your heart. The
            Bikaner fort architecture is so beautiful that your heart will long
            to stay back at Rajasthan. Bikaner Fort history is no exception. The
            Bikaner map is filled with monuments and places to visit. The
           <Link href="https://en.wikipedia.org/wiki/Culture_of_Rajasthan" target="_blank" rel="noopener noreferrer"> <span className="text-blue-600"> Rajasthani culture </span></Link>
            is old and historic. The monuments here have that special charm and
            beauty. The architecture and sculpturing is amazing. The
            craftsmanship is worth a vow. Rest cities too in Rajasthan share
            this feature. All the palaces, forts and temples in the state are
            mesmerizing and the truth behind them can be excavated through
            Bikaner history.
          </p>

          <p>
            The Junagarh fort architecture is a nice example of Mughal and
            Rajput architecture. The rulers of Bikaner had an influence of
           <Link href="https://en.wikipedia.org/wiki/Durbar_(court)" target="_blank" rel="noopener noreferrer"> <span className="text-blue-600"> Mughal court. </span></Link>
            The decoration they adopted is quite similar to the Mughals. The
            stone art, wall paintings, glass work, wooden ceilings all call for
            the rich culture. So Gujrati, Rajput and Mughal they all contributed
            to the final outcome of the Junagarh fort. The fort has 40 feet high
            and 14.5 wide strong walls. The fort has a perimeter of 1078 yards.
            The pillars and gates of the forts are hard rock and could never be
            trespassed by the enemies. This makes the fort stand proudly.
          </p>
        </div>

        {/* First Image */}
        <div className="flex justify-center mt-6">
          <div className="relative w-72 md:w-96 h-52 md:h-64 overflow-hidden rounded-lg group">
            <Image
              src="/assets/architecture1.jpg"
              alt="Bikaner Fort Architecture 1"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* More Paragraphs */}
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mt-6">
          <p>
            The Junagarh fort is amongst the world’s finest forts laid in the
            plains. The most unique thing about the fort is that it has been
            built by 16 consecutive generations and hence the fort’s
            architecture has varied phases. One cannot just tag the architecture
            under one style. It is a nice amalgamation of various forms of
            architecture. The styles of architecture is varied and complementing
            each other.
          </p>

          <p>
            It has seven parole (gates), nine attractive temples, 4 deep wells,
            some gardens, stables and barracks, jail, armory stone. All these
            were added by different rulers. The total area of fort is 163119 sq.
            yards. And hence it is impossible to describe the beauty of the fort
            through words. Pictures can help and it is suggested to see this
            unique fort. This monument will fill your heart with pride.
          </p>
        </div>

        {/* Second Image */}
        <div className="flex justify-center mt-6">
          <div className="relative w-72 md:w-96 h-52 md:h-64 overflow-hidden rounded-lg group">
            <Image
              src="/assets/architecture2.jpg"
              alt="Bikaner Fort Architecture 2"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page