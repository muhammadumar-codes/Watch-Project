import { createContext, useState } from "react";

// Data from js files opf all 15 users
import { watches } from "../Data/Data";

export const WatchContext = createContext();

// watchPrvider

export function watchPrvider({ children }) {
  const [watch, setWatches] = useState(watches);
  return (
    <>
      <WatchContext.Provider value={{ watch, setWatches }}>
        {children}
      </WatchContext.Provider>
    </>
  );
}
