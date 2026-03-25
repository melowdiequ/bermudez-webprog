import Button from '../components/Button';

import friend1 from '../assets/friendspage/friend-1.jpg';
import friend2 from '../assets/friendspage/friend-2.jpg';
import friend3 from '../assets/friendspage/friend-3.jpg';
import friend4 from '../assets/friendspage/friend-4.jpg';
import friend5 from '../assets/friendspage/friend-5.jpg';
import friend6 from '../assets/friendspage/friend-6.jpg';
import friend7 from '../assets/friendspage/friend-7.jpg';

const FriendsPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          The Crew
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Meet Pochacco's Friends
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Whether they are playing sports, going for walks, or eating banana ice cream, Pochacco is always surrounded by his amazing group of friends from Uguisu Yokocho.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Character Roster
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">The Uguisu Yokocho Gang</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img src={friend1} alt="The Pi-chans" className="h-full w-full object-contain p-2 bg-white" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Peeping Trio
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">The Pi-chans</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Piyo, Pico, and Peep! A group of three mischievous, singing chick sisters.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img src={friend2} alt="Popple" className="h-full w-full object-contain p-2 bg-white" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Instructor Quack
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Popple</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A white duck and swimming instructor who is a studious, gentle friend, but prone to slapping when stressed.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img src={friend3} alt="Pochamii" className="h-full w-full object-contain p-2 bg-white" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Puppy Love & Pink Bows
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Pochamii</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A girl dog who is childhood friends with Pochacco and often wears a pink bow.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img src={friend4} alt="Monmon" className="h-full w-full object-contain p-2 bg-white" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Squirrel on a Mission
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Monmon</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A curious, small squirrel who is always busy collecting nuts.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img src={friend5} alt="Mime" className="h-full w-full object-contain p-2 bg-white" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              The Bird-Calling Tortoise
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Mime</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A friendly tortoise who is surprisingly known for being an expert bird caller.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img src={friend6} alt="Pi-ru-ru" className="h-full w-full object-contain p-2 bg-white" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              The Feathered Comedian
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Pi-ru-ru</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A hilarious bird who loves telling jokes to the rest of the group.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200">
              <img src={friend7} alt="Guri and Gura" className="h-full w-full object-contain p-2 bg-white" />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              The Dynamic Doggy Duo
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Guri and Gura</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Twin puppies who are almost always featured playing together with Pochacco.
            </p>
          </article>

        </div>
      </section>
    </div>
  );
};

export default FriendsPage;