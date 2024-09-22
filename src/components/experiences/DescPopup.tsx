'use client';

import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { Dispatch, SetStateAction } from 'react';
import { AiTwotoneCloseSquare } from 'react-icons/ai';


interface IDescPopup {
  desc: JSX.Element;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>
}

export const DescPopup = (props: IDescPopup) => {
  const { desc, show, setShow } = props;
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return show ? (
    <div
      className='fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center bg-opacity-80 bg-secondary cursor-default'
      onClick={(e) => {
        e.stopPropagation();
        setShow(false);
      }}
    >
      <div className={`
          w-3/4 sm:w-[400px] p-4 rounded-lg text-justify relative
          ${isDarkTheme ? 'bg-fifth border-third' : 'bg-white'}
        `}>
        <AiTwotoneCloseSquare
          className='absolute -top-4 -right-4 cursor-pointer'
          size={32}
          onClick={(e) => {
            e.stopPropagation();
            setShow(false);
          }}
        />
        {desc}
      </div>
    </div>
  )
    : <></>;
};