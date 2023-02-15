import { Dialog, DialogContent, DialogContentText, Typography } from "@mui/material";
import React from "react";

interface PopupProps {
  isOpen: boolean
  text: string
  onClose: () => void
}

const Popup: React.FC<PopupProps> = ({text, onClose, isOpen}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          {text}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default Popup;