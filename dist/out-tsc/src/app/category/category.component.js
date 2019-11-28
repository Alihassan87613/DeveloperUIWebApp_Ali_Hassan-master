import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../category.service';
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(formbulider, categoryService) {
        this.formbulider = formbulider;
        this.categoryService = categoryService;
        this.dataSaved = false;
        this.massage = null;
        this.categoryid = null;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.purchaseForm = this.formbulider.group({});
        this.loadAllCategories();
        this.loadAllCityStateZip();
        this.loadAllPurchase();
    };
    CategoryComponent.prototype.loadAllCategories = function () {
        this.allCategories = this.categoryService.getAllCategories();
    };
    CategoryComponent.prototype.loadAllCityStateZip = function () {
        this.allCityStateZipCodeData = this.categoryService.getAllCityStateZipCodeData();
    };
    CategoryComponent.prototype.loadAllPurchase = function () {
        this.allPurchases = this.categoryService.getAllPurchase();
    };
    CategoryComponent.prototype.onFormSubmit = function () {
        debugger;
        this.dataSaved = false;
        var purchase = this.purchaseForm.value;
        this.CreatePurchase(purchase);
        this.purchaseForm.reset();
    };
    CategoryComponent.prototype.CreatePurchase = function (purchase) {
        var _this = this;
        this.categoryService.createPurchase(purchase).subscribe(function () {
            _this.dataSaved = true;
            _this.massage = 'Record saved Successfully';
            _this.loadAllCategories();
            _this.purchaseForm.reset();
        });
    };
    CategoryComponent.prototype.resetForm = function () {
        this.purchaseForm.reset();
        this.massage = null;
        this.dataSaved = false;
    };
    CategoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-category',
            templateUrl: './category.component.html',
            styleUrls: ['./category.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map