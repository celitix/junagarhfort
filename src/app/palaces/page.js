import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#d4a15a] mb-6 mt-16">
          Junagarh Bikaner Residing Palaces
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 leading-relaxed mb-6">
          The beautiful Junagarh Bikaner fort has many palaces constructed inside the fort. These
          are palaces that were built beautifully. Each fort was built with an aim. The palaces
          inside the Junagarh fort have been named and made with specific visions. All of them are
          wonderful and beautifully hand crafted. The amazing wall decoration that is done consists
          of beautiful colors and mirror work. The ceilings are even more attractive and they take
          you to an entirely different world of imagination. The parts and sections of the fort were
          built to amaze the viewers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Huge sandstone walls are strong and reflect the strength of the Bikaner ruler. The tourism
          industry and the Junagarh Bikaner tourism are well linked. The beauty of the forts inside
          reflects the beauty of the culture of Bikaner. The fort is well maintained. Raja Rai Singh
          ji built this fort and today it stands as an epic monument.
        </p>

        {/* === Karan Mahal === */}
        <div className="mb-12">
          <h3 className="text-orange-700 font-semibold mb-2">
            KARAN MAHAL (PUBLIC AUDIENCE HALL)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Karan mahal was built by Karan Singh in c.1680 to mark his victory over the{" "}
           <Link href="https://en.wikipedia.org/wiki/Aurangzeb" target="_blank" rel="noopener noreferrer"> <span className="text-blue-700">Mughal Emperor Aurangzeb</span></Link>. It is considered as one
            of the most exquisite palaces built with gardens, which displays the aesthetic
            sensibilities of the royalty of Rajasthan. It has stained glass windows and intricately
            carved balconies built in stone and wood fluted columns. Later Rajas, Anup Singh and
            Surat Singh, also added a lot of glitter to this palace with inlaid polychrome glass,
            intricate mirror patterns, and red and gold paint. In the coronation chamber, there is a
            throne up above, which was used as a throne.
          </p>
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src="/assets/karanmahal.jpg"
                alt="Karan Mahal"
                width={300}
                height={200}
                className="rounded-md object-cover mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">Karan Mahal</p>
            </div>
          </div>
        </div>

        {/* === Phool Mahal === */}
        <div className="mb-12">
          <h3 className="text-orange-700 font-semibold mb-2">
            PHOOL MAHAL (FLOWER PALACE)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            As the name suggests this palace is based on floral decoration and the architecture
            revolves around flowers, leaves and vases and sprinklers. The palace is a symbol of
            Jahangir’s ruling period.
          </p>
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src="/assets/phoolmahal.png"
                alt="Phool Mahal"
                width={300}
                height={200}
                className="rounded-md object-cover mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">Phool Mahal</p>
            </div>
          </div>
        </div>

        {/* === Anup Mahal === */}
        <div className="mb-12">
          <h3 className="text-orange-700 font-semibold mb-2">ANUP MAHAL</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Multi-storey structure Anup Mahal was used for admin purpose. Italian tiles, wooden
            floor, windows and balconies are the main attraction.
          </p>
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src="/assets/anupmahal.png"
                alt="Anup Mahal"
                width={300}
                height={200}
                className="rounded-md object-cover mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">Anup Mahal</p>
            </div>
          </div>
        </div>

        {/* === Chandra Mahal === */}
        <div className="mb-12">
          <h3 className="text-orange-700 font-semibold mb-2">CHANDRA MAHAL</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gold plated decoration of this palace makes it more lavish. It is the most luxurious of
            all palaces. The palace has such aligned mirrors that the kings could see anything
            entering his area from his bed.
          </p>
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src="/assets/chandramahal.png"
                alt="Chandra Mahal"
                width={300}
                height={200}
                className="rounded-md object-cover mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">Chandra Mahal</p>
            </div>
          </div>
        </div>

        {/* === Badal Mahal === */}
        <div>
          <h3 className="text-orange-700 font-semibold mb-2">
            BADAL MAHAL (WEATHER PALACE)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The palace was built for the commencement of rains and good weather in the desert area
            of <Link href="https://en.wikipedia.org/wiki/Rajasthan" target="_blank" rel="noopener noreferrer"> <span className="text-blue-700">Rajasthan</span></Link>. The palace is built with beautiful
            and cooling white and blue colors. It was aimed to induce rains.
          </p>
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src="/assets/badalmahal.png"
                alt="Badal Mahal"
                width={300}
                height={200}
                className="rounded-md object-cover mx-auto"
              />
              <p className="text-sm text-gray-600 mt-2">Badal Mahal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page