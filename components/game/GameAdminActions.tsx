import { Button, Stack } from '@mui/material';
import { DataContext } from 'contexts/data';
import { DialogContext } from 'contexts/dialog';
import { useContext, useEffect, useState } from 'react';
import GameManageDialog from './GameManageDialog';
import GameRoleManageDialog from './GameRoleManageDialog';
// import { GAME_ROLE } from 'constants/contracts';
// import useDao from 'hooks/useDao';
import { isSoulHasRole } from 'hooks/utils';

/**
 * Genric Game Admin Actions
 */
export default function GameAdminActions({ game: dao, sx }: any): JSX.Element {
  const { accountSoul } = useContext(DataContext);
  const { showDialog, closeDialog } = useContext(DialogContext);
  // const { isSoulHasRole } = useDao();
  const [isSoulAdmin, setIsSoulAdmin] = useState(false);

  useEffect(() => {
    setIsSoulAdmin(false);
    if (accountSoul && dao) {
      setIsSoulAdmin(
        // isSoulHasRole(dao, accountSoul?.id, GAME_ROLE.admin?.id)
        isSoulHasRole(dao, accountSoul.id, 'admin'),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountSoul, dao]);

  if (isSoulAdmin) {
    return (
      <Stack direction="column" spacing={1} sx={{ ...sx }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            showDialog?.(<GameManageDialog dao={dao} onClose={closeDialog} />)
          }
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            showDialog?.(
              <GameRoleManageDialog dao={dao} onClose={closeDialog} />,
            )
          }
        >
          Manage Roles
        </Button>
      </Stack>
    );
  } else {
    return <></>;
  }
}
