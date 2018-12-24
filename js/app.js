//Firebase初期設定
var config = {
    apiKey: "自分のfirebaseのAPI KEY",
    authDomain: "自分のfirebaseのauthDomain",
    databaseURL: "自分のfirebaseのdatabaseURL",
    projectId: "自分のfirebaseのprojectId",
    storageBucket: "自分のfirebaseのstorageBucket",
    messagingSenderId: "自分のfirebaseのmessagingSenderId"
};
firebase.initializeApp(config);

//DOM取得
var inputarea = document.getElementById('input-area');
var newpage = document.getElementById('newpage');
var newuser = document.getElementById('newuser');
var login = document.getElementById('login');
var logout = document.getElementById('logout');
var info = document.getElementById('info');
//var headertitle = document.getElementById('header-title');
//var headertitle2 = document.getElementById('header-title2');

//新規登録
newuser.addEventListener('click', function(e){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
        alert('登録できません('+ error.message +')');
    });
});

//ログイン処理
login.addEventListener('click', function(e){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    //window.location.href = '../index.html';

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        alert('ログインできません('+ error.message +')')
    });
});

//ログアウト処理
logout.addEventListener('click', function(){
    firebase.auth().signOut();
});

//認証状態の確認
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        loginDisplay();
    }else{
        logoutDisplay();
    }
});

function loginDisplay(){
    logout.classList.remove('hide');
    newpage.classList.remove('hide');
    inputarea.classList.add('hide');

}

function logoutDisplay(){
    logout.classList.add('hide');
    newpage.classList.add('hide');
    inputarea.classList.remove('hide');

}