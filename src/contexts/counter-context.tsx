import { PropsWithChildren, createContext, useContext, useState } from 'react';

type CounterContextProp = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((prevCount) => prevCount + 1);
  const minusCount = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const UseCounter = () => useContext(CounterContext);
