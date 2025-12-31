import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUi />}
    </div>
  );
};
export default HomePage;
