export function bytesToMB(bytes, decimals = 1) {
  if (!bytes) return "0 MB";

  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(decimals)} MB`;
}

//funnção para converter tamanho do arquivo em lista_manuais.json
