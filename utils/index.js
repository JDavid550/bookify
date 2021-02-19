var keyword = document.getElementById('keyword');
let api = `https://www.googleapis.com/books/v1/volumes?q=`;
let submit = document.getElementById('submit');
let article = document.getElementById('article');
const logo = document.getElementById('bookify_logo');
let articleItems =[];
articleItems = article.children;

logo.addEventListener('click', ()=>{
    location.reload();
})

const inactivate = ()=>{
        let container = document.getElementsByClassName('container');
        for (let i = 0; i < container.length; i++) {
            container[i].classList.add('inactivate');
        }
}

const executeSearch =()=>{
    if (articleItems.length>1){
        inactivate();
        pull();
    
    }else{
        pull();

    } 
}

submit.addEventListener('click', ()=>{
     executeSearch();
})



keyword.addEventListener('keyup', (e) =>{
    if (e.code == 'Enter') {
        executeSearch();
    }
})


const pull = ()=>{
    fetch(api+keyword.value)
    .then(response => response.json())
    .then(data=>{
        let welcomePage = document.querySelector('.welcome-page');
        if (keyword.value.length>3) {
            welcomePage.classList.add('inactivate');
            for(let i = 0; i < data.items.length; i++){
                article.innerHTML += `
                <div class=container>
                <div class="subcontainer">
                    <div class="cover">
                        <img src="${data.items[i].volumeInfo.imageLinks.thumbnail}" alt="Cover">
                    </div>
                    <div class="info">
                        <div class="titles">
                            <h1>${data.items[i].volumeInfo.title}</h1>
                            <h2>${data.items[i].volumeInfo.authors}</h2>
                        </div>
                        <div class="editor-info">
                            <div class="editor-info__div-1">
                                <h3>Publisher: ${data.items[i].volumeInfo.publisher}</h3>
                                <h4>Release date: ${data.items[i].volumeInfo.publishedDate} </h4>
                                <h4>Language: ${data.items[i].volumeInfo.language}</h4>
                            </div>
                            <div class="editor-info__div-2">
                                <h4>Category: ${data.items[i].volumeInfo.categories}</h4>
                                <h4>Pages:${data.items[i].volumeInfo.pageCount}</h4>
                                <h4>ISBN: ${data.items[i].volumeInfo.industryIdentifiers[0].identifier}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                </div>`
    
            } 
        }        
    })


}




    









        
       
        