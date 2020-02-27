import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Button } from '@material-ui/core';

import ReactToPrint from 'react-to-print';

import { Page } from 'components';
import {
  Header,
  Statistics,
  Notifications,
  Projects,
  Todos
} from './components';

const Overview = () => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    setTitle('Alisson Santos');
    setSubTitle('Omnistack Developer');
  }, []);

  const REF_impressaoReceituario = useRef();

  return (
    <>
      <Page
        className={classes.root}
        title="Início"
      >
        <ReactToPrint
          content={() => REF_impressaoReceituario.current}
          trigger={() => <Button>IMPRIMIR RECEITUÁRIO</Button>}
        />
        <Header />
        {/* <Statistics className={classes.statistics} />
      <Notifications className={classes.notifications} />
      <Projects className={classes.projects} />
      <Todos className={classes.todos} /> */}
      </Page>
      {/* IMPRESSÕES */}
      <div style={{ display: 'none' }}>
        <div ref={REF_impressaoReceituario}>
          <IMPRESSAO_RECEITUARIO
            subTitle={subTitle}
            title={title}
          />
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

function IMPRESSAO_RECEITUARIO({ title, subTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <Header />
    </>
  );
}

export default Overview;
