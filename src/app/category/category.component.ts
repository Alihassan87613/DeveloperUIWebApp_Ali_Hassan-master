import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryService } from '../category.service';
import { Category, CityStateZip, PurchaseEntry } from '../category';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
    dataSaved = false;
    purchaseForm: FormGroup;
    allCategories: Observable<Category[]>;
    allCityStateZipCodeData: Observable<CityStateZip[]>;
    allPurchases: Observable<PurchaseEntry[]>;
    massage = null;
    categoryid = null;

    constructor(private formbulider: FormBuilder, private categoryService: CategoryService) { }

    ngOnInit() {
        this.purchaseForm = this.formbulider.group({
        });
        this.loadAllCategories();
        this.loadAllCityStateZip();
        this.loadAllPurchase();
    }

    loadAllCategories() {
        this.allCategories = this.categoryService.getAllCategories();
    }

    loadAllCityStateZip() {
        this.allCityStateZipCodeData = this.categoryService.getAllCityStateZipCodeData();
    }

    loadAllPurchase() {
        this.allPurchases = this.categoryService.getAllPurchase();
    }

    onFormSubmit() {
        debugger;
        this.dataSaved = false;
        const purchase = this.purchaseForm.value;
        this.CreatePurchase(purchase);
        this.purchaseForm.reset();
    }

    CreatePurchase(purchase: PurchaseEntry) {
        this.categoryService.createPurchase(purchase).subscribe(
            () => {
                this.dataSaved = true;
                this.massage = 'Record saved Successfully';
                this.loadAllCategories();
                this.purchaseForm.reset();
            }
        );
    }

    resetForm() {
        this.purchaseForm.reset();
        this.massage = null;
        this.dataSaved = false;
    }  
    //onChangeCategory(item) {

    //    this.purchaseForm.controls.CategoryID.setValue('foo') = item.attributes['data-id'].value;

    //}

}  