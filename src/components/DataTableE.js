import React, { usePost } from "../hooks/context/ElecctionsContext";
import MUIDataTable from "mui-datatables";

export const DataTableE = () => {
  const { postAdmin } = usePost();
  console.log(postAdmin);

  console.log(usePost());
  const columns = [
    {
      name: "idEleccion",
      label: "",
    },
    {
      name: "descripcion",
      label: "",
    },
    {
      name: "cargo",
      label: "",
    },
    {
      name: "estado",
      label: "",
    },
    {
      name: "fecha",
      label: "",
    },
  ];

  const options = {
    rowsPerPage: 10,
    fixedHeader: true,

    responsive: "scrollMaxHeight",
    textLabels: {
      body: {
        noMatch: "No se encontro ningun resultado para su busqueda",
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Sort for ${column.label}`,
      },
      pagination: {
        next: "Página siuiente",
        previous: "Previous Page",
        rowsPerPage: "Filas por página:",
        displayRows: "ó",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar  CSV",
        print: "Imprimir",
        pdfHtml5: "pdf",
        viewColumns: "Ver columnas",
        filterTable: "Filtrar tabla",
      },
      filter: {
        all: "All",
        title: "FILTERS",
        reset: "RESET",
      },
      viewColumns: {
        title: "Show Columns",
        titleAria: "Show/Hide Table Columns",
      },
      selectedRows: {
        text: "Filas(s) selecionadas",
        delete: "Eliminar",
        deleteAria: "Delete Selected Rows",
      },
    },
  };
  return (
    <div>
      <MUIDataTable
        data={postAdmin}
        columns={columns}
        options={options}
        title={"Lista de elecciones"}
      />
    </div>
  );
};
