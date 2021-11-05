

function checkTheNumber() {

    let userINN = innEnter.value;
    
    let elemCheckINN = document.querySelector('.checkINN');
    let elemValidation = document.querySelector('.validation');
    let elemInnIsOk = document.querySelector('.innIsOk');
    let elemGender = document.querySelector('.gender');
    let elemDateOfBirth = document.querySelector('.dateOfBirth');
    let elemFullAge = document.querySelector('.fullAge');
    let elemIsInvalid = document.querySelector('.numberIsInvalid');
    let elemHiddenOutput = document.querySelectorAll('output:not(:first-child)');
    console.log(elemHiddenOutput);
        
    /*validation*/
    
    let regexp = /\d{10}/;
    
        if (+userINN == userINN.match(regexp)) {
          elemCheckINN.classList.remove('d-none');
          elemValidation.classList.remove('is-invalid');
        } else {
          elemValidation.classList.add('is-invalid');
          elemCheckINN.classList.add('d-none');  
          elemIsInvalid.innerHTML = 'Пожалуйста, введите числовое значение из десяти символов.';
        }
    
    // ============check control number============================
    
    let controlSumm = (userINN[0] * -1) + (userINN[1] * 5) + (userINN[2] * 7) + (userINN[3] * 9) +     (userINN[4] * 4) + (userINN[5] * 6) + (userINN[6] * 10) + (userINN[7] * 5) + (userINN[8] * 7);
    
    let controlValue = (controlSumm - (Math.floor(controlSumm / 11)) * 11);
    
        if (controlValue > 9) {
            controlValue = 0;
        }
    
        switch (true) {
            case controlValue == +(userINN[9]):
                elemInnIsOk.innerHTML = 'Номер ИНН корректный';
                  for(let i = 0; i < elemHiddenOutput.length; i ++) {
                    elemHiddenOutput[i].classList.remove('d-none');
                  }
            break;  
            default:
                console.log('Error');
                elemInnIsOk.innerHTML = 'Номер не существует';
                  for(let i = 0; i < elemHiddenOutput.length; i ++) {
                    elemHiddenOutput[i].classList.add('d-none');
                    console.dir(elemHiddenOutput[i]);
                  }
        }
    
    // =====================check gender=================================
    
    userINN[8] % 2 == 0 ? elemGender.innerHTML = 'Женщина' : elemGender.innerHTML = 'Мужчина';
    
    // =====================check date of birth=====================================
    
    let today = new Date();
    let birthday = new Date(1900, 0, 0);
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',     'сентября', 'октября', 'ноября', 'декабря'];
      
        birthday.setDate(birthday.getDate() + (+userINN.substring(0, 5)));
      
    elemDateOfBirth.innerHTML = `Дата рождения:` + ` ` + `${birthday.getDate()}` + ` ` + `${months[birthday.getMonth()]}` + ` ` + `${birthday.getFullYear()}`;
         
      // =============================FullAge=================================================
    
    let birthdayInThisYear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    let fullAge;  
        if (today > birthdayInThisYear) {      
            fullAge =  (today.getFullYear() - birthday.getFullYear()); 
            elemFullAge.innerHTML = `Полный возраст: ${fullAge}`;      
        } else {
            fullAge =  ((today.getFullYear() - birthday.getFullYear()) - 1); 
            elemFullAge.innerHTML = `Полный возраст: ${fullAge}`;
        }

}
