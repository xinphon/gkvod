  var dwzapi = '';
  var host = '';
  apiready = function(){
    api.parseTapmode();
	share(); 
		// 网络状态
		api.addEventListener({
			name:'offline'
		}, function(ret, err){        
			api.toast({
			msg : '网络连接异常',
			duration : 5000,
			location : 'middle' 
			}); 
		});

		api.addEventListener({
			name:'online'
		}, function(ret, err){        
			  api.toast({
			  msg : '已经连接网络',
			  duration : 2000,
			  location : 'middle' 
			  });	  
	    share();  //获取数据
		});	
  }

function share(){
    dwzapi = app_config.host+'/index.php/user/reg.html?uid='+userinfo['user_id'];  //短网址
    host = app_config.host;  //当前域名
    app_Invitation_slogans = app_config.app_Invitation_slogans;  //邀请标语
    user_share_ma = userinfo['user_id'];  //邀请码
    Registered_Gift_Time.innerHTML = app_config.reg_givevip+' <span style="font-size: 0.8rem;margin-left: 10px;">天</span>';  //注册赠送时间
    Invitation_points.innerHTML = app_config.invite_reg_points;  //邀请赠送积分 
}

//////////二维码//////////
function erweima(){
var dialogBox = api.require('dialogBox');
dialogBox.webView({
    tapClose: false,
    path:  'http://qr.liantu.com/api.php?bg=ffffff&fg=5f1bea&gc=a241cf&text='+dwzapi,
    texts: {
        title: '专属邀请码：'+user_share_ma,
        leftBtnTitle: '关闭',
        rightBtnTitle: '保存相册'
    },
    styles: {
        bg: '#fff',
        corner: 5,
        w: 300,
        h: 380,
        title: {
            h: 44,
            size: 14,
            color: '#000'
        },
        upDividingLine: {
            width: 0.2,
            color: '#696969'
        },
        webView: {
            h: 300,
            bg: '#fff',
        },
        downDividingLine: {
            width: 0.2,
            color: '#696969'
        },
        left: {
            bg: 'rgba(0,0,0,0)',
            color: '#007FFF',
            size: 12
        },
        right: {
            bg: 'rgba(0,0,0,0)',
            color: '#007FFF',
            size: 12
        }
    }
}, function(ret) {
    if (ret.eventType == 'left') {
        var dialogBox = api.require('dialogBox');
        dialogBox.close({
            dialogName: 'webView'
        });
    }else {
        var dialogBox = api.require('dialogBox');
        dialogBox.close({
            dialogName: 'webView'
        });
        savePicture();   //保持图片
        
    }
});
}
//////////二维码 //////////

function savePicture(){
    var timestamp = new Date().getTime()
    api.download({
        path: 'http://qr.liantu.com/api.php?bg=ffffff&fg=5f1bea&gc=a241cf&text='+dwzapi,
        savePath: 'fs://PerfectNetService'+timestamp+'.jpeg',
        report: true,
        cache: true,
        allowResume: true
    }, function(ret, err) {
        if(ret){
            api.toast({
                msg:'二维码已保存到相册',
                duration: 5000,
                location : 'middle' 
            })
        }
        api.saveMediaToAlbum({
            path: 'fs://PerfectNetService'+timestamp+'.jpeg'
        }, function(ret, err) {
            
        });
    });
}
		
		
//////////复制分享链接 //////////
function copySet(){
api.ajax({
    url: 'http://suo.im/api.htm?format=json&url='+dwzapi+'&key='+app_config.suo_key+'&expireDate=2050-01-01',
    method: 'get'
},function(ret, err){
    if (ret) {
        var clipBoard = api.require('clipBoard');
        clipBoard.set({
            value: '【'+app_config.appname+'】：'+app_Invitation_slogans+'：'+ret.url,  
        }, function(ret, err) {
            if (ret) {
                api.toast({
                msg: '邀请连接已复制',
                duration: 2000,
                location : 'middle' 
            }); 
                api.hideProgress();
            } else {
            }
        });
    } else {
        var clipBoard = api.require('clipBoard');
        clipBoard.set({
            value: '【'+app_config.appname+'】：'+app_Invitation_slogans+'：'+dwzapi
        }, function(ret, err) {
            if (ret) {
                api.toast({
                msg: '邀请连接已复制',
                duration: 2000,
                location : 'middle' 
            }); 
                api.hideProgress();
            } else {

            }
        });

    }
});
}


//////////复制分享链接 //////////


	


	
	
function toshare_poster(){
    api.openWin({
        name: 'share_poster',
        url: '../share_poster/share_poster_win.html', 
    });
}	
	