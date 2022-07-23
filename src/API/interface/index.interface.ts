export interface ILatlng {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface IAnsims {
  result: number;
  msg: string;
  totalCount: number;
  list: IAnsimList[];
}

interface IAnsimList {
  rn: number;
  lcSn: number;
  bsshNm: string;
  telno: string;
  adres: string;
  etcAdres: string;
  zip: string;
  lcinfoLa: number;
  lcinfoLo: number;
  cl: string;
  clNm: string;
  scopeCd: null;
  scope: null;
  hmpg: null;
}
