import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
    paddingTop: '56.25%',
    flex: 1,
    width: null,
    height: '300px',
    resizeMode: 'contain',
  },
  caption:{
    marginBottom: 20,
  },
  name:{
    display:'inline',
    fontWeight: 'bold',
  },
  button:{
    display:'inline',
    float: 'right',
  },
  subbutton:{
    marginBottom: 8,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
  },

  
}));