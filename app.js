//nombre, precio base, color, consumo energetico y peso
var Tv = /** @class */ (function () {
    function Tv() {
        this._name = '';
        this._price = 0;
        this._color = '';
        this._energyConsumption = 0;
        this._weight = 0;
        this._energyEfficient = false;
        this._operativeSistem = '';
        this._resolution = '';
    }
    Object.defineProperty(Tv.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tv.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tv.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tv.prototype, "consumption", {
        get: function () {
            return this._energyConsumption;
        },
        set: function (energy) {
            this._energyConsumption = energy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tv.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tv.prototype, "energyEfficient", {
        get: function () {
            return this._energyEfficient;
        },
        set: function (energyEfficient) {
            this._energyEfficient = energyEfficient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tv.prototype, "operativeSistem", {
        get: function () {
            return this._operativeSistem.toLowerCase();
        },
        set: function (os) {
            this._operativeSistem = os;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tv.prototype, "resolution", {
        get: function () {
            return this._resolution;
        },
        set: function (res) {
            this._resolution = res;
        },
        enumerable: false,
        configurable: true
    });
    Tv.prototype.EnergyEfficient = function () {
        if (this.consumption > 700 && this._energyEfficient == false) {
            this.energyEfficient = false;
            return console.log("La Eficiencia Energ\u00E9tica de su TV ".concat(tv.name, " no es buena"));
        }
        else {
            this.energyEfficient = true;
            return console.log("La Eficiencia Energ\u00E9tica de su TV ".concat(tv.name, " es buena"));
        }
    };
    Tv.prototype.HighEnd = function () {
        if (this._energyEfficient == true && this.resolution == '8k' && this.operativeSistem === 'android') {
            return "Su SmartTv marca ".concat(this.name, ", es de Alta gama");
        }
        return "Su SmartTv marca ".concat(this.name, ", no es de Alta gama");
    };
    return Tv;
}());
var tv = new Tv();
tv.consumption = 12;
tv.name = 'Philips';
tv.resolution = '8k';
tv.operativeSistem = 'Android';
console.log(tv.consumption);
console.log(tv.name);
console.log(tv.EnergyEfficient());
console.log(tv.HighEnd());
