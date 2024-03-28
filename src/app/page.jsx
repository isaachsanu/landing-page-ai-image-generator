import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <main className="bg-primary overflow-hidden">
        <Navbar />
        <div className="w-full bg-contain bg-no-repeat bg-[url('./images/bg_cover_1280px.jpg')]">
          <div className="h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/85 from-60%">
            <div className="w-full max-w-screen-lg">
              <div className="flex flex-col gap-12 justify-center text-7xl font-montserrat font-semibold text-white">
                <p className="text-center leading-tight">
                  Redefine{" "}
                  <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Creativity
                  </span>
                  <br />
                  for the Digital Age
                  <br />
                  with{" "}
                  <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                    PixGenerator
                  </span>
                </p>
                <div className="flex justify-center gap-6">
                  <button className="px-12 py-6 rounded-2xl font-lato font-bold text-[20px] bg-gradient-primary">
                    Generate Your Own Images
                  </button>
                  <button className="p-1 rounded-2xl font-lato font-bold text-[20px] bg-gradient-primary">
                    <div className="px-12 py-6 rounded-xl bg-primary w-full h-full">
                      Learn More
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[160px] sm:h-[240px] md:h-[360px] xl:h-[480px] 2xl:h-[640px] transition-all ease-in-out duration-500"></div>
          <div className="container mx-auto text-white">
            <div className="flex justify-center gap-32 px-24 py-16">
              <div className="flex flex-col gap-4 items-center">
                <Image src="/images/painting_icon.png" width={96} height={96} />
                <div className="font-montserrat font-bold text-xl bg-gradient-primary bg-clip-text text-transparent text-center">
                  AI-Powered Generation
                </div>
                <div className="w-64 text-center text-base">
                  <p>
                    Elevate your creativity with our AI-powered image
                    generation. Effortlessly transform your ideas into stunning
                    visuals using cutting-edge technology.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src="/images/illustration_icon.png"
                  width={96}
                  height={96}
                />
                <div className="font-montserrat font-bold text-xl bg-gradient-primary bg-clip-text text-transparent text-center">
                  Complete Customization
                </div>
                <div className="w-64 text-center text-base">
                  <p>
                    Tailor images to your unique style and needs with our
                    user-friendly customization tools. Easily control colors,
                    shapes, and sizes to craft the perfect visual.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image src="/images/solution_icon.png" width={96} height={96} />
                <div className="font-montserrat font-bold text-xl bg-gradient-primary bg-clip-text text-transparent text-center">
                  Seamless Integration
                </div>
                <div className="w-64 text-center text-base">
                  <p>
                    Seamlessly integrate AI image generation into your creative
                    process. Smooth integration options, including APIs and
                    plugins.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-16 items-center px-[96px] py-[192px]">
              <Image
                src="/images/join_community_thumbnail.png"
                width={480}
                height={400}
              />
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <div className="font-montserrat font-bold text-4xl bg-gradient-primary bg-clip-text text-transparent">
                    Join our Community
                  </div>
                  <div className="text-base">
                    <p>
                      At PixGenerator, we believe that creativity knows no
                      bounds. Join our thriving community of artists, designers,
                      and innovators who share your passion for visual
                      storytelling. Together, we&apos;re redefining the future of
                      image generation and design.
                    </p>
                  </div>
                </div>
                <div>
                  <button className="px-12 py-4 rounded-2xl font-lato font-bold text-base bg-gradient-primary">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-between px-32 py-12">
              <div className="z-10 w-[640px]">
                <div className="font-bold text-4xl font-montserrat mb-4">Your Ideas Come to Life</div>
                <p>Unleash your imagination&apos;s full potential. Let AI work its magic, turning your ideas into mesmerizing visuals that tell your story.</p>
              </div>
              <div className="z-10">
                <button className="px-12 py-4 rounded-2xl text-[20px] font-lato font-bold text-base bg-black">
                  Generate Your Own Images
                </button>
              </div>
              <div className="z-0 absolute top-0 left-[32px] bg-gradient-primary h-full w-screen rounded-3xl">&nbsp;</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary px-12">
        <div className="flex flex-row justify-between pt-32 pb-16 px-12">
          <div className="flex flex-col gap-2 w-[360px]">
            <div className="font-montserrat font-bold text-[20px] text-white">
              Don&apos;t miss our latest news
            </div>
            <div className="flex flex-row justify-between p-2 pl-4 rounded-2xl bg-white text-sm">
              <input type="text" placeholder="Write your email here" />
              <button className="px-4 py-2 rounded-xl font-lato font-bold text-white bg-gradient-primary">
                Subscribe
              </button>
            </div>
            <div className="text-[#8CB3C0] text-[12px]">
              *by entering your email address, you’re confirming that you agree
              to subscribe to our newsletter
            </div>
          </div>
          <div className="flex flex-row min-w-48 text-white">
            <div className="min-w-48">
              <div className="font-montserrat font-bold text-base mb-4">
                About
              </div>
              <ul className="leading-loose">
                <li className="font-lato text-[12px]">FAQ</li>
                <li className="font-lato text-[12px]">Contact Us</li>
              </ul>
            </div>
            <div className="min-w-48">
              <div className="font-montserrat font-bold text-base mb-4">
                Products
              </div>
              <ul className="leading-loose">
                <li className="font-lato text-[12px]">PixGen Plus</li>
                <li className="font-lato text-[12px]">PixGen Chat</li>
                <li className="font-lato text-[12px]">PixGen Lite</li>
              </ul>
            </div>
            <div className="min-w-48">
              <div className="font-montserrat font-bold text-base mb-4">
                Useful Links
              </div>
              <ul className="leading-loose">
                <li className="font-lato text-[12px]">Telegram</li>
                <li className="font-lato text-[12px]">Facebook</li>
                <li className="font-lato text-[12px]">Medium</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between py-9 px-12 text-white text-lato">
          <div className="flex flex-row gap-4 items-center">
            <Image src="/images/telegram_24.png" width={16} height={16} />
            <Image src="/images/github_24.png" width={16} height={16} />
            <Image src="/images/facebook_24.png" width={16} height={16} />
            <Image src="/images/instagram_24.png" width={16} height={16} />
          </div>
          <div className="hidden xl:block absolute inset-x-0 mx-auto text-center text-base font-montserrat font-bold">
            <span>PixGenerator</span>
          </div>
          <div className="flex items-center text-xs">
            <span className="mr-6">Legal Service</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
}
