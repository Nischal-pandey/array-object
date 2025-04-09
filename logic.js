//you are managing a list of users . where each users is an object with name and email. write a function that removes users with duplicate email address and returns an array of unique users .///////////////////////////


  const users =[
    {
        name:"test",
        email:"test@gmail.com"
    },
    {
        name:"john Doe",
        email:"john@gmail.com"
    },
    {
        name:"jane Doe",
        email:"jane@gmailcom"
    },
  ]

  function getuniqueuser(users){
      
    for(let i=0;i<users.length-1;i++){
        for(let j=i+1;j<users.length;j++)
            if(users[i].email=== users[j].email){
              user.splice(i,1)
            }
        }
       
        return users;
    }
  
 console.log(getuniqueuser(users))
 