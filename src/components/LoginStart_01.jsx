import logo from "../pic/Logo.png";
import plat from "../pic/Gog,Git,Meta.png";

export default function Login() {
  return (
    <>
      <div className="bg-[#5882C1] flex flex-col justify-center items-center mx-[400px] my-12 py-10 gap-6 ">
        <img src={logo} alt="logo" />
        <div>
          <h1 className="font-serif  size-8 text-white font-semibold">Login</h1>
          {/* login form */}
          <div className="">
            <div className="font-serif text-white">
              <form action="" className="flex flex-col gap-1  ">
                <label htmlFor="">Email</label>

                <input
                  type="email"
                  placeholder="username@something.com"
                  className="rounded px-3 py-1"
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  className="rounded px-3 py-1"
                />
              </form>
              <h1>forgot password?</h1>
              <button>Sign in</button>
            </div>
            <div>
              <h1>Or continue with</h1>
              <img src={plat} alt="" />
              <h1>Don’t have an account yet? Register for free </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
