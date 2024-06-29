import logo from "../pic/Logo.png";
import plat from "../pic/Gog,Git,Meta.png";

export default function LoginPage() {
  return (
    <>
      <div className=" backdrop-blur-md border-gray-400 border-2 flex flex-col justify-center  items-center px-16 py-10 gap-10 rounded-2xl">
        <img src={logo} alt="logo" />
        <div>
          <h1 className="font-serif  size-8 text-white font-semibold">Login</h1>
          {/* login form */}
          <div className="flex flex-col gap-6">
            <div className="font-serif text-white gap-">
              <form action="" className="flex flex-col gap-1  ">
                <label htmlFor="">Email</label>

                <input
                  type="email"
                  placeholder="username@something.com"
                  className="rounded px-3 py-1 text-black"
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  className="rounded px-3 py-1 text-black"
                />
              </form>
              <br />
              <h1>forgot password?</h1>
            </div>
            <div className="flex flex-col justify-center text-center gap-6">
              <button className="bg-[#5A45FE] text-white font-semibold rounded-lg w-full h-10">
                Sign in
              </button>
              <h1 className="text-white font-semibold">Or continue with</h1>
              <img src={plat} alt="" />
              <h1 className="text-white">
                Don’t have an account yet? Register for free{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
