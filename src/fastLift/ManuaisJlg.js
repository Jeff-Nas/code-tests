import manuaisData from "../constants/lista_manuais.json";

const manualsSections = {
  manufacturer: "jlg",
  category: "diesel",
  machineType: "boom-lift",
  machineModel: "450",
};

const operationsManuals = manuaisData.filter((item) => {
  return item.caminho_r2.includes("operation");
});

console.table(operationsManuals);
