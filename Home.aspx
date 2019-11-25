<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="UIDeveloperWebApplication.Home" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<td>
    <h1>This area is for sample cases only.  Do not make changes to these controls</h1>
    <tr>
        <div>
            <h3></h3>
            <button type="button" id="btnDefaultPrimary" onclick="defaultmasterfunction()">Button Primary</button>
            <button type="button" id="btnDefaultSecondary">Button Secondary</button>
            <button type="button" id="btnDefaultWebServiceCall">Button - Web Service Call 1</button>
            <button type="button" id="btnDefaultWebServiceCall2">Button - Web Service Call 2</button>
        </div>
    </tr>
    <hr>
    <tr>
        <h1>Add Your Content here</h1>
    </tr>

</td>
<script type="text/javascript">
    /// This function is for sample cases only - DO NOT MAKE CHANGES
    $(function () {
        $('#btnDefaultWebServiceCall2').click(function () {

            //example/test case only
            var inaddobject = {};
            inaddobject.index = -1;
            inaddobject.Category = "New Category";
            inaddobject.ZipCode = 92626;
            inaddobject.City = "Irvine";
            inaddobject.State = "CA";
            inaddobject.ChargeAmount = 27.00;

            $.ajax({
                type: 'POST',
                url: 'Services/WebService.asmx/AddListObjectEntry',
                data: "{inObject:" + JSON.stringify(inaddobject) + "}",
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success:
                    function (response) {
                        alert(response.d + "Success");
                },
                error: function (error) {
                    alert("error");
                }
            });
        });
    });



    /// Add your Additional Script code here


</script>
</asp:Content>

