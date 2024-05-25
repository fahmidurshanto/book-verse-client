const Login = () => {
  return (
    <div>
      <h3 className="text-4xl text-center mb-5 mt-12 font-semibold">
        Login here
      </h3>
      <form className="p-10 bg-indigo-500 rounded-3xl">
        {/* email input field */}
        <div className="flex flex-col justify-center items-center p-3">
          <label htmlFor="email">Email</label>
          <input
            className="p-3 w-1/3 text-gray-500"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        {/* email input field */}
        <div className="flex flex-col justify-center items-center p-3 ">
          <label htmlFor="password">Password</label>
          <input
            className="p-3 w-1/3 text-gray-500"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <input
          className="p-3 w-1/3 items-center mx-auto"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
