declare module "@yomerce/country-state-list";

interface ICountryInfo {
  id: string;
  name: string;
  states: IState[]
}

interface IState {
  id: string;
  name: string;
  tin?: string;
  type: StateType;
}

export enum StateType {
  "State",
  "Union Territory"
}

export function getCountryInfo(code: string): ICountryInfo;
export function getStates(code: string): IState[];
