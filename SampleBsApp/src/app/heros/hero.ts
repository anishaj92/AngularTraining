export interface Hero {
    id: number;
    name: string;
    power: string;
    alterEgo?: string;
  }

export interface Heros{
  Heroes : Hero[];
}