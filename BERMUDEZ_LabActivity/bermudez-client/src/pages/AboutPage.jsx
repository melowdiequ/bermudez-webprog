import Button from '../components/Button';

import pochaccoHomePage from '../assets/homepage/pochacco-homepage.jpg';
import pochaccoPic1 from '../assets/aboutpage/pochacco-pic1.jpg';
import pochaccoPic2 from '../assets/aboutpage/pochacco-pic2.jpg';
import pochaccoPic3 from '../assets/aboutpage/pochacco-pic3.jpg';
import pochaccoPic4 from '../assets/aboutpage/pochacco-pic4.jpg';
import pochaccoPic5 from '../assets/aboutpage/pochacco-pic5.jpg';
import pochaccoPic6 from '../assets/aboutpage/pochacco-pic6.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={pochaccoHomePage} 
                alt="Pochacco" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About The Pup
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A curious and clumsy little dog from Uguisu Yokocho.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Born on February 29th (a leap year!), Pochacco is one of the most energetic characters in the Sanrio universe. He is known for walking on his hind legs, playing sports, and his floppy black ears.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/friends">View Friends</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Pochacco by the numbers</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">1989</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Debut Year
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Favorite Sports
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">01</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Favorite Treat
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">29</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Feb Birthday
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Character Details
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Pochacco's World</h2>
            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Personality</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  He is incredibly friendly and loves to socialize. Even when his clumsiness gets the better of him, he brushes it off and keeps going with a smile.
                </p>
              </article>
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Hobbies</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  You will usually find him outside! He loves going for long walks, playing 3-on-3 basketball, and practicing his soccer kicks.
                </p>
              </article>
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Best Friend</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  His absolute best friend is Choppi, a tiny, cheerful mouse. They do almost everything together.
                </p>
              </article>
            </div>
          </div>
          
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Photo Gallery
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                <img src={pochaccoPic1} alt="Pochacco Gallery 1" className="h-full w-full object-cover" />
              </div>
              
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                <img src={pochaccoPic2} alt="Pochacco Gallery 2" className="h-full w-full object-cover" />
              </div>
              
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                <img src={pochaccoPic3} alt="Pochacco Gallery 3" className="h-full w-full object-cover" />
              </div>
              
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                <img src={pochaccoPic4} alt="Pochacco Gallery 4" className="h-full w-full object-cover" />
              </div>
              
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                <img src={pochaccoPic5} alt="Pochacco Gallery 5" className="h-full w-full object-cover" />
              </div>

              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
                <img src={pochaccoPic6} alt="Pochacco Gallery 6" className="h-full w-full object-cover" />
              </div>

            </div>
            <div className="mt-5 flex justify-center">
              <Button to="/friends">View All Friends</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;