import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import { DialogContent, DialogTitle } from "@mui/material";

interface ModalProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  maxWidths?: DialogProps["maxWidth"];
  trigger: boolean;
  setTriggerFnc: React.Dispatch<React.SetStateAction<boolean>>;
  closeOnOutsideClick?: boolean;
  notCloseOnOutside?: boolean;
}

const ModalPopup = ({
  children,
  title,
  trigger,
  setTriggerFnc,
  closeOnOutsideClick = true,
  notCloseOnOutside,
  maxWidths,
}: ModalProps) => {
  const dialogRef = React.useRef(null);
  const [outside, setOutside] = React.useState(false);
  const handleClose = () => {
    if (closeOnOutsideClick) {
      setTriggerFnc(false);
    }
  };
  return (
    <Dialog
      onClose={notCloseOnOutside ? () => setOutside(true) : handleClose}
      open={trigger}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)",
        },
        onClick: handleClose,
      }}
      PaperProps={{
        ref: dialogRef,
        style: { borderRadius: "12px" },
      }}
      maxWidth={maxWidths}
    >
      {title}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalPopup;
