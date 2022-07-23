import axios, { AxiosResponse } from "axios";
import { IAnsims, ILatlng } from "./interface/index.interface";

const loadAnsims = (latlng: ILatlng): Promise<AxiosResponse<IAnsims>> => {
  return axios.post(
    `https://www.safe182.go.kr/api/lcm/safeMap.do?esntlId=10000471&authKey=f3c58a92a3a040a6&pageIndex=1&pageUnit=100&clArray=09&minX=${latlng.minX}&minY=${latlng.minY}&maxX=${latlng.maxX}&maxY=${latlng.maxY}&xmlUseYN`
  );
};

export { loadAnsims };
