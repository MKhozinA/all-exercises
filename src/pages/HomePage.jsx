import Konten from "../components/content/Content";
import { useDocumentTitle } from "../hooks";

const HomePage = () => {
  useDocumentTitle("Home");

  return (
    <div>
      <Konten />
    </div>
  );
};

export default HomePage;
