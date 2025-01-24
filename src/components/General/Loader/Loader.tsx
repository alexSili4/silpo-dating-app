import { Hearts } from 'react-loader-spinner';

const Loader = () => (
  <Hearts
    height='300'
    width='300'
    color='#F994BD '
    ariaLabel='hearts-loading'
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: '1',
      transform: 'translateX(-50%) translateY(-50%)',
    }}
    visible
  />
);

export default Loader;
