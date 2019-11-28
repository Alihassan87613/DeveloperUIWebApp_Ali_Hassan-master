import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, CityStateZip, PurchaseEntry } from './category';  


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

    url = 'http://localhost:44371';

    categories: Category[] = [];
    cityStateZipCodeData: CityStateZip[] = [];

    allCategories:Category[];
    allCityStateZipCodeData: Observable<CityStateZip[]>;

    constructor(private http: HttpClient) { }
    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('http://localhost:44371/Services/WebService.asmx/GetCategoryData');
    }
    getAllCityStateZipCodeData(): Observable<CityStateZip[]> {
        return this.http.get<CityStateZip[]>('http://localhost:44371/Services/WebService.asmx/GetCityStateZipCodeData');
    }
    getAllPurchase(): Observable<PurchaseEntry[]> {
        return this.http.get<PurchaseEntry[]>('http://localhost:44371/Services/WebService.asmx/GetListEntries');
    }
    createPurchase(purchase: PurchaseEntry): Observable<PurchaseEntry> {

        this.getAllCategories().subscribe(Category => this.categories = Category);

        for (var category of this.categories)
        {
            if (category.CategoryID == purchase.CategoryID)
            {
                purchase.CategoryName = category.CategoryName;
                purchase.ChargeAmount = category.CategoryPrice;
            }
        }

        this.getAllCityStateZipCodeData().subscribe(CityStateZip => this.cityStateZipCodeData = CityStateZip);
        for (var cityStateZip of this.cityStateZipCodeData) {
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

        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<PurchaseEntry>('http://localhost:44371/Services/WebService.asmx/AddListObjectEntry', purchase, httpOptions);
    } 
    //getEmployeeById(employeeId: string): Observable<Employee> {
    //    return this.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);
    //}
    //createEmployee(employee: Employee): Observable<Employee> {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //    return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',
    //        employee, httpOptions);
    //}
    //updateEmployee(employee: Employee): Observable<Employee> {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //    return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',
    //        employee, httpOptions);
    //}
    //deleteEmployeeById(employeeid: string): Observable<number> {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //    return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,
    //        httpOptions);
    //}
}  

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