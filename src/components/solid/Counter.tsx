import { createSignal } from 'solid-js';

export function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <button onClick={() => setCount(count() + 1)}>
        Clicked {count()} times
      </button>
    </div>
  );
}

