import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const SearchTextField = withStyles({
  root: {
    '& .MuiInput-formControl': {
      width: '500px'
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white'
    }
  }
})(TextField);

const SearchBox = () => {
  return (
    <SearchTextField label="Search for movies"/>
  );
}

export default SearchBox;
