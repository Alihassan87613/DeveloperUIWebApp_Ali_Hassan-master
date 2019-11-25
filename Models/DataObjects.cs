using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UIDeveloperWebApplication.Models
{
    public class DataObjects
    {
    }

    public class PurchaseEntry
    {
        public int index { get; set; }
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public double? ChargeAmount { get; set; }
    }

    public class CityStateZipEntry
    {
        public int Zip { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Population { get; set; }
    }

    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public double? CategoryPrice { get; set; }
    }
}