/* eslint-disable  camelcase */
// import jwt from 'jsonwebtoken'
import JwtDecode from 'jwt-decode'

export default class User {
  static getFrom (token) {
    try {
      // verify and decode token witn secretkey, if fails or any other error - return null
      let obj = JwtDecode(token)
     // var decoded = jwt.verify(token, 'yohohosecret')
    //  console.log('from user, token = ' + token)
      console.log('from user, decoded = ' + JSON.stringify(obj))
      let user = new User(obj);
      console.log("user")
      console.log(user.id)
      return user
      // return new User(decoded)
    } catch (_) {
      return null
    }
  }

  constructor (userCredentials) {
    this.id = userCredentials._id;
    this.name = userCredentials.name;
    // this.admin = admin
    this.email = userCredentials.email;
    this.wallets = [];
  }

  //   get isAdmin () {
  //     return this.admin
  //   }
}
