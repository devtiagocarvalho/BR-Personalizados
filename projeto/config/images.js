export const CATEGORIES = {
    CAIXINHAS: 'caixinhas',
    TOPOS: 'topos',
    ESCOLARES: 'escolares',
    CONVITES: 'convites'
};

const imageConfig = {
    // Carrosséis
    carrossel: {
        caixinhas: {
            path: "caixinhas",
            images: [
                {
                    id: "caixinha-1",
                    src: "https://i.ibb.co/dJ4g5nY5/dois.jpg",
                    alt: "NÚMERO 2"
                },
                {
                    id: "caixinha-2",
                    src: "https://i.ibb.co/p0rZ1yt/selva-3.jpg",
                    alt: "Caixinha 2"
                },
                {
                    id: "caixinha-3",
                    src: "https://i.ibb.co/Lk1xkvQ/caixinha-4.webp",
                    alt: "Caixinha 3"
                },
                {
                    id: "caixinha-4",
                    src: "https://i.ibb.co/wNkCQLh/caixinha-5.webp",
                    alt: "Caixinha 4"
                },
                {
                    id: "caixinha-5",
                    src: "https://i.ibb.co/3YzwYgzC/caixinha-2.jpg",
                    alt: "Caixinha 5"
                }
            ]
        },
        topos: {
            path: "topo",
            images: [
                {
                    id: "topo-1",
                    src: "https://i.ibb.co/VqJgtvP/topo-3.jpg",
                    alt: "Topo de bolo"
                },
                {
                    id: "topo-2",
                    src: "https://i.ibb.co/92641Hz/topo-1.webp",
                    alt: "Topo de bolo 2"
                },
                {
                    id: "topo-3",
                    src: "https://i.ibb.co/HK7pDrq/topo-2.webp",
                    alt: "Topo de bolo 3"
                },
                {
                    id: "topo-4",
                    src: "https://i.ibb.co/rf30rhq/topo-4.webp",
                    alt: "Topo de bolo 4"
                },
                {
                    id: "topo-5",
                    src: "https://i.ibb.co/wMDh0PN/topo-6.webp",
                    alt: "Topo de bolo 5"
                }
            ]
        },
        escolares: {
            path: "escolar",
            images: [
                {
                    id: "escolar-1",
                    src: "https://i.ibb.co/prcgcGz/agenda-1.jpg",
                    alt: "Material escolar"
                },
                {
                    id: "escolar-2",
                    src: "https://i.ibb.co/XVCw837/agenda-2.jpg",
                    alt: "Material escolar 2"
                },
                {
                    id: "escolar-3",
                    src: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                    alt: "Material escolar 3"
                },
                {
                    id: "escolar-4",
                    src: "https://i.ibb.co/6tX6hqW/material.webp",
                    alt: "Material escolar 4"
                },
                {
                    id: "escolar-5",
                    src: "https://i.ibb.co/6sX0LMc/etiquetas.jpg",
                    alt: "Material escolar 5"
                },
                {
                    id: "escolar-6",
                    src: "https://i.ibb.co/jWKPgMM/l-pis.webp",
                    alt: "Material escolar 6"
                }
            ]
        },
        convites: {
            path: "convites",
            images: [
                {
                    id: "convite-1",
                    src: "https://i.ibb.co/prcgcGz/agenda-1.jpg",
                    alt: "Convite Personalizado 1"
                },
                {
                    id: "convite-2",
                    src: "https://i.ibb.co/XVCw837/agenda-2.jpg",
                    alt: "Convite Personalizado 2"
                },
                {
                    id: "convite-3",
                    src: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                    alt: "Convite Personalizado 3"
                },
                {
                    id: "convite-4",
                    src: "https://i.ibb.co/6tX6hqW/material.webp",
                    alt: "Convite Personalizado 4"
                }
            ]
        }
    },

    // Páginas de categorias
    paginas: {
        caixinhas: {
            titulo: "Caixinhas Personalizadas",
            tipos: {
                milk: {
                    titulo: "Caixinha milk",
                    produtos: [
                        {
                            id: 1,
                            nome: "Caixinha Detetive",
                            imagem: "https://i.ibb.co/tPKxFJX/cachorro-4.jpg",
                            preco: "45,00",
                            descricao: "Caixinha tema detetive labrador",
                            categoria: "caixinhas",
                            imagens: [
                                "https://i.ibb.co/FLRJ6hPY/dl-4.webp",
                                "https://i.ibb.co/PGNRQNHS/dl-3.jpg",
                                "https://i.ibb.co/k0QYfWX/cachorro.jpg",
                                "https://i.ibb.co/hY2X8kY/cachorro-5.jpg",
                                "https://i.ibb.co/ZTfs4Fq/cachorro-2.jpg"
                            ]
                        },
                        {
                            id: 2,
                            nome: "Numeral Teste",
                            imagem: "https://i.ibb.co/dJ4g5nY5/dois.jpg",
                            preco: "45,00",
                            descricao: "Linda caixinha tema unicórnio",
                            categoria: "caixinhas",
                            imagens: [
                                "https://i.ibb.co/j9XBMm8K/4496440-elegantemente-desenhada-arabica-numerais-de-0-a-9-vetor.jpg",
                                "https://i.ibb.co/7BTT210/Numerais-poa-colorido-com-borda.jpg",
                                "https://i.ibb.co/abc/unicornio-3.jpg"
                            ]
                        },
                        {
                            id: 3,
                            nome: "Caixinha Selva",
                            imagem: "https://i.ibb.co/gdj4JGw/selva-2.jpg",
                            preco: "45,00",
                            descricao: "Caixinha tema selva",
                            categoria: "caixinhas",
                            imagens: [
                                "https://i.ibb.co/MD5vw5Gw/caixinha-4.webp",
                                "https://i.ibb.co/nMn5CnPh/caixinha.webp",
                                "https://i.ibb.co/3YzwYgzC/caixinha-2.jpg"
                            ]
                        }
                    ]
                },
                piramide: {
                    titulo: "Caixa pirâmide",
                    produtos: [
                        {
                            id: 1,
                            nome: "Caixinha Selva",
                            imagem: "https://i.ibb.co/gdj4JGw/selva-2.jpg",
                            preco: "45,00",
                            descricao: "Caixinha tema selva",
                            categoria: "caixinhas",
                            imagens: [
                                "https://i.ibb.co/MD5vw5Gw/caixinha-4.webp",
                                "https://i.ibb.co/nMn5CnPh/caixinha.webp",
                                "https://i.ibb.co/3YzwYgzC/caixinha-2.jpg"
                            ]
                        }
                    ]
                },
                quadrada: {
                    titulo: "Caixa Quadrada",
                    produtos: [
                        // produtos quadrados
                    ]
                }
            }
        },
        topos: {
            titulo: "Topos de Bolo",
            tipos: {
                simples: {
                    titulo: "Topos simples",
                    produtos: [
                        {
                            id: 1,
                            nome: "Topo TESTE",
                            imagem: "https://i.ibb.co/Jc9G153/batman.jpg",
                            preco: "2,00",
                            descricao: "Topo de bolo tema Batman",
                            categoria: "topos",
                            imagens: [
                                "https://i.ibb.co/Jc9G153/batman.jpg",
                                "https://i.ibb.co/qybKHH2/batman-5.webp",
                                "https://i.ibb.co/4K5Ygjt/batman-4.webp",
                                "https://i.ibb.co/BLTs2rX/batman-3.webp"
                                // Adicione aqui outras imagens do topo do Batman
                            ]
                        }
                    ]
                },
                tradicionais: {
                    titulo: "Topos Tradicionais",
                    produtos: [
                        {
                            id: 1,
                            nome: "Topo de Bolo Princesa",
                            imagem: "https://i.ibb.co/VqJgtvP/topo-3.jpg",
                            preco: "35,00",
                            descricao: "Topo de bolo personalizado princesa",
                            categoria: "topos",
                            imagens: [
                                "https://i.ibb.co/92641Hz/topo-1.webp",
                                "https://i.ibb.co/HK7pDrq/topo-2.webp",
                                "https://i.ibb.co/rf30rhq/topo-4.webp"
                            ]
                        },
                        {
                            id: 2,
                            nome: "Topo de Bolo Floral",
                            imagem: "https://i.ibb.co/92641Hz/topo-1.webp",
                            preco: "35,00",
                            descricao: "Topo de bolo com tema floral",
                            categoria: "topos",
                            imagens: [
                                // Adicione aqui todas as imagens deste topo
                            ]
                        }
                        // Adicione aqui todos os outros topos de bolo
                    ]
                },
                tematicos: {
                    titulo: "Topos Temáticos",
                    produtos: [
                        {
                            id: 1,
                            nome: "Topo de Bolo Super Heróis",
                            imagem: "URL_DA_IMAGEM",
                            preco: "40,00",
                            descricao: "Topo de bolo temático super heróis",
                            categoria: "topos",
                            imagens: [
                                // Adicione aqui todas as imagens deste topo
                            ]
                        }
                        // Adicione aqui todos os outros topos temáticos
                    ]
                }
            }
        },
        escolares: {
            titulo: "Material Escolar",
            tipos: {
                agendas: {
                    titulo: "Agendas",
                    produtos: [
                        {
                            id: 1,
                            nome: "Agenda Personalizada",
                            imagem: "https://i.ibb.co/prcgcGz/agenda-1.jpg",
                            preco: "45,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://i.ibb.co/XVCw837/agenda-2.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp"
                            ]
                        }
                    ]
                },
                etiquetas: {
                    titulo: "Etiquetas",
                    produtos: [
                        // ... produtos de etiquetas
                    ]
                }
            }
        },
        acessorios: {
            titulo: "Acessórios",
            tipos: {
                organizacao: {
                    titulo: "Organização",
                    produtos: [
                        {
                            id: 1,
                            nome: "Kit Organização",
                            imagem: "URL_DA_IMAGEM_PRINCIPAL",
                            preco: "29,90",
                            descricao: "Kit completo para organização",
                            categoria: "acessorios",
                            imagens: [
                                // URLs das imagens do produto
                            ]
                        }
                    ]
                }
            }
        },
        paineis: {
            titulo: "Painéis",
            tipos: {
                luminosos: {
                    titulo: "Painéis Luminosos",
                    produtos: [
                        {
                            id: 1,
                            nome: "Painel LED",
                            imagem: "URL_DA_IMAGEM_PRINCIPAL",
                            preco: "149,90",
                            descricao: "Painel personalizado com iluminação LED",
                            categoria: "paineis",
                            imagens: [
                                // URLs das imagens do produto
                            ]
                        }
                    ]
                }
            }
        },
        convites: {
            titulo: "Convites Personalizados",
            tipos: {
                festas: {
                    titulo: "Convites para Festas",
                    produtos: [
                        {
                            id: 1,
                            nome: "Convite Festa Infantil",
                            imagem: "https://i.ibb.co/prcgcGz/agenda-1.jpg",
                            preco: "35,00",
                            descricao: "Convite personalizado para festas infantis",
                            categoria: "convites",
                            imagens: [
                                "https://i.ibb.co/prcgcGz/agenda-1.jpg",
                                "https://i.ibb.co/XVCw837/agenda-2.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp"
                            ]
                        },
                        {
                            id: 2,
                            nome: "Convite Casamento",
                            imagem: "https://i.ibb.co/6tX6hqW/material.webp",
                            preco: "40,00",
                            descricao: "Convite personalizado para casamentos",
                            categoria: "convites",
                            imagens: [
                                "https://i.ibb.co/6tX6hqW/material.webp",
                                "https://i.ibb.co/6sX0LMc/etiquetas.jpg",
                                "https://i.ibb.co/jWKPgMM/l-pis.webp"
                            ]
                        }
                    ]
                }
            }
        }
    },

    // Outras imagens do site
    interface: {
        logo: "../../imagens/logo.webp",
        banner: "../../imagens/banner.webp",
        icones: {
            carrinho: "../../imagens/cart-icon.png",
            // ... outros ícones
        }
    }
};

export default imageConfig; 