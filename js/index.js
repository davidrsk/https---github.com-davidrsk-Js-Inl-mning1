/* TODO
1. 0 bloggposts från start
2. vid tryck på blogpost-counter, så skapas en post
3. vid tryck på posten, möjliggörs redigering
4. vid (-) antal posts, tas senaste post bort
*/
document.addEventListener("DOMContentLoaded", onPageLoad); //DOMCL kör koden när html-dokumentet laddats klart

function onPageLoad() { //inkluderar kod som ska köras vid laddning av sidan
    let inputNumber = document.querySelector("#input-number");

    //inputNumber.addEventListener("input", onInput);
    inputNumber.oninput = function() {
        deleteBlogpost();
        onInput(parseInt(inputNumber.value));
    };
};

function onInput(numberOfBlogposts){//vad som händer när man kallar på onInput()

    for(let i = 0; i < numberOfBlogposts; i++){ //ökar +1 på Titel vid input

        let container = document.getElementById("mitten");//hämtar hela mitten-div och lagrar i "container"

        let textbox = document.createElement("article");//skapar en <article> 
        let title = document.createElement("h3");//skapar en <h3>
        let text = document.createElement("p");//skapar en <p>
    
        container.append(textbox);//lägger till article inuti mitten
        textbox.append(title);//lägger till h3 inuti article
        textbox.append(text);//lägger till p inuti article
    
        title.innerText = "Title " + i;
        text.innerText = `Skriv ett inlägg....`;

        editText(title);
        editText(text);
    };
};

function editText(blogPost){//funktion som tillåter redigering av blogPost

    blogPost.onclick = function(){
        blogPost.contentEditable = true; // vid klick på blogPost = möjliggör redigering
        blogPost.focus();
    };

    blogPost.onblur = function(){
        blogPost.contentEditable = false; //vid klick utanför blogPost = inte möjligt att redigera
    };
};

function deleteBlogpost(){
    let blogpost = document.querySelectorAll("article");//väljer alla element av sorten <article>

    for(let i = 0; i < blogpost.length; i++){ //om siffran är mindre än antalet blogpost = ta bort blogpost
        blogpost[i].remove();
    };
};




