import React from 'react'
import { Dialog, DialogTitle, Divider, List, ListItem, ListItemText } from '@material-ui/core';

export default (props) => {
  const anchor = <a href="https://github.com/hugueds/cardapio-sla/"> https://github.com/hugueds/linha12/</a>;

    return (
    <Dialog open={props.open} onClick={props.handleClose}>
      <DialogTitle id="dialog-title">INFORMAÇÕES</DialogTitle>
      <List style={styles.list}>
        <ListItem>
          <ListItemText primary="Criado por" secondary="Hugo Peres"/>
        </ListItem>
        <Divider />
        <ListItem onClick={() => window.location.href = 'mailto: hugo-pdf@hotmail.com?subject=LINE 12' }>
          <ListItemText  primary="Contato" secondary="hugo-pdf@hotmail.com" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Repositorio" secondary={anchor} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Data de Criação" secondary="23/11/2019" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Ultima atualização do software" secondary="23/11/2019" />
        </ListItem>
      </List>
    </Dialog>
  )
}

const styles = {
  root: {

  },
  title: {

  },
  line: {

  }, 
  list: {
    fontSize: 5
  }
}