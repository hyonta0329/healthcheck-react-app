import "";

function createissue(){
        //ここでAPIを叩いてレスポンスをもらうべき！
        //POST用の最低限の変数を用意。後でHTMLフォームでユーザーがインプットするようにコードを改変
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var createdtime = date.getHours() + ':' + date.getMinutes();
        console.log(createdtime)
        if (month.length === 1){
          month = '0' + month;
        }else{
          console.log('zero');
        }
        var day = date.getDate();
        var created = year + '-' + month + '-' + day + '-' + createdtime;

        //20191014 ペイロード用にデータを入力。あとはこれを使ってPOSTするようAPI Gatewayをいじってバグ直しておしまい
        $.ajax( {
          contentType: "application/json",
          type: 'POST',
          url: "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+$('#name').val(),
          processdata: false,
          dataType: 'json',
          data: JSON.stringify({
            'created' : created,
            'username' : $('#name').val(),
            'title' : $('#int').val() + '.' + $('#float').val(),
            'Issuetype' : 'health',
            'Status' : 'NS',
            'timezone' : 'health',
            'Due' : createdtime.toString(),
            'Comment' : $('#comment_ticket').val(),
            'EstTime' : 'None',
            'Priority' : 'None'
          }),
          headers: {
            'Authorization': authtoken, 
          },
          success: function(data){
            console.log(data);
            updatebrowser();
          },
          error: function(data){
            console.log('error', data);
            }                
          })
        }

