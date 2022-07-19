import { useState } from "react";
import { IUseColumnsRes } from "../../useColumns";
import AddingForm from "../Forms/AddingForm";
import Modal from "../Modal/Modal";
import ColumnEditor from "./ColumnEditor";

interface IReportEditorProps extends IUseColumnsRes {}

export default function ReportEditor(props: IReportEditorProps) {
  const { columns, handleAdd, handleDelete, handleEdite } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        isVisible={open}
        title="добавить колонку"
        onClose={() => setOpen(false)}
      >
        <AddingForm
          onSubmit={(newCaption: string) => {
            return;
          }}
        />
      </Modal>
      <div>
        {columns.map((column) => {
          return (
            <ColumnEditor
              column={column}
              handleDelete={handleDelete}
              handleEdite={handleEdite}
            />
          );
        })}
        <button onClick={() => setOpen(true)}>Добавить колонку</button>
      </div>
    </>
  );
}
