import LoginPage from "./components/LoginPage";
import FaceDetection from "./components/FaceDetection";
import UserVerified from "./components/UserVerified";
import FaceNotDetected from "./components/FaceNotDetected";
import Dashboard from "./DashBoard/Dashboard";

function App() {
  return (
    <>
      <div className="">
        {/* <LoginPage />
        <FaceDetection></FaceDetection>
        <UserVerified></UserVerified>
        <FaceNotDetected /> */}
        <Dashboard />
      </div>
    </>
  );
}

export default App;
