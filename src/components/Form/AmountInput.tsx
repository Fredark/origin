import { InputHTMLAttributes, useCallback, useState } from 'react';
import { Amount } from './styles';

const AmountInput: React.VFC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const [amount, setAmount] = useState<string>('');
  const handleChange = useCallback(
    ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
      setAmount(
        currentTarget.value
          .replace(/[^0-9.]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, '$&,')
          .replace(/(\.\d{2}).*$/, '$1')
      );
    },
    [amount]
  );

  return <Amount {...props} onChange={handleChange} value={amount} />;
};

export default AmountInput;
