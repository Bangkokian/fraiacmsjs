




// DEV NOTE:
// Populate native Webflow slider with CMS content.
// Because the native Webflow slider doesn't populate dynamically with CMS content we use this workaround for FRAIA:
// The CMS data populates into hidden elements below the page footer. This javascript then reads those hidden elements
// and copies them into the native Webflow slider.
// -James




console.log('Checkpoint 1');


document.addEventListener('DOMContentLoaded', function() {

       writeProductsServices();
       writeIndustryUseCases();
       writePhotos();

});




function writeProductsServices() {
    console.log('Checkpoint 2');


     // 1. MAKE A COPY AS templateCopy

     var collectionListToFill = document.querySelector('#ProductSlideHolder');
    console.log('collectionListToFill: '+collectionListToFill);

     var hiddenSource = document.getElementById('hiddenSource-ProductsServices');
     console.log('hiddenSource: '+hiddenSource);

    // Select the first instance of .product-slide within #ProductSlideHolder
    var templateCard = collectionListToFill.querySelector('.product-slide');
    console.log
    var templateCopy = templateCard.cloneNode(true);

    // Check if both elements exist
    if (!collectionListToFill || !templateCard) {
        console.error('FRAIA: Required elements not found.');
        return;
    } else {
    
    console.log("Elements ok");
    }
    
    

    // 2. CLEAR OUT CollectionListToFill. It should be empty

    // Select all instances of .product-slide within collectionListToFill
    // and clear them out. We already have the template.
    var allStartingCards = collectionListToFill.querySelectorAll('.product-slide');

    // Loop through the NodeList and remove each element
    allStartingCards.forEach(function(templateCard) {
        templateCard.parentNode.removeChild(templateCard);
    });


    var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]');

    console.log('items length: '+hiddenSourceItems.length);


    console.log("checkpoint 3");




    // COPY THE CONTENTS FROM THE HIDDEN SOURCE

    // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        // Extract the desired elements. Adjust the selectors based on your actual structure.
        var extractHeader = hiddenSourceItems[i].querySelector('h1').innerText; // Adjust the selector as needed
        var extractSummary = hiddenSourceItems[i].querySelector('.hidden-summary').innerText; // Adjust the selector as needed
        var extractHref = hiddenSourceItems[i].querySelector('a').href; // Assuming the button is an <a> element
        var extractServicesSolutions =  hiddenSourceItems[i].querySelector('#service-solution'); // Value is either "Services" or "Solutions"

        console.log(extractHeader);
        console.log(extractSummary);
        console.log(extractHref);

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









function writeIndustryUseCases() {
    console.log('Checkpoint 4');


     // 1. MAKE A COPY AS templateCopy

     var collectionListToFill = document.querySelector('#IndustrySlideHolder');
    console.log('collectionListToFill: '+collectionListToFill);

     var hiddenSource = document.getElementById('hiddenSource-UseCases');
     console.log('hiddenSource: '+hiddenSource);

    // Select the first instance of .product-slide within #ProductSlideHolder
    var templateCard = collectionListToFill.querySelector('.product-slide');
    console.log
    var templateCopy = templateCard.cloneNode(true);

    // Check if both elements exist
    if (!collectionListToFill || !templateCard) {
        console.error('FRAIA: Required elements not found.');
        return;
    } else {
    
    console.log("UC elements ok");
    }
    
    

    // 2. CLEAR OUT CollectionListToFill. It should be empty

    // Select all instances of .product-slide within collectionListToFill
    // and clear them out. We already have the template.
    var allStartingCards = collectionListToFill.querySelectorAll('.product-slide');

    // Loop through the NodeList and remove each element
    allStartingCards.forEach(function(templateCard) {
        templateCard.parentNode.removeChild(templateCard);
    });


    var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]');

    console.log('items length: '+hiddenSourceItems.length);


    console.log("checkpoint 5");




    // COPY THE CONTENTS FROM THE HIDDEN SOURCE

    // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        // Extract the desired elements. Adjust the selectors based on your actual structure.
        var extractHeader = hiddenSourceItems[i].querySelector('h1').innerText; // Adjust the selector as needed
        var extractSummary = hiddenSourceItems[i].querySelector('.hidden-summary').innerText; // Adjust the selector as needed
        var extractHref = hiddenSourceItems[i].querySelector('a').href; // Assuming the button is an <a> element

        console.log(extractHeader);
        console.log(extractSummary);
        console.log(extractHref);

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













function writePhotos() {
    console.log('Checkpoint 6');


     // 1. MAKE A COPY AS templateCopy

     var collectionListToFill = document.querySelector('#PhotoMarqueeHolder');
    console.log('collectionListToFill: '+collectionListToFill);



//try this
    // Select all elements with the class 'gallery-marquee_list'
var elements = document.querySelectorAll('.gallery-marquee_list');

// Loop through the NodeList and remove each element from its parent
elements.forEach(function(element) {
    element.parentNode.removeChild(element);
});
// end try






     var hiddenSource = document.getElementById('hiddenSource-Photos');
     console.log('hiddenSource: '+hiddenSource);

    // Select the first instance of .product-slide within #ProductSlideHolder
    var templateCard = collectionListToFill.querySelector('.gallery-marquee_image-wrapper');
    var templateCopy = templateCard.cloneNode(true);

    // Check if both elements exist
    if (!collectionListToFill || !templateCard) {
        console.error('FRAIA: Required elements not found.');
        return;
    } else {
    
    console.log("UC elements ok");
    }
    
    




    // 2. CLEAR OUT ORIGINAL CollectionListToFill. It should be empty

    // Select all instances of .product-slide within collectionListToFill
    // and clear them out. We already have the template.
    var allStartingCards = collectionListToFill.querySelectorAll('.gallery-marquee_image-wrapper');

    // Loop through the NodeList and remove each element
    allStartingCards.forEach(function(templateCard) {
        templateCard.parentNode.removeChild(templateCard);
    });


    var hiddenSourceItems = hiddenSource.querySelectorAll('div[role="listitem"]'); 

    console.log('items length: '+hiddenSourceItems.length);

    console.log("checkpoint 7");




    // COPY THE CONTENTS FROM THE HIDDEN SOURCE

    // Loop through each item in the collection
    for (var i = 0; i < hiddenSourceItems.length; i++) {
        // Extract the desired elements. Adjust the selectors based on your actual structure.

        var extractImg = hiddenSourceItems[i].querySelector('img').src; // Adjust the selector as needed
        var extractCaption = hiddenSourceItems[i].querySelector('.hidden-caption').innerText; // Adjust the selector as needed

        console.log(extractImg);
        console.log(extractCaption);

        // Create a new container for the slide
        var newCard = templateCard.cloneNode(true);
        newCard.classList.add('gallery-marquee_image-wrapper'); // Add a class for the slide container if needed
        newCard.setAttribute('role', 'listitem');


       // console.log(newCard);


        // Add the header if it exists
        if (extractImg) {
            var imgElement = newCard.querySelector('img');
       //     console.log('check 8: '+imgElement);
            imgElement.src = extractImg;
            imgElement.alt = 'cms image';
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





