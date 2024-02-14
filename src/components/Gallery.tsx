import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Card from "./Card";
import { ImageData } from "../interfaces";

export default function Gallery() {
  const [data, setData] = useState<ImageData[]>([]);
  const fetchData = async () => {
    const response = await fetch(API_URL);
    const resData = await response.json();
    setData(resData);
    console.log("resData>>", resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const imageList = () => {
    return data.map((i: ImageData) => <Card key={i.id} imageData={i} />);
  };
  if (!data.length) {
    return null;
  }
  return <div className="gallery">{imageList()}</div>;
}
