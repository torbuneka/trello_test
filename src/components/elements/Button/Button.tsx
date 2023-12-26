export interface ButtonProps {
  color: string;
  buttonText: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { color, buttonText, onClick } = props;
  return (
    <button
      style={{ background: color }}
      className="rounded p-1"
      onClick={() => onClick && onClick()}
    >
      {buttonText}
    </button>
  );
};
