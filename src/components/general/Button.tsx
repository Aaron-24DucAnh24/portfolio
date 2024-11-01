interface IButton {
  name?: string,
  action: () => void,
  primary?: boolean,
  icon?: JSX.Element,
}

export const Button = (props: IButton) => {
  let {
    name = '',
    action,
    primary = false,
    icon = undefined
  } = props;

  return (
    <button
      className={
        `px-4 py-2 ${primary ? 'bg-primary' : 'bg-third'}
       text-fourth rounded-2xl text-sm flex items-center space-x-1
        tracking-widest font-normal uppercase hover:scale-105 hover:shadow-xl`
      }
      type="button"
      onClick={action}>
      {name && <span>{name}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
};