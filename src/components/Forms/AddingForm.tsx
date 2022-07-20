import { useState } from 'react';
import { IColumns } from '../../useColumns';

interface IEditingFormProps {
  onSubmit: (column: IColumns) => void;
}

export default function AddingForm(props: IEditingFormProps) {
  const { onSubmit } = props;
  const [column, setColumn] = useState<IColumns>({
    dataField: '',
    caption: '',
    dataType: 'string',
    format: '',
    alignment: 'right',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setColumn((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(column);
      }}
    >
      <label>
        dataField:&nbsp;
        <input
          value={column.dataField}
          name="dataField"
          type="string"
          onChange={handleChange}
        />
      </label>
      <label>
        caption:&nbsp;
        <input
          value={column.caption}
          name="caption"
          type="string"
          onChange={handleChange}
        />
      </label>
      <label>
        format:&nbsp;
        <input
          value={column.format}
          name="format"
          type="string"
          onChange={handleChange}
        />
      </label>
      <label>
        dataType:&nbsp;
        <select value={column.dataType} name="dataType" onChange={handleChange}>
          <option>number</option>
          <option>boolean</option>
          <option>string</option>
          <option>date</option>
          <option>datetime</option>
        </select>
      </label>
      <label>
        alignment:&nbsp;
        <select
          value={column.alignment}
          onChange={handleChange}
          name="alignment"
        >
          <option>right</option>
          <option>center</option>
          <option>left</option>
        </select>
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
}
