import { RefObject, useEffect, useRef } from 'react';

/*----------------------------- USE RUN ONCE ---------------------------- */
export const useRunOnce = (fn: () => any) => {
  const triggered = useRef<boolean>(false);

  useEffect(() => {
    const hasBeenTriggered = triggered.current;
    if (!hasBeenTriggered) {
      fn();
      triggered.current = true;
    }
  }, [fn]);

  return null;
};

/*--------------------------- USE CLICK OUTSIDE ------------------------- */
export const useClickOutside = (
  action: () => void,
  dependencyList: RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    document.addEventListener('mousedown', async (event) => {
      const isOutSide = dependencyList.every(ref =>
        ref.current && !ref.current.contains(event.target as HTMLElement)
      );
      isOutSide && action();
    });
    return () => document.removeEventListener('mousedown', () => { });
  }, []);
};