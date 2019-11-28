import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.url = 'http://localhost:44371';
        this.categories = [];
        this.cityStateZipCodeData = [];
    }
    CategoryService.prototype.getAllCategories = function () {
        return this.http.get('http://localhost:44371/Services/WebService.asmx/GetCategoryData');
    };
    CategoryService.prototype.getAllCityStateZipCodeData = function () {
        return this.http.get('http://localhost:44371/Services/WebService.asmx/GetCityStateZipCodeData');
    };
    CategoryService.prototype.getAllPurchase = function () {
        return this.http.get('http://localhost:44371/Services/WebService.asmx/GetListEntries');
    };
    CategoryService.prototype.createPurchase = function (purchase) {
        var _this = this;
        this.getAllCategories().subscribe(function (Category) { return _this.categories = Category; });
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.CategoryID == purchase.CategoryID) {
                purchase.CategoryName = category.CategoryName;
                purchase.ChargeAmount = category.CategoryPrice;
            }
        }
        this.getAllCityStateZipCodeData().subscribe(function (CityStateZip) { return _this.cityStateZipCodeData = CityStateZip; });
        for (var _b = 0, _c = this.cityStateZipCodeData; _b < _c.length; _b++) {
            var cityStateZip = _c[_b];
            if (cityStateZip.City == purchase.City) {
                purchase.City = cityStateZip.City;
                purchase.ZipCode = cityStateZip.Zip;
                purchase.State = cityStateZip.State;
            }
            else if (cityStateZip.State == purchase.State) {
                purchase.City = cityStateZip.City;
                purchase.ZipCode = cityStateZip.Zip;
                purchase.State = cityStateZip.State;
            }
            else if (cityStateZip.Zip == purchase.ZipCode) {
                purchase.City = cityStateZip.City;
                purchase.ZipCode = cityStateZip.Zip;
                purchase.State = cityStateZip.State;
            }
        }
        var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post('http://localhost:44371/Services/WebService.asmx/AddListObjectEntry', purchase, httpOptions);
    };
    CategoryService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CategoryService);
    return CategoryService;
}());
export { CategoryService };
//var inaddobject = {};
//inaddobject.index = -1;
//inaddobject.Category = "New Category";
//inaddobject.ZipCode = 92626;
//inaddobject.City = "Irvine";
//inaddobject.State = "CA";
//inaddobject.ChargeAmount = 27.00;
//$.ajax({
//    type: 'POST',
//    url: 'Services/WebService.asmx/AddListObjectEntry',
//    data: "{inObject:" + JSON.stringify(inaddobject) + "}",
//    dataType: 'json',
//    contentType: 'application/json; charset=utf-8',
//    success:
//        function (response) {
//            alert(response.d + "Success");
//        },
//    error: function (error) {
//        alert("error");
//    }
//});
//# sourceMappingURL=category.service.js.map