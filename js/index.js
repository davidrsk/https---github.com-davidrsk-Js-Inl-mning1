/*
1. 0 bloggposts från start
2. vid tryck på blogpost-counter, så skapas en post
3. vid tryck på posten, möjliggörs redigering
4. vid (-) antal posts, tas senaste post bort
*/
document.addEventListener("DOMContentLoaded", onPageLoad); //

function onPageLoad() { //inkluderar kod som ska köras vid laddning av sidan
    let inputNumber = document.querySelector("#input-number");

    inputNumber.addEventListener("input", onInput);
}

function onInput(){//vad som gänder när man kallar på onInput()

    let container = document.getElementById("mitten");//hämtar hela mitten-div och lagrar i "container"

    let textbox = document.createElement("article");//skapar en <article> 
    let title = document.createElement("h3");//skapar en <h3>
    let text = document.createElement("p");//skapar en <p>

    container.append(textbox);//lägger till article inuti mitten
    textbox.append(title);//lägger till h3 inuti article
    textbox.append(text);//lägger till p inuti article

    title.innerText = "Title + " 
    text.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
    commodi praesentium eius quod suscipit! 
    Tenetur magnam eligendi amet fugiat adipisci impedit.`;

}

function editText(blogPost){//funktion som tillåter redigering av blogPost

    blogPost.onclick = function(){
        blogPost.contentEditable = true; // vid klick på blogPost = möjliggör redigering
        blogPost.focus();
    };

    blogPost.onblur(){
        blogPost.contentEditable = false; //vid klick utanför blogPost = inte möjligt att redigera
    };
}

function deleteBlogpost(){
    let blogpost = document.querySelectorAll("article");

    
}




