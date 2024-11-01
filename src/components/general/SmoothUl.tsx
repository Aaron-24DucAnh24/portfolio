'use client';

import { useClickOutside } from '@/utils/hooks';
import {
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';

interface ISmoothUl {
  children: ReactNode,
  button: JSX.Element,
  className: string | undefined,
  onShow?: () => void,
  onClose?: () => void,
}

export const SmoothUl = (props: ISmoothUl) => {
  const {
    children,
    button,
    className,
    onShow,
    onClose
  } = props;

  const buttonRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // STATES
  const [animateOut, setAnimateOut] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  // HANDLERS
  const handleShowOptions = () => {
    if (showOptions) {
      setAnimateOut(true);
    } else {
      setShowOptions(true);
    }
  };

  const handleAnimationEnd = () => {
    animateOut && setShowOptions(false);
  };

  // EFFECTS
  // Hiding options
  useClickOutside(() => {
    setAnimateOut(true);
  }, [buttonRef, listRef]);

  // Handling animation
  useEffect(() => {
    if (showOptions) {
      onShow && onShow();
    } else {
      setAnimateOut(false);
      onClose && onClose();
    }
  }, [showOptions]);

  return (
    <>
      <div onClick={handleShowOptions} ref={buttonRef}>
        {button}
      </div>
      {
        showOptions &&
        <ul
          ref={listRef}
          onAnimationEnd={handleAnimationEnd}
          className={`
            ${animateOut && 'animate-slide-up opacity-0'}
            ${!!className && className} animate-slide-down`}>
          {children}
        </ul>
      }
    </>
  );
};