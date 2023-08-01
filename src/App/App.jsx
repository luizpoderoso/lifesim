import { useEffect, useState } from "react";
import Create from "./components/Create";
import Game from "./components/Game/Game";

const App = () => {
  const [profile, setProfile] = useState(); // character

  useEffect(() => {
    console.log(profile);
  }, [profile])

  return (
    <div className="relative w-screen h-screen flex flex-col bg-zinc-700">
      {profile ? <Game profile={profile} /> : <Create setProfile={setProfile} />}
    </div>
  );
};

export default App;
