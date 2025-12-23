import manuaisData from "../constants/lista_manuais.json";
// console.table(manuaisData);

export function ManuaisJlg() {
  // const words = ['service', 'servico', 'serviço'];
  // const serviceManuals = manuaisData.filter(item => {
  //     const text = (item.nome_arquivo + item.caminho_r2).toLowerCase();

  //     return words.some(w => text.includes(w));
  // })

  //SUPONDO QUE USUÁRIO ESCOLHEU CATEGORIA BOOM DIESEL E FABRICANTE JLG
  const category = "diesel";
  const manufacturer = "jlg";
  const selectedManuals = manuaisData.filter((item) => {
    if (!category || !manufacturer) return false;
    const text = item.caminho_r2.toLowerCase();

    return text.includes(category) && text.includes(manufacturer);
  });

  const manuals450Aj = selectedManuals.filter((item) => {
    const text = (item.nome_arquivo + item.caminho_r2).toLowerCase();

    return text.includes("450");
  });

  console.table(selectedManuals);
  return;
}
