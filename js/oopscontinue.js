
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
    bike(){
        console.log('royal enfield')
    }
    
}

let son =new child()
son.mobile()
son.bike()
son.land()



let c= 12/0
console.log(c)

let a=[12,48,52]
console.log(a[4])

































