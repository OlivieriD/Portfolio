import React from 'react';
import '../../styles/ConfirmModal.css';

const ConfirmModal = ({ title, message, onConfirm, onCancel, confirmText = "Delete", cancelText = "Cancel" }) => {
    return (
        <div className="confirm-modal-overlay" onClick={onCancel}>
            <div className="confirm-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="confirm-modal-header">
                    <h3>{title}</h3>
                </div>
                <div className="confirm-modal-body">
                    <p>{message}</p>
                </div>
                <div className="confirm-modal-actions">
                    <button className="confirm-cancel-btn" onClick={onCancel}>
                        {cancelText}
                    </button>
                    <button className="confirm-delete-btn" onClick={onConfirm}>
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
