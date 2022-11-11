import React, {useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Axios from "axios"
import Swal from "sweetalert2";
export const DataTableC = () => {
  const [candidatoGet, setCandidatoGet] = useState([]);
  const getCandidato = async () => {
    const response = await Axios.get("http://localhost:3002/candidatosvista");
    setCandidatoGet(response.data.data);
    console.log(response);

  }
  useEffect(()=>{
    getCandidato();
  },[])
  const columns = [
    {
      name: "documento",
      label: "",
    },
    {
      name: "imgUrl",
      label: "",
    },
    {
      name: "imgId",
      label: "",
    },
    {
      name: "nombreCandidato",
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
        name: "estado",
        label: "",

    },
    {
        name: "totalVotos",
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
            <button className="btn" onClick={() => {
              window.location.href = `/editCandda/${tableMeta.rowData[0]}`
            }}> 
              Editar
            </button>
            <button className="btn" onClick={() => {
                alert(tableMeta.rowData[0])
            }}> 
             Eliminar
            </button>
            </>
          );
        }
      }
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
        data={candidatoGet}
        columns={columns}
        options={options}
        title={"Lista De Candidatos"}
      />
    </div>
  );
};
