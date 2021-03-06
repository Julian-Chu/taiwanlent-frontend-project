const Email =  function(email){
    var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const Phone = function(phone){
  var re = /^\+\d{1,3}-\d{8,13}/;
  return re.test(phone)
}

export default {
  Email,
  Phone
}