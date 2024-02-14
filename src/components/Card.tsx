import { ImageData } from "../interfaces";

type PropData = {
  imageData: ImageData;
  key: string;
};

export default function Card({imageData }: PropData) {
  return (
    <div className="card">
      <img src={imageData.download_url} alt={imageData.author} />
    </div>
  );
}
