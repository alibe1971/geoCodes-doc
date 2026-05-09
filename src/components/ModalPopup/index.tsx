import React, {ReactNode, useState} from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.tsx';

ModalPopup.propTypes = {
    buttonClass: PropTypes.string,
    buttonText: PropTypes.string,
    modalType: PropTypes.string,
    modalTitle: PropTypes.string,
    modalContent: PropTypes.string,
    xClosePresent: PropTypes.bool,
    style: PropTypes.object,
};
ModalPopup.defaultProps = {
    buttonClass: null,
    buttonText: 'click me',
    xClosePresent: false,
    closeOnOverlay: true,
    modalType: null,
    modalTitle: null,
    modalContent: '<div>No defined content</div>',
    style: {},
};

export default function ModalPopup({
    buttonClass,
    buttonText,
    xClosePresent,
    closeOnOverlay,
    modalType,
    modalTitle,
    modalContent,
    style,
}): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className={buttonClass} onClick={() => setShowModal(true)}>
                {buttonText}
            </button>
            {showModal && createPortal(
                <ModalContent
                    modalType={modalType}
                    modalTitle={modalTitle}
                    xClosePresent={xClosePresent}
                    closeOnOverlay={closeOnOverlay}
                    modalContent={modalContent}
                    style = {style}
                    onClose={() => setShowModal(false)}
                />,
                document.body
            )}
        </>
    );
}

