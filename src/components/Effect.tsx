import { useState } from 'react';

export default function Effect() {
  const [r, rerender] = useState(0);

  console.log('*********', r);
  return (
    <>
      <input
        type='text'
        onChange={() => {
          rerender((p) => p + 1);
        }}
      />
    </>
  );
}
