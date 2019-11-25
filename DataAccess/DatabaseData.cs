using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using UIDeveloperWebApplication.Models;

namespace UIDeveloperWebApplication.DataAccess
{
    public static class DatabaseData
    {
        static List<PurchaseEntry> PurchaseEntriesList;

        static DatabaseData() { }


        #region Purchased List Data Functions
        public static List<PurchaseEntry> GetListEntries
        {
            get
            {
                if (PurchaseEntriesList == null)
                {
                    PurchaseEntriesList = new List<PurchaseEntry>();
                }
                return PurchaseEntriesList;
            }
        }
        public static bool AddListObjectEntry(PurchaseEntry Object)
        {
            if (true == DatabaseData.GetListEntries.Contains(Object))
            {
                return false;
            }

            DatabaseData.GetListEntries.Add(Object);
            return true;
        }
        public static bool UpdateListObjectEntryAtId(PurchaseEntry Object)
        {
            if (true == DatabaseData.GetListEntries.Contains(Object))
            {
                return false;
            }

            if ((from a in DatabaseData.GetListEntries where a.index == Object.index select a) == null)
            {
                return false;
            }

            try
            {
                PurchaseEntry ObjectEntry = (PurchaseEntry)from a in DatabaseData.GetListEntries where a.index == Object.index select a;
                int indexof = DatabaseData.GetListEntries.IndexOf(ObjectEntry);
                DatabaseData.GetListEntries[indexof] = Object;

                return true;
            }
            catch (Exception exc)
            {
                return false;
            }

        }
        #endregion

        #region Static City/State/Zip Code list data - this will not change
        public static List<CityStateZipEntry> GetCityStateZipCodeData
        {
            get
            {
                List<CityStateZipEntry> CityStateZipCodeList = new List<CityStateZipEntry>()
                {
                    new CityStateZipEntry() { Zip = 15234, City = "Pittsburgh", State = "PA", Population = 56313},
                    new CityStateZipEntry() { Zip = 21206, City = "Baltimore", State = "MD", Population = 34896},
                    new CityStateZipEntry() { Zip = 44113, City = "Cleveland", State = "OH", Population = 33371},
                    new CityStateZipEntry() { Zip = 45223, City = "Cincinnati", State = "OH", Population = 175841},
                };

                return CityStateZipCodeList;
            }
        }
        #endregion

        #region Category List
        public static List<Category> GetCategoryData
        {
            get
            {
                List<Category> CategoryList = new List<Category>()
                {
                    new Category() { CategoryID = 1, CategoryName = "Mortgage", CategoryPrice = 25L },
                    new Category() { CategoryID = 2, CategoryName = "Life Insurance", CategoryPrice = 125L },
                    new Category() { CategoryID = 3, CategoryName = "Real Estate Services", CategoryPrice = 50L }
                };
                return CategoryList;
            }
        }
        #endregion
    }
}