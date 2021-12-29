export default class BookstoreService{
    data = [
        {
            id: 1, 
            title: 'Fahrenheit 451',
            author: 'Ray Douglas Bradbury',
            price: 88,
            coverImage: 'https://www.britishbook.ua/upload/resize_cache/iblock/d7a/298_457_174b5ed2089e1946312e2a80dcd26f146/kniga_fahrenheit_451.jpg'    
        },
        {
            id: 2,
            title: 'Lolita',
            author: 'Vladimir Nobakov',
            price: 14,
            coverImage: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Lolita_1955.JPG'
        }
    ];

    getBooks(){
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                // if(Math.random()>0.5){
                //     reject(new Error('Something goes wrong'));
                // }else{
                    resolve(this.data);
                // }



            }, 700);
        });
    }
}