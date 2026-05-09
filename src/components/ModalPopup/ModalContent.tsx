import React from 'react';
import styles from './styles.module.css';
import { TipIcon, InfoIcon, WarningIcon, NoteIcon, DangerIcon } from './Icons';


export default function ModalContent({
     onClose,
     modalType,
     modalTitle,
     modalContent,
     xClosePresent,
     closeOnOverlay,
     style
 }): JSX.Element {
    const additionalTypeClass = (input: string): string => {
        if (!input) return '';
        let mType: string | null = null;
        switch (input.toLowerCase()) {
            case 'tip':
            case 'info':
            case 'warning':
            case 'note':
            case 'danger':
                mType = input.toLowerCase() + 'Type modalType';
                break;
            default:
                mType = null;
        }
        const classNames = mType ? mType.split(' ').map(className => styles[className]).join(' ') : '';
        return classNames || '';
    };

    const modalIcon = (input: string): JSX.Element | null  => {
        if (!input) return null;
        switch (input.toLowerCase()) {
            case 'tip':
                return <TipIcon />;
            case 'info':
                return <InfoIcon />;
            case 'warning':
                return <WarningIcon />;
            case 'note':
                return <NoteIcon />;
            case 'danger':
                return <DangerIcon />;
            default:
                return null;
        }
    };

    const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.stopPropagation();
    };

    return (
        <div className={`${styles.overlay} ${additionalTypeClass(modalType)}`} onClick={closeOnOverlay ? onClose : null}>
            <div className={`${styles.modal}`} style={style} onClick={stopPropagation}>
                <div className={`${styles.modalHeader}`}>
                    <div className={styles.modalIcon}>
                        {modalIcon(modalType)}
                    </div>
                    <div className={styles.modalTitle}>
                        {modalTitle}
                    </div>
                    {xClosePresent && (
                        <div className={styles.xClose} onClick={onClose}>&#9447;</div>
                    )}
                </div>
                <div className={styles.modalBody}>
                    {modalContent}
                </div>
            </div>
        </div>
    );
}
