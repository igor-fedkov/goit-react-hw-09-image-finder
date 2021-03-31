import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onClose }) {
	const onKeyDown = useCallback(event => {
		if (event.code === 'Escape') {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		}
	}, [onKeyDown, onClose]);

	const onkBackdropClock = useCallback(({ target, currentTarget }) => {
		if (target === currentTarget) {
			onClose();
		}
	}, [onClose]);

	return createPortal (
		<div className={s.Overlay} onClick={onkBackdropClock}>
			<div className={s.Modal}>
				{children}
			</div>
		</div>,
		modalRoot
	);
}

// class Modal extends Component {

// 	componentDidMount() {
// 		window.addEventListener('keydown', this.onKeyDown)
// 	}

// 	componentWillUnmount() {
// 		window.removeEventListener('keydown', this.onKeyDown);
// 	}

// 	onKeyDown = event => {
// 		const { onClose } = this.props;

// 		if (event.code === 'Escape') {
// 			onClose();
// 		}
// 	}

// 	onkBackdropClock = ({ target, currentTarget }) => {
// 		const { onClose } = this.props;

// 		if (target === currentTarget) {
// 			onClose();
// 		}
// 	}

// 	render() {
// 		const { children } = this.props;
// 		return createPortal (
// 			<div className={s.Overlay} onClick={this.onkBackdropClock}>
// 				<div className={s.Modal}>
// 					{children}
// 				</div>
// 			</div>,
// 			modalRoot
// 		);
// 	}
// };

Modal.propTypes = {
	onClose: PropTypes.func
}

export default Modal;