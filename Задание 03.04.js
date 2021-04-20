let age = prompt('Сколько вам лет?');
if (age < 1){
    alert('Младенец')
    }
    else if (age >= 1 && age <= 11){
    alert('Ребёнок')
    }
    else if (age >= 12 && age <= 15){
    alert('Подросток')
    }
    else if (age >= 16 && age <= 25){
    alert('Юноша')
    }
    else if (age >= 26 && age <= 70){
    alert('Мужчина')
    }
    else{
    alert('Старик')
    }
    alert("Вы" + " " + age);




    functionnumber(x){
  
        let arr = [];
        for (let i = 0; i < x; i++){
        arr.push(+prompt("Введите число",""));
        }
        let max = Math.max(...arr);
        alert(max);
        
    }
     
    number(+prompt("Введите кол-во чисел", ""));