import { Tooltip as ANTTooltip } from 'antd';

interface Props {
  children : React.ReactNode;
  title: string;
}

export const Tooltip: React.FC<Props> = ({children, title}) => {
  const styles = {
    color: '#4E5A82 ',
    bgColor: '#FFEDEB',
  };

  return (
    <ANTTooltip 
      placement="bottom" 
      title={title} 
      color={styles.bgColor} 
      overlayInnerStyle={{color: styles.color}}
      destroyTooltipOnHide
    >
      {children}
    </ANTTooltip>
  );
};