export default class BookstoreService{
    getBooks(){
        return [
            {
                id: 1, 
                name: 'Fahrenheit 451',
                author: 'Ray Douglas Bradbury'
            },
            {
                id: 2,
                name: 'Lolita',
                author: 'Vladimir Nobakov'
            }
        ];
    }
}