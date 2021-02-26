const convertData = (array) => {
  return array.map(data => {
    return {x: data[0], y: data[1], random: data[2]}
  })
}

const columnDefs = [
  { field: "x", sortable: true },
  { field: "y", sortable: true },
  { field: "random", sortable: true }
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: [],
  
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector("#chart_toggle").parentNode
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    toggleButton.addEventListener("click", (e) => {
      const chart = document.getElementById("container_chart")

      if (chart.style.display === "none") {
        chart.style.display = "block"
        gridOptions.api.setRowData(convertData(randomNumbersArr))
        gridOptions.api.sizeColumnsToFit()
        gridDiv.style.display = "none"
        
        
      } else {
        chart.style.display = "none"
        gridOptions.api.setRowData(convertData(randomNumbersArr))
        gridOptions.api.sizeColumnsToFit()
        gridDiv.style.display = "block"
      }
    })
  
});