import './ModalWindow.css';
export default function ModalWindow({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className='modal-window-background'>
      <div className='modal-window'>
        {children}
        <button className='close-btn-modal' onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
