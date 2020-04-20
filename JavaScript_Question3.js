class Person {
    constructor(name = "jake", surname = "branch", age = 22){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getDescription(){
        return this.name + " " + this.surname + ", " + this.age + ": ";
    }
}

class Teacher extends Person{
    constructor(name, surname, age, ...subjects){
        super(name, surname, age);
        this.subjects = subjects;
    }

    getDescription(){
    	let rtnString = super.getDescription();
      
        for(let i = 0; i < this.subjects.length; i++){
            rtnString += ", " + this.subjects[i];
        }
        
        return rtnString;
    }

    static getSharedSubjects(subjects1, subjects2){
        let rtnArray = [];
    
        for(let i = 0; i < subjects1.length; i++)
        {
            for(let j = 0; j < subjects2.length; j++)
            {
                if(subjects1[i] == subjects2[j]){
                    rtnArray.push(subjects1[i]);
                    break;
                }
            }
        }

        return rtnArray;
    }
}