
// This populates the dropdowns in the main menu.  
// Used on pages other than the homepage with the header menu



document.addEventListener('DOMContentLoaded', function() {
       writeDropdowns();
});



function writeDropdowns() {
     console.log("Writing dropdowns");

     // 1. MAKE A COPY AS templateCopy

     var DropDown1 = document.querySelector('.dropdown-links_wrapper');
     var DropDown2 = document.querySelector('.dropdown-links_wrapper2');


     // remove existing links created in the Designer
     DropDown1.innerHTML = '';
     DropDown2.innerHTML = '';




    // WRITE THE FIRST DROPDONW

     var hiddenSource = document.getElementById("hiddenSource-ProductsServices");
     var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]'); 


     var newMenuList1 ='';
   // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        var item = hiddenSourceItems[i]; // Define item for the current iteration
        var extractMenuItem = item.querySelector('h1').textContent;
        var extractMenuURL = item.querySelector('a').href;

      

        var newMenuItem = '<a href="'+extractMenuURL+'" data-update="fraiacms" class="navbar1_dropdown-link w-dropdown-link">'+extractMenuItem+'</a>';
        newMenuList1 += newMenuItem;
    }

    DropDown1.innerHTML = newMenuList1;






    // WRITE THE SECOND DROPDOWN


      var hiddenSource = document.getElementById("hiddenSource-UseCases");
      var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]'); 

       var newMenuList2 ='';

       // Loop through each item in the collection
        for (var i = 0; i < hiddenSourceItems.length; i++) {
            var item = hiddenSourceItems[i]; // Define item for the current iteration
            var extractMenuItem = item.querySelector('h1').textContent;
            var extractMenuURL = item.querySelector('a').href;

           

            var newMenuItem = '<a href="'+extractMenuURL+'" data-update="fraiacms" class="navbar1_dropdown-link w-dropdown-link">'+extractMenuItem+'</a>';
            newMenuList2 += newMenuItem;
        }


    DropDown2.innerHTML = newMenuList2;


}
