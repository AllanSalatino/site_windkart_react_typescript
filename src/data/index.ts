export interface IKarts {
  id: number;
  type: string;
  name: string;
  price: string;
  image: string;
  infos: IInfos;
}

export interface IInfos {
  description: IDescription;
  images: string[];
}

export interface IDescription {
  type: string;
  carMaterial: string;
  carWheels: string;
  carSeat: string;
  carMast: string;
  sailMaterial: string;
  carMeasurement: string[];
  carWeight: string;
  supportedWeight: string;
  followCar: string;
}

export const karts = [
  {
    id: 1,
    type: "Alumínio",
    name: "Windkart - Esportivo",
    price: "6.999,99",
    image:
      "https://static.wixstatic.com/media/a0264d_f6131d902f694b56b1329255f201e130~mv2.jpg/v1/fill/w_650,h_525,al_c,lg_1,q_85/a0264d_f6131d902f694b56b1329255f201e130~mv2.webp",
    infos: {
      description: {
        type: `Carro pilotado com os pés.`,
        carMaterial: `Alumínio`,
        carWheels: `Aro Plástico super resistente com pneus maciços de 8 polegadas.`,
        carSeat: `Lona cor preta.`,
        carMast: `5m de altura em alumínio desmontável.`,
        sailMaterial: `Polietileno de alta resistência.`,
        carMeasurement: [
          `Entre rodas traseiras (1.50m)`,
          `Entre eixos traseiros e dianteiros (1.60m)`,
        ],
        carWeight: `28 kg.`,
        supportedWeight: `Piloto com 120 kilos.`,
        followCar: `3 roldanas da marca Nautos, corda e bolsa para guardar o carro.`,
      },
      images: [
        "https://static.wixstatic.com/media/a0264d_f6131d902f694b56b1329255f201e130~mv2.jpg/v1/fill/w_650,h_525,al_c,lg_1,q_85/a0264d_f6131d902f694b56b1329255f201e130~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_2830480453a04761a1d0ad4825fb7920~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_2830480453a04761a1d0ad4825fb7920~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_39e6e86dda15458a96128b79a1560c63~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_39e6e86dda15458a96128b79a1560c63~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_20050164a7404471a3de17301bf7b92e~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_20050164a7404471a3de17301bf7b92e~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_25689305ab3041a8ac92c84c4502012c~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_25689305ab3041a8ac92c84c4502012c~mv2.webp",
      ],
    },
  },
  {
    id: 2,
    type: "Alumínio",
    name: "Windkart - Clássico",
    price: "6.999,99",
    image:
      "https://static.wixstatic.com/media/a0264d_897208d655ce4aff9804653674758a57~mv2.jpg/v1/fill/w_640,h_517,al_c,q_85/a0264d_897208d655ce4aff9804653674758a57~mv2.webp",
    infos: {
      description: {
        type: `Carro pilotado com as mãos (adutos e crianças).`,
        carMaterial: `Alumínio`,
        carWheels: `Aro plástico super resistente e pneus maciços macios.`,
        carSeat: `Zanet super resistente com opção de lona.`,
        carMast: `5m de altura em aluminio desmontável.`,
        sailMaterial: `Polietileno de alta resistência.`,
        carMeasurement: [
          `Entre rodas traseiras: (largura de 1.50 m)`,
          `Entre eixo dianteiro e traseiro (1.30 m)`,
        ],
        carWeight: `28 kg.`,
        supportedWeight: `Piloto com 120 kilos.`,
        followCar: `3 roldanas da marca Nautos, corda e bolsa para guardar o carro.`,
      },
      images: [
        "https://static.wixstatic.com/media/a0264d_897208d655ce4aff9804653674758a57~mv2.jpg/v1/fill/w_640,h_517,al_c,q_85/a0264d_897208d655ce4aff9804653674758a57~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_fe6858f4de21440d9aa425c948f62872~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_fe6858f4de21440d9aa425c948f62872~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_8982c04ea2f84aa786e0f0e7b111c56b~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_8982c04ea2f84aa786e0f0e7b111c56b~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_c80a310a057444fb80baa3c1b7c41c81~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_c80a310a057444fb80baa3c1b7c41c81~mv2.webp",
      ],
    },
  },
  {
    id: 3,
    type: "Aço-inox",
    name: "Windkart - Clássico",
    price: "9.999,99",
    image:
      "https://static.wixstatic.com/media/a0264d_61d97f1bf5824d3fbd5db9efd52539bb~mv2.jpg/v1/fill/w_650,h_525,al_c,lg_1,q_85/a0264d_61d97f1bf5824d3fbd5db9efd52539bb~mv2.webp",
    infos: {
      description: {
        type: `Carro pilotado com as mãos (adutos e crianças).`,
        carMaterial: `Aço inoxidável`,
        carWheels: `Aro de aluminio e pneus infláveis 8 polegadas.`,
        carSeat: `Lona super resistente.`,
        carMast: `5m de altura em aluminio desmontável.`,
        sailMaterial: `Polietileno de alta resistência.`,
        carMeasurement: [
          `Entre rodas traseiras: (largura de 1.50 m)`,
          `Entre eixo dianteiro e traseiro (1.50 m)`,
        ],
        carWeight: `30 kg.`,
        supportedWeight: `Piloto com 130 kilos.`,
        followCar: `3 moitões (roldanas) da marca Nautos, corda e bolsa para guardar.`,
      },
      images: [
        "https://static.wixstatic.com/media/a0264d_61d97f1bf5824d3fbd5db9efd52539bb~mv2.jpg/v1/fill/w_650,h_525,al_c,lg_1,q_85/a0264d_61d97f1bf5824d3fbd5db9efd52539bb~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_8982c04ea2f84aa786e0f0e7b111c56b~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_8982c04ea2f84aa786e0f0e7b111c56b~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_c80a310a057444fb80baa3c1b7c41c81~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_c80a310a057444fb80baa3c1b7c41c81~mv2.webp",
      ],
    },
  },
  {
    id: 4,
    type: "Aço-inox",
    name: "Windkart - Banco duplo",
    price: "11.999,99",
    image:
      "https://static.wixstatic.com/media/a0264d_4abf18c339d64c2da81fbcccab680847~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_4abf18c339d64c2da81fbcccab680847~mv2.webp",
    infos: {
      description: {
        type: `Carro pilotado nos pés com (pedaleira) ou pilotado com as mãos (direção). Opção do cliente escolher.`,
        carMaterial: `Aço inoxidável`,
        carWheels: `Aro de aluminio e pneus infláveis 8 polegadas.`,
        carSeat: `Lona super resistente.`,
        carMast: `5m de altura em aluminio desmontável.`,
        sailMaterial: `Polietileno super resistênte.`,
        carMeasurement: [
          `Entre rodas traseiras: (largura de 1.50 m)`,
          `Entre eixo dianteiro e traseiro (1.50 m)`,
        ],
        carWeight: `32 kg.`,
        supportedWeight: `Piloto+ carona =150kg maximo`,
        followCar: `3 moitões (roldanas) da marca Nautos, corda e bolsa para guardar.`,
      },
      images: [
        "https://static.wixstatic.com/media/a0264d_4abf18c339d64c2da81fbcccab680847~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_4abf18c339d64c2da81fbcccab680847~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_8982c04ea2f84aa786e0f0e7b111c56b~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_8982c04ea2f84aa786e0f0e7b111c56b~mv2.webp",
        "https://static.wixstatic.com/media/a0264d_c80a310a057444fb80baa3c1b7c41c81~mv2.jpg/v1/fill/w_650,h_525,al_c,q_85,usm_0.66_1.00_0.01/a0264d_c80a310a057444fb80baa3c1b7c41c81~mv2.webp",
      ],
    },
  },
];
