import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useError from 'hooks/useError';
import useTask from 'hooks/useTask';
import { useEffect, useState } from 'react';
import { taskStageToString } from 'utils/converters';
import EntityImage from '../entity/EntityImage';

/**
 * A component with project details.
 */
export default function TaskDetail({ item, sx }: any) {
  const { getFund } = useTask();
  const { handleError } = useError();
  const [fund, setFund] = useState<string | null>(null);

  useEffect(() => {
    if (item) {
      getFund(item.id)
        .then((fund) => setFund(fund))
        .catch((error) => handleError(error, true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  if (item) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          ...sx,
        }}
      >
        <Box>
          <EntityImage item={item.game} />
        </Box>
        <Box sx={{ mt: { xs: 2, md: 0 }, ml: { md: 4 } }}>
          <Typography color="text.secondary" variant="body2">
            {taskStageToString(item)} {fund ? ` / ${fund} ETH` : ''}
          </Typography>
          <Typography variant="h4" sx={{ mt: 1 }}>
            {item.name}
          </Typography>
          <Typography sx={{ mt: 1 }}>{item.uriData?.description}</Typography>
        </Box>
      </Box>
    );
  }

  return <></>;
}
