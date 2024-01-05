class A1{

    m=23;// instance variable  ==> variable outside the method and inside the class

    add(){
        let a=1// local variable ==>variable inside the method
        let b=4
        let c=a+b+this.m
        console.log(c)
    }


}

// object creation 
// syntax ==>  variabletype onjectname = new classname()
let obj =new A1()
obj.add()



class facebook{
    
    username 
    password

    constructor(a, b){
        // purpose of constructor is assigning the value to the instance variable  while creating the object
        this.username= a
        this.password=b
    }

    login(){
        console.log(this.username +' log in success fully ' + this.password)
    }

    logout(){
        console.log(this.username +'log in success fully')

    }
}

let user1= new facebook('raj',789)
let user2= new facebook('ram', 7741)
user2.login()


class grandparent{

    land(){
        console.log(" 2 grounds ")
    }
    car(){
        console.log(' benz ')
    }
}

class parent extends grandparent{

    bike(){
        console.log('splendor')
    }

    cask(){
        console.log('25000')
    }
}

class child extends parent{

    mobile(){
        console.log('redmi')
    }
    
}

let son =new child()
son.mobile()
son.bike()
son.land()



//hirarical 

class rbi{

    personalLoan(){
        console.log(' 0 to 10 lakhs 10% per anual')
    }

    homeloan(){
        console.log(' 0 to 10 lakhs 7% per anual')
    }
}

class sbi extends rbi{

}

class iob extends rbi {

}

let obj9= new iob()
obj9.personalLoan()



let h1= new sbi()
h1.homeloan










































