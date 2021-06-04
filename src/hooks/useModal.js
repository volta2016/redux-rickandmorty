import { useState } from "react";

const useModal = (intialValue = false) => {
	const [modal, setModal] = useState(false);
	const [isOpen, setIsOpen] = useState(intialValue);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleCloseModal = () => {
		setModal(false);
	};

	const handleOpenModal = () => {
		setModal(true);
	};

	return { modal, handleToggle, handleCloseModal, handleOpenModal };
};

export default useModal;
