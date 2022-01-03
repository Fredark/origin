import { useCallback, useState } from 'react';
import { MonthEnv } from './styles';
import { Label, Box } from '../styles';
import DateInput from './DateInput';

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

export default MonthInput;
