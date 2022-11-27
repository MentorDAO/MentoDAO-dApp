import { Button } from '@mui/material';

/**
 * A Button that may be disabled or may not appear at all.
 */
export default function ConditionalButton(props: any): JSX.Element {
  // if (!!props?.disabled) return <></>;
  return <Button {...props} />;
}
