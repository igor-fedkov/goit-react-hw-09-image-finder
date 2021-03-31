import { PropTypes } from 'prop-types';
import { Notification } from 'react-pnotify';

const AlertNotice = ({text}) => {
  return (
    <Notification
        type='notice'
        title={text}
        delay={2000}
        shadow={false}
        hide={true}
        nonblock={true}
        desktop={true}
      />
  )
}

AlertNotice.protoType = {
  text: PropTypes.string.isRequired
};

const ErrorNotice = ({text}) => {
  return (
    <Notification
        type='error'
        title={text}
        animateIn='bounceInLeft'
        animateOut='bounceOutRight'
        delay={2500}
        shadow={true}
        hide={true}
        nonblock={false}
        desktop={false}
      />
  )
}

ErrorNotice.protoType = {
  text: PropTypes.string.isRequired
};

export {AlertNotice, ErrorNotice}