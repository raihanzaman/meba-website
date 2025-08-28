import Image from "next/image";

export default function Home() {
  return (
    <div id="home">
          <h1 id="Home">Middle East Business Association</h1>
          <div className="about">
            <p className="description">
              MEBA is a Stern club that teaches students about business.
            </p>
          </div>

          <div className="mailing-list">
            <button>OUR MAILING LIST</button>
            <p>Join our mailing list!</p>
          </div>

          <div className="events"></div>
        </div>
  );
}
