import { useState } from 'react';
import { IColumns, IUseColumnsRes } from '../../useColumns';
import AddingForm from '../Forms/AddingForm';
import Modal from '../Modal/Modal';
import ColumnEditor from './ColumnEditor';

interface IReportEditorProps extends IUseColumnsRes {}

export default function ReportEditor(props: IReportEditorProps) {
  const { columns, handleAdd, handleDelete, handleEdit } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Modal
        isVisible={open}
        title="Добавить колонку"
        onClose={() => setOpen(false)}
      >
        <AddingForm
          onSubmit={(column: IColumns) => {
            handleAdd(column);
            setOpen(false);
          }}
        />
      </Modal>
      <div className="report-editor">
        <h4>Колонки</h4>
        {columns.map((column) => {
          return (
            <ColumnEditor
              key={column.dataField}
              column={column}
              handleDelete={handleDelete}
              handleEdite={handleEdit}
            />
          );
        })}
        <button onClick={() => setOpen(true)}>Добавить колонку</button>
      </div>
    </>
  );
}
