import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  root:{
    maxHeight:'100vh',
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#4F9D69',
  },
  grid:{
  },
  formgrid:{
    height:"60vh",
    backgroundColor:"GhostWhite",
    borderRadius: 10,
    marginLeft: 20,
  },
  memegrid:{
    maxHeight: '83vh',
  },
  image: {
    marginLeft: '15px',
  },
}));