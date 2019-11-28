using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

using UIDeveloperWebApplication.DataAccess;
using UIDeveloperWebApplication.Models;

namespace UIDeveloperWebApplication.Services
{
    /// <summary>
    /// Summary description for WebService
    /// </summary>
    //[WebService(Namespace = "http://localhost:4300/")]
    //[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    //[System.ComponentModel.ToolboxItem(false)]
    //// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    //[System.Web.Script.Services.ScriptService]

    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
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
        public void GetListEntries()
        {
            System.Web.Script.Serialization.JavaScriptSerializer ser = new System.Web.Script.Serialization.JavaScriptSerializer();
            string strResponse = ser.Serialize(DatabaseData.GetListEntries);

            string strCallback = Context.Request.QueryString["callback"]; // Get callback method name. e.g. jQuery17019982320107502116_1378635607531

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.AddHeader("content-length", strResponse.Length.ToString());
            Context.Response.Flush();

            Context.Response.Write(strResponse);
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
        public void GetCityStateZipCodeData()
        {
            try
            {

                System.Web.Script.Serialization.JavaScriptSerializer ser = new System.Web.Script.Serialization.JavaScriptSerializer();
                string strResponse = ser.Serialize(DatabaseData.GetCityStateZipCodeData);

                string strCallback = Context.Request.QueryString["callback"]; // Get callback method name. e.g. jQuery17019982320107502116_1378635607531

                Context.Response.Clear();
                Context.Response.ContentType = "application/json";
                Context.Response.AddHeader("content-length", strResponse.Length.ToString());
                Context.Response.Flush();

                Context.Response.Write(strResponse);
            }
            catch (Exception exc)
            {
            }
        }
        #endregion

        #region Category List
        [WebMethod]
        [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
        public void GetCategoryData()
        {
            try
            {
                System.Web.Script.Serialization.JavaScriptSerializer ser = new System.Web.Script.Serialization.JavaScriptSerializer();
                string strResponse = ser.Serialize(DatabaseData.GetCategoryData);

                string strCallback = Context.Request.QueryString["callback"]; // Get callback method name. e.g. jQuery17019982320107502116_1378635607531
                strResponse = strResponse ; // e.g. jQuery17019982320107502116_1378635607531(....)

                Context.Response.Clear();
                Context.Response.ContentType = "application/json";
                Context.Response.AddHeader("content-length", strResponse.Length.ToString());
                Context.Response.Flush();

                Context.Response.Write(strResponse);
            }
            catch (Exception exc)
            {
               
            }
        }
        #endregion
    }
}
