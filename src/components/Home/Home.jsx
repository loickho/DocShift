import DocsContainer from "../DocsContainer/DocsContainer";
import Metadata from "../Metadata/Metadata";
import './Home.css';

export default function Home () {
  return (
    <div className="home">
      <DocsContainer />
      <div className="right">
        <Metadata />
        <button>Transfer</button>
      </div>
    </div>
  )
}