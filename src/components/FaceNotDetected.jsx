import logo from "../pic/Logo.png";
import NotDetected from "../pic/FaceNotDetected.png";

export default function FaceNotDetected() {
  return (
    <>
      <div className="backdrop-blur-sm w-[437px] border-gray-400 border-2 flex flex-col justify-center items-center px-16 py-10 gap-10 rounded-2xl">
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-serif text-xl text-[#F6FE00] te font-semibold">
            Face not Detected
          </h1>
          {/* login form */}
          <div className="flex flex-col items-center gap-6">
            <img src={NotDetected} alt="face" className="w-44 h-44 " />
            <div className="flex flex-col justify-center text-center gap-6">
              <button className="bg-[#F6FE00] text-black font-semibold rounded-lg w-[277px] h-10">
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
