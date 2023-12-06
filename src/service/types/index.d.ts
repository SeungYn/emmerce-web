declare global {
  interface Window {
    daum: any;
  }
}

export interface DaumPostRes {
  zonecode: string;
  roadAddress: string;
}
