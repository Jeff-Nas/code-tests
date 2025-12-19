import { useState } from "react";
import ViwerPDF from "./ViwerPDF";

export function Catalogo() {
    const [pdfUrl, setPdfUrl] = useState("");

    return (
        <div>
            <div className="flex gap-3 p-3 ">
                <button
                    className="p-2 bg-gray-600 text-white rounded-2xl"
                    onClick={() => setPdfUrl("https://arquivos.maquinaspemt.com.br/JLG/diesel/boom-lift/1250AJP/parts/1250AJP_parts-pn-3121172-25-08-18-no-serie-0300000100-a-0300201017.pdf")}
                >
                    1250AJP
                </button>
                <button
                    className="p-2 bg-gray-600 text-white rounded-2xl"
                    onClick={() => setPdfUrl("https://arquivos.maquinaspemt.com.br/JLG/diesel/boom-lift/450AJ/pe%C3%A7as/450A_450AJ-SIII-parts-pn-3121291-19-05-20_no-serie-0300160835-A-0300201990.pdf")}
                >
                    450AJ
                </button>
                <button
                    className="p-2 bg-gray-600 text-white rounded-2xl"
                    onClick={() => setPdfUrl("https://arquivos.maquinaspemt.com.br/JLG/eletric/scissor-lift/6RS-10RS/parts/6RS-10RS-parts-manual.pdf")}
                >
                    6RS-10RS
                </button>
                <button
                    className="p-2 bg-gray-600 text-white rounded-2xl"
                    onClick={() => setPdfUrl("https://arquivos.maquinaspemt.com.br/JLG/eletric/scissor-lift/1930ES-A-3246ES/parts/1930ES-a-3246ES_parts_pn-3121275-01-02-18-no-serie-0200198014-a-0200239381-e-no-serie-B200000100-a-B200020296.pdf")}
                >
                    1930ES-a-3246ES
                </button>
            </div>
            <ViwerPDF pdfUrl={pdfUrl} />
        </div>
    )
}