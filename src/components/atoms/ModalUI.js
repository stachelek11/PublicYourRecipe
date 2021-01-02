import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(252, 197, 67, 0.95)",
  },
}));

const Paper = styled.div`
  background-color: white;
  max-height: 90vh;
  max-width: 90vw;
  width: 700px;
  height: 600px;
  overflow: auto;
  border-radius: 40px;
  padding: 20px;
  ::-webkit-scrollbar-track {
    margin: 40px 40px;
  }
`;

const ModalUI = ({ children, setOpen, open }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 800,
        }}
      >
        <Fade in={open}>
          <Paper>{children}</Paper>
        </Fade>
      </Modal>
    </div>
  );
};

ModalUI.propTypes = {
  children: PropTypes.any,
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ModalUI;
