var keyword = document.getElementById('keyword');
let api = `https://www.googleapis.com/books/v1/volumes?q=`;
let submit = document.getElementById('submit');
let article = document.getElementById('article');
let container = document.querySelectorAll('.container');

let ninos = article.children;




submit.addEventListener('click', ()=>{
    if (ninos.length>1) {
    
    console.log('Contiene container ');
    
    
    
  
    }else{
        console.log('No contiene');
        fetch(api+keyword.value)
        .then(response => response.json())
        .then(data=>{
            
            let welcomePage = document.querySelector('.welcome-page');
            if (keyword.value.length>3) {
                welcomePage.classList.add('inactivate');
                for(let i = 0; i < data.items.length; i++){
                    article.innerHTML += `<div class="container">
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
                    <hr>`
        
                } 
                
                setTimeout(()=>{
                    const eliminar =()=>{
                        
                    }
                })    
                
            }        
        })
    }   
   
}) 



    









        
       
        