
import manuaisData from '../constants/lista_manuais.json'
// console.table(manuaisData);

export function ManuaisJlg() {
    const serviceManuals = manuaisData.filter(item => {
        const text = (item.nome_arquivo + item.caminho_r2.toLowerCase());

        return text.includes('service' || 'servico' || 'sevirço');
    })
    console.table(serviceManuals);
    return
}