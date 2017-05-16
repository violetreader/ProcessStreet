$(() => {

  var api_password = "API token with upload permission";
    var url = "Your video file URL";
    var requestData = jQuery.param({
      api_password: api_password,
      url: url
    });

  $.ajax({
    type:'POST',
    url: 'https://upload.wistia.com',
    data: requestData,
    contentType: 'application/x-www-form-urlencoded',
    cache: false,
    processData: false,
    success:function(data) {
      console.log(data);
      alert("Success!");
    },
    error: function(data) {
      console.log(data);
      alert("Error");
    }});

});



