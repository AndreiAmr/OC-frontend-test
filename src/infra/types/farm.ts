interface MatriculaProps {
  number: number;
  area: number;
  uf: string;
  municipio: string;
}

interface PropietarioProps {
  name: string;
  percentage: number;
}

export interface FarmProps {
  name: string;
  location: string;
  totalArea: number;
  areaPropria: number;
  produtividadeStatus: string;
  address: string;

  nirf: number | string | null;
  incra: number;

  matriculas: MatriculaProps[];
  propietarios: PropietarioProps[];
  areaProdutiva: number;
}
