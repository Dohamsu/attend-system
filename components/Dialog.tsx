import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props:any) {
//   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log(props.open);
  };

  const handleClose = () => {
    console.log(props.open);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"로그아웃 하시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            현재 앱 서비스에서 로그아웃합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.dialogCloseCallback}>취소</Button>
          <Button onClick={props.dialogCloseCallback} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}