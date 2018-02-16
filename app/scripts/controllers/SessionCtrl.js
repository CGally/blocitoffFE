(function() {
    function SessionCtrl(User) {
      var users = User.query(function() {
        console.log(users);
      });
      this.createUser = function(name, pass, confirm) {
          this.user = new User();
          this.user.email = name;
          this.user.password = pass;
          this.user.password_confirmation = confirm;
          User.save({user: this.user}, function() {
            alert("Saved");
          });
      };
      this.setUser = function(email, password) {
        var user = User.sign_in({ user_login: {email: email, password: password }});
        console.log('user', user);
      };
    }

    angular
        .module('blocItOffFE')
        .controller('SessionCtrl', ['User', SessionCtrl]);
})();
