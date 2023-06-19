export default userReducer(user, action){
  switch(action.type){
    case "login" : return {
      ...action.user,
      isConnected : true
    }
    
    case "logout": return{
      ...user,
      isConnected: false
    };
  }
}