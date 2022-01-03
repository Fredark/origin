import { useEffect } from 'react';
import { InputHTMLAttributes, useCallback, useState, useContext } from 'react';
import FormContext from '../FormContext';
import { Amount } from './styles';

const AmountInput: React.VFC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const [amount, setAmount] = useState<string>('');
  const handleChange = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
      setAmount(FormatMoneyInput(currentTarget.value));
    },
    []
  );
  const { setAmount: setAmountField } = useContext(FormContext);

  useEffect(() => {
    setAmountField(parseFloat(amount.replace(/[,]/g, '')) || 0);
  }, [amount, setAmountField]);

  return (
    <Amount
      {...props}
      onChange={handleChange}
      value={amount}
      placeholder="25,000"
      inputMode="numeric"
      pattern="[0-9.]"
      data-testid="amount"
    />
  );
};

export function FormatMoneyInput(value: string): string {
  return value
    .replace(/[^0-9.]/g, '')
    .replace(/^[.]+/, '0.')
    .replace(/^[0](\d)+/, '$1')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '$&,')
    .replace(/(\.\d{2}).*$/, '$1')
    .replace(/(\.)(\d)*[.]+/g, '$1$2');
}

export default AmountInput;
