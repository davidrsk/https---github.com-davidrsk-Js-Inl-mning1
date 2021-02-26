/* TODO
1. 0 bloggposts från start
2. vid tryck på blogpost-counter, så skapas en post
3. vid tryck på posten, möjliggörs redigering
4. vid (-) antal posts, tas senaste post bort
*/

/* 
Debug:
- på rad 38 gjorde jag misstaget att skriva 'title.append(text)' vilket skulle innebära att jag lägger en <p>
inuti <h3> vilket i sin tur inte är möjligt. Löste det helt enkelt genom att glo igenom noga

- På rad 23 och 24 glömde jag kalla på func 'deleteBlogpost()' och 'userCreatesBlogpost()' så att de sker 
vid input på "#input-number". Sättet jag löste det på var att kolla på mallen som lärare gav oss.
*/

document.addEventListener("DOMContentLoaded", onPageLoad); //DOMCL kör koden när html-dokumentet laddats klart

function onPageLoad() { //inkluderar kod som ska köras vid laddning av sidan
    let inputNumber = document.querySelector("#input-number");

    
    inputNumber.oninput = function() { //vid användarinput på input-boxen...
        deleteBlogpost();
        userCreatesBlogpost(parseInt(inputNumber.value)); //tolkar input-boxens värde från string till int

        //... kallas funktionerna ovan på
    };
};

function userCreatesBlogpost(numberOfBlogposts){//Vad som sker när man kallar på userCreatesBlogpost()...

    for(let i = 0; i < numberOfBlogposts; i++){ //ökar +1 på Titel vid input

        let container = document.getElementById("mitten");//hämtar hela mitten-div och lagrar i "container"

        let textbox = document.createElement("article");//skapar en <article> 
        let title = document.createElement("h3");//skapar en <h3>
        let text = document.createElement("p");//skapar en <p>
        let hr = document.createElement("hr"); //skapar en <hr>
    
        container.append(textbox);//lägger till <article> inuti <div id="mitten">
        textbox.append(title);//lägger till <h3> inuti article
        textbox.append(text);//lägger till <p> inuti article
        textbox.append(hr);//lägger till <hr> inuti article

    
        title.innerText = "Title " + i; // placerar strängen "Title " följt av index-tal enligt for-loopens villkor
        text.innerText = `Skriv ett inlägg....`; //placeholder-texten i <p> innan redigering

        //kallar på editText-funktionen som appliceras på 'title' och 'text'
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

    for(let i = 0; i < blogpost.length; i++){ //om siffran är mindre än antalet blogpost = ta bort senaste blogpost
        blogpost[i].remove();
    };
};




