import { useState } from "react";
import configure from "./api/report-config.json";

export const stringNames = ["dataField", "caption", "format"] as const;
export const dataType = [
  "number",
  "boolean",
  "string",
  "date",
  "datetime",
] as const;
export const alignmentType = ["right", "center", "left"] as const;

export type StringFieldName = typeof stringNames[number];
export type DataType = typeof dataType[number];
export type AlignmentType = typeof alignmentType[number];

export function isStringFieldName(name: string): name is StringFieldName {
  return (stringNames as ReadonlyArray<string>).includes(name);
}
export function isFormatType(name: string): name is DataType {
  return (dataType as ReadonlyArray<string>).includes(name);
}
export function isAlignmentType(name: string): name is AlignmentType {
  return (alignmentType as ReadonlyArray<string>).includes(name);
}

export interface IColumns {
  dataField: string;
  caption: string;
  dataType: DataType;
  format: string;
  alignment: AlignmentType;
}

export interface IUseColumnsRes {
  columns: IColumns[];
  handleEdite: (caption: string, newCaption: string) => void;
  handleDelete: (dataField: string) => void;
  handleAdd: (column: IColumns) => void;
}

export default function useColumns(): IUseColumnsRes {
  const [columns, setColumns] = useState<IColumns[]>(
    configure.columns as IColumns[]
  );

  const handleEdite = (caption: string, newCaption: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.caption === caption ? { ...col, caption: newCaption } : col
      )
    );
  };
  const handleDelete = (dataField: string) => {
    setColumns((prev) => prev.filter((col) => col.dataField !== dataField));
  };
  const handleAdd = (column: IColumns) => {
    setColumns((prev) => [...prev, column]);
  };

  return {
    columns,
    handleEdite,
    handleDelete,
    handleAdd,
  };
}
