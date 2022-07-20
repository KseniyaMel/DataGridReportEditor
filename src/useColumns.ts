import { useState } from 'react';
import configure from './api/report-config.json';

export const dataType = [
  'number',
  'boolean',
  'string',
  'date',
  'datetime',
] as const;
export const alignmentType = ['right', 'center', 'left'] as const;

export type DataType = typeof dataType[number];
export type AlignmentType = typeof alignmentType[number];

export interface IColumns {
  dataField: string;
  caption: string;
  dataType: DataType;
  format: string;
  alignment: AlignmentType;
}

export interface IUseColumnsRes {
  columns: IColumns[];
  handleEdit: (caption: string, newCaption: string) => void;
  handleDelete: (dataField: string) => void;
  handleAdd: (column: IColumns) => void;
}

export default function useColumns(): IUseColumnsRes {
  const [columns, setColumns] = useState<IColumns[]>(
    configure.columns as IColumns[]
  );

  const handleEdit = (caption: string, newCaption: string) => {
    setColumns((prev: IColumns[]) =>
      prev.map((col: IColumns) =>
        col.caption === caption ? { ...col, caption: newCaption } : col
      )
    );
  };

  const handleDelete = (dataField: string) => {
    setColumns((prev: IColumns[]) =>
      prev.filter((col: IColumns) => col.dataField !== dataField)
    );
  };

  const handleAdd = (column: IColumns) => {
    setColumns((prev: IColumns[]) => [...prev, column]);
  };

  return {
    columns,
    handleEdit,
    handleDelete,
    handleAdd,
  };
}
