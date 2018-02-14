Vue: component ('head', {
template:'<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Wallet demo</title><link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css"></head>>',
data: function(){
    return{
        login: 'login',
        registration: 'registration'
    }
}
});

  Vue: component ('menu', {
    template:'<body class="container"><header><nav class="navbar navbar-expand-lg navbar-dark bg-primary"><a class="navbar-brand" href="#"><%=title%></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style=""><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarColor01"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/login">Login</a></li><li class="nav-item"><a class="nav-link" href="/registration">Registration</a></li></ul><form class="form-inline my-2 my-lg-0" method="POST" action = "/logout"><button class="btn btn-outline-warning" type="submit">Logout</button></form></div></nav></header><br>',
    data: function(){
        return{
            login: 'login',
            registration: 'registration'
        }
    }
    });
    
    new Vue({
        el: '#app',
        data: {},
      })