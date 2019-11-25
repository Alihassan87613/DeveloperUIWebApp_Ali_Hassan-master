using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using UIDeveloperWebApplication.DataAccess;
using UIDeveloperWebApplication.Models;

namespace UIDeveloperWebApplication.Services
{
    /// <summary>
    /// Summary description for WebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public string DefaultWebServiceCall()
        {
            return "Web Service Method: DefaultWebServiceCall - ";
        }


        #region Purchased List Data Functions
        [WebMethod]
        public List<PurchaseEntry> GetListEntries()
        {
            return DatabaseData.GetListEntries;
        }

        [WebMethod]
        public bool AddListObjectEntry(PurchaseEntry inObject)
        {
            try
            {
                DatabaseData.AddListObjectEntry(inObject);
                return true;
            }
            catch (Exception exc)
            {
                return false;
            }
        }

        [WebMethod]
        public bool UpdateListObjectEntryAtId(PurchaseEntry inObject)
        {
            try
            {
                DatabaseData.UpdateListObjectEntryAtId(inObject);
                return true;
            }
            catch (Exception exc)
            {
                return false;
            }
        }
        #endregion

        #region Static City/State/Zip Code list
        [WebMethod]
        public List<CityStateZipEntry> GetCityStateZipCodeData()
        {
            try
            {
                return DatabaseData.GetCityStateZipCodeData;
            }
            catch (Exception exc)
            {
                return null;
            }
        }
        #endregion

        #region Category List
        [WebMethod]
        public List<Category> GetCategoryData()
        {
            try
            {
                return DatabaseData.GetCategoryData;
            }
            catch (Exception exc)
            {
                return null;
            }
        }
        #endregion
    }
}
