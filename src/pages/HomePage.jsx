import Konten from '../components/layouts/content/Content';
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
