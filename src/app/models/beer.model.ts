export class Beer {
  public pub: boolean = false;
  public aleHouse: boolean = false;
  public tapRoom: boolean = false;
  constructor(public title: string, public style: string, public ibu: number, public abv: number, public description: string, ) { }
}
