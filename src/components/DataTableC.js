import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Axios from "axios";
import Swal from "sweetalert2";

export const DataTableC = () => {
  const [candidatoGet, setCandidatoGet] = useState([]);
  const getCandidato = async () => {
    const response = await Axios.get("http://localhost:3002/candidatosvista");
    setCandidatoGet(response.data.data);
    console.log(response);
  };
  console.log("candidatoGet", candidatoGet);
  useEffect(() => {
    getCandidato();
  }, []);

  if (candidatoGet.length < 0) {
    setCandidatoGet([{ data: "No hay datos" }]);
  }
  const columns = [
    {
      name: "documento",
      label: "",
    },
   
    {
      name: "nombreCandidato",
      label: "Nombres Y apellidos",
    },
    {
      name: "programaFormacion",
      label: "Programa de Formacion",
    },
    {
      name: "fichaPrograma",
      label: "Ficha",
    },
    {
      name: "estado",
      label: "",
    },
    {
      name: "totalVotos",
      label: "Total de votos",
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
                  window.location.href = `/editCandidato/${tableMeta.rowData[0]}`;
                }}
              >
                Editar
              </button>
              <button
                className="btn"
                onClick={() => {
                  console.log(tableMeta.rowData[0]);
                  const id = tableMeta.rowData[0];
                  const deleteData = async () => {
                    const response = await Axios.delete(
                      "http://localhost:3002/deleteCandidato/" + id
                    );

                    if (response.data.message === "ERROR_DELETE_CAN") {
                      await Swal.fire({
                        icon: "error",
                        title: "Oops... Parece que hubo un error",
                        text: "Esto sucede por que este candidato esta asociado a una elección",
                        footer: "",
                      });
                      window.location.href = "/candidatos";
                    } else if (
                      response.data.message === "SUCCESFULL_DELETE_CAN"
                    ) {
                      await Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "El candidato ha sido eliminado",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      window.location.href = "/candidatos";
                    }
                  };
                  deleteData();
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
    filterType: "dropdown",
    selectableRows: false,
    responsive: "scroll",
    resizableColumns: true,
    textLabels: {
      body: {
        noMatch: "No se encontro ningun resultado para su busqueda",
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
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
        data={candidatoGet.length > 0 ? candidatoGet : []}
        columns={columns}
        options={options}
        title={"Lista De Candidatos"}
      />
    </div>
  );
};
