export type newsData = {
    id: number,
    tipo: string,
    titulo: string,
    introducao: string,
    data_publicacao: string,
    produto_id: number,
    produtos: string,
    editorias: string,
    imagens: string,
    imagensUrl?: imgUrl,
    produtos_relacionados: string,
    destaque: boolean,
    link: string
}

export type allNews = {
    count: number,
    items: newsData[],
    nextPage: number,
    page: number,
    previousPage: number,
    showingFrom: number,
    showingTo: number,
    totalPages: number
}

export type imgUrl = {
  image_intro: string,
  image_fulltext: string
}

export type typeBreadcrumbs = {
  link: string,
  name: string
}