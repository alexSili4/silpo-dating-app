import { Hearts } from 'react-loader-spinner';

const Loader = () => (
  <Hearts
    height='80'
    width='80'
    color='#808080'
    ariaLabel='hearts-loading'
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: '1',
      translateX: '-50%',
      translateY: '-50%',
    }}
    visible
  />
);

export default Loader;
