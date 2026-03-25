import Button from '../components/Button';

import pochaccoHomePage from '../assets/homepage/pochacco-homepage.jpg';
import pochaccoOnTheMove from '../assets/homepage/pochacco-onthemove.jpg';
import pochaccoMakingFriends from '../assets/homepage/pochacco-makingfriends.jpg';
import pochaccoBananaIceCream from '../assets/homepage/pochacco-bananaicecream.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Character Profile
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Meet Pochacco the Sporty Pup
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Join the adventures of the curious, clumsy, and energetic Sanrio puppy who loves banana ice cream, playing sports, and exploring the neighborhood.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-65 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={pochaccoHomePage} 
                alt="Pochacco Homepage Hero" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Character Stats
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Pochacco Quick Facts</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">29</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Feb Birthday
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Main Sports
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">01</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Fav Snack
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">1989</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Year Made
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Daily Life
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">What Pochacco Loves</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={pochaccoOnTheMove} 
                alt="Pochacco on the move" 
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Always on the Move</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Pochacco is full of energy and loves playing basketball and soccer with his neighborhood friends.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={pochaccoBananaIceCream} 
                alt="Banana Ice Cream" 
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Banana Ice Cream</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              After a long day of walking and playing, his absolute favorite treat to eat is banana ice cream.
            </p>
            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img 
                src={pochaccoMakingFriends} 
                alt="Making Friends" 
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Making Friends</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              With his friendly and curious personality, he is always making new pals wherever he goes.
            </p>
            <Button to="/friends" className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;