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
          Junagarh Fort Bikaner Timings
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Like every good thing The Junagarh Fort Bikaner too come with the
            time limits. The best amongst the Bikaner forts the Junagarh fort is
            open for visitors from morning{" "}
            <span className="font-semibold text-gray-900">10 AM to 4 PM.</span>{" "}
            The junagarh fort timings remains same all time. Bikaner is a city
            that can be visited all the year round. The only thing to be taken
            in consideration is the temperature. The most preferred time to
            visit Bikaner should be October to March. The city is visited for
            various purposes.
          </p>

          <p>
            <span className="font-semibold text-gray-900">October to March</span>{" "}
            – as it sounds, this is the best temperature controlled period.
            Neither summer nor winter. The pleasant weather allows you to roam
            around and visit all outdoor sites. Forts and palaces welcome you at
            this period.
          </p>

          <p>
            <span className="font-semibold text-gray-900">March to June</span> –
            needless to say this period will witness the worst of heat in the
            city of Bikaner. The scorching heat might not be bearable but still
            some enthusiasts choose this period because of the lesser crowded
            places. Considering the heat of summers in Rajasthan the influx of
            tourist is lesser at this period.
          </p>

          <p>
            The Junagarh fort in Bikaner Rajasthan is a well maintained fort
            till date. This fort is like a gem in the{" "}
           <Link href="/junagarh-fort-history" target="_blank" rel="noopener noreferrer"> <span className="text-blue-600">history</span></Link> and{" "}
           <Link href="/bikaner-fort-architecture" target="_blank" rel="noopener noreferrer"> <span className="text-blue-600">architecture</span></Link> of Rajasthan.
            The beauty of this fort is captured in camera by numerous visitors
            but what the eyes can see and the soul can feel cannot be described.
            The tourism industry and the Junagarh Fort Bikaner tourism are well
            linked. The discounts and gateways offered by the premium hotels
            during the peak seasons are attractive. One can avail such offers
            through various online sites and with travel agents too.
          </p>
        </div>

        {/* Images Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6">
          {/* Left Image */}
          <div className="relative w-full md:w-1/2 h-60 overflow-hidden rounded-lg group">
            <Image
              src="/assets/timing1.jpg"
              alt="Junagarh Fort Bikaner View 1"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full md:w-1/2 h-60 overflow-hidden rounded-lg group">
            <Image
              src="/assets/timing2.jpg"
              alt="Junagarh Fort Bikaner View 2"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Last Paragraph */}
        <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
          A visit to city of Bikaner cannot be complete without a camel ride.
          The Camel festival held every year in January attracts lots of
          foreigners and camel traders to visit the city. The camel rides are
          subject to be limited by time. There is nothing called a good time.
          It’s all in a heart that wants to roam around.
        </p>
      </div>
    </section>
    </>
  )
}

export default page