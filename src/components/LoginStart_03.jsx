import logo from "../pic/Logo.png";
import verified from "../pic/verified.png";

export default function Login03() {
  return (
    <>
      <div className="backdrop-blur-sm w-[437px] border-gray-400 border-2 flex flex-col justify-center items-center px-16 py-10 gap-10 rounded-2xl">
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-serif text-xl text-[#38C638] te font-semibold">
            Verified
          </h1>
          {/* login form */}
          <div className="flex flex-col items-center gap-6">
            <img src={verified} alt="face" className="w-44 h-44 " />
            <div className="flex flex-col justify-center text-center gap-6">
              <button className="bg-[#38C638] text-white font-semibold rounded-lg w-[277px] h-10">
                FazelAhad Fazel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
