import "./App.css";
import { TwiterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <>
      <TwiterFollowCard
        name="John Henry Chavarria"
        userName="John"
        inFollowing="Seguir"
      />
      <TwiterFollowCard
        name="Armando Gaspar Mamani"
        userName="Armando"
        inFollowing="Seguir"
      />
    </>
  );
}
