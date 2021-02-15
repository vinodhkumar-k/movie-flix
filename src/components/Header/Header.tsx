import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SearchBox from '../SearchBox/SearchBox';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    backgroundColor: '#232f3e',
    height: '45px',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  fillSpace: {
    flex: '0 1 0'
  }
});

const Header = () => {
  const styles = useStyles();

  return (
    <Toolbar className={styles.header}>
      <span style={{color: 'orange'}}>Movie Flix</span>
      <SearchBox/>
      <span className={styles.fillSpace}></span>
    </Toolbar>
  );
}

export default Header;
