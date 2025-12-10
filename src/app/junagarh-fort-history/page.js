import Image from 'next/image'
import Link from 'next/link'

   const page = () => {
     return (
      <section className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#d4a15a] mb-4 mt-16">
          Junagarh Fort History
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Junagarh fort Bikaner Rajasthan is an age old heritage site. The
            Junagarh Fort is one of the most looked after places to visit in
            Bikaner. India is a country of rich history and Rajasthan is the
            land of royal history of the country. The Bikaner fort was
            originally called Chintamani. This was renamed as the Junagarh and
            ‘Old fort’ around 20<sup>th</sup> century. The Bikaner fort is one
            amongst the massive Rajasthan forts that is not situated at an
            elevated hill top. The Beautiful and massive Bikaner fort is an
            important feather on the cap of Rajasthan Tourism in India.
          </p>

          <p>
            Forts in Rajasthan have their own history and story. The royal land
            of Rajasthan gave birth to so many rulers and kings. Every king and
            princely state has its own royal history. The things that remained
            common for all the rulers and kings of Rajasthan were their bravery,
            lavish lifestyle and extremely high class hospitality. Rajasthan is
            the land of hospitality. Palaces and forts had their own specific
            needs. The forts were supposed to safeguard the province from
            foreign invasion. These are fortified constructions usually mortar
            was used for this purpose. Walls and trenches that surround these
            forts are huge and utterly strong. They are high enough and strong
            enough.
          </p>

          <p>
            The rulers of Bikaner have contributed to the royal history of
            India. The Bikaner fort resulted to be a marvelous example of
           <Link href="/bikaner-fort-architecture" target="_blank" rel="noopener noreferrer"><span className="text-blue-600"> architecture </span></Link>and great
            center of art. The amazing construction took several years to
            complete. As per the architecture of other Rajasthan forts, the
            Bikaner fort is also massively built to avoid attacks and capturing
            of provinces. The inside architecture and the manual beautiful art
            that has been done on the walls and ceilings of the fort. The inside
            of the fort consists of several sections. The palaces and temples
            constructed inside the fort are buildup of red sandstones and
            marble. The balconies and the jharokhas that are built inside the
            fort are beautiful. The courtyards are spacious, huge and
            picturesque.
          </p>
        </div>


        {/* Images */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
  <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-lg group">
    <Image
      src="/assets/history1.jpg"
      alt="Junagarh Fort Image 1"
      fill
      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
  </div>
  <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-lg group">
    <Image
      src="/assets/history2.jpg"
      alt="Junagarh Fort Image 2"
      fill
      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
  </div>
  <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-lg group">
    <Image
      src="/assets/history3.jpg"
      alt="Junagarh Fort Image 3"
      fill
      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
    />
  </div>
</div>


        {/* Caption paragraph */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
          The Junagarh fort Bikaner Rajasthan consists of seven gates. The gates
          are referred to as ‘Pol’. Karan pol, Suraj pol, daulat pol and chand
          pol are some of the names. The suraj pol is east facing and hence has
          the name as per sun light’s availability. Palaces are named as karan
          mahal, phool mahal, anup mahal and badal mahal. Every palace inside
          the fort has its specific requirement. The Junagarh fort also has a
          museum. The museum consists of lots of antique and unique articles and
          paintings. While looking forward to Rajasthan tourism the Junagarh
          fort is one of the best places to visit in
          <Link href="https://en.wikipedia.org/wiki/Bikaner" target="_blank" rel="noopener noreferrer"><span className="text-blue-600"> Bikaner</span>.</Link>
        </p>
      </div>
    </section>
     )
   }
   
   export default page