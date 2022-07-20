import { ReactNode } from 'react';
import './Modal.css';

interface IModalProps {
  isVisible: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal(props: IModalProps) {
  const { isVisible, title, children, onClose } = props;

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
