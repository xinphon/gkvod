var dwzapi = '';
    var host = '';
    var pic_num = 0;
    var title = '';
    var description = '';
    var img = '';
    var mySwiper;
apiready = function(){
    GetContent();       
};
	

function GetContent() {
    dwzapi = app_config.host+'/index.php/user/reg.html?uid='+userinfo['user_id'];  //短网址
    host = app_config.host;  //当前域名
    app_Invitation_slogans = app_config.app_Invitation_slogans;  //邀请标语
        var ret=app_config.poster_im.r;
        var count = ret.length;
        var ccc = 0;
        var imgs = [];
        var timestamp = new Date().getTime()
        for (var i in ret) {
            api.download({
                url: ret[i], 
                savePath: 'fs://' + timestamp + i + '.png',
                report: true,
                cache: true,
                allowResume: true
            }, function (ret, err) {
                if (ret.state == 1) {
                    imgs.push(ret.savePath);
                    ccc++;
                    if (ccc >= count) {
                        var _html = '';
                        for (var j in imgs) {
                            _html += '<div class="swiper-slide text-center">\
                            <div class="box" id="Img'+ j + '">\
                                <img class="lazy" data-src="' + imgs[j] + '" src="' + imgs[j] + '"  style="border-radius: 20px; height:auto;width:100%"/>\
                                <div class="my_code"></div>\
                            </div>\
                        </div>';
                        }
                        $('.swiper-wrapper').html(_html);
                        $('.my_code').qrcode(dwzapi);
                        mySwiper = new Swiper('.swiper-container', {
                            pagination: '.swiper-pagination',
                            effect: 'coverflow',
                            grabCursor: true,
                            centeredSlides: true,
                            slidesPerView: 'auto',
                            coverflow: {
                                rotate: 50,
                                stretch: 0,
                                depth: 800,
                                modifier: 1,
                                slideShadows: true
                            }
                        })
                        api.hideProgress();
                        // api.toast({
                        //     msg: "加载成功",
                        //     duration: 2000,
                        //     location: 'middle'
                        // });
                        
                    }
                }
            });
        };  

};


function shareimage(img) {
    var sharedModule = api.require('shareAction');
    sharedModule.shareImage({
        text: app_config.appname,
        images: [img]
    });

};
   

   

function CanvasImg() {
    pic_num = mySwiper.activeIndex;
    var canvas2 = document.createElement("canvas");
    var _canvas = $('.swiper-slide').eq(0);
    var w = parseInt(_canvas.width);
    var h = parseInt(_canvas.height);
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    canvas2.width = w * 2;
    canvas2.height = h * 2;
    canvas2.style.width = w + "px";
    canvas2.style.height = h + "px";
    //可以按照自己的需求，对context的参数修改,translate指的是偏移量
    //  var context = canvas.getContext("2d");
    //  context.translate(0,0);
    var context = canvas2.getContext("2d");
    context.scale(2, 2);
    html2canvas(document.querySelector('#Img'+pic_num), { canvas: canvas2 }).then(function (canvas) {
        //document.body.appendChild(canvas);
        //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
        base64Str = canvas.toDataURL('image/jpeg').replace("data:image/jpeg;base64,", "");
        var trans = api.require('trans');
        trans.saveImage({
            base64Str: base64Str,
            imgPath: "fs://share/",
            imgName: pic_num+'.jpg',
        }, function (ret, err) {
            if (ret.status) {
                img="fs://share/"+ pic_num+'.jpg';
                shareimage("fs://share/"+ pic_num+'.jpg');
            } else {
                api.toast({
                    msg: '图片初始化失败',
                    duration: 2000,
                    location: 'bottom'
                });
            }
        });

    });
}
	
function savePicture(){
    api.toast({
        msg:'二维码已保存到相册',
        duration: 5000,
        location : 'middle' 
    })
    
    api.saveMediaToAlbum({
        path: img
        }, function(ret, err) {
        
    });
}	