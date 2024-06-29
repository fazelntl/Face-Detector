import logo from "../pic/Logo.png";
import face from "../pic/faceIcon.png";

export default function FaceDetection() {
  return (
    <>
      <div className="backdrop-blur-sm w-[437px] border-gray-400 border-2 flex flex-col justify-center items-center px-16 py-10 gap-10 rounded-2xl">
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-serif text-xl text-white font-semibold">
            Verify Your Face
          </h1>
          {/* login form */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={face}
              alt="face"
              className="w-40 h-40 object-cover rounded-full"
            />
            <div className="flex flex-col justify-center text-center gap-6">
              <button className="bg-[#5A45FE] text-white font-semibold rounded-lg w-full h-10">
                Verify
              </button>
              <h1 className="text-white font-semibold">
                Pease remove your mask and glasses to detect face easily
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
