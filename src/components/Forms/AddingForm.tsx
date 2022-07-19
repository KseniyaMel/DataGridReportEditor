import { useState } from "react";
import { IColumns } from "../../useColumns";

interface IEditingFormProps {
  onSubmit: (newCaption: string) => void;
}

export default function AddingForm(props: IEditingFormProps) {
  const { onSubmit } = props;
  const [column, setColumn] = useState<IColumns>({
    dataField: "",
    caption: "",
    dataType: "string",
    format: "",
    alignment: "right",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setColumn((prev) => {
      const f = { ...prev, [e.target.name]: e.target.value };
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(column);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        value={column.dataField}
        name="dataField"
        type="string"
        onChange={handleChange}
      />
      <input
        value={column.caption}
        name="caption"
        type="string"
        onChange={handleChange}
      />
      <input
        value={column.format}
        name="format"
        type="string"
        onChange={handleChange}
      />
      <select value={column.dataType} name="dataType" onChange={handleChange}>
        <option>number</option>
        <option>boolean</option>
        <option>string</option>
        <option>date</option>
        <option>datetime</option>
      </select>
      <select value={column.alignment} onChange={handleChange} name="alignment">
        <option>right</option>
        <option>center</option>
        <option>left</option>
      </select>
      <button type="submit">Добавить</button>
    </form>
  );
}
