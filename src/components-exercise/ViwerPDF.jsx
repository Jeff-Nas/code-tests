import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs, Outline } from 'react-pdf';
import { ChevronLeft, ChevronRight, Menu, X, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react';

// Estilos essenciais do react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configuração do Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ViwerPDF = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [scale, setScale] = useState(1.0);
    const [containerWidth, setContainerWidth] = useState(null);
    const containerRef = useRef(null);

    // Responsividade da largura
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect.width) {
                    setContainerWidth(entry.contentRect.width - 48);
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [sidebarOpen]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prev) => Math.min(Math.max(1, prev + offset), numPages));
    }

    function onItemClick({ pageNumber }) {
        setPageNumber(pageNumber);
        if (window.innerWidth < 768) setSidebarOpen(false);
    }

    // --- Função de Download ---
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        // Tenta pegar o nome do arquivo da URL ou define um padrão
        link.download = pdfUrl.split('/').pop() || 'manual-tecnico.pdf';
        link.target = '_blank'; // Garante que funcione mesmo se o navegador bloquear download direto
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex h-screen w-full bg-gray-100 font-sans overflow-hidden text-gray-800">

            {/* --- Sidebar (Sumário) --- */}
            <aside
                className={`bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full overflow-hidden'
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-700">Índice</h3>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded text-gray-500 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    <div className="
            [&_ul]:list-none [&_ul]:pl-2 
            [&_li]:mt-2 
            [&_a]:text-sm [&_a]:text-gray-600 [&_a]:no-underline [&_a]:block [&_a]:cursor-pointer [&_a]:transition-colors
            hover:[&_a]:text-blue-600 hover:[&_a]:font-medium
          ">
                        <Document file={pdfUrl} loading="Carregando índice...">
                            <Outline onItemClick={onItemClick} />
                        </Document>
                    </div>
                </div>
            </aside>

            {/* --- Área Principal --- */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative transition-all duration-300">

                {/* Toolbar Superior */}
                <div className="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-4 md:px-6 shadow-sm z-10">

                    <div className="flex items-center gap-3">
                        {!sidebarOpen && (
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="p-2 hover:bg-gray-100 rounded text-gray-600"
                                title="Abrir Índice"
                            >
                                <Menu size={20} />
                            </button>
                        )}

                        {/* --- Botão de Download (NOVO) --- */}
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 cursor-pointer transition-colors text-sm font-medium border border-blue-100"
                            title="Baixar Manual"
                        >
                            <Download size={18} />
                            <span className="hidden sm:inline">Baixar</span>
                        </button>
                    </div>

                    {/* Controles de Paginação */}
                    <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg border border-gray-200">
                        <button
                            onClick={() => changePage(-1)}
                            disabled={pageNumber <= 1}
                            className="p-1.5 hover:bg-white hover:shadow-sm rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <span className="text-sm font-medium w-24 text-center tabular-nums text-gray-600">
                            {pageNumber} / {numPages || '--'}
                        </span>

                        <button
                            onClick={() => changePage(1)}
                            disabled={pageNumber >= numPages}
                            className="p-1.5 hover:bg-white hover:shadow-sm rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Controles de Zoom */}
                    <div className="hidden md:flex items-center gap-2">
                        <button onClick={() => setScale(s => Math.max(0.5, s - 0.1))} className="p-2 hover:bg-gray-100 rounded text-gray-500">
                            <ZoomOut size={18} />
                        </button>
                        <span className="text-xs text-gray-500 w-10 text-center">{Math.round(scale * 100)}%</span>
                        <button onClick={() => setScale(s => Math.min(2.0, s + 0.1))} className="p-2 hover:bg-gray-100 rounded text-gray-500">
                            <ZoomIn size={18} />
                        </button>
                    </div>
                </div>

                {/* Wrapper do Documento PDF (Página Única) */}
                <div
                    ref={containerRef}
                    className="flex-1 bg-slate-700 overflow-y-auto flex justify-center p-4 md:p-8 relative"
                >
                    <div className="shadow-2xl h-fit">
                        <Document
                            file={pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={
                                <div className="flex items-center gap-2 text-white">
                                    <RotateCw className="animate-spin" /> Carregando...
                                </div>
                            }
                            error={
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                    Erro ao carregar PDF
                                </div>
                            }
                            className="flex flex-col gap-4"
                        >
                            <Page
                                pageNumber={pageNumber}
                                width={containerWidth ? Math.min(containerWidth, 800) : 600}
                                scale={scale}
                                className="bg-white"
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                            />
                        </Document>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ViwerPDF;