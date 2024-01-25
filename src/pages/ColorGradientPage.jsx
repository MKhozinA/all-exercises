import ColorBox from '../colorGradient';
import { useDocumentTitle } from '../hooks'

const ColorGradientPage = () => {
  useDocumentTitle("Color Gradient");

  return (
    <div>
      <ColorBox />
    </div>
  );
};

export default ColorGradientPage;
