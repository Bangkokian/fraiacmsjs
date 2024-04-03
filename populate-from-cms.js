




// WHAT IS THIS
// Populate native Webflow slider with CMS content.
// Because the native Webflow slider doesn't populate dynamically with CMS content we use this workaround for FRAIA:
// The CMS data populates into hidden elements below the page footer. This javascript then reads those hidden elements
// and copies them into the native Webflow slider.
// -James


// NOTE: Changing class or ID names on the webflow UI may break this script.

console.log("fraiacmsjs .07"); 

function consoleLog(ctext) { 
    // console.log(ctext); // uncomment for testing
}


consoleLog('Checkpoint 1');


document.addEventListener('DOMContentLoaded', function() {
       writeDropdowns();
       writeSolutionsServices();
       writeIndustryUseCases();
       writePhotos();
       writeInterviews();

});




function writeSolutionsServices() {
    consoleLog('Checkpoint 2');


     // 1. MAKE A COPY AS templateCopy

     var collectionListToFill = document.querySelector('#ProductSlideHolder');
    consoleLog('collectionListToFill: '+collectionListToFill);


     var hiddenSource = document.getElementById('hiddenSource-ProductsServices');
     consoleLog('hiddenSource: '+hiddenSource);

    // Select the first instance of .product-slide within #ProductSlideHolder
    var templateCard = collectionListToFill.querySelector('.product-slide');
    consoleLog
    var templateCopy = templateCard.cloneNode(true);

    // Check if both elements exist
    if (!collectionListToFill || !templateCard) {
        console.error('FRAIA: Required elements not found.');
        return;
    } else {
    
    consoleLog("Elements ok");
    }
    
    

    // 2. CLEAR OUT CollectionListToFill. It should be empty

    // Select all instances of .product-slide within collectionListToFill
    // and clear them out. We already have the template.
    var allStartingCards = collectionListToFill.querySelectorAll('.product-slide');

    // Loop through the NodeList and remove each element
    allStartingCards.forEach(function(templateCard) {
        templateCard.parentNode.removeChild(templateCard);
    });


    //var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]');


    // SORT THE ITEMS IN THE ITEMS BY THE VALUE OF .pin-order (which is 1, 2 or 3)
    // Note: If there are duplicate numbers in the Fraia CMS, it will pin them all. eg: 1,1,2,3,3


     var hiddenSourceItems = Array.from(hiddenSource.querySelectorAll('div[role="listitem"]'));

        hiddenSourceItems.sort(function(a, b) {
          // Sorting logic remains the same
          const aValue = a.querySelector('.pin-order').innerText;
          const bValue = b.querySelector('.pin-order').innerText;

          const aNum = parseInt(aValue, 10);
          const bNum = parseInt(bValue, 10);

          if ([1, 2, 3].includes(aNum) && [1, 2, 3].includes(bNum)) {
            return aNum - bNum;
          } else if ([1, 2, 3].includes(aNum)) {
            return -1;
          } else if ([1, 2, 3].includes(bNum)) {
            return 1;
          }
          return 0;
        });

        // Re-insert sorted elements into their parent container
        hiddenSourceItems.forEach(function(item) {
          // This moves each item to the end of the parent container, effectively sorting them
          hiddenSource.appendChild(item);
        });






        // If you need a NodeList of the sorted items for further operations
        var hiddenSourceSortedItems = hiddenSource.querySelectorAll('div[role="listitem"]');


        console.log(hiddenSourceSortedItems);







    consoleLog('items length: '+hiddenSourceItems.length);


    consoleLog("checkpoint 3");




    // COPY THE CONTENTS FROM THE HIDDEN SOURCE. (THIS WRITES THE ALL TAB)

    // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        // Extract the desired elements. Adjust the selectors based on your actual structure.
        var extractHeader = hiddenSourceItems[i].querySelector('h1').innerText; // Adjust the selector as needed
        var extractSummary = hiddenSourceItems[i].querySelector('.hidden-summary').innerText; // Adjust the selector as needed
        var extractHref = hiddenSourceItems[i].querySelector('a').href; // Assuming the button is an <a> element
        var extractServicesSolutions =  hiddenSourceItems[i].querySelector('#service-solution').innerText; // Value is either "Services" or "Solutions"
        var extractPinOrder =  hiddenSourceItems[i].querySelector('.pin-order').innerText; // Value is 1,2,3 (anything else is unordered)

        consoleLog(extractHeader);
        consoleLog(extractSummary);
        consoleLog(extractHref);
        consoleLog("cat: "+extractServicesSolutions);



        // Create a new container for the slide
        var newCard = templateCard.cloneNode(true);
        newCard.classList.add('w-dyn-item'); // Add a class for the slide container if needed
        newCard.setAttribute('role', 'listitem');
        newCard.setAttribute('data-upate', 'fraiacms');


        // Add the header if it exists
        if (extractHeader) {
            newCard.querySelector('h3').innerText = extractHeader;
        }

        // Add the text box if it exists
        if (extractSummary) {
            newCard.querySelector('.product-card_text').innerText = extractSummary;
        }

        // Add the button URL as a new button element if it exists
        if (extractHref) {
            newCard.querySelector('a').href = extractHref;
        }

        // Append the newly created slideContainer to the slider
        collectionListToFill.appendChild(newCard);

        if (extractServicesSolutions != null) {
            if (extractServicesSolutions.toLowerCase() == "service") {
                consoleLog("Adding to services tab: "+extractHeader);
               // document.getElementById("servicesMask").appendChild(newCard);
            }

            if (extractServicesSolutions.toLowerCase() == "solution") {
                consoleLog("Adding to solutions tab: "+extractHeader);
               // document.getElementById("solutionsMask").appendChild(newCard);
            }
        }

    }





    // Here, you might need to reinitialize or refresh your slider as mentioned earlier
    Webflow.require('slider').redraw();
}



















function writeIndustryUseCases() {
    consoleLog('Checkpoint 4');


     // 1. MAKE A COPY AS templateCopy

     var collectionListToFill = document.querySelector('#IndustrySlideHolder');
    consoleLog('collectionListToFill: '+collectionListToFill);

     var hiddenSource = document.getElementById('hiddenSource-UseCases');
     consoleLog('hiddenSource: '+hiddenSource);

    // Select the first instance of .product-slide within #ProductSlideHolder
    var templateCard = collectionListToFill.querySelector('.product-slide');
    consoleLog
    var templateCopy = templateCard.cloneNode(true);

    // Check if both elements exist
    if (!collectionListToFill || !templateCard) {
        console.error('FRAIA: Required elements not found.');
        return;
    } else {
    
    consoleLog("UC elements ok");
    }
    
    

    // 2. CLEAR OUT CollectionListToFill. It should be empty

    // Select all instances of .product-slide within collectionListToFill
    // and clear them out. We already have the template.
    var allStartingCards = collectionListToFill.querySelectorAll('.product-slide');

    // Loop through the NodeList and remove each element
    allStartingCards.forEach(function(templateCard) {
        templateCard.parentNode.removeChild(templateCard);
    });


   // var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]');

   // SORT THE ITEMS IN THE ITEMS BY THE VALUE OF .pin-order (which is 1, 2 or 3)
    // Note: If there are duplicate numbers in the Fraia CMS, it will pin them all. eg: 1,1,2,3,3


     var hiddenSourceItems = Array.from(hiddenSource.querySelectorAll('div[role="listitem"]'));

        hiddenSourceItems.sort(function(a, b) {
          // Sorting logic remains the same
          const aValue = a.querySelector('.pin-order').innerText;
          const bValue = b.querySelector('.pin-order').innerText;

          const aNum = parseInt(aValue, 10);
          const bNum = parseInt(bValue, 10);

          if ([1, 2, 3].includes(aNum) && [1, 2, 3].includes(bNum)) {
            return aNum - bNum;
          } else if ([1, 2, 3].includes(aNum)) {
            return -1;
          } else if ([1, 2, 3].includes(bNum)) {
            return 1;
          }
          return 0;
        });

        // Re-insert sorted elements into their parent container
        hiddenSourceItems.forEach(function(item) {
          // This moves each item to the end of the parent container, effectively sorting them
          hiddenSource.appendChild(item);
        });






        // If you need a NodeList of the sorted items for further operations
        var hiddenSourceSortedItems = hiddenSource.querySelectorAll('div[role="listitem"]');


        console.log(hiddenSourceSortedItems);





    // COPY THE CONTENTS FROM THE HIDDEN SOURCE

    // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        // Extract the desired elements. Adjust the selectors based on your actual structure.
        var extractHeader = hiddenSourceItems[i].querySelector('h1').innerText; // Adjust the selector as needed
        var extractSummary = hiddenSourceItems[i].querySelector('.hidden-summary').innerText; // Adjust the selector as needed
        var extractHref = hiddenSourceItems[i].querySelector('a').href; // Assuming the button is an <a> element

        consoleLog(extractHeader);
        consoleLog(extractSummary);
        consoleLog(extractHref);

        // Create a new container for the slide
        var newCard = templateCard.cloneNode(true);
        newCard.classList.add('w-dyn-item'); // Add a class for the slide container if needed
        newCard.setAttribute('role', 'listitem');



        // Add the header if it exists
        if (extractHeader) {
            newCard.querySelector('h3').innerText = extractHeader;
        }

        // Add the text box if it exists
        if (extractSummary) {
            newCard.querySelector('.product-card_text').innerText = extractSummary;
        }

        // Add the button URL as a new button element if it exists
        if (extractHref) {
            newCard.querySelector('a').href = extractHref;
        }

        // Append the newly created slideContainer to the slider
        collectionListToFill.appendChild(newCard);
    }

    // Here, you might need to reinitialize or refresh your slider as mentioned earlier
    Webflow.require('slider').redraw();
}



















function writeInterviews() {
    consoleLog('Checkpoint 4');


     // 1. MAKE A COPY AS templateCopy

     var collectionListToFill = document.querySelector('#InterviewSlideHolder');
    consoleLog('collectionListToFill: '+collectionListToFill);

     var hiddenSource = document.getElementById('hiddenSource-Interviews');
     consoleLog('hiddenSource: '+hiddenSource);

    // Select the first instance of .product-slide within #ProductSlideHolder
    var templateCard = collectionListToFill.querySelector('.interview-slide');
    var templateCopy = templateCard.cloneNode(true);

    // Check if both elements exist
    if (!collectionListToFill || !templateCard) {
        console.error('FRAIA: Required elements not found.');
        return;
    } else {
    
    consoleLog("UC elements ok");
    }
    
    

    // 2. CLEAR OUT CollectionListToFill. It should be empty

    // Select all instances of .product-slide within collectionListToFill
    // and clear them out. We already have the template.
    var allStartingCards = collectionListToFill.querySelectorAll('.interview-slide');

    // Loop through the NodeList and remove each element
    allStartingCards.forEach(function(templateCard) {
        templateCard.parentNode.removeChild(templateCard);
    });


   // var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]');

   // SORT THE ITEMS IN THE ITEMS BY THE VALUE OF .pin-order (which is 1, 2 or 3)
    // Note: If there are duplicate numbers in the Fraia CMS, it will pin them all. eg: 1,1,2,3,3


     var hiddenSourceItems = Array.from(hiddenSource.querySelectorAll('div[role="listitem"]'));

        hiddenSourceItems.sort(function(a, b) {
          // Sorting logic remains the same
          const aValue = a.querySelector('.pin-order').innerText;
          const bValue = b.querySelector('.pin-order').innerText;

          const aNum = parseInt(aValue, 10);
          const bNum = parseInt(bValue, 10);

          if ([1, 2, 3].includes(aNum) && [1, 2, 3].includes(bNum)) {
            return aNum - bNum;
          } else if ([1, 2, 3].includes(aNum)) {
            return -1;
          } else if ([1, 2, 3].includes(bNum)) {
            return 1;
          }
          return 0;
        });

        // Re-insert sorted elements into their parent container
        hiddenSourceItems.forEach(function(item) {
          // This moves each item to the end of the parent container, effectively sorting them
          hiddenSource.appendChild(item);
        });






        // If you need a NodeList of the sorted items for further operations
        var hiddenSourceSortedItems = hiddenSource.querySelectorAll('div[role="listitem"]');


        console.log(hiddenSourceSortedItems);





    // COPY THE CONTENTS FROM THE HIDDEN SOURCE

    // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        // Extract the desired elements. Adjust the selectors based on your actual structure.
        var extractHeader = hiddenSourceItems[i].querySelector('.hidden-title').innerText; 
        var extractSummary = hiddenSourceItems[i].querySelector('.hidden-summary').innerText; 
        var extractHref = hiddenSourceItems[i].querySelector('a').href; // Links to the FRAIA page with the video on it
        var hiddenYoutubeURL = hiddenSourceItems[i].querySelector('.hidden-youtubeurl').innerText;

        var extractThumbnail = getThumbnail(hiddenYoutubeURL); // Gets thumbnail img directly from Youtube 
        

       // var extractVideo = hiddenSourceItems[i].querySelector('.hidden-video').innerHTML;



        consoleLog(extractHeader);
        consoleLog(extractSummary);








        // Create a new container for the slide
        var newCard = templateCard.cloneNode(true);
        newCard.classList.add('w-dyn-item'); // Add a class for the slide container if needed
        newCard.setAttribute('role', 'listitem');



        // Add the header if it exists
        if (extractHeader) {
            newCard.querySelector('h3').innerText = extractHeader;
        }

        // Add the text box if it exists
        if (extractSummary) {
            newCard.querySelector('.interview-card_text').innerText = extractSummary;
        }

        // Add the button URL as a new button element if it exists
        if (extractThumbnail) {
            newCard.querySelector('.interview-image').src = extractThumbnail;
        }

        if (extractHref) {
            newCard.querySelector('a').href = extractHref;
        }



       

        // Append the newly created slideContainer to the slider
        collectionListToFill.appendChild(newCard);
    }

    // Here, you might need to reinitialize or refresh your slider as mentioned earlier
    Webflow.require('slider').redraw();
}
















function getThumbnail(videoUrl) { // gets the youtube thumb for a video url

     // Extract video ID from the video URL
      const videoIdMatch = videoUrl.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      
      if (videoIdMatch && videoIdMatch[1]) {
        // Construct thumbnail URL using the extracted video ID
        return `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg`;
      } else {
        // Return a message if the video ID couldn't be extracted
        return "Invalid YouTube video URL";
      }

}













function writePhotos() {
    consoleLog('Checkpoint 6');


     // 1. MAKE A COPY AS templateCopy

     var collectionListToFill = document.querySelector('#PhotoMarqueeHolder');
    consoleLog('collectionListToFill: '+collectionListToFill);









     var hiddenSource = document.getElementById('hiddenSource-Photos');
     consoleLog('hiddenSource: '+hiddenSource);

    // Select the first instance of .product-slide within #ProductSlideHolder
    var templateCard = collectionListToFill.querySelector('.gallery-marquee_image-wrapper');
    var templateCopy = templateCard.cloneNode(true);

    // Check if both elements exist
    if (!collectionListToFill || !templateCard) {
        console.error('FRAIA: Required elements not found.');
        return;
    } else {
    
    consoleLog("UC elements ok");
    }
    
    




    // 2. CLEAR OUT ORIGINAL CollectionListToFill. It should be empty

    // Select all instances of .product-slide within collectionListToFill
    // and clear them out. We already have the template.
    var allStartingCards = collectionListToFill.querySelectorAll('.gallery-marquee_image-wrapper');

    // Loop through the NodeList and remove each element
    allStartingCards.forEach(function(templateCard) {
        templateCard.parentNode.removeChild(templateCard);
    });


    //var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]'); 

   

//--


     var hiddenSourceItems = Array.from(hiddenSource.querySelectorAll('div[role="listitem"]'));

        hiddenSourceItems.sort(function(a, b) {
          // Sorting logic remains the same
          const aValue = a.querySelector('.pin-order').innerText;
          const bValue = b.querySelector('.pin-order').innerText;

          const aNum = parseInt(aValue, 10);
          const bNum = parseInt(bValue, 10);

          if ([1, 2, 3].includes(aNum) && [1, 2, 3].includes(bNum)) {
            return aNum - bNum;
          } else if ([1, 2, 3].includes(aNum)) {
            return -1;
          } else if ([1, 2, 3].includes(bNum)) {
            return 1;
          }
          return 0;
        });

        // Re-insert sorted elements into their parent container
        hiddenSourceItems.forEach(function(item) {
          // This moves each item to the end of the parent container, effectively sorting them
          hiddenSource.appendChild(item);
        });






        // If you need a NodeList of the sorted items for further operations
        var hiddenSourceSortedItems = hiddenSource.querySelectorAll('div[role="listitem"]');


        console.log(hiddenSourceSortedItems);



//--















    // COPY THE CONTENTS FROM THE HIDDEN SOURCE

    // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        // Extract the desired elements. Adjust the selectors based on your actual structure.

        var extractImg = hiddenSourceItems[i].querySelector('img').src; // Adjust the selector as needed
        var extractCaption = hiddenSourceItems[i].querySelector('.hidden-caption').innerText; // Adjust the selector as needed

        consoleLog(extractImg);
        consoleLog(extractCaption);

        // Create a new container for the slide
        var newCard = templateCard.cloneNode(true);
        newCard.classList.add('gallery-marquee_image-wrapper'); // Add a class for the slide container if needed
        newCard.setAttribute('role', 'listitem');


       // consoleLog(newCard);


        // Add the header if it exists
        if (extractImg) {
            var imgElement = newCard.querySelector('img');
       //     consoleLog('check 8: '+imgElement);
            imgElement.src = extractImg;
            imgElement.alt = 'fraiacms image';
            imgElement.id = '';
            imgElement.srcset = '';
        }

        // Add the text box if it exists
        if (extractCaption) {
            newCard.querySelector('.gallery-marquee_text').innerText = extractCaption;
        }

       

        // Append the newly created slideContainer to the slider
        collectionListToFill.appendChild(newCard);
    }




    // Here, you might need to reinitialize or refresh your slider as mentioned earlier
    Webflow.require('slider').redraw();
}























// DEV NOTE: 
// Custom fade-in function for FRAIA:
// Because Webflow's native slider uses unique element identifiers assigned on Publish for animation. 
// When we dynamically create slides using the CMS, those unique identifiers (and animations) get overwritten.
// Here we mimick the native functionality with GSAP
// -James


// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class .our-product_card
    const productCards = document.querySelectorAll('.our-product_card');

    // Add event listeners to each card
    productCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            // Use GSAP to fade in the child element with class .product-card_text
            gsap.to(this.querySelector('.product-card_text'), { duration: 0.5, opacity: 1, ease: 'power1.inOut' });
            gsap.to(this.querySelector('.our-product_more-detail'), { duration: 0.5, opacity: 1, ease: 'power1.inOut' });
        });

        card.addEventListener('mouseout', function() {
            // Use GSAP to fade out the child element with class .product-card_text
            gsap.to(this.querySelector('.product-card_text'), { duration: 0.5, opacity: 0, ease: 'power1.inOut' });
            gsap.to(this.querySelector('.our-product_more-detail'), { duration: 0.5, opacity: 0, ease: 'power1.inOut' });

        });
    });
});



// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class .our-product_card
    const productCards = document.querySelectorAll('.interview_card');

    // Add event listeners to each card
    productCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            // Use GSAP to fade in the child element with class .product-card_text
            gsap.to(this.querySelector('.our-product-card_hover-content'), { duration: 0.5, opacity: 1, ease: 'power1.inOut' });
        });

        card.addEventListener('mouseout', function() {
            // Use GSAP to fade out the child element with class .product-card_text
            gsap.to(this.querySelector('.our-product-card_hover-content'), { duration: 0.5, opacity: 0, ease: 'power1.inOut' });

        });
    });
});





