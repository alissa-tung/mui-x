import * as React from 'react';
import { DataGridPremium, DataGridPremiumProps } from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function ClipboardPasteEvents() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 6,
    editable: true,
  });
  const [loading, setLoading] = React.useState(false);

  const processRowUpdate = React.useCallback<
    NonNullable<DataGridPremiumProps['processRowUpdate']>
  >(async (newRow) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return newRow;
  }, []);

  const initialState = {
    ...data.initialState,
    columns: {
      columnVisibilityModel: {
        id: false,
        desk: false,
      },
    },
  };

  const confirm = useConfirm();
  const confirmPaste = React.useCallback<() => Promise<void>>(() => {
    return new Promise((resolve, reject) => {
      confirm.open((confirmed) => {
        if (confirmed) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }, [confirm]);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <DataGridPremium
        {...data}
        loading={loading}
        initialState={initialState}
        unstable_cellSelection
        processRowUpdate={processRowUpdate}
        onBeforeClipboardPasteStart={confirmPaste}
        onClipboardPasteStart={() => setLoading(true)}
        onClipboardPasteEnd={() => setLoading(false)}
        experimentalFeatures={{ clipboardPaste: true }}
        unstable_ignoreValueFormatterDuringExport
        disableRowSelectionOnClick
      />

      <Dialog
        open={confirm.isOpen}
        onClose={confirm.cancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to paste?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will overwrite the selected cells.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirm.cancel}>Cancel</Button>
          <Button onClick={confirm.confirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useConfirm = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const callbackRef = React.useRef<((confirmed: boolean) => void) | null>(null);

  const open = React.useCallback((callback: (confirmed: boolean) => void) => {
    setIsOpen(true);
    callbackRef.current = callback;
  }, []);

  const cancel = React.useCallback(() => {
    setIsOpen(false);
    callbackRef.current?.(false);
    callbackRef.current = null;
  }, []);

  const confirm = React.useCallback(() => {
    setIsOpen(false);
    callbackRef.current?.(true);
    callbackRef.current = null;
  }, []);

  return {
    open,
    isOpen,
    cancel,
    confirm,
  };
};
