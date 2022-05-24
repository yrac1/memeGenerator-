const pictures= document.querySelectorAll('.picture');  // selecting all the images with the class name of pictures 
const form= document.querySelector('#textCreator'); 
const textContent= document.querySelector('input[name="comment"]');// this is done for attributes
const result= document.querySelector('#box');
const textResult= document.querySelector('#box2')
const fontSize= document.querySelector('input[name="font-size"]') ;
const fontColor= document.querySelector('input[name="color"]');
const images=document.querySelectorAll('section'); // might not need this we wil see 
// adding an event listener to the form 
const textLocation= form.addEventListener('submit', function (e){
    e.preventDefault();
    const newText= textInfo(textContent.value, fontSize.value, fontColor.value);
     textResult.append(newText); 
})

// function to add text
function textInfo(text,size,color){
    const comment= document.createElement('h2'); 
    comment.innerText= text;
    comment.style.color= color;
    comment.style.fontSize=size + 'px'; 
    return comment;
}

// adding an event listener for when an image is clicked

pictures.forEach( picture=>{ // using a forEach loop because we want an even listener on each image
    picture.addEventListener('click',(evt) =>{
        evt.preventDefault();
        // novw we want to append the selected image to the div that was created 
        // result.appendChild(pictures);
        console.log(evt.target);
        result.innerHTML=""
        const newImage= result.appendChild(evt.target.cloneNode()) //clones the image and appends into the box
        newImage.style.width=400+'px'; // resize the image that has been cloned 
        newImage.style.height=400+'px'; // resize the new image that has been closed 
        // append text to the image 
        

        //  result.appendChild(newImage);

    })
   
})


