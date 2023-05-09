let password = {si:64,b:2121,c:22332,d:5446}
    login.onclick = function () {

        let id = document.getElementById("id").value
        let pass = document.getElementById("pass").value
        is = id.charAt(0)
        if(is=="s")
        pass = pass*8
        console.log(is)
        if(password[id] == pass){
            console.log("working")
        }else{
            console.log("notworking")
        }
    }