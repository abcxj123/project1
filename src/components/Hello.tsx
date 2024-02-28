// import { PropsWithChildren } from 'react';

import { PropsWithChildren } from 'react';
import { UseCounter } from '../contexts/counter-context';
import { useSession } from '../contexts/session-context';

type Props = {
  //name: string;
  // age: number;
  // plusCount: () => void;
  // children: React.ReactNode;
  // children: React.ReactElement;
};

// const Hello = ({
//   name,
//   age,
//   plusCount,
//   children,
// }: PropsWithChildren<Props>) => {
// const Hello: React.FC<Props> = ({ name, age, plusCount }) => {
const Hello = ({ children }: PropsWithChildren<Props>) => {
  const { count: age, plusCount } = UseCounter();
  const { session } = useSession();
  const name = session.loginUser?.name || 'Guest';
  // age = age + 1;
  // console.log('age>>>>', age);
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      <div>{children}</div>
    </div>
  );
};

export default Hello;
