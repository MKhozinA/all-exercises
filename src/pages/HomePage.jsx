import Konten from '../components/content/Content';
import { useDocumentTitle } from '../hooks'

const HomePage = () => {
  useDocumentTitle("Home");

  return (
    <>
    <Konten />
    </>
  );
};

export default HomePage;
