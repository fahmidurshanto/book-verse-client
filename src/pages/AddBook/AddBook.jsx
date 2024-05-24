import axios from "axios";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const bookName = e.target.name.value;
    const image = e.target.image.value;
    const quantity = e.target.quantity.value;
    const author = e.target.author.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;
    const newBook = {
      bookName,
      image,
      quantity,
      author,
      category,
      rating,
      description,
    };

    axios
      .post("http://localhost:5000/books", newBook)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="">
      <h3 className="text-3xl font-semibold text-center mb-2 ">
        Add your book information here
      </h3>
      <form
        onSubmit={handleAddBook}
        className="md:bg-pink-200 md:grid grid-cols-2 py-32"
      >
        {/* book name field */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="name">
            Book Name
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="name"
            name="name"
            placeholder="Enter your book name"
            required
          />
        </div>
        {/* book image field */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="image">
            Image
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="image"
            placeholder="Enter your book image url"
            required
          />
        </div>
        {/* book quantity field */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="quantity">
            Quantity of the book
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="quantity"
            placeholder="Enter book quantity"
            required
          />
        </div>
        {/* Author Name */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="author">
            Author Name
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="author"
            placeholder="Author Name"
            required
          />
        </div>
        {/* Category */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="author">
            Category
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="category"
            placeholder="Category"
            required
          />
        </div>
        {/*  Rating */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="ratting">
            Rating
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="rating"
            placeholder="Rating"
            required
          />
        </div>

        {/* Short description */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="author">
            Short description
          </label>
          <textarea
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5"
            type="text"
            name="description"
            placeholder="Short description"
            required
          />
        </div>
        {/* submit button */}
        <input
          className="btn btn-outline btn-[purple] w-full md:w-3/4 mx-auto  my-5"
          type="submit"
          value="Add Book"
        />
      </form>
    </div>
  );
};

export default AddBook;
