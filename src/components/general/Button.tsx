import { IconType } from 'react-icons';

interface IButton {
  name?: string,
  action: () => void,
  primary?: boolean,
  icon?: JSX.Element,
}

export const Button = ({
  name = '',
  action,
  primary = false,
  icon = undefined
}: IButton) => {
  return (
    <button
      className={`px-4 py-2 ${primary ? 'bg-primary' : 'bg-third'}
       text-fourth rounded-2xl font-semibold hover:opacity-80 text-base flex items-center space-x-1`
      }
      type="button"
      onClick={action}
    >
      {name && <span>{name}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
};