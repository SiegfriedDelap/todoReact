export default class BookstoreService{
    data = [
        {
            id: 1, 
            title: 'Fahrenheit 451',
            author: 'Ray Douglas Bradbury',
            price: 88,
            coverImage: 'https://cdn.eksmo.ru/v2/ITD000000000836330/COVER/cover1__w600.jpg'    
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