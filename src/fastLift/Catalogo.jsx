import ViwerPDF from "./ViwerPDF";
import manuaisData from "../constants/lista_manuais.json";
import { useState } from "react";
import { FavoriteManual } from "./FavoriteManual";

const machinesData = [
  {
    model: "450AJ",
    url: "https://files.fastlift.com.br/JLG/diesel/boom-lift/450AJ/pe%C3%A7as/450A_450AJ_SIII-parts-pn_3121244_17-07-18-no-serie_0300124000_a_0300160834.pdf",
  },
  {
    model: "600AJ",
    url: "https://files.fastlift.com.br/JLG/diesel/boom-lift/600AJ/parts/600A-600AJ-parts_pn-3121206_17-04-2020-no-serie-0300087000-a-0300177361-en.pdf",
  },
  {
    model: "6RS-10RS",
    url: "https://files.fastlift.com.br/JLG/eletric/scissor-lift/6RS-10RS/parts/6RS-10RS-parts-manual.pdf",
  },
  {
    model: "1930ES-a-3246ES",
    url: "https://files.fastlift.com.br/JLG/eletric/scissor-lift/1930ES-A-3246ES/parts/1930ES-a-3246ES_parts_pn-3121248-%2001-02-18-no-serie-0200152825-a-0200198014.pdf",
  },
];

const partsManuals = manuaisData.filter((item) => {
  return item.caminho_r2.includes("parts");
});

//EXTRAIR NOMES DAS MÁQUINAS
const extractMachineName = (array) => {
  //função precisa de mais um parâmetro para o split
  const machineNames = array.map(({ nome_arquivo = "" }) =>
    nome_arquivo.split("parts")[0].replaceAll("-", " ").trim()
  );
  return machineNames;
};
console.log(extractMachineName(partsManuals));
// console.table(partsManuals);

export function Catalogo() {
  const [pdfUrl, setPdfUrl] = useState("/public/banner-viwer.pdf");

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 p-3">
        {machinesData.map((item) => (
          <div
            key={item.url}
            className="flex justify-between md:flex-col md:justify-center items-center bg-gray-700 rounded-2xl p-3 min-w-44"
          >
            <div className="h-12  flex items-center">
              <h2 className="font-bold text-amber-500">{item.model}</h2>
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                className="
                transition-colors duration-100
                p-2 border-1 border-gray-300 text-gray-200 rounded-xl cursor-pointer hover:text-white hover:border-white"
                onClick={() => setPdfUrl(item.url)}
              >
                Visualizar
              </button>
              <FavoriteManual pdfName={item.model} pdfUrl={item.url} />
            </div>
          </div>
        ))}
      </div>
      <ViwerPDF pdfUrl={pdfUrl} />
    </div>
  );
}
