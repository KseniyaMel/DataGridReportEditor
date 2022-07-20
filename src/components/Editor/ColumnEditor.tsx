import { useState } from 'react';
import { IColumns } from '../../useColumns';
import EditingForm from '../Forms/EditingForm';
import Modal from '../Modal/Modal';

interface IColumnEditorProps {
  column: IColumns;
  handleDelete: (dataField: string) => void;
  handleEdite: (caption: string, newCaption: string) => void;
}

export default function ColumnEditor(props: IColumnEditorProps) {
  const { column, handleDelete, handleEdite } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        isVisible={open}
        title="Изменить название"
        onClose={() => setOpen(false)}
      >
        <EditingForm
          defaultValue={column.caption}
          onSubmit={(newCaption: string) => {
            handleEdite(column.caption, newCaption);
            setOpen(false);
          }}
          //  onSubmit={handleEdite.bind(null, column.caption)}
        />
      </Modal>
      <div className="column-editor">
        <h5>{column.caption}</h5>
        <button onClick={() => handleDelete(column.dataField)}>🗑</button>
        <button onClick={() => setOpen(true)}>✏️</button>
      </div>
    </>
  );
}
