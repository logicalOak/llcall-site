import React, { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

const Modal = ({ active, setActive, onClose }) => {
	const keydownHandler = ({ key }) => {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keydownHandler);
		return () => document.removeEventListener('keydown', keydownHandler);
	});
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={onClose}>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}>
				<h2 className='modal__title'>Заказать звонок</h2>
				<p className='modal__desc'>
					Пожалуйста, оставьте ваш номер телефона, мы вам перезвоним в течение часа
				</p>
				<button className='modal__button' onClick={onClose}>
					<CgClose className='modal__close' />
				</button>
				<form className='modal__form'>
					<div className='modal__group'>
						<input className='modal__input' type='text' placeholder='Ваше имя*' required />
						<input
							className='modal__input'
							type='text'
							placeholder='Введите номер телефона*'
							required
						/>
					</div>
					<div className='modal__bottom'>
						<label className='modal__label' aria-label='Согласен на обработку моих данных'>
							<input type='checkbox' className='modal__checkbox visually-hidden' />
							<span className='checkbox'></span>
							<span className='modal__checkbox-text'>
								Согласен на обработку моих персональных данных
							</span>
						</label>
						<button className='modal__btn'>Отправить</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
