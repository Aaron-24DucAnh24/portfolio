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
  const { children, button, className, onShow, onClose } = props;
  const buttonRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // STATES
  const [outAnimated, setOutAnimated] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  // HANDLERS
  const handleShowOptions = () => {
    !showOptions && setShowOptions(true);
    showOptions && setOutAnimated(true);
  };

  const handleAnimationEnd = () => {
    outAnimated && setShowOptions(false);
  };

  // EFFECTS
  // Hiding options
  useClickOutside(() => {
    setOutAnimated(true);
  }, [buttonRef, listRef]);

  // Handling animation
  useEffect(() => {
    !showOptions && setOutAnimated(false);
    showOptions && onShow && onShow();
    !showOptions && onClose && onClose();
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
            ${outAnimated && 'animate-slide-up opacity-0'}
            ${!!className && className} animate-slide-down`}
        >
          {children}
        </ul>
      }
    </>
  );
};