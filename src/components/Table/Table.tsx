import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import { IColumns } from '../../useColumns';
import service from '../../api/data';

export default function Table(props: { columns: IColumns[] }) {
  const data = service.getData();
  const { columns } = props;

  return (
    <DataGrid
      id="gridContainer"
      keyExpr="ID"
      allowColumnReordering={true}
      allowColumnResizing={true}
      columnAutoWidth={true}
      showBorders={true}
      dataSource={data}
    >
      {columns.map((fields: IColumns) => (
        <Column key={fields.caption} {...fields} />
      ))}
    </DataGrid>
  );
}
