import Calculator from '../calculator';
import { useDocumentTitle } from '../hooks'

const CalculatorPage = () => {
  useDocumentTitle("Calculator");

  return (
    <>
      <Calculator />
    </>
  );
};

export default CalculatorPage;
