import ColorBox from '../colorGradient';
import { useDocumentTitle } from '../hooks'

const ColorGradientPage = () => {
  useDocumentTitle("Color Gradient");

  return (
    <>
      <ColorBox />
    </>
  );
};

export default ColorGradientPage;
