var Authh = /** @class */ (function () {
    function Authh() {
        document.querySelector('body').style.display = 'none';
        var auth = localStorage.getItem('auth');
        this.validateAuth(auth);
    }
    Authh.prototype.validateAuth = function (auth) {
        if (auth != '1') {
            window.location.replace("./login-sign.htm");
        }
        else {
            document.querySelector('body').style.display = 'block';
        }
    };
    Authh.prototype.logOut = function () {
        localStorage.removeItem('auth');
        window.location.replace("./login-sign.htm");
    };
    return Authh;
}());
