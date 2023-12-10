export interface IProps {
  color: string;
  buttonText: string;
  onClick?: () => void;
}

export const Button = (props: IProps) => {
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
