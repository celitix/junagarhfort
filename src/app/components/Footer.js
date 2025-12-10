import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Dummy Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-yellow-500">Junagarh Fort</div></Link>
          <p className="text-gray-300 text-base ">
           Experience the rich heritage and architectural grandeur of Bikaner’s iconic Junagarh Fort, a masterpiece that has never fallen to invasion. Discover a stunning fort renowned for its ornate palaces, intricate carvings, and a history that has stood the test of time through centuries.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/junagarh-bikaner-fort-and-the-bazaar" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-yellow-500 transition leading-snug">
               Junagarh Bikaner Fort and the Bazaar!
              </p>
            </Link>

            <Link href="/blog/5-majestic-forts-in-rajasthan" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-yellow-500 transition leading-snug">
            5 Majestic Forts in Rajasthan
              </p>
            </Link>

            <Link href="/blog/things-to-know-before-you-visit-junagarh-fort" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog3.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-yellow-500 transition leading-snug">
                Things to know before you visit Junagarh Fort
              </p>
            </Link>

             <Link href="/blog/bikaner-darshan-a-city-surrounded-by-desert" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog4.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-yellow-500 transition leading-snug">
           Bikaner Darshan – A City surrounded by Desert
              </p>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/mettur-dam-history" className="hover:text-yellow-500 transition">History</Link></li>
            <li><Link href="/bikaner-fort-architecture" className="hover:text-yellow-500 transition">Architecture</Link></li>
            <li><Link href="/junagarh-fort-bikaner-timings" className="hover:text-yellow-500 transition">Timings</Link></li>
            <li><Link href="/palaces-in-junagarh-fort" className="hover:text-yellow-500 transition">Palaces</Link></li>
            <li><Link href="/how-to-reach" className="hover:text-yellow-500 transition">How to reach</Link></li>
            <li><Link href="/blog" className="hover:text-yellow-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7044.164406131369!2d73.3133827729873!3d28.021963258531922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd798ad1841f%3A0x9356163efda8b9d6!2sJunagarh%20Fort!5e0!3m2!1sen!2sus!4v1762231424791!5m2!1sen!2sus" 
           
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
