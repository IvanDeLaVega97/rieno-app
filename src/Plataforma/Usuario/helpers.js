import * as firebase from 'firebase';

class Helpers{
    static getimg(userid, callback){
        let userNamePath = "/user/"+userid+"details/url"
        return firebase.database().ref(userNamePath).on('value', (snapshot) => {
            let imageUrl = ''
            if (snapshot.val()) {
                imageUrl = snapshot.val()                
            }
            callback(imageUrl)
        })
    }

    static getCurso(callback){
        let userNamePath = "/Cursos"
        return firebase.database().ref(userNamePath).once('value', (snapshot) => {
            console.log(snapshot.toJSON());
            let Name = ''
            if (snapshot.val()) {
                Name = snapshot.val()                
            }
            callback(Name)
        })
    }
}

export default Helpers;