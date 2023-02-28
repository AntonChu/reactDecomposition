import { Popular } from "./Popular";
import { Broadcast } from "./Broadcast";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Visited</h3>
        <Popular
          items={[{ subj: "item", description: "description" }, { subj: "item", description: "description" }, { subj: "item", description: "description" }]}
        ></Popular>
      </div>
      <div>
        <h3>Broadcasr</h3>
        <Broadcast
          items={[{ time: '20:30', subj: "item", description: "description" }, { time: '20:30', subj: "item", description: "description" }, { time: '20:30', subj: "item", description: "description" }]}
        ></Broadcast>
      </div>
      <div>
        <h3>Live</h3>
      </div>
    </footer>
  );
};
