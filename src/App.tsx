import './App.css';
import ReportEditor from './components/Editor/ReportEditor';
import Table from './components/Table/Table';
import useColumns from './useColumns';

function App() {
  const { columns, handleAdd, handleDelete, handleEdite } = useColumns();
  return (
    <div className="App">
      <Table columns={columns} />
      <ReportEditor
        columns={columns}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleEdite={handleEdite}
      />
    </div>
  );
}

export default App;
