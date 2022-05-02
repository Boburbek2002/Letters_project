import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Letter from './Letter';
import '../App.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({letter}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Letter
        letter={letter}
        onClick={handleClickOpen}
      />
      <div>
        
        <BootstrapDialog
          onClose={handleClose}
          // aria-labelledby="customized-dialog-title"
          open={open}
        > 
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers 
          className='modalContainer'>
            <div className='row'>
              <div className='col-6 '>
                <img src="Imgs/images.jpg" alt="dffthdrsdf" className='w-100 modalImg' />
                <h3>Bb</h3>
              </div>
              <div className='col-6'>
                <div className='d-flex justify-content-between'>
                  <span>Banan</span>
                  <img src="Imgs/banana.jpg" alt="dffthdrsdf" className='w-50 modalImg' />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ea velit id vero dolorem voluptates. Quaerat eligendi deserunt voluptate error esse!
                </p>
              </div>

            </div>
          </DialogContent>
          
        </BootstrapDialog>
      </div>
    </>
    
  );
}
