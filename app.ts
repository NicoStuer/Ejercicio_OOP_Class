//nombre, precio base, color, consumo energetico y peso

class Tv {
    public _name:string = '';
    public _price:number = 0;
    public _color:string = '';
    public _energyConsumption:number = 0;
    public _weight:number = 0;
    public _energyEfficient:boolean = false;
    public _operativeSistem:string = ''
    public _resolution:string = ''
       
    get name():string{
        return this._name
    }

    set name(name:string){
        this._name = name
    }

    get price():number{
        return this._price
    }

    set price(price:number){
        this._price = price
    }

    get color():string{
        return this._color
    }

    set color(color:string){
        this._color = color
    }

    get consumption():number{
        return this._energyConsumption
        }

    set consumption(energy:number){
        this._energyConsumption = energy
    }

    get weight():number{
        return this._weight
    }

    set weight(weight:number){
        this._weight = weight 
    }

    get energyEfficient():boolean{
        return this._energyEfficient
    }

    set energyEfficient(energyEfficient:boolean){
        this._energyEfficient = energyEfficient 
    }

    get operativeSistem():string{
        return this._operativeSistem.toLowerCase()
    }
    
    set operativeSistem(os:string){
        this._operativeSistem = os 
    }
    
    get resolution():string{
        return this._resolution
    }
    
    set resolution(res:string){
        this._resolution = res 
    }
    
    
    public EnergyEfficient():void {
        if (this.consumption > 700 && this._energyEfficient == false) {
            this.energyEfficient = false
            return console.log(
             `La Eficiencia Energética de su TV ${tv.name} no es buena`);
        } else {
            this.energyEfficient = true
            return console.log(
             `La Eficiencia Energética de su TV ${tv.name} es buena`);
        }
    }

    public HighEnd(){
        
        if (this._energyEfficient==true && this.resolution == '8k' && this.operativeSistem === 'android') {
            return `Su SmartTv marca ${this.name}, es de Alta gama`
        }
        return `Su SmartTv marca ${this.name}, no es de Alta gama`
    } 

    
}

const tv = new Tv();

tv.consumption = 12;
tv.name = 'Philips';
tv.resolution = '8k';
tv.operativeSistem = 'Android'

console.log(tv.consumption);
console.log(tv.name);
console.log(tv.EnergyEfficient());
console.log(tv.HighEnd());



