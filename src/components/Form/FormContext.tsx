import { createContext } from 'react';
import { GetNextMonth } from './MonthInput/DateInput';

export interface FieldsType {
  amount: number;
  reachDate: Date;
}

export interface FormContextProps extends FieldsType {
  setAmount: (amount: number) => void;
  setReachDate: (reachDate: Date) => void;
}

const FormContext = createContext<FormContextProps>({
  amount: 0,
  reachDate: GetNextMonth(),
  setAmount: (amount: number) => {
    return null;
  },
  setReachDate: (reachDate: Date) => {
    return null;
  },
});

export const FormContextConsumer = FormContext.Consumer;
export const FormContextProvider = FormContext.Provider;
export default FormContext;
