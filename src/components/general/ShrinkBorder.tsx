export const ShrinkBorder = ({ isHover }: { isHover: boolean }) => {
  return (
    <hr className={`border-2
      ${isHover ? 'border-primary animate-shrink-out w-full' : 'border-fourth animate-shrink-in w-3/4'}`}
    />
  );
};