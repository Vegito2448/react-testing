export interface HandleChangeByAmountProps {
  amount: number;
  min?: number;
  max?: number;
}

export type UseCounterProps = {
  initialCount?: number;
};

export interface CounterTwoProps {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
  handleChangeByAmount?: (args: HandleChangeByAmountProps) => void;
}
