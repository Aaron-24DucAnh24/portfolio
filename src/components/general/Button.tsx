interface IButton {
  name: string,
  action: () => void,
  primary?: boolean,
}

export const Button = ({ name, action, primary = false }: IButton) => {
  return (
    <button
      className={`px-4 py-2 ${primary ? 'bg-primary' : 'bg-third'} text-white rounded-2xl font-semibold hover:opacity-80 text-base`}
      type="button"
      onClick={action}
    >
      {name}
    </button>
  );
};