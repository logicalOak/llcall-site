import React from 'react';

const Modal = () => {
	return (
		<div className='modal'>
			<h2 className='modal__title'>dfd</h2>
			<p className='modal__desc'>fdf</p>
			<form className='modal-form'>
				<input type='text' />
				<input type='text' />
				<label className='modal__label'>
					<input type='checkbox' />
					<span className='modal__checkbox'></span>
				</label>
				<button className='modal__btn'>dfdf</button>
			</form>
			<button className='modal__close'></button>
		</div>
	);
};

export default Modal;
