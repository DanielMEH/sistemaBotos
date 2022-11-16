import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Axios from "axios";
import Swal from "sweetalert2";
export const DataTableV = () => {
  const [eleccionGet, setEleccionGet] = useState([]);
  const getElection = async () => {
    const response = await Axios.get("http://localhost:3002/votantesView");
    setEleccionGet(response.data.message);
    console.log(response);
  };
  useEffect(() => {
    getElection();
  }, []);
  const columns = [
    {
      name: "id",
      label: "",
    },
    {
      name: "documento",
      label: "",
    },
    {
      name: "nombresApellidos",
      label: "",
    },
    {
      name: "programaFormacion",
      label: "",
    },
    {
      name: "fichaPrograma",
      label: "",
    },
    {
      name: "emitioVoto",
      label: "",
    },
    {
      name: "estado",
      label: "",
    },
    {
      name: "Opciones",
      label: "",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <button
                className="btn"
                onClick={() => {
                  window.location.href = `/editVotante/${tableMeta.rowData[0]}`;
                }}
              >
                Editar
              </button>
              <button
                className="btn"
                onClick={() => {
                  Swal.fire({
                    title: `Estas seguro de eliminar este candidato?`,
                    text: `${tableMeta.rowData[1]}`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      const deleteA = async () => {
                        const response = await Axios.delete(
                          "http://localhost:3002/deletvotantes/" +
                            parseInt(tableMeta.rowData[0])
                        );
                        if (response.data.message === "exito") {
                          Swal.fire(
                            "Se elimino exitosamente",
                            "Your file has been deleted.",
                            "success"
                          );
                          window.location.href = "/votantes";
                        } else if (response.data.message === "deleteexit") {
                          Swal.fire({
                            icon: "error",
                            title: `Hubo un error al eliminar el dato.`,
                            text: `Esto sucede por que hay un votante postulados en esta eleccion o un error en la ejecucion 
                          intenta de nuevo`,
                            footer: `Codigo de error ${response.data.message}`,
                          });
                        }
                        console.log(response);
                      };
                      deleteA();
                    }
                  });

                  console.log("elimina", tableMeta.rowData[0]);
                }}
              >
                Eliminar
              </button>
            </>
          );
        },
      },
    },
  ];

  const options = {
    rowsPerPage: 10,
    fixedHeader: true,
    responsive: "scrollMaxHeight",
    resizableColumns: true,
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
        data={eleccionGet}
        columns={columns}
        options={options}
        title={"Lista de Votantes"}
      />
    </div>
  );
};
