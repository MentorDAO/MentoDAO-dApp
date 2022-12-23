import { Box, SxProps } from '@mui/material';

/**
 * Responsive Image Box
 */
export default function ImageBox({
  src,
  sx = {},
}: {
  src: string;
  sx?: SxProps;
}): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        height: '320px',
        overflow: 'hidden',
        backgroundSize: 'stretch',
        backgroundPosition: 'center',
        borderRadius: '12px',
        background: 'url(' + src + ') center center / cover no-repeat',
        ...sx,
      }}
    ></Box>
  );
}
