import './App.css';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#232f3e',
    height: '45px'
  }
});

function App() {
  const styles = useStyles();

  return (
    <div className="App">
      <header>
        <Toolbar className={styles.header}>
          <span style={{ color: 'white' }}>Movie Flix</span>
        </Toolbar>
      </header>
    </div>
  );
}

export default App;
