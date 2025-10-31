import "./Tile.css";

interface Props {
  image?: string;
  number: number;
}

export default function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return <div className="square bsquare">
        <img src={image} alt={image} className="chess-piece-image" />
    </div>;
  } else {
    return <div className="square wsquare">
        <img src={image} alt={image} className="chess-piece-image" />
    </div>;
  }
}
