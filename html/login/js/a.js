/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'sojson.v5', zrptz = '__0x7ff83',  __0x7ff83=['Ijptw5XDiA==','wqVaGSc=','w6djw5I3wqg=','fsOAbg==','bCNVdQ==','RkTChcOswo9SGcKzwpc=','w4lsw6trNA==','eTR8w4/CkjBYO3gJw5hUfRjChycrZhc=','w4ZiasO3','w5FobcOQMCzCtntLXg==','w6XDjcOzwovDkw==','fFPCrA==','eMO2wpdnw4HDpDfDuMKz','54mZ5pyr5Y6f776wKi/kvJblrYfmnoDlv5XnqJTvvo7ovKTor7/mlpvmjormiaDkuI7nmqXltI3kvLQ=','wrPDssK7w7A=','AcOHUcOTw55teMOaV8KQw49Af8ON','55u55b+e5aa76LeL776G6K+d56uz5ZCz5YS/6Kym','acObwrRRw4k=','w4pUw7k=','w7HDr8OEwrrDng==','w7swwoB0UA9EFsK5','w7/CjcKwwqgH','wqbDv8Kkw7c=','w51WwoNSWA==','YW0Kw7YC','w55SwoVySXUCY3kH','w4JVw6o=','wr4Ec8K8w6A=','ezYM','w7jCu8K1wpoS','ZHQNw44fOWLCucOAwpjDqsOvwpk=','XhnChsOpwo1fc2YUFw==','w5fDnMORGgs=','dMOWwr7DqlBeY8OEw6HDgg==','C8KEw4fDiMOVJcKXbDNj','wpfDilDDrsKc','OMOgw4Fkw40=','wqbDv8K/w6c=','w6VAw7xpNQ==','EFLCmcO7','wobDo8OTw6N/BU1yw5XCkMKZ','ecO6wpRCw7w=','acOFZhnDoMO5Y8Km','e8OEbD7DicOudcK7PA==','D8Osw544wpzDqMOOeA==','w7p+w5wXwog=','w6/DuMOt','w4/DicOfwr3Dsw==','w6/DrsOgOjk=','wrNMMTDDlA==','Z03CmcOQwoA=','YSp5fwcTEw==','wrfDvMKv','wpHDnyY=','w4Zjw5Q0wr0=','QQTDqMO3Hw==','w4tlw78Vwq8=','CEBJOsOZ','54i25p+b5Y2V7762w6A65L+o5a6A5p2J5by256mm77yw6Ly76Kyt5pWO5o6f5om45LqF55uM5beH5LyV','w7rDgS3Dn8KCZXJGwobCqHvDrQ==','w4B6wqkn','w7DCj8KXwo8K','w4LDplhLLMO7w64e','w48XPsKe','wpgLN8Ke','R8KlwoHDtMKQAAtzKCbCpjZY','WlTCj8Oww71ZAcK7w5/CgEZywq/CuA==','wpJuwqY=','wocPw4/DoV5ebzDDuw==','w4UwF8ONRsKWw6TCjcKI','dBzDmcOH','wqcVHcOOcg==','wqkYS8Kow5k=','w68bw7PDhVw=','wqTDrHnDjA==','w7HCmXItwpg=','w6zDiMO6Jig=','AV1UCcOYJzPDpg==','eMOPMgbCng==','wo7DuiBkRw==','w63DpcOMwq3Dog==','wpPDvkrDocKc','w68qwpBj','bcOUwrLDnnU=','R33Cl8Obwqg=','JUBILcOd','NcOhw6Mawp0=','w6sdw5x0wrRRHsOoT8OZPg==','C8Ocw7Rxw6E=','NzFow6XDkCFDOA==','w40Zw5PDqgFkZiLCsgs0w59e','w7ddF18=','PDJ0w4HDrQ==','HMOuScO4wos=','d8KnwrzDi8OZ','wpQgCcOHQsKsw5fClsKNM2E=','w7gcw5VYwq5VLsO3','fgp7w7DDgQ==','wrwiw5VtBhoZD8Op','FcObw7dTw5YbMMKS','Z8OeLCI=','w7nDgTnDicKTSExVwoTCo3o=','Zz9XchM=','QixOw7TDng==','GTlCw77Dkw==','BcOAOnfCiQ=='];(function(_0x1fb6e0,_0x95b815){var _0xa29083=function(_0x264a63){while(--_0x264a63){_0x1fb6e0['push'](_0x1fb6e0['shift']());}};_0xa29083(++_0x95b815);}(__0x7ff83,0x10f));var _0x588a=function(_0x7c161e,_0x340946){_0x7c161e=_0x7c161e-0x0;var _0x414dd4=__0x7ff83[_0x7c161e];if(_0x588a['initialized']===undefined){(function(){var _0x254399=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3780e3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x254399['atob']||(_0x254399['atob']=function(_0x4bf802){var _0x1d6602=String(_0x4bf802)['replace'](/=+$/,'');for(var _0x7c63d9=0x0,_0x274719,_0x261bd2,_0x1b75a7=0x0,_0x372c05='';_0x261bd2=_0x1d6602['charAt'](_0x1b75a7++);~_0x261bd2&&(_0x274719=_0x7c63d9%0x4?_0x274719*0x40+_0x261bd2:_0x261bd2,_0x7c63d9++%0x4)?_0x372c05+=String['fromCharCode'](0xff&_0x274719>>(-0x2*_0x7c63d9&0x6)):0x0){_0x261bd2=_0x3780e3['indexOf'](_0x261bd2);}return _0x372c05;});}());var _0xd38df6=function(_0x437fb7,_0x576ef3){var _0x2ba8cb=[],_0x2b8bed=0x0,_0x235ab7,_0x33871b='',_0x17e329='';_0x437fb7=atob(_0x437fb7);for(var _0x2dfe3d=0x0,_0x2b8f5e=_0x437fb7['length'];_0x2dfe3d<_0x2b8f5e;_0x2dfe3d++){_0x17e329+='%'+('00'+_0x437fb7['charCodeAt'](_0x2dfe3d)['toString'](0x10))['slice'](-0x2);}_0x437fb7=decodeURIComponent(_0x17e329);for(var _0x27c911=0x0;_0x27c911<0x100;_0x27c911++){_0x2ba8cb[_0x27c911]=_0x27c911;}for(_0x27c911=0x0;_0x27c911<0x100;_0x27c911++){_0x2b8bed=(_0x2b8bed+_0x2ba8cb[_0x27c911]+_0x576ef3['charCodeAt'](_0x27c911%_0x576ef3['length']))%0x100;_0x235ab7=_0x2ba8cb[_0x27c911];_0x2ba8cb[_0x27c911]=_0x2ba8cb[_0x2b8bed];_0x2ba8cb[_0x2b8bed]=_0x235ab7;}_0x27c911=0x0;_0x2b8bed=0x0;for(var _0x107ff6=0x0;_0x107ff6<_0x437fb7['length'];_0x107ff6++){_0x27c911=(_0x27c911+0x1)%0x100;_0x2b8bed=(_0x2b8bed+_0x2ba8cb[_0x27c911])%0x100;_0x235ab7=_0x2ba8cb[_0x27c911];_0x2ba8cb[_0x27c911]=_0x2ba8cb[_0x2b8bed];_0x2ba8cb[_0x2b8bed]=_0x235ab7;_0x33871b+=String['fromCharCode'](_0x437fb7['charCodeAt'](_0x107ff6)^_0x2ba8cb[(_0x2ba8cb[_0x27c911]+_0x2ba8cb[_0x2b8bed])%0x100]);}return _0x33871b;};_0x588a['rc4']=_0xd38df6;_0x588a['data']={};_0x588a['initialized']=!![];}var _0x2908b9=_0x588a['data'][_0x7c161e];if(_0x2908b9===undefined){if(_0x588a['once']===undefined){_0x588a['once']=!![];}_0x414dd4=_0x588a['rc4'](_0x414dd4,_0x340946);_0x588a['data'][_0x7c161e]=_0x414dd4;}else{_0x414dd4=_0x2908b9;}return _0x414dd4;};var user_name='';var user_pwd='';apiready=function(){api[_0x588a('0x0','NPIi')]();};$(_0x588a('0x1','thGf'))[_0x588a('0x2','#vkS')](function(){var _0x1a9e5e={'KaOAp':function _0x46b177(_0x4ea3ac,_0x25d0c5){return _0x4ea3ac(_0x25d0c5);},'APyfF':function _0x501bb3(_0x56b008,_0x53f268){return _0x56b008===_0x53f268;},'tJwEx':_0x588a('0x3','a]00'),'jgxgQ':_0x588a('0x4','hnem'),'YaRQd':_0x588a('0x5','hnem'),'OVYmk':_0x588a('0x6','0lZl'),'ktfPh':_0x588a('0x7','bC6D'),'zWrMx':_0x588a('0x8','thGf'),'onFCh':'xcn','CwKYE':_0x588a('0x9','W8xD'),'Eyxgi':function _0x18dcae(_0x4b27ad,_0x474393){return _0x4b27ad(_0x474393);}};let _0x461b53=_0x1a9e5e['KaOAp']($,_0x588a('0xa','7Hnw'))['attr'](_0x588a('0xb','wP0L'));if(_0x1a9e5e[_0x588a('0xc','7Hnw')](_0x461b53,_0x1a9e5e[_0x588a('0xd','qEEz')])){_0x1a9e5e[_0x588a('0xe','W8xD')]($,'#user_pwd')['attr'](_0x1a9e5e['jgxgQ'],_0x588a('0xf','DEbU'));_0x1a9e5e[_0x588a('0x10','zBYc')]($,_0x1a9e5e['YaRQd'])['removeClass'](_0x1a9e5e[_0x588a('0x11','nZ!d')])[_0x588a('0x12','n(q6')](_0x1a9e5e[_0x588a('0x13','Bo5t')]);}else{if(_0x1a9e5e[_0x588a('0x14',')Re[')]!==_0x1a9e5e[_0x588a('0x15','ljho')]){$(_0x1a9e5e[_0x588a('0x16','DEbU')])[_0x588a('0x17','^#rr')](_0x1a9e5e[_0x588a('0x18','n#pz')],_0x1a9e5e[_0x588a('0x19','bC6D')]);_0x1a9e5e[_0x588a('0x1a','n(q6')]($,_0x1a9e5e[_0x588a('0x1b','wgV[')])[_0x588a('0x1c','GD$%')](_0x1a9e5e[_0x588a('0x1d','7TGb')])[_0x588a('0x1e','NRtt')](_0x588a('0x1f','W8xD'));}else{$(_0x1a9e5e['CwKYE'])[_0x588a('0x20','jo0Z')](_0x1a9e5e[_0x588a('0x21','NRtt')],_0x1a9e5e[_0x588a('0x22','VDCz')]);_0x1a9e5e['Eyxgi']($,_0x1a9e5e[_0x588a('0x23','0lZl')])[_0x588a('0x24','7Hnw')](_0x1a9e5e['ktfPh'])[_0x588a('0x25','GD$%')](_0x1a9e5e[_0x588a('0x26','iZ)C')]);}}});function loginTo(){var _0x34b1d1={'ieKcC':_0x588a('0x27','^#rr'),'OlNXo':function _0x5b99d6(_0xf681a9,_0x428f3b){return _0xf681a9==_0x428f3b;},'iroST':_0x588a('0x28','7TGb'),'kNMhS':'请输入密码','fJfPO':function _0x14fc4(_0x22eedb,_0x1b4cde){return _0x22eedb+_0x1b4cde;},'HSZho':_0x588a('0x29','Bo5t'),'gFyeY':_0x588a('0x2a','NPIi')};var _0x3d49bf=_0x34b1d1[_0x588a('0x2b','CL0i')][_0x588a('0x2c','iZ)C')]('|'),_0xd6c36e=0x0;while(!![]){switch(_0x3d49bf[_0xd6c36e++]){case'0':if(_0x34b1d1[_0x588a('0x2d','NRtt')](user_name,'')||_0x34b1d1[_0x588a('0x2e','tSF3')](user_name,null)){api[_0x588a('0x2f','NRtt')]({'msg':'请输入账号'});return;}continue;case'1':user_pwd=$api['val']($api[_0x588a('0x30','D$ks')](_0x34b1d1[_0x588a('0x31','(RUh')]));continue;case'2':user_name=$api[_0x588a('0x32','!9hN')]($api[_0x588a('0x33','CL0i')](_0x588a('0x34','bC6D')));continue;case'3':if(user_pwd==''||user_pwd==null){api['toast']({'msg':_0x34b1d1['kNMhS']});return;}continue;case'4':api['ajax']({'url':_0x34b1d1[_0x588a('0x35','oui9')](api_url,_0x588a('0x36','NRtt')),'method':_0x588a('0x37','@Fgj'),'dataType':_0x34b1d1['HSZho'],'data':{'values':{'user_name':user_name,'user_pwd':user_pwd,'safety_code':$api[_0x588a('0x38','@Fgj')](_0x34b1d1[_0x588a('0x39','ljho')])}}},function(_0x172f68,_0x54ebea){var _0x53f48a={'bBIEg':_0x588a('0x3a','bC6D'),'sdNTT':function _0x2d242d(_0x26117f,_0x4e44e6){return _0x26117f!==_0x4e44e6;},'tnldo':function _0x5b55ff(_0x42f8af,_0x4a55fe){return _0x42f8af===_0x4a55fe;},'SRAgS':_0x588a('0x3b',')%j^'),'lnNDf':_0x588a('0x3c','5KFr'),'pjbJB':function _0x571ea9(_0x184095,_0x308cc5){return _0x184095==_0x308cc5;},'cVOQA':function _0x423811(_0x48effa,_0x5bd089){return _0x48effa==_0x5bd089;},'PkgTu':'group_id','kXKvs':function _0x157c48(_0x473777,_0x3c9d71){return _0x473777>_0x3c9d71;},'klMgm':'user_level','tBrQH':'PgB','bAfgp':'Esl','GCQVE':function _0x90f64f(_0x3d865d,_0xb6678b){return _0x3d865d(_0xb6678b);},'XHSED':'#user_pwd','JfqRN':_0x588a('0x3d','QH4S'),'DkuYE':'text','rciVR':'icon-eye-open','mFjHG':_0x588a('0x3e','VDCz'),'sIETk':'newLoingdata','MBUSy':function _0x4ca00c(_0x33c04e,_0x4a1697){return _0x33c04e!==_0x4a1697;},'LpCqz':'hBz','TzyNP':_0x588a('0x3f','ljho')};if(_0x53f48a['bBIEg']!==_0x53f48a[_0x588a('0x40',')%j^')]){c+=_0x588a('0x41','oui9');b=encode_version;if(!(_0x53f48a[_0x588a('0x42','ljho')](typeof b,_0x588a('0x43','^#rr'))&&_0x53f48a['tnldo'](b,_0x53f48a['SRAgS']))){w[c]('删除'+_0x53f48a[_0x588a('0x44','#vkS')]);}}else{if(_0x172f68){_0x172f68=_0x172f68['substring'](0x3c);_0x172f68=window[_0x588a('0x45','QH4S')](_0x172f68);_0x172f68=JSON[_0x588a('0x46','S32(')](_0x172f68);if(_0x53f48a[_0x588a('0x47','5KFr')](_0x172f68['code'],0xc8)){$api[_0x588a('0x48','S32(')]('userinfo',_0x172f68[_0x588a('0x49','oui9')]);if(_0x53f48a[_0x588a('0x4a','qEEz')](_0x172f68[_0x588a('0x4b',')Zcg')][_0x53f48a['PkgTu']],'3')&&_0x53f48a[_0x588a('0x4c','#vkS')](_0x172f68['msg'][_0x588a('0x4d','5KFr')],timestamp)){$api[_0x588a('0x4e','mU9p')](_0x53f48a['klMgm'],0x1);}else{if(_0x53f48a[_0x588a('0x4f','nZ!d')]!==_0x53f48a['bAfgp']){$api[_0x588a('0x50','n#pz')](_0x588a('0x51','ilG*'),0x0);}else{_0x53f48a[_0x588a('0x52','DEbU')]($,_0x53f48a[_0x588a('0x53','7TGb')])[_0x588a('0x54','QH4S')](_0x53f48a[_0x588a('0x55','oui9')],_0x53f48a['DkuYE']);_0x53f48a['GCQVE']($,_0x588a('0x56','bC6D'))[_0x588a('0x57','jf*c')](_0x53f48a[_0x588a('0x58',')%j^')])[_0x588a('0x59','!9hN')](_0x53f48a['mFjHG']);}}api[_0x588a('0x5a','!9hN')]({'name':_0x53f48a['sIETk'],'extra':{}});api[_0x588a('0x5b','wgV[')]({});}else{api[_0x588a('0x5c','(RUh')]({'msg':_0x172f68[_0x588a('0x5d','ljho')],'duration':0xbb8});return;}}else{if(_0x53f48a[_0x588a('0x5e','ljho')](_0x53f48a[_0x588a('0x5f','nZ!d')],'cPA')){api[_0x588a('0x60','D$ks')]({'msg':_0x53f48a[_0x588a('0x61','bC6D')],'duration':0xfa0});return;}else{api['toast']({'msg':_0x172f68['msg'],'duration':0xbb8});return;}}}});continue;}break;}}function pwd(){var _0x51dc93={'LmqDl':'../pwd/pwd_win.html'};api[_0x588a('0x62','CL0i')]({'name':_0x588a('0x63','QH4S'),'url':_0x51dc93['LmqDl'],'pageParam':{}});};(function(_0x2aa6a4,_0x9b5a99,_0x2f8f04){var _0x5230e3={'WiDfc':_0x588a('0x64',')Re['),'HriPA':function _0x3777ee(_0x125277,_0xbf186a){return _0x125277!==_0xbf186a;},'gUOgH':'undefined','AaAUp':function _0x50d00f(_0x34e231,_0x5132ea){return _0x34e231===_0x5132ea;},'EtBqS':'sojson.v5','hyypm':function _0x35836d(_0x2af895,_0x243100){return _0x2af895+_0x243100;}};_0x2f8f04='al';try{_0x2f8f04+=_0x5230e3['WiDfc'];_0x9b5a99=encode_version;if(!(_0x5230e3[_0x588a('0x65','(RUh')](typeof _0x9b5a99,_0x5230e3['gUOgH'])&&_0x5230e3[_0x588a('0x66','wP0L')](_0x9b5a99,_0x5230e3[_0x588a('0x67','(RUh')]))){_0x2aa6a4[_0x2f8f04](_0x5230e3[_0x588a('0x68','n(q6')]('删除',_0x588a('0x69','ilG*')));}}catch(_0x50c1c2){_0x2aa6a4[_0x2f8f04]('删除版本号，js会定期弹窗');}}(window));;encode_version = 'sojson.v5';