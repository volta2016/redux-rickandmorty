import React from "react";
import { createPortal } from "react-dom";
import "../assets/styles/components/Modal.scss";
import { ReactComponent as SVGClose } from "../assets/static/icons/close.svg";

const Modal = ({ isOpen, onClose, children }) =>
	isOpen
		? createPortal(
				<div className="modal">
					<figure onClick={onClose} className="modal__close">
						<SVGClose className="modal__close-icon" />
					</figure>
					<div className="modal__container">{children}</div>
				</div>,
				document.getElementById("modal")
		  )
		: "";

export default Modal;
