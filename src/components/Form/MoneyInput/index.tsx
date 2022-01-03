import { useCallback, useState, memo } from 'react';
import { Label, Box } from '../styles';
import { MoneyEnv, Money } from './styles';
import AmountInput from './AmountInput';

const MoneyInput: React.VFC = () => {
  const [moneyActive, setMoneyActive] = useState<boolean>(false);

  const handleFocus = useCallback(() => {
    setMoneyActive(true);
  }, []);

  const handleBlur = useCallback(() => {
    setMoneyActive(false);
  }, []);

  return (
    <MoneyEnv isActive={moneyActive} onFocus={handleFocus} onBlur={handleBlur}>
      <Label htmlFor="amount">Total amount</Label>
      <Box htmlFor="amount">
        <Money>
          <use xlinkHref="#money" />
        </Money>
        <AmountInput name="amount" id="amount" />
      </Box>
    </MoneyEnv>
  );
};

export default memo(MoneyInput);
