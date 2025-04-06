  //you are managing employee records. Each employee is an object with name , salary and performance score. Write a function that increase each employee salary by 5% if their performane score is above 75. otherwise they get no increase. \\


 const employees = [
    {
        name:"Ajay",
        salary: 150000,
        performanescore: 77
    },
    {
        name:"Nischal",
        salary: 15000,
        performanescore: 74
    },
    {
        name:"piyush",
        salary: 142000,
        performanescore: 55
    }
 ]

  function give5percent(salary){
    return(5/100)*salary
  }

  function increasesalary(employees){
    let result = []
    for(let i=0;i<employees.length;i++){
     if (employees[i].performanescore>75){
        employees[i].salary = give5percent(employees[i].salary)+employees[i].salary
            result.push(employees[i])
     }
     
    }
    return result
    }
  
    console.log(increasesalary (employees))
    

