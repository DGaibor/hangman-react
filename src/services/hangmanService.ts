export class HangmanService {
    get(){
        const db = ['apple','plum','pear','banana']
        
        const random = Math.floor(Math.random() * db.length);
        return db[random];
    }
}
