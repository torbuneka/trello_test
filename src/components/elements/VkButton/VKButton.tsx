import { Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export interface ButtonProps {
  color: string;
  buttonText: string;
  onClick?: () => void;
}

export const VKButton = ({
  color = 'pink',
  buttonText = '',
  ...props
}: ButtonProps) => {
  return (
    // <button style={{ background: color }} >
    //   {buttonText}
    // </button>
    <Button className="rounded p-1" {...props} rounded={true}>
      {buttonText}
    </Button>
  );
};
