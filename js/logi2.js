function register() {
    let playerName = document.getElementById("playerName").value;
    let bornDate = document.getElementById("playerBirthDate").value;
    let mail = document.getElementById("playerMail").value;
    let password = document.getElementById("password").value;
    let record = 0;
    let user;
    
    if (playerName === "" || bornDate === "" || mail === "" || password === "") {
        alert("נא מלא את כל השדות לפני לחיצה על התחברות.");
        return false;
    }
    else{
        if(isValidIsraeliID(password) && isValidEmail(mail)){
            user = {
                playerName: playerName,
                bornDate: bornDate,
                mail: mail,
                password: password,
                record: record
            }
        }
        else
            {alert("אחד מהפרטים שהקשת שגוי")}
    }

    if (sessionStorage.getItem(password) != undefined) {
        alert("משתמש קיים, מתחבר למערכת")
        setTimeout(() => {
            window.location.href = "../html/game.html";
        }, 1000); 
    }

    else {
        sessionStorage.setItem(password, JSON.stringify(user));
        localStorage.setItem("currentUser",password );
        
            window.location.href = "../html/login.html";
        
    }
}

function isValidIsraeliID(id) {
    if (!/^\d{9}$/.test(id)) 
        return false;
    var counter = 0,
        num;
    for (var i = 0; i < 9; i++) {
        num = parseInt(id.charAt(i));
        if (i % 2 === 0) { // אם מספר זוגי
            num *= 1;
        } else { // אם מספר אי זוגי
            num *= 2;
            if (num > 9) num -= 9;
        }
        counter += num;
    }
    return counter % 10 === 0;
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}