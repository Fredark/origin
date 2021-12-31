import { useCallback } from 'react';
import { useState } from 'react';
import AmountInput from './AmountInput';
import DateInput from './DateInput';
import {
  Tag,
  MoneyEnv,
  Label,
  Box,
  Money,
  MonthEnv,
  TotalEnv,
  TotalLine,
  TotalLabel,
  TotalValue,
  Bottom,
  Highlight,
  Button,
} from './styles';

const Form: React.VFC = () => (
  <Tag>
    <MoneyInput />
    <MonthInput />
    <Total />
    <Button>Confirm</Button>
  </Tag>
);

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

const MonthInput: React.VFC = () => {
  const [monthActive, setMonthActive] = useState<boolean>(false);

  const handleFocus = useCallback(() => {
    setMonthActive(true);
  }, []);

  const handleBlur = useCallback(() => {
    setMonthActive(false);
  }, []);

  return (
    <MonthEnv isActive={monthActive}>
      <Label>Reach goal by</Label>
      <Box>
        <DateInput onFocus={handleFocus} onBlur={handleBlur} />
      </Box>
    </MonthEnv>
  );
};

const Total: React.VFC = () => (
  <TotalEnv>
    <TotalLine>
      <TotalLabel>Monthly Amount</TotalLabel>
      <TotalValue>$520.83</TotalValue>
    </TotalLine>
    <Bottom>
      You’re planning <Highlight>48 monthly deposits</Highlight> to reach your
      <Highlight> $25,000</Highlight> goal by
      <Highlight> October 2021</Highlight>.
    </Bottom>
  </TotalEnv>
);

export default Form;
