import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxShadow: '0 2px 10px rgba(0,0,0, 0.1)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  content: {
    flexGrow: 1,
  },
  actions: {
    marginLeft: 'auto',
  },
});

export default useStyles;
