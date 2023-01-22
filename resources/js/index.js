
import {fetchResource,makeCarousel} from './scripts.js'

async function fillAccordion(index){
//List of Accordion Headers
const headers = document.getElementsByClassName("custom-change")
//Fetching resources for accordion from corresponding api
const resource = await fetchResource(magazines[index])

//Checking if resource fetch was successful
if (resource===null){
    console.log(resource)
    headers[index].textContent = "Error"
return 
}
//Adding Heading to Accordion
headers[index].textContent = resource.feed.title
makeCarousel(resource.items, document.getElementsByClassName("carousel-inner")[index])

}

async function fillEverything(){
// Storing all the accordions
const listOfHeaders = 3
//Iterating over Accordions
for (let index =0; index < listOfHeaders; index++){
//Filling Heading in Accordion
fillAccordion(index)
}
}

fillEverything()