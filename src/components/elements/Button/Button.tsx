export interface ButtonProps {
  color: string;
  buttonText: string;
  onClick?: () => void;
}

export const Button = ({
  color = 'pink',
  buttonText = '',
  ...props
}: ButtonProps) => {
  return (
    <button style={{ background: color }} className="rounded p-1" {...props}>
      {buttonText}
    </button>
  );
};
