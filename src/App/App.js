import { useEffect, useState } from "react";
import Create from "./components/Create";

const App = () => {
  const [profile, setProfile] = useState(); // character
  
  useEffect(() => {
    console.log(profile);
  }, [profile])

  return (
    <div className="w-screen h-screen bg-zinc-800">
      {profile ? null : <Create setProfile={setProfile} />}
    </div>
  );
};

export default App;
