import "./DeleteConfirmationModal.css";
import closeIcon from "../../assets/Close-icon.png";

function DeleteConfirmationModal({ isOpen, onClose, onConfirmDelete }) {
  const handleConfirmDelete = () => {
    onConfirmDelete();
    onClose();
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_confirmation">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close modal" />
        </button>
        <div className="modal__body">
          <h2 className="modal__title">Are you sure you want to delete this item?</h2>
          <p className="modal__text">This action is irreversible.</p>
          <div className="modal__buttons">
            <button
              className="modal__button modal__button_type_delete"
              onClick={handleConfirmDelete}
              type="button"
            >
              Yes, delete item
            </button>
            <button
              className="modal__button modal__button_type_cancel"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
