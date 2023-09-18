import { FinancialProps } from "../types/financial";

export const financialMock: FinancialProps = {
  finalRate: "A",
  finalPointe: 96.5,

  performanceGraphic: [
    {
      name: "01/22",
      value: 400,
      demand: 200,
    },
    {
      name: "02/22",
      value: 470,
      demand: 400,
    },
    {
      name: "03/22",
      value: 170,
      demand: 378,
    },
    {
      name: "05/22",
      value: 870,
      demand: 850,
    },
    {
      name: "06/22",
      value: 770,
      demand: 810,
    },
    {
      name: "07/22",
      value: 470,
      demand: 400,
    },
    {
      name: "08/22",
      value: 445,
      demand: 378,
    },

    {
      name: "09/22",
      value: 901,
      demand: 978,
    },

    {
      name: "10/22",
      value: 875,
      demand: 778,
    },

    {
      name: "11/22",
      value: 1000,
      demand: 1250,
    },

    {
      name: "12/22",
      value: 995,
      demand: 900,
    },
  ],

  historicTable: [
    {
      title: "PRÉ PAGAMENTO",
      "2019": "R$12,000.00",
      "2020": "R$12,000.00",
    },
    {
      title: "NO VENCIMENTO",
      "2019": "R$10,000.00",
      "2020": "R$11,000.00",
    },
    {
      title: "1-5",
      "2019": "R$11,000.00",
      "2020": "R$12,000.00",
    },
    {
      title: "6-15",
      "2019": "R$9,000.00",
      "2020": "R$12,000.00",
    },
    {
      title: "16-30",
      "2019": "R$12,000.00",
      "2020": "R$12,000.00",
    },
  ],
};
