import { InputHTMLAttributes, useState } from 'react';
import { Amount } from './styles';

const AmountInput: React.VFC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const [amount, setAmount] = useState<string>('');
  const handleChange = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) => {
    setAmount(
      currentTarget.value
        .replace(/[^0-9.]/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '$&,')
        .replace(/(\.\d{2}).*$/, '$1')
    );
  };

  return (
    <Amount
      {...props}
      onChange={handleChange}
      value={amount}
      placeholder="25,000"
    />
  );
};

export default AmountInput;
