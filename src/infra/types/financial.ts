export type PerformanceGraphicDataProps = {
  name: string;
  value: number;
  demand: number;
};

export type HistoricTableDataProps = {
  title: string;
  "2019": string;
  "2020": string;
};

export interface FinancialProps {
  finalRate: string;
  finalPointe: number;

  performanceGraphic: PerformanceGraphicDataProps[];

  historicTable: HistoricTableDataProps[];
}
