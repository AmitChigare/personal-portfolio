import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Image from "next/image";
import ShinyButton from "@/components/magicui/shiny-button";
import WordRotate from "@/components/magicui/word-rotate";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

const BackgroundGradient = () => {
  return (
    <>
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3a8bff,#b73fff)] dark:bg-[radial-gradient(circle_at_50%_120%,#000,#1a1a1a)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#00ff8c,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,#004d29,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff3d00,transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_50%,#4d1200,transparent_50%)] animate-pulse delay-75" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 -z-40 bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Noise texture */}
      <div className="fixed inset-0 -z-30 opacity-30 mix-blend-overlay dark:opacity-20">
        <div className="absolute inset-0 bg-[url(/noise.svg)] animate-noise" />
      </div>

      {/* Glass overlay */}
      <div className="fixed inset-0 -z-20 backdrop-blur-[100px]" />
    </>
  );
};

export default function Page() {
  return (
    <main className="relative flex flex-col min-h-[100dvh]">
      <BackgroundGradient />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-16">
        <div className="mt-4 absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-900 dark:from-blue-950 dark:to-purple-950 rounded-tl-2xl rounded-tr-2xl" />

        <BlurFade
          delay={BLUR_FADE_DELAY}
          className="relative z-10 text-center space-y-8 py-12 px-4 rounded-2xl"
        >
          <Avatar className="size-32 mx-auto border-4 border-white/50 dark:border-white/20 hover:scale-110 transition-all duration-300">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="animate-slideInFromLeft">
            <BlurFadeText
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 dark:from-blue-300 dark:to-purple-400"
              text={`Hey, Im ${DATA.name.split(" ")[0]} 👋🏻`}
            />
          </div>
          <div className="animate-slideInFromRight">
            <WordRotate
              className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 dark:from-yellow-300 dark:via-pink-400 dark:to-purple-500"
              words={[
                "Living my 20s to the fullest",
                "Wanna have a trip with me?",
                "Car with a need for speed",
                "Living and breathing football",
                "Building the future with code",
              ]}
            />
          </div>
        </BlurFade>
      </section>

      {/* Automotive Passion Section */}
      <section className=" relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900 dark:from-purple-950 dark:to-blue-950" />
        <BlurFade
          delay={BLUR_FADE_DELAY * 2}
          className="relative container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 dark:from-orange-300 dark:to-red-400 mb-8 text-center">
            Living Life Quarter Mile at a Time
          </h2>
          <div className="flex justify-center">
            <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10 space-y-4 hover:scale-105 transition-all duration-300 max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400">
                My Dreams - JDM Dreams
              </h3>
              <p className="text-sm md:text-base text-white/70 dark:text-white/50 leading-relaxed">
                The Toyota Supra MK4 isnt just a car - its automotive
                perfection. That legendary 2JZ-GTE engine, capable of handling
                insane power levels while staying reliable, is engineering at
                its finest. Every time I hear that twin-turbo spool up in
                videos, its pure music. The fact that it was Paul Walkers ride
                in Fast & Furious just adds to its legendary status. One day,
                Ill have my own black Supra, making that sweet turbo music.
              </p>
              <BlurFadeText
                className="text-xs md:text-sm text-white/50 dark:text-white/30 italic"
                text="If youre gonna race, race a proper car. - Smokey Nagata"
              />
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Football Passion Section */}
      <section className=" relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-indigo-900 dark:from-blue-950 dark:to-indigo-950" />
        <BlurFade
          delay={BLUR_FADE_DELAY * 3}
          className="relative container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-300 dark:to-blue-400 mb-8 text-center">
            Football is More Than Just a Game
          </h2>
          <div className="flex justify-center">
            <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10 space-y-4 hover:scale-105 transition-all duration-300 max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400">
                My Idiol - The CR7 Effect
              </h3>
              <p className="text-sm md:text-base text-white/70 dark:text-white/50 leading-relaxed">
                Watching Cristiano Ronaldo isnt just watching football - its
                witnessing determination personified. That iconic 40-yard
                thunderbolt against Porto, the gravity-defying header against
                Sampdoria, the nerveless penalty against Juventus in the 93rd
                minute - these moments shaped my understanding of what mental
                strength truly means. His journey from Madeiras narrow streets
                to becoming footballs greatest goalscorer shows that with
                relentless work ethic and unwavering self-belief, no dream is
                too big.
              </p>
              <BlurFadeText
                className="text-xs md:text-sm text-white/50 dark:text-white/30 italic"
                text="Your love makes me strong, your hate makes me unstoppable. - CR7"
              />
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Photography Section */}
      <section className=" relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900 dark:from-indigo-950 dark:to-purple-950" />
        <BlurFade
          delay={BLUR_FADE_DELAY * 4}
          className="relative container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500 dark:from-pink-300 dark:to-red-400 mb-8 text-center">
            Through My Lens
          </h2>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-sm md:text-base text-white/70 dark:text-white/50 leading-relaxed text-center">
              Photography lets me freeze moments in time and tell stories
              through visuals. From urban landscapes to automotive shots, I love
              capturing the beauty in everyday scenes. If you enjoy my
              photography style, check out my curated collection on{" "}
              <Link
                href={DATA.contact.social.Instagram.url}
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Instagram highlights
              </Link>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <BlurFade
              delay={BLUR_FADE_DELAY * 5}
              className="aspect-square relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="/iiit.webp"
                alt="Urban Landscape"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 to-purple-600/70 dark:from-pink-600/70 dark:to-purple-700/70 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BlurFadeText
                  className="text-base md:text-xl font-bold text-white dark:text-white/90"
                  text="Urban Landscapes"
                />
              </div>
            </BlurFade>
            <BlurFade
              delay={BLUR_FADE_DELAY * 5.2}
              className="aspect-square relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
                alt="Automotive Photography"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 to-green-600/70 dark:from-blue-600/70 dark:to-green-700/70 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BlurFadeText
                  className="text-base md:text-xl font-bold text-white dark:text-white/90"
                  text="Automotive"
                />
              </div>
            </BlurFade>
            <BlurFade
              delay={BLUR_FADE_DELAY * 5.4}
              className="aspect-square relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1675787835595-b8a679420fab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11bWJhaSUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Street Photography"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-red-600/70 dark:from-orange-600/70 dark:to-red-700/70 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BlurFadeText
                  className="text-base md:text-xl font-bold text-white dark:text-white/90"
                  text="Street Life"
                />
              </div>
            </BlurFade>
          </div>
        </BlurFade>
      </section>

      {/* Adventure Section */}
      <section className=" relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900 dark:from-purple-950 dark:to-blue-950" />
        <BlurFade
          delay={BLUR_FADE_DELAY * 6}
          className="relative container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 dark:from-orange-300 dark:to-red-500 mb-12 text-center">
            Travel Adventures
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <BlurFade
              delay={BLUR_FADE_DELAY * 7}
              className="aspect-square relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
                alt="Kerala Backwaters"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl text-base md:text-lg font-bold text-white">
                  Kerala
                </h3>
                <p className="text-md md:text-sm text-white/80">
                  Backwaters & Tea Gardens with my kannadiga friends - IIIT
                </p>
              </div>
            </BlurFade>

            <BlurFade
              delay={BLUR_FADE_DELAY * 7.2}
              className="aspect-square relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1700737993312-3edc3cf4b18b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Rameshwaram Temple"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl text-base md:text-lg font-bold text-white">
                  Rameshwaram
                </h3>
                <p className="text-md md:text-sm text-white/80">
                  Temple & Beaches with my IIIT hindi friends
                </p>
              </div>
            </BlurFade>

            <BlurFade
              delay={BLUR_FADE_DELAY * 7.4}
              className="aspect-square relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220"
                alt="Gokarna Beach"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl text-base md:text-lg font-bold text-white">
                  Gokarna
                </h3>
                <p className="text-md md:text-sm text-white/80">
                  Paradise Beaches with school friends
                </p>
              </div>
            </BlurFade>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <BlurFade
              delay={BLUR_FADE_DELAY * 7.6}
              className="backdrop-blur-lg bg-white/10 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10 space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                My Recent Explorations
              </h3>
              <ul className="space-y-4">
                {[
                  "Trekked through the Western Ghats in Kerala",
                  "Beach hopping in Vizags pristine coastline",
                  "Street food adventures in Hyderabad",
                  "Hill station getaway in Ooty",
                  "Cultural immersion in Chennai",
                  "Party scenes in Goa",
                ].map((item, i) => (
                  <BlurFadeText
                    key={item}
                    delay={BLUR_FADE_DELAY * (8 + i)}
                    className="text-sm md:text-base text-white/70"
                    text={item}
                  />
                ))}
              </ul>
            </BlurFade>

            <BlurFade
              delay={BLUR_FADE_DELAY * 7.8}
              className="backdrop-blur-lg bg-white/10 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10 space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
                My Next Destinations
              </h3>
              <ul className="space-y-4">
                {[
                  "Trekking in Ladakh",
                  "Desert camping in Rajasthan",
                  "Valley of Flowers expedition",
                  "Northeast India exploration",
                  "Andaman island hopping",
                ].map((item, i) => (
                  <BlurFadeText
                    key={item}
                    delay={BLUR_FADE_DELAY * (9 + i)}
                    className="text-sm md:text-base text-white/70"
                    text={item}
                  />
                ))}
              </ul>
            </BlurFade>
          </div>

          <div className="text-center">
            <a
              href={DATA.contact.social.Instagram.url}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm md:text-base hover:scale-105 transition-transform duration-300"
            >
              Want to join my next adventure? Lets connect! →
            </a>
          </div>
        </BlurFade>
      </section>

      {/* Tech Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-900 dark:from-blue-950 dark:to-purple-950" />
        <BlurFade
          delay={BLUR_FADE_DELAY * 9}
          className="relative container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 dark:from-blue-300 dark:to-purple-500 mb-12 text-center">
            Tech Enthusiast
          </h2>
          <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 dark:from-blue-200 dark:to-purple-300 mb-8">
              Tech Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {DATA.skills.slice(0, 5).map((skill, index) => (
                <BlurFade
                  key={skill}
                  delay={BLUR_FADE_DELAY * (10 + index)}
                  className="px-4 py-2 backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-full text-white dark:text-white/90 hover:scale-110 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300"
                >
                  {skill}
                </BlurFade>
              ))}
              <ShinyButton className="px-4 py-2 backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-full text-white dark:text-white/90 hover:scale-110 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300">
                <a href="/techy" className="text-white dark:text-white/90">
                  Explore my tech journey →
                </a>
              </ShinyButton>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Contact Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950" />
        <BlurFade
          delay={BLUR_FADE_DELAY * 11}
          className="relative container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-500 dark:from-emerald-200 dark:to-teal-400 mb-12 text-center">
            Lets Connect
          </h2>
          <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-white text-sm md:text-base font-medium">
                  What should I call you?
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white text-sm md:text-base font-medium">
                  How can I reach you?
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-white text-sm md:text-base font-medium">
                  Whats on your mind?
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300">
                  <option value="" className="bg-gray-800">
                    Select a topic
                  </option>
                  <option value="collaboration" className="bg-gray-800">
                    Project Collaboration
                  </option>
                  <option value="automotive" className="bg-gray-800">
                    Automotive Discussion
                  </option>
                  <option value="football" className="bg-gray-800">
                    Football Chat
                  </option>
                  <option value="photography" className="bg-gray-800">
                    Photography Interest
                  </option>
                  <option value="other" className="bg-gray-800">
                    Something Else
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-white text-sm md:text-base font-medium">
                  Tell me more
                </label>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <ShinyButton className="w-full py-3 text-sm md:text-base font-medium backdrop-blur-md bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Send Message
              </ShinyButton>
            </form>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
