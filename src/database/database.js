import {v4 as uuid} from "uuid"

export const prestadores = [
    {
        id: 1,
        name: "Matheus Willcox",
        category: "Encanador",
        price: 25,
        stars: 4.3,
        reviews: 532,
        imagem: "https://uploaddeimagens.com.br/images/004/019/948/full/2.png?1663020097",
        addresses: [
            {
                "state": "PE",
                "street": "Rua tal",
                "district": "Bairro tal",
                "number": "32",
                "complement": "Portão azul",
                "city": "Recife",
                "zipCode": "12345678"
              }
        ]
    },
    {
        id: 2,
        name: "Alexandre Mélega",
        category: "Pedreiro",
        price: 16.90,
        stars: 4.8,
        reviews: 235,
        imagem: "https://uploaddeimagens.com.br/images/004/019/945/full/1.png?1663020034",
        addresses: [
            {
                "state": "SP",
                "street": "Rua das Araras",
                "district": "Ribeiro",
                "number": "322",
                "complement": "Apto 74",
                "city": "São Paulo",
                "zipCode": "05002061"
              }
        ]
    },
    // {
    //     id: 3,
    //     name: "Fábio Jr.",
    //     category: "Cantor",
    //     price: 450,
    //     stars: 3.5,
    //     reviews: 1098,
    //     imagem: "https://uploaddeimagens.com.br/images/004/019/955/full/7.png?1663020211"
    // },
    {
        id: 4,
        name: "Mateus Bonacina",
        category: "Dev Sr.",
        price: 850,
        stars: 4.9,
        reviews: 962,
        imagem: "https://uploaddeimagens.com.br/images/004/019/952/full/5.png?1663020174"
    },
    {
        id: 5,
        name: "Pedro Soprano",
        category: "Dev. Pleno",
        price: 550,
        stars: 4.7,
        reviews: 745,
        imagem: "https://uploaddeimagens.com.br/images/004/019/954/full/6.png?1663020192"
    },
    {
        id: 6,
        name: "Tales Carneiro",
        category: "Instrutor de Surf",
        price: 39,
        stars: 4.0,
        reviews: 95,
        imagem: "https://uploaddeimagens.com.br/images/004/019/951/full/4.png?1663020155"
    },
    {
        id: 7,
        name: "William Cabral",
        category: "Rei dos Devs",
        price: 18075,
        stars: 5.0,
        reviews: 15.999,
        imagem: "https://uploaddeimagens.com.br/images/004/019/949/full/3.png?1663020132"
    },
]

export const schedules = [
    {
        id: uuid(),
        service: "Encanador",
        provider: "João da Silva",
        date: "10/10/2022",
        hour: "15:30"
    },
    {
        id: uuid(),
        service: "Eletricista",
        provider: "Antônio Silva",
        date: "15/09/2022",
        hour: "10:30"
    },
    {
        id: uuid(),
        service: "Pedreiro",
        provider: "Rosemiro Santos",
        date: "15/09/2022",
        hour: "15:30"
    },
    {
        id: uuid(),
        service: "Fisioterapeuta",
        provider: "Ivone Nunes",
        date: "16/09/2022",
        hour: "09:30"
    },
    {
        id: uuid(),
        service: "Mecânico",
        provider: "Neymar Jr.",
        date: "05/10/2022",
        hour: "16:30"
    },
]

export const userAddresses = [
    {
        id: "c110dbb6-beb9-4682-ab63-2c12a570d66b",
        state: "PE",
        street: "Rua tal",
        district: "Bairro tal",
        number: "32",
        complement: "Portão azul",
        city: "Recife",
        zipCode: "12345678",
        name: "Casa de Praia"
    },
    {
        id: "c110dbb6-beb9-4682-ab63-2c12a570d66c",
        state: "SP",
        street: "Rua Sergipe",
        district: "Higienópolis",
        number: "447",
        complement: "Cj 112",
        city: "São Paulo",
        zipCode: "01243001",
        name: "Trabalho"
    },
    {
        id: "c110dbb6-beb9-4682-ab63-2c12a570d66d",
        state: "SP",
        street: "Rua Bahia",
        district: "Higienópolis",
        number: "377",
        complement: "Apto 47",
        city: "São Paulo",
        zipCode: "01243005",
        name: "Casa"
    }
]

export const baseUrl = 'https://tercerizai-api.herokuapp.com'

export const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lbGVnYW9AZ21haWwuY29tIiwidXNlcklkIjoiMjNlY2UyYmYtNDI5Zi00NDhhLTg0MGYtYjNmMDI3YTEzMWU3IiwidXNlcklzQWRtIjpmYWxzZSwiaWF0IjoxNjYzMTkxODE4LCJleHAiOjE2NjMxOTkwMTh9.KpewBPX9aBxGkl6BHLCdrz_TYdRONu7FsdJCW4An2Is"