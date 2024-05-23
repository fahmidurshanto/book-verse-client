const Advertisement = () => {
  return (
    <div className="gap-10 shadow-lg container mx-auto">
      {/* first advertisement card */}
      <div className="hero min-h-screen bg-base-200 my-10 shadow-2xl shadow-pink-300">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/tmtFQ0d/borrow.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-end">
              Tired of overdue fees?
            </h1>
            <p className="py-6 text-end shadow-2xl shadow-red-400">
              Borrow and return books electronically, view due dates, and manage
              your library account - all in one place. Sign up for free today
              and simplify your reading life!
            </p>
          </div>
        </div>
      </div>
      {/* second advertisement card */}
      <div className="hero min-h-screen bg-base-200 my-10 shadow-2xl shadow-pink-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/TMKGdQD/bookworm.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Unleash your inner bookworm!</h1>
            <p className="py-6 shadow-2xl shadow-red-400">
              Explore a diverse collection of books across various categories,
              from fiction to non-fiction. Visit our website and discover a
              universe of knowledge waiting to be explored!
            </p>
          </div>
        </div>
      </div>
      {/* third advertisement card */}
      <div className="hero min-h-screen bg-base-200 my-10 shadow-2xl shadow-pink-300">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/ZMVG78v/library.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-end">
              No more lost library cards!
            </h1>
            <p className="py-6 text-end shadow-2xl shadow-red-400">
              Access our library website anytime, anywhere, from any device.
              Take control of your reading journey and join our online platform
              to manage your books with ease!
            </p>
          </div>
        </div>
      </div>
      {/* forth advertisement card */}
      <div className="hero min-h-screen bg-base-200 my-10 shadow-2xl shadow-pink-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/ZJwbrqg/computer.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Become a librarian from your couch!
            </h1>
            <p className="py-6 shadow-2xl shadow-red-400">
              Add new books to your personal library, update existing entries,
              and keep your collection organized. Be your own librarian with our
              user-friendly platform!
            </p>
          </div>
        </div>
      </div>
      {/* fifth advertisement card */}
      <div className="hero min-h-screen bg-base-200 my-10 shadow-2xl shadow-pink-300">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/PD9qVjw/genres.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-end">
              From novels to textbooks, we have it all!
            </h1>
            <p className="py-6 text-end shadow-2xl shadow-red-400">
              Find your next great read and keep track of your borrowing with
              our online library system. Explore a vast collection and
              experience the convenience of online borrowing
            </p>
            r{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
