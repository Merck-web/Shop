import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            // {id: 1, name: 'Холодильники'},
            // {id: 2, name: 'Смартфоны'},
            // {id: 3, name: 'Собачий корм'},
            // {id: 4, name: 'Лотки'},
            // {id: 5, name: 'Сувениры'},
        ]
        this._brands = [
            // {id: 1, name: 'Samsung'},
            // {id: 2, name: 'Apple'},
            // {id: 3, name: 'Lenovo'},
            // {id: 4, name: 'Наше'},
        ]
        this._devices = [
            // {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://yandex.ru/images/search?pos=10&from=tabbar&img_url=https%3A%2F%2Flastprint.ru%2Fimage%2Fconstructor_avatar_cache%2Fproduct_232311_1479_0_0.jpg&text=iphone+12&rpt=simage`},
            // {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://yandex.ru/images/search?pos=10&from=tabbar&img_url=https%3A%2F%2Flastprint.ru%2Fimage%2Fconstructor_avatar_cache%2Fproduct_232311_1479_0_0.jpg&text=iphone+12&rpt=simage`},
            // {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://yandex.ru/images/search?pos=10&from=tabbar&img_url=https%3A%2F%2Flastprint.ru%2Fimage%2Fconstructor_avatar_cache%2Fproduct_232311_1479_0_0.jpg&text=iphone+12&rpt=simage`},
            // {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://yandex.ru/images/search?pos=10&from=tabbar&img_url=https%3A%2F%2Flastprint.ru%2Fimage%2Fconstructor_avatar_cache%2Fproduct_232311_1479_0_0.jpg&text=iphone+12&rpt=simage`},
            // {id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://yandex.ru/images/search?pos=10&from=tabbar&img_url=https%3A%2F%2Flastprint.ru%2Fimage%2Fconstructor_avatar_cache%2Fproduct_232311_1479_0_0.jpg&text=iphone+12&rpt=simage`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get SelectedType() {
        return this._selectedType
    }
    get SelectedBrand() {
        return this._selectedBrand
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}