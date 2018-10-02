export class Item {
  public lunchMenu: boolean = false;
  public starter: boolean = false;
  public soupSalad: boolean = false;
  public sanWrap: boolean = false;
  public burger: boolean = false;
  public entree: boolean = false;
  public side: boolean = false;
  constructor(public title: string, public price: number, public description: string, public pairing: string) { }
}
