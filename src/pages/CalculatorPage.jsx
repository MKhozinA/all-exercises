import Calculator from '../calculator';
import { useDocumentTitle } from '../hooks'

const CalculatorPage = () => {
  useDocumentTitle("Calculator");

  return (
    <div>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
