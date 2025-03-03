// só adicionar uma categoria e imagens para aparecer um novo carrossel
export const CATEGORIES = {
    CAIXINHAS: 'caixinhas',
    TOPOS: 'topos',
    ESCOLARES: 'escolares',
    CONVITES: 'convites'
};
// CARROSSEIS
const imageConfig = {
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
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
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
                            nome: "relacionamento",
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
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 2",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 3",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 4",
                            imagem: "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 5",
                            imagem: "https://i.ibb.co/8Lgpv9Mp/teste-05.jpg",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/8Lgpv9Mp/teste-05.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        }
                        
                    ]
                },
                tradicionais: {
                    titulo: "Topos Tradicionais",
                    produtos: [
                        {
                            id: 1,
                            nome: "TOPO CISNE ",
                            imagem: "https://i.ibb.co/VqJgtvP/topo-3.jpg",
                            preco: "350,00",
                            descricao: "Topo de bolo personalizado princesa",
                            categoria: "topos",
                            imagens: [
                                "https://i.ibb.co/92641Hz/topo-1.webp",
                                "https://i.ibb.co/HK7pDrq/topo-2.webp",
                                "https://i.ibb.co/rf30rhq/topo-4.webp"
                            ]
                        },
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
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 2",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 3",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        }
                    ]
                },
                tematicos: {
                    titulo: "Topos Temáticos",
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
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 2",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 3",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        }
                    ]
                }
            }
        },
        canecas: {
            titulo: "Canecas Personalizadas",
            tipos: {
                simples: {
                    titulo: "Canecas Simples",
                    produtos: [
                        {
                            id: 1,
                            nome: "Caneca Futebol",
                            imagem: "https://img.elo7.com.br/product/600x380/50BE073/caneca-personalizada-palmeira-5-palmeira.jpg",
                            preco: "45,00",
                            descricao: "Caneca personalizada com seu tema favorito",
                            categoria: "canecas",
                            imagens: [
                                "https://img.elo7.com.br/product/600x380/50BE073/caneca-personalizada-palmeira-5-palmeira.jpg",
                                "https://cdn.awsli.com.br/180/180275/produto/28905429/6d183acbd0.jpg",
                                "https://cdn.awsli.com.br/2111/2111734/produto/220258619/caneca-personalizada-de-time-em-couro-3c15f558.jpg",
                                "https://artesber.com.br/wp-content/uploads/2021/09/chicaras2.png"
                            ]
                        },
                        {
                            id: 2,
                            nome: "Caneca Stity",
                            imagem: "https://m.media-amazon.com/images/I/5171GE2vj+L._AC_UF894,1000_QL80_.jpg",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "canecas",
                            tags: ["caneca", "stity", "dezenho", "caneca personalizada"],
                            imagens: [
                                "https://m.media-amazon.com/images/I/51Ih9jogpkL._AC_UF894,1000_QL80_.jpg",
                                "https://down-br.img.susercontent.com/file/1d6fdf1a3ebade1419209f2da817b93d_tn",
                                "https://down-br.img.susercontent.com/file/9b773f17113ac9998576c994ad355990",
                                "https://down-br.img.susercontent.com/file/9b773f17113ac9998576c994ad355990",
                                "https://down-br.img.susercontent.com/file/15016d56d1daafebbb0261fc738d5b6f",
                            ]
                        }
                    ]                    
                },
                  magica: {
                    titulo: "Canecas para batizados",
                    produtos: [
                        {
                            id: 1,
                            nome: "Caneca batizado",
                            imagem: "https://mlaksghporsi.i.optimole.com/cb:13w_~fe1/w:auto/h:auto/q:mauto/f:best/ig:avif/id:60d0568b56d8440e89806a02e17b7cff/https://www.ninjabrindes.com.br/Caneca-Personalizada-Batizado.jpg",
                            preco: "45,00",
                            descricao: "Caneca Sublimada de 325 ml",
                            categoria: "canecas",
                            imagens: [
                                "https://cdn.awsli.com.br/600x1000/403/403947/produto/86096374/3d9027ce7c.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Caneca padrinho",
                            imagem: "https://dcdn.mitiendanube.com/stores/001/524/050/products/batismo-delicada1-e2c2a7d1c3fd5eb72816527578348238-640-0.jpg",
                            preco: "45,00",
                            descricao: "Caneca Sublimada de 325 ml",
                            categoria: "canecas",
                            imagens: [
                                "https://cdn.awsli.com.br/600x1000/403/403947/produto/86096374/3d9027ce7c.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]

                        }
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
                            imagem: "https://www.sacolaecologica.com/wp-content/uploads/2022/05/Agenda-escolar-personalizada-1.jpg",
                            preco: "45,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://i.ibb.co/XVCw837/agenda-2.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        }, 
                        {
                            id: 2,
                            nome: "Agenda Personalizada",
                            imagem: "https://i.ibb.co/prcgcGz/agenda-1.jpg",
                            preco: "45,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://i.ibb.co/XVCw837/agenda-2.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        },  
                         {
                            id: 3,
                            nome: "herois teste",
                            imagem: "https://cdn.sistemawbuy.com.br/arquivos/d54a34fc9e5f29c76ab6d7177cad7eca/produtos/MIO2NOU7/agenda-escolar-2022-61a2432bf0467.jpg",
                            preco: "45,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://i.ibb.co/XVCw837/agenda-2.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        },
                        {
                            id: 4,
                            nome: "Agenda Personalizada",
                            imagem: "https://acdn.mitiendanube.com/stores/764/570/products/mockup-agenda-21-6499c96538ef6308e016764656570418-1024-1024.png",
                            preco: "45,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://acdn.mitiendanube.com/stores/764/570/products/mockup-agenda-21-6499c96538ef6308e016764656570418-1024-1024.png",
                                "https://i.ibb.co/XVCw837/agenda-2.jpg",
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        }
                    ]
                },
                
                etiquetas: {   // dentro de materiais esolares
                    titulo: "Etiquetas",
                    produtos: [
                        {
                            id: 1,
                            nome: "Etiqueta nomes",
                            imagem: "https://www.imagemjf.com.br/wp-content/images/produtos/large/347_tyxz3mvb7sjvycby368ss.jpg",
                            preco: "45,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://img.elo7.com.br/product/685x685/3EDC333/etiquetas-escolares-kit-com-120-unidades.jpg",
                                "https://www.imagemjf.com.br/wp-content/images/produtos/large/347_tyxz3mvb7sjvycby368ss.jpg",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        },
                        {
                            id: 2,
                            nome: "Etiqueta nomes",
                            imagem: "https://papelariapersonalizadafacil.com/wp-content/uploads/2021/12/Etiquetas-Escolares-Personalizadas-para-Imprimir-Capa.png",
                            preco: "4,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://papelariapersonalizadafacil.com/wp-content/uploads/2021/12/Etiquetas-Escolares-Personalizadas-para-Imprimir-Capa.png",
                                "https://www.imagemjf.com.br/wp-content/images/produtos/large/347_tyxz3mvb7sjvycby368ss.jpg",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        },
                        {
                            id: 3,
                            nome: "Etiqueta Spider",
                            imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_797730-MLB73668756491_122023-F.webp",
                            preco: "10,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://img.elo7.com.br/product/685x685/3EDC333/etiquetas-escolares-kit-com-120-unidades.jpg",
                                "https://www.imagemjf.com.br/wp-content/images/produtos/large/347_tyxz3mvb7sjvycby368ss.jpg",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        },
                        {
                            id: 4,
                            nome: "Etiqueta nomes",
                            imagem: "https://cf.shopee.com.br/file/c01f3162d9643719ea2cc0515207aa70",
                            preco: "15,00",
                            descricao: "Agenda personalizada com seu tema favorito",
                            categoria: "escolares",
                            imagens: [
                                "https://papelariapersonalizadafacil.com/wp-content/uploads/2021/12/Etiquetas-Escolares-Personalizadas-para-Imprimir-Capa.png",
                                "https://www.imagemjf.com.br/wp-content/images/produtos/large/347_tyxz3mvb7sjvycby368ss.jpg",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        },
                    ]
                }
            }
        },

///////////////////////////// BANNERS ////////////////////////////////////////////

        acessorios: {  // LINK NA IMAGEM
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
                                "https://papelariapersonalizadafacil.com/wp-content/uploads/2021/12/Etiquetas-Escolares-Personalizadas-para-Imprimir-Capa.png",
                                "https://www.imagemjf.com.br/wp-content/images/produtos/large/347_tyxz3mvb7sjvycby368ss.jpg",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                            ]
                        }
                    ]
                }
            }
        },
        paineis: {   //LINK NA IMAGEM
            titulo: "Painéis",
            tipos: {
                luminosos: {
                    titulo: "Painéis Luminosos",
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
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 2",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 3",
                            imagem: "https://i.ibb.co/Q38GwqVq/batman-painel-4.webp",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 4",
                            imagem: "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/vvvJdyqb/batman-painel-3.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                            ]
                        },
                        {
                            id: 1,
                            nome: "Topo Teste 5",
                            imagem: "https://i.ibb.co/8Lgpv9Mp/teste-05.jpg",
                            preco: "45,00",
                            descricao: "Teste teste teste teste teste",
                            categoria: "caixinhas",
                            tags: ["detetive", "cachorro", "labrador", "festa", "aniversário"],
                            imagens: [
                                "https://i.ibb.co/8Lgpv9Mp/teste-05.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
                                "https://i.ibb.co/zTmFyM8D/batamna-painel.jpg",
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
        },
        
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PÁGINAS

        batizados: {
            titulo: "Batizado",
            tipos: {
                caixaAnjo: {
                    titulo: "Caixa anjo",
                    produtos: [
                        {
                            id: 1,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        },
                        {
                            id: 2,
                            nome: "Caixa terço",
                            imagem: "https://img.elo7.com.br/product/zoom/41E46B0/terco-personalizado-infantil-terco-tercoinfantil-tercocomnome-comunhao-batismo-eucaristia.jpg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://maritacatagarela.com.br/wp-content/uploads/2022/11/11.jpg",
                                "https://http2.mlstatic.com/D_NQ_NP_698558-MLB71829862484_092023-O.webp",
                                "https://http2.mlstatic.com/D_NQ_NP_620502-MLB71830155562_092023-O.webp",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        },
                        {
                            id: 3,
                            nome: "Caixa Anjo teste",
                            imagem: "https://i.pinimg.com/736x/da/fe/49/dafe49d6f27ef7b4c10493fc1e87c004.jpg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        },
                        {
                            id: 4,
                            nome: "Caixa teste batizado",
                            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbiJREIplneRV9DykeD7wRuAPsH62yqBP9Q&s",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        }, 
                        {
                            id: 4,
                            nome: "Caixa reza",
                            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAStu85MqZ_6HoCah5yj7De9xRUXSbS3MGA&s",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        }
                    ]
                },
                caixaTerco: {
                    titulo: "Caixa padrinhos",
                    produtos: [
                        {
                            id: 1,
                            nome: "Caixa Personalizada",
                            imagem: "https://images.tcdn.com.br/img/img_prod/1300362/caixa_padrinhos_de_batizado_885_2_6998eeabfa6bdccb4b0d53ad6986face.jpg",
                            preco: "10,00",
                            tamanho: "15cm x 10cm",
                            descricao: "Caixa especial para guardar terço",
                            categoria: "batizados",
                            imagens: [
                                "https://images.tcdn.com.br/img/img_prod/1300362/caixa_padrinhos_de_batizado_885_2_6998eeabfa6bdccb4b0d53ad6986face.jpg",
                                "https://cdn.sistemawbuy.com.br/arquivos/a87f536f938d28abfc2e0b5fc304453f/produtos/646834b872af7/22-07-17-23-20-23-699_deco-646834bb7a3f2.jpg",
                                "https://down-br.img.susercontent.com/file/3fc267351ab4bdb4ebdbce49ba9a4313",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png"
                            ]
                        },
                        {
                            id: 1,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        },
                        {
                            id: 1,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        },
                        {
                            id: 1,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        }
                    ]
                }
            }
        },
        artesDigitais: {
            titulo: "Artes Digitais",
            tipos: {
                tipo1: {
                    titulo: "Silhouette",
                    produtos: [
                        {
                            id: 2,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://http2.mlstatic.com/D_NQ_NP_903922-MLB71458933843_092023-O.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        },
                        {
                            id: 3,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfP9sv0XXaJvobHriWVTzkg1WU9Hh7sKeHjw&s",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfP9sv0XXaJvobHriWVTzkg1WU9Hh7sKeHjw&s",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        },
                        {
                            id: 3,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://http2.mlstatic.com/D_NQ_NP_703211-MLB71413981760_092023-O.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        }, 
                        {
                            id: 4,
                            nome: "Caixa Anjo Dourada",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            descricao: "Linda caixa decorativa tema anjo",
                            categoria: "batizados",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://down-br.img.susercontent.com/file/5a1d795de269c65a9343c910bba930f1",
                                "https://acdn.mitiendanube.com/stores/003/477/814/products/photoroom-20230708_0937351-fe9a8fc89cafa8d2ac16923041617136-1024-1024.png",
                                "https://images.tcdn.com.br/img/img_prod/704166/quadro_lembranca_personalizada_13_2_20190907190246.jpg"

                            ]
                        }
                    ]
                },
                // ... outros tipos ...
            }
        },
        agendas: {
            titulo: "Agendas",
            tipos: {
                tipo1: {
                    titulo: "Agenda Teste",
                    produtos: [
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        },
                        {
                            id: 2,
                            nome: "Agenda Teste",
                            imagem: "https://acdn.mitiendanube.com/stores/002/911/674/products/snapinsta-app_1080_265502571_446155117035679_3949627073833104696_n1-ceb516be99931a979016780403747122-1024-1024.jpg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://images.tcdn.com.br/img/img_prod/1090591/agenda_pink_personalizado_com_sua_foto_1403_1_2a4d20819f7f8559445e1c062fc2dcf9.png"
                            ]
                        }, 
                        {
                            id: 3,
                            nome: "Agenda Teste",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        },
                        {
                            id: 4,
                            nome: "Agenda Teste",
                            imagem: "https://images.tcdn.com.br/img/img_prod/1184016/agenda_2025_floral_modelo_06_26282317_1_aefdea0d2a2f11be3e54253cc70cc8ff.jpg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://images.tcdn.com.br/img/img_prod/1184016/agenda_2025_floral_modelo_06_26282317_1_aefdea0d2a2f11be3e54253cc70cc8ff.jpg",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://images.tcdn.com.br/img/img_prod/1090591/agenda_pink_personalizado_com_sua_foto_1403_1_2a4d20819f7f8559445e1c062fc2dcf9.png"
                            ]
                        }, 
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        },
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://images.tcdn.com.br/img/img_prod/1184016/agenda_2025_floral_modelo_06_26282313_1_641d9ba9f5325d6edcd4a89918dca7d7.jpg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://images.tcdn.com.br/img/img_prod/1090591/agenda_pink_personalizado_com_sua_foto_1403_1_2a4d20819f7f8559445e1c062fc2dcf9.png"
                            ]
                        },
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://acdn.mitiendanube.com/stores/002/968/368/products/5-f133afa4c5f542158117284963560396-1024-1024.png",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://acdn.mitiendanube.com/stores/002/968/368/products/5-f133afa4c5f542158117284963560396-1024-1024.png",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        },
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://recriaratelier.com.br/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-01-at-12.24.46.jpeg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://images.tcdn.com.br/img/img_prod/1090591/agenda_pink_personalizado_com_sua_foto_1403_1_2a4d20819f7f8559445e1c062fc2dcf9.png"
                            ]
                        }
                    ]
                },
                // ... outros tipos ...
            }
        },
        sacolas: {
            titulo: "Sacolas Personalizadas",
            tipos: {
                plástico: {
                    titulo: "Sacolas",
                    produtos: [
                        {
                            id: 1,
                            nome: "Sacola Tubete Festa",
                            imagem: "https://images.tcdn.com.br/img/img_prod/1050482/sacolas_de_papel_personalizadas_para_bolsas_129_1_2f72eb4f5b32e1ff0513bfa0ce40595c.jpg",
                            preco: "10,00",
                            tamanho: "20cm x 30cm",
                            descricao: "Sacola tubete personalizada",
                            categoria: "sacolas",
                            imagens: [
                                "https://i.ibb.co/qsZQKsk/agenda-5.webp",
                                // outras imagens do produto
                            ]
                        },
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://images.tcdn.com.br/img/img_prod/1050482/sacolas_de_papel_personalizadas_para_bolsas_129_1_2f72eb4f5b32e1ff0513bfa0ce40595c.jpg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://acdn.mitiendanube.com/stores/002/968/368/products/5-f133afa4c5f542158117284963560396-1024-1024.png",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        },
                        {
                            id: 1,
                            nome: "sacola",
                            imagem: "https://http2.mlstatic.com/D_NQ_NP_774442-MLB81287992958_122024-O.webp",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://acdn.mitiendanube.com/stores/002/968/368/products/5-f133afa4c5f542158117284963560396-1024-1024.png",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        },
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://www.ythajaciembala.com.br/image/cache/catalog/brindes/425-sacola-de-papel-offset-personalizada-de-38x26x9-5cm-ita03240%20a-550x550.jpg",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://acdn.mitiendanube.com/stores/002/968/368/products/5-f133afa4c5f542158117284963560396-1024-1024.png",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        },
                        {
                            id: 1,
                            nome: "Agenda Teste",
                            imagem: "https://acdn.mitiendanube.com/stores/002/968/368/products/5-f133afa4c5f542158117284963560396-1024-1024.png",
                            preco: "10,00",
                            tamanho: "25cm x 18cm",
                            imagens: [
                                "https://acdn.mitiendanube.com/stores/002/968/368/products/5-f133afa4c5f542158117284963560396-1024-1024.png",
                                "https://i.ibb.co/FbNDpLvp/caderno-2.webp",
                                "https://i.ibb.co/ZzG2j8bc/caderno.jpg",
                                "https://i.ibb.co/jk9YRCD6/caderno-3.webp"
                            ]
                        }
                    ]
                },
                kraft: {
                    titulo: "Sacolas Kraft",
                    produtos: [
                        {
                            id: 1,
                            nome: "Sacola Kraft Personalizada",
                            imagem: "https://cdn.awsli.com.br/2500x2500/1617/1617707/produto/248379588/matriz-sacola-papel-m1-rpkbajojmz.png",
                            preco: "10,00",
                            tamanho: "25cm x 35cm",
                            descricao: "Sacola kraft personalizada",
                            categoria: "sacolas",
                            imagens: [
                                "https://i.ibb.co/5vfz7fY/selva.jpg",
                                "https://clicksacolas.com/wp-content/uploads/2024/02/sacolas-personalizadas.webp",
                                "https://www.bagpacks.com.br/imagens/informacoes/fabrica-sacolas-personalizadas-sp-02.jpg",
                                "https://87684.cdn.simplo7.net/static/87684/sku/kits-envelopes-e-sacolinhas-mini-sacola-personalizadas-10-unidades-1682378397512.jpeg"
                                // outras imagens do produto
                            ]
                        },
                        // outros produtos...
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