import Gallery from "../components/Gallery";
import { useEffect } from "react"; // <-- added

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20">
      <Gallery />
    </div>
  );
}
