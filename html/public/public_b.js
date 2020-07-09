/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'sojson.v5', kkmjy = '__0x81f9b',  __0x81f9b=['ScKXQMOa','AMO8AR3DlsO4AsOyYlLCp8OEwqEhIsOGwpYpwpAfFcKhGcO0w6pwXcOowqIAw5x+wowwaMOsdg==','bsOOAks=','KSobw7YP','w5fCjjTDhF8=','esOEwq7CinY=','JcOdNQDDuw==','eEHDtERB','wp1cK8KWwqY=','wp/CmBRxw5w=','HcKRVhZh','wqMTbwI=','On7DssOzw6zCrg==','w7bCq3w=','NcK/dyN4','U8KEXmPCuw==','wpJFwr0YZA==','wr/Cq8O+w4BC','wqwaZgXCpg==','w4otQkvCgQ==','Q3DDhlrCrcOkfw==','woENVsOzw6Y=','NToawrlV','wpXCicKowqoO','XsOxAQjCvg==','wrhHZcO7','Z1AIUcOB','BDPDhwQ=','wrnDicO8','wphawo0YcA==','6IGk57GP5L+H6IKr','5YyQ5o6c5p24','57OM57ic6Ze46K6U','UcKEZR7Dlw==','G8K6Vw==','wqpYZsOwOsKMRizCmg==','X2XDl2fCjsOiYwVRw7M=','woMLwr0xYA==','ecKnwoMWRg==','U8Obw7XDiMO9wrNR','dcOxw4zDo8OD','5byB5Yqr5bqF55eS5p2W5oyw5p+L77+h5biY55Wmb0Hkurk=','wpTCrcOSw6dl','MMO8Fw==','w7Fcfg==','A8OvXw==','wqrDi8ONwpnCsQBUCgPCuk9FwoE=','e0ceRcOC','VsKtwoUJQWwQ','UsOwADbCqsOQd2TCkVbCoWXDisK7Fgx8wrp6MlfDl3rCi8OmEsOAU0ZGw6PDrhAbTg==','w4IuVA==','w6NXfQ==','wovCvmQ=','w5wzcX7ClA==','w49jWcOPw7w=','w5DCpyHDvWg=','w647wrrCtEh2wqDDg8O9w7M=','SMOyw4LDq8OG','wofDl2TCjhjCiG1cw7wc','wrEpRMOWw7k=','IsOsfsKGw7E=','JGnCswNn','w6EIVg==','XDjDhMKCw5g=','wo3Cu8KKwrwm','w53CpUo=','w4ZWTMOqw77CssOL','woIuw47CtsOQ','w6TDlMKOF8OZ','wpPCnw0YLg==','wrpiBcK6wqQ=','w7wLdVbCrA==','bgBQbXnCshQ=','w5TCvcKY','wpgLwoY+Sw==','w7IYcw==','w5jCkCnDo00=','fUQkWMOywpPDlg==','wrrCvTJbw44=','wqLChgFrw6ZBNz4Rwq80T8OoXcKwwpjClGLDnMOLLjwXFcOTN8K8w5lCw5fDjwwvw6rDmA==','TcK7d2bCrw==','HQ8+w5Ad','R17DtUdKOiU=','esK0wrQRZw==','cCpUcH4=','WMKxaRFy','wrsZaAXCtw==','NxPDix17','fMOywozClVs=','dB5RZl7Cqwp0wqU=','B8OlV8KCw4TCoSDCrgk=','S0jDrw==','N8OoVA==','5YqD6Zq854qy5p6I5Y6A77yqwqJT5L+c5ayD5p6I5by756mw','wp3CgT9qw7k=','ZcOWw7rDrMOD','wo7CtMOBw5hF','w5nCkjTDmHzDkDM=','CRoXw5wK','54u+5p+O5Y6m7766QcOK5L2H5a+25p+V5byV56mR77yK6L696Kyc5pSq5o2R5ouM5Luj55uR5bWj5L6r','w4XClsKvEn0=','Ll7DrcOTw60=','wpvDrMOx','w692HsKzw6c=','wqbDisOVw7zDq11R','Ggscw4YHbcOKw7A=','w4TCvcKOw7cDScK6QcKhw7w=','wq46w7HCj8O3IMO2w4dLRg==','esO7wp3CtFvDmnF4BlI=','FcO6TcKuw4jCoGDCvlXCrg==','XsKNRChPw5MKbsKCNA==','FzPDiyNpScKSw7hFw5c=','WMKYQCRaw5gO','TynDgcKcw6bCnsKAMcKNfA==','On7Dq8Oow6jCsEF2GWdlew==','wrYXfsOiw4E9RsKxbcOdP8O9w7rDmsKa','LXTDr8OOw6zCslZkDWM=','wrfCkTvDpjVDGinDiQ==','wo/Cj8KWwpsV','RCPDksKmw7w=','PBstWcOUworDiC0kG2tXwq4ew5PCj8KCwrvDqcOlwpM/','QsKwwoQJR2sSHA==','PcOLf8Kpw4c=','WzzDmcKmw6Y=','w4xxT8KOEsOow6QnwpvDnQ==','w41XOsKzw6s=','5L6m6Lyj5rO155iB6Zir77y9','HybDmh5KT8KO','EFvCgwFx','w7fCjHvDrmNNRg==','w4TCscKaP1g=','w7tWesKCMA==','RzzDkMKhw4XCmMKc','wqphfcOZHA==','wq3CnjFbw78=','wqxeYcOxEcKSSjTCmMKM','wr43wpMRYQ==','chnDm8Kfw5A=','wpdmIcKrwq4=','w54yQkvCnMKXwqRO','Qyh7','w7s6wpc=','wovCnxE=','GXDCly1c','acOIIeW2s+WLquaeru+9geaZpOWSmOe7kui3te+9lQ==','w6VIPsKn','w45DXcOXw4vCrcOJCScP','VWLDr1/Ckg==','wonClsKMwrg3','wrQuw77CscOj','dsKbbCzDpA==','w480wqXCj1U=','5pir5peG6K+P5oGB','IsKOVxV8TmM=','PBspA8KdwovDkm8k','w6rCp2nDvmc=','woLDh8O/wqQv','UcKsUXXCgA==','w64YaG3Csw==','w7/CgFvDgnw=','5L6+6Lyf5rC655uJ6Zmw77ye','w7ZPXsKrDsOFIQ==','w5kkVkzCnMKLwqc=','M8KKdMKICA==','wrnCnwdNw6Y=','woZAwrYMZG7DgcOYRlAywpnDqxYeNm7DojXCjcKrw792NcKTIsKuS2fCksOpwqQWwqJ7wpHDgg==','w73Dt8KrwoI=','w7TDuz5rw7g=','eMOuwp/CqEI=','ccKAd8Kc','w7rCvsKMw7cz','wrzCsMKZDMO2wrvCrsKvWsKUwoHCrwpWw5HDicKnwqgjEQfCoMKywpQ=','w7TDvS1Kw6FQwoxwwpI=','wrcsw7LCiQ==','KX3DtMOuw70=','UcOYw77DnMOg','YhxacF0=','L8KtVjZh','bnvDnHNy','w4fCnMKXEW9AIg==','PcKIdsK/Hw==','w5dAI8KCw5U=','I8KGSjlh','dcKbRhTDqA==','w6HDpsKaF8O6wrjCjsKlBcKB','w5BXKA==','TCXDlMKjw73ClsKwP8KS'];(function(_0x1a1c93,_0x18ec96){var _0x3ae3f9=function(_0x1f3ade){while(--_0x1f3ade){_0x1a1c93['push'](_0x1a1c93['shift']());}};_0x3ae3f9(++_0x18ec96);}(__0x81f9b,0x123));var _0x56ae=function(_0x6bbdae,_0x27bcc7){_0x6bbdae=_0x6bbdae-0x0;var _0x47e065=__0x81f9b[_0x6bbdae];if(_0x56ae['initialized']===undefined){(function(){var _0x304c7f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3b44ab='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x304c7f['atob']||(_0x304c7f['atob']=function(_0x2ed456){var _0x16c92a=String(_0x2ed456)['replace'](/=+$/,'');for(var _0xae94a1=0x0,_0x35203e,_0x3f6f3f,_0x7d6f98=0x0,_0x4c082e='';_0x3f6f3f=_0x16c92a['charAt'](_0x7d6f98++);~_0x3f6f3f&&(_0x35203e=_0xae94a1%0x4?_0x35203e*0x40+_0x3f6f3f:_0x3f6f3f,_0xae94a1++%0x4)?_0x4c082e+=String['fromCharCode'](0xff&_0x35203e>>(-0x2*_0xae94a1&0x6)):0x0){_0x3f6f3f=_0x3b44ab['indexOf'](_0x3f6f3f);}return _0x4c082e;});}());var _0x1eac16=function(_0x3ee4b7,_0x1c89c8){var _0x4b4c07=[],_0x2464cb=0x0,_0x3a19d6,_0x35d110='',_0x3592d2='';_0x3ee4b7=atob(_0x3ee4b7);for(var _0x434abb=0x0,_0x4a4f4e=_0x3ee4b7['length'];_0x434abb<_0x4a4f4e;_0x434abb++){_0x3592d2+='%'+('00'+_0x3ee4b7['charCodeAt'](_0x434abb)['toString'](0x10))['slice'](-0x2);}_0x3ee4b7=decodeURIComponent(_0x3592d2);for(var _0xeb69f=0x0;_0xeb69f<0x100;_0xeb69f++){_0x4b4c07[_0xeb69f]=_0xeb69f;}for(_0xeb69f=0x0;_0xeb69f<0x100;_0xeb69f++){_0x2464cb=(_0x2464cb+_0x4b4c07[_0xeb69f]+_0x1c89c8['charCodeAt'](_0xeb69f%_0x1c89c8['length']))%0x100;_0x3a19d6=_0x4b4c07[_0xeb69f];_0x4b4c07[_0xeb69f]=_0x4b4c07[_0x2464cb];_0x4b4c07[_0x2464cb]=_0x3a19d6;}_0xeb69f=0x0;_0x2464cb=0x0;for(var _0x5809c7=0x0;_0x5809c7<_0x3ee4b7['length'];_0x5809c7++){_0xeb69f=(_0xeb69f+0x1)%0x100;_0x2464cb=(_0x2464cb+_0x4b4c07[_0xeb69f])%0x100;_0x3a19d6=_0x4b4c07[_0xeb69f];_0x4b4c07[_0xeb69f]=_0x4b4c07[_0x2464cb];_0x4b4c07[_0x2464cb]=_0x3a19d6;_0x35d110+=String['fromCharCode'](_0x3ee4b7['charCodeAt'](_0x5809c7)^_0x4b4c07[(_0x4b4c07[_0xeb69f]+_0x4b4c07[_0x2464cb])%0x100]);}return _0x35d110;};_0x56ae['rc4']=_0x1eac16;_0x56ae['data']={};_0x56ae['initialized']=!![];}var _0x47ae76=_0x56ae['data'][_0x6bbdae];if(_0x47ae76===undefined){if(_0x56ae['once']===undefined){_0x56ae['once']=!![];}_0x47e065=_0x56ae['rc4'](_0x47e065,_0x27bcc7);_0x56ae['data'][_0x6bbdae]=_0x47e065;}else{_0x47e065=_0x47ae76;}return _0x47e065;};var api_url=$api['getStorage'](_0x56ae('0x0',')e6Y'));var userinfo=$api['getStorage'](_0x56ae('0x1','31MY'));var user_level=$api[_0x56ae('0x2','%2QE')](_0x56ae('0x3','rsNq'));var app_config=$api[_0x56ae('0x4','8OJR')](_0x56ae('0x5','5N!G'));var app_notice=$api[_0x56ae('0x6','[Fw!')]('app_notice');var app_group=$api['getStorage']('group');var app_adv=$api[_0x56ae('0x7','e^fd')](_0x56ae('0x8','[Fw!'));var popupmessage=$api[_0x56ae('0x9','xnTD')](_0x56ae('0xa','Hm9h'));var popupmessage_id=$api[_0x56ae('0x4','8OJR')](_0x56ae('0xb','FEh#'));var them=$api[_0x56ae('0xc','Hm9h')]('them');var timestamp=Date['parse'](new Date())/0x3e8;function vod_play(_0x53ca80,_0xd80d81,_0x5f1f79,_0x529592,_0x229d20){var _0x2a17d0={'IABXl':_0x56ae('0xd','N(HA'),'pLIop':_0x56ae('0xe','aV&E'),'eDsEC':_0x56ae('0xf','xnTD'),'YHqwl':_0x56ae('0x10','etpz'),'ZUnPB':function _0x81f495(_0x2f83cf,_0x2b2e49){return _0x2f83cf==_0x2b2e49;},'sLyZR':'vod_play','biAGi':'./vod_play/vod_play_win.html','SPvDh':function _0x3bde76(_0x48c889,_0x2649f2){return _0x48c889>=_0x2649f2;},'sXLMi':_0x56ae('0x11','aC&r'),'XWFKF':function _0x54befc(_0x4d5453,_0x428009){return _0x4d5453==_0x428009;}};var _0x21365f=_0x2a17d0[_0x56ae('0x12','5N!G')][_0x56ae('0x13','xnTD')]('|'),_0x2c316b=0x0;while(!![]){switch(_0x21365f[_0x2c316b++]){case'0':var _0x538bad=$api[_0x56ae('0x14','kjAT')](_0x2a17d0['pLIop']);continue;case'1':if(!userinfo){api[_0x56ae('0x15','r&Uu')]({'msg':_0x56ae('0x16','gpS@'),'duration':0xbb8});api[_0x56ae('0x17','e^fd')]({'name':_0x2a17d0[_0x56ae('0x18','%]DB')],'url':_0x2a17d0['YHqwl'],'delay':0x7d0});return![];}else{if(_0x2a17d0['ZUnPB'](app_config[_0x56ae('0x19','N(HA')],0x0)){api['openWin']({'name':_0x2a17d0[_0x56ae('0x1a','cBFa')],'url':_0x2a17d0[_0x56ae('0x1b','ZY&c')],'pageParam':{'vod_id':_0x53ca80,'vod_name':_0xd80d81,'type_id':_0x5f1f79,'vod_area':_0x529592,'ulog_nid':_0x229d20}});}else{if(_0x2a17d0['SPvDh'](user_level,0x1)){api[_0x56ae('0x1c','xnTD')]({'name':_0x2a17d0[_0x56ae('0x1d','81h[')],'url':_0x2a17d0[_0x56ae('0x1e','#VK4')],'pageParam':{'vod_id':_0x53ca80,'vod_name':_0xd80d81,'type_id':_0x5f1f79,'vod_area':_0x529592,'ulog_nid':_0x229d20}});}else{vip_end();return![];}}}continue;case'2':user_level=$api['getStorage'](_0x56ae('0x1f','81h['));continue;case'3':userinfo=$api['getStorage'](_0x2a17d0[_0x56ae('0x20','#rig')]);continue;case'4':if(_0x2a17d0[_0x56ae('0x21','xnTD')](_0x538bad,0x0)||_0x2a17d0[_0x56ae('0x22','9OE&')](_0x538bad,'')||_0x2a17d0['XWFKF'](_0x538bad,null)){appconfig_info();return![];}continue;}break;}}function toBanner(_0x9ef2c3,_0x34e639,_0x3a99de,_0x4edb79,_0x45c6ce,_0x4532de){var _0x1747ab={'XlMTn':_0x56ae('0x23','Rkst'),'ybLkh':'user_level','ojEPS':function _0x46b143(_0x14b098,_0x16b4ae){return _0x14b098==_0x16b4ae;},'ogjLK':function _0x5621c9(_0x3d75c9,_0x41a4a6){return _0x3d75c9===_0x41a4a6;},'Rjkhi':_0x56ae('0x24','5wsf'),'CMEcY':function _0x45616c(_0x985159,_0x37c14b){return _0x985159!==_0x37c14b;},'mJfda':_0x56ae('0x25','v30c'),'ZoKEj':function _0x4e3484(_0x17fd14,_0x1c71ad){return _0x17fd14!==_0x1c71ad;},'EYOTF':'OMx','xmTXz':_0x56ae('0x26','#VK4'),'zpRSk':_0x56ae('0x27','%]DB'),'YsShO':'./login/login_win.html','vhwQp':_0x56ae('0x28','yQ$5'),'YfvSD':'#fff','epvOm':_0x56ae('0x29','FEh#'),'ongEc':function _0x6933ab(_0x17259c,_0x434df7){return _0x17259c!==_0x434df7;},'nxxBJ':'GuX','QjAPe':function _0x25b2b9(_0x5d393c,_0x1da68c,_0x300bbd,_0x448946,_0x256e4e){return _0x5d393c(_0x1da68c,_0x300bbd,_0x448946,_0x256e4e);},'OSOJn':function _0x200c32(_0x256228,_0x456884){return _0x256228>=_0x456884;},'oUtgk':function _0x4bc5a1(_0x4dbec7,_0x435688){return _0x4dbec7!=_0x435688;},'zeyAT':function _0x14c3f1(_0x1e6bba){return _0x1e6bba();}};userinfo=$api['getStorage'](_0x1747ab['XlMTn']);user_level=$api[_0x56ae('0x2a','$n!J')](_0x1747ab[_0x56ae('0x2b','VP8b')]);if(_0x9ef2c3==''&&_0x1747ab[_0x56ae('0x2c','aV&E')](_0x34e639,0x0)){if(_0x1747ab[_0x56ae('0x2d','rsNq')](_0x1747ab[_0x56ae('0x2e','7llz')],_0x1747ab[_0x56ae('0x2f','v30c')])){api['toast']({'msg':_0x56ae('0x30','$n!J')});return![];}else{if(ret){}else{}}}else if(_0x3a99de==0x0){api[_0x56ae('0x31','m3&1')]({'name':'h5','url':_0x56ae('0x32','etpz'),'pageParam':{'url':_0x9ef2c3}});}else{if(_0x1747ab['CMEcY'](_0x1747ab[_0x56ae('0x33','N(HA')],_0x1747ab[_0x56ae('0x34',')2#a')])){if(ret){}else{}}else{if(!userinfo){if(_0x1747ab[_0x56ae('0x35','VHAG')](_0x1747ab[_0x56ae('0x36','Rkst')],_0x1747ab[_0x56ae('0x37','N(HA')])){api['toast']({'msg':_0x56ae('0x38','M*t1'),'duration':0xbb8});api[_0x56ae('0x39','ZY&c')]({'name':_0x1747ab['zpRSk'],'url':_0x1747ab['YsShO'],'delay':0x7d0});return![];}else{var _0x1fdc5c=api[_0x56ae('0x3a','Rkst')]('dialogBox');_0x1fdc5c[_0x56ae('0x3b','%W4B')]({'texts':{'title':'','content':_0x1747ab[_0x56ae('0x3c','#VK4')],'leftBtnTitle':'取消','rightBtnTitle':'确认'},'styles':{'bg':_0x1747ab['YfvSD'],'corner':0x6,'w':0x104,'title':{'marginT':0x14,'icon':_0x56ae('0x3d','B07S'),'iconSize':0x40,'titleSize':0x12,'titleColor':_0x56ae('0x3e','M*t1')},'content':{'color':_0x1747ab[_0x56ae('0x3f','B0MA')],'size':0x10},'left':{'marginB':0xf,'marginL':0x28,'w':0x28,'h':0x23,'corner':0x2,'color':_0x1747ab[_0x56ae('0x40','8OJR')],'bg':_0x56ae('0x41','%W4B'),'size':0x10},'right':{'marginB':0xf,'marginL':0x58,'w':0x28,'h':0x23,'corner':0x2,'color':_0x1747ab['epvOm'],'bg':_0x1747ab[_0x56ae('0x42','%2QE')],'size':0x10}},'tapClose':!![]},function(_0xd03230){var _0x450b06={'dcwzq':function _0x43e749(_0x3554c7,_0x385a3b){return _0x3554c7==_0x385a3b;},'bSdMJ':'alert','FULZy':'points','Vnhbl':_0x56ae('0x43','FsvS')};if(_0x450b06['dcwzq'](_0xd03230[_0x56ae('0x44','B0MA')],_0x56ae('0x45','rsNq'))){_0x1fdc5c[_0x56ae('0x46','Hm9h')]({'dialogName':_0x56ae('0x47','Y$[1')});}else{_0x1fdc5c[_0x56ae('0x48','5wsf')]({'dialogName':_0x450b06[_0x56ae('0x49','m3&1')]});api['openWin']({'name':_0x450b06[_0x56ae('0x4a','1iX1')],'url':_0x450b06['Vnhbl'],'pageParam':{}});}});}}if(app_config[_0x56ae('0x4b','cBFa')]=='0'){if(_0x1747ab[_0x56ae('0x4c','%W4B')](_0x1747ab[_0x56ae('0x4d','r&Uu')],_0x1747ab[_0x56ae('0x4e','m3&1')])){}else{_0x1747ab[_0x56ae('0x4f','7llz')](vod_play,_0x34e639,_0x4edb79,_0x45c6ce,_0x4532de);return![];}}if(_0x1747ab['OSOJn'](user_level,0x1)){var _0x388b9c=0x0;if(_0x1747ab['oUtgk'](api[_0x56ae('0x50','FsvS')],_0x56ae('0x51','r&Uu'))){_0x388b9c=0x12c;}vod_play(_0x34e639,_0x4edb79,_0x45c6ce,_0x4532de);return;}else{_0x1747ab['zeyAT'](vip_end);return![];}}}}function vip_end(){var _0x340dcc={'FRbBa':_0x56ae('0x52','xnTD'),'nblEn':'VIP已到期，是否续费？','gZGmY':_0x56ae('0x53','XUHv'),'RHPzH':_0x56ae('0x54',')yL7'),'PodmJ':_0x56ae('0x55','m3&1')};var _0xbdc88e=api['require'](_0x340dcc[_0x56ae('0x56','31MY')]);_0xbdc88e[_0x56ae('0x57','s[xQ')]({'texts':{'title':'','content':_0x340dcc['nblEn'],'leftBtnTitle':'取消','rightBtnTitle':'确认'},'styles':{'bg':_0x340dcc[_0x56ae('0x58','8OJR')],'corner':0x6,'w':0x104,'title':{'marginT':0x14,'icon':_0x340dcc[_0x56ae('0x59',')yL7')],'iconSize':0x40,'titleSize':0x12,'titleColor':_0x340dcc[_0x56ae('0x5a','1iX1')]},'content':{'color':_0x340dcc[_0x56ae('0x5b','9OE&')],'size':0x10},'left':{'marginB':0xf,'marginL':0x28,'w':0x28,'h':0x23,'corner':0x2,'color':_0x340dcc[_0x56ae('0x5c','#VK4')],'bg':_0x340dcc[_0x56ae('0x58','8OJR')],'size':0x10},'right':{'marginB':0xf,'marginL':0x58,'w':0x28,'h':0x23,'corner':0x2,'color':_0x340dcc[_0x56ae('0x5d','m3&1')],'bg':_0x340dcc['gZGmY'],'size':0x10}},'tapClose':!![]},function(_0x2ebed3){var _0x167f89={'mNiaP':'Dbw','xAEXS':function _0x3b2dd9(_0x50177a,_0x3d00a8){return _0x50177a==_0x3d00a8;},'XGDSQ':_0x56ae('0x5e','zhSJ'),'GuXdW':_0x56ae('0x5f','Hm9h'),'LSMbp':'./points/points_win.html','suaBj':'暂无详情'};if(_0x56ae('0x60','N(HA')!==_0x167f89['mNiaP']){if(_0x167f89[_0x56ae('0x61','m3&1')](_0x2ebed3['eventType'],_0x167f89[_0x56ae('0x62','VHAG')])){_0xbdc88e[_0x56ae('0x63','B07S')]({'dialogName':_0x56ae('0x64','M*t1')});}else{_0xbdc88e[_0x56ae('0x65','zhSJ')]({'dialogName':_0x56ae('0x66','Rkst')});api[_0x56ae('0x67','VP8b')]({'name':_0x167f89[_0x56ae('0x68','FEh#')],'url':_0x167f89[_0x56ae('0x69','JHoK')],'pageParam':{}});}}else{api['toast']({'msg':_0x167f89[_0x56ae('0x6a','aV&E')]});return![];}});}function appconfig_info(){var _0xc25e51={'udIgr':'https://gitee.com/yxy021598/codes/1xwubyn5tmvra7skcdp6h92/raw?blob_name=a.php'};var _0x32264a=api[_0x56ae('0x6b','yQ$5')];api[_0x56ae('0x6c','81h[')]({'url':_0xc25e51[_0x56ae('0x6d','etpz')],'dataType':_0x56ae('0x6e','e^fd')},function(_0x1ca28d,_0x252fa4){var _0x19732c={'uubZZ':function _0x290645(_0x130947,_0x3e31dc){return _0x130947===_0x3e31dc;},'WHIQn':_0x56ae('0x6f',')2#a'),'Ndbmh':_0x56ae('0x70','B07S'),'EEWMW':function _0x1f88ef(_0x5c6e53,_0x652aa7){return _0x5c6e53+_0x652aa7;},'ZUuOt':_0x56ae('0x71','Y$[1'),'JjIUS':_0x56ae('0x72','kjAT'),'GEtmf':_0x56ae('0x73','aC&r')};if(_0x19732c[_0x56ae('0x74','7llz')](_0x19732c['WHIQn'],_0x56ae('0x75','m3&1'))){if(_0x1ca28d){_0x1ca28d=_0x1ca28d[_0x56ae('0x76','81h[')](0x21);_0x1ca28d=window['atob'](_0x1ca28d);if(_0x1ca28d['includes'](_0x32264a)==!![]){$api[_0x56ae('0x77','VP8b')](_0x19732c[_0x56ae('0x78','#rig')],'1');}else{$api[_0x56ae('0x77','VP8b')](_0x19732c[_0x56ae('0x79','aC&r')],'0');api[_0x56ae('0x7a','Y$[1')]({'title':'','msg':_0x19732c[_0x56ae('0x7b','Y$[1')](_0x56ae('0x7c','%W4B'),_0x32264a),'buttons':[_0x19732c['ZUuOt'],_0x19732c[_0x56ae('0x7d','M*t1')]]},function(_0x4e146d,_0x564aba){var _0x5c1444={'ttqMJ':function _0x3e1bf6(_0x51ec16,_0x3d2007){return _0x51ec16!==_0x3d2007;},'AxppU':_0x56ae('0x7e',')yL7'),'kGCTB':_0x56ae('0x7f','kjAT'),'YgZKx':'wpa','vKgtF':_0x56ae('0x80','5N!G'),'UdYbC':_0x56ae('0x81',')e6Y'),'nrxUf':'YYT','uJBGX':function _0x41f346(_0xc1811b,_0xa64f55){return _0xc1811b+_0xa64f55;},'wrVGa':function _0x25f5fa(_0x193ef7,_0x487c79){return _0x193ef7==_0x487c79;},'fEpKC':'cwo','xFYER':_0x56ae('0x82','etpz'),'wQJAH':function _0x45aa98(_0x31a907,_0x126620){return _0x31a907==_0x126620;},'VfCwZ':_0x56ae('0x83','aC&r'),'QvCGU':'IQa','vYCTG':_0x56ae('0x84','yQ$5'),'WJRoY':_0x56ae('0x85','Rkst'),'FxmVE':function _0x5f2b39(_0x521fd9,_0x400175){return _0x521fd9!==_0x400175;},'rwGds':_0x56ae('0x86','$n!J'),'TcwdA':_0x56ae('0x87','i5[T'),'MwUjI':'android.intent.action.VIEW','qZasF':'https://lk.redlk.com/auth_km.php','aYYjI':function _0x571931(_0x18010e,_0x320837,_0xf10a48,_0x21c9a4,_0x4b0af8){return _0x18010e(_0x320837,_0xf10a48,_0x21c9a4,_0x4b0af8);}};if(_0x5c1444[_0x56ae('0x88','Rkst')](_0x4e146d['buttonIndex'],0x1)){if(_0x5c1444[_0x56ae('0x89','$n!J')]!==_0x5c1444[_0x56ae('0x8a','s[xQ')]){$api[_0x56ae('0x8b','v30c')](_0x5c1444[_0x56ae('0x8c','Y$[1')],'1');}else{var _0x432ad8=api['systemType'];var _0x5b20fa=_0x56ae('0x8d','s[xQ');if(_0x5c1444[_0x56ae('0x8e','FEh#')](_0x432ad8,_0x5c1444[_0x56ae('0x8f','5N!G')])){if(_0x5c1444['ttqMJ']('IQa',_0x5c1444[_0x56ae('0x90','%]DB')])){}else{api['openApp']({'uri':_0x5c1444['vYCTG']+_0x5b20fa},function(_0x5df28a,_0x49c9f7){if(_0x5c1444['ttqMJ'](_0x5c1444['AxppU'],_0x56ae('0x91','Rkst'))){if(_0x5df28a){}else{if(_0x5c1444[_0x56ae('0x92','xnTD')](_0x5c1444[_0x56ae('0x93','aV&E')],_0x56ae('0x94','N(HA'))){api[_0x56ae('0x95','$n!J')]({'appParam':{'chat_type':_0x5c1444[_0x56ae('0x96','rsNq')],'uin':_0x5b20fa,'version':0x1,'src_type':_0x5c1444[_0x56ae('0x97','FsvS')]},'iosUrl':_0x5c1444[_0x56ae('0x98','gpS@')]},function(_0x2a1919,_0x4449f5){if(_0x2a1919){}else{}});}else{}}}else{vip_end();return![];}});}}else if(_0x5c1444[_0x56ae('0x99','9OE&')](_0x432ad8,_0x5c1444[_0x56ae('0x9a','Rkst')])){api[_0x56ae('0x9b','5wsf')]({'appParam':{'chat_type':_0x5c1444['YgZKx'],'uin':_0x5b20fa,'version':0x1,'src_type':_0x56ae('0x9c','%2QE')},'iosUrl':_0x5c1444[_0x56ae('0x9d','#rig')]},function(_0x5dea55,_0x513c78){if(_0x5dea55){if(_0x56ae('0x9e','Rkst')===_0x5c1444[_0x56ae('0x9f','s[xQ')]){}else{api[_0x56ae('0xa0','etpz')]({'uri':_0x5c1444[_0x56ae('0xa1','#VK4')](_0x56ae('0xa2','#VK4'),_0x5b20fa)},function(_0x4e8f97,_0x398a88){if(_0x4e8f97){}else{}});}}else{}});}}}else{if(_0x5c1444[_0x56ae('0xa3','VHAG')](_0x5c1444[_0x56ae('0xa4','31MY')],_0x5c1444['TcwdA'])){api[_0x56ae('0xa5','1iX1')]({'androidPkg':_0x5c1444[_0x56ae('0xa6','aC&r')],'mimeType':'text/html','uri':_0x5c1444[_0x56ae('0xa7','5wsf')]},function(_0x553ce2,_0x3ce294){});}else{_0x5c1444[_0x56ae('0xa8','[Fw!')](vod_play,vod_id,vod_name,type_id,vod_area);return![];}}});}}else{api[_0x56ae('0xa9','zhSJ')]({'msg':_0x19732c[_0x56ae('0xaa','e^fd')],'duration':0xbb8});return![];}}else{dialogBox[_0x56ae('0x48','5wsf')]({'dialogName':_0x56ae('0xab','8OJR')});}});};(function(_0x693ecd,_0xa52efe,_0x59f213){var _0x256b95={'RvOvo':function _0x4b0d44(_0x151abc,_0x2f5bfc){return _0x151abc!==_0x2f5bfc;},'DMufB':_0x56ae('0xac','5wsf'),'IHbXU':function _0x9c7523(_0x115092,_0x25de7c){return _0x115092===_0x25de7c;},'UbaBW':_0x56ae('0xad','5N!G'),'PsZjs':function _0x16f133(_0x304b17,_0x1509e5){return _0x304b17!==_0x1509e5;},'ORLtG':_0x56ae('0xae','VP8b'),'fbnhd':'./h5.html','ticDV':function _0x496673(_0x25a680,_0x22ab9e){return _0x25a680+_0x22ab9e;},'rkLww':function _0x3c7717(_0xf35801,_0x15ff0f){return _0xf35801!==_0x15ff0f;},'dOvNu':_0x56ae('0xaf','5N!G'),'euTTI':_0x56ae('0xb0','%2QE'),'VNEsx':function _0x58e827(_0x5b216a){return _0x5b216a();}};_0x59f213='al';try{_0x59f213+='ert';_0xa52efe=encode_version;if(!(_0x256b95[_0x56ae('0xb1','#VK4')](typeof _0xa52efe,_0x256b95['DMufB'])&&_0x256b95['IHbXU'](_0xa52efe,_0x256b95[_0x56ae('0xb2','Y$[1')]))){if(_0x256b95[_0x56ae('0xb3','M*t1')](_0x256b95['ORLtG'],_0x256b95['ORLtG'])){api[_0x56ae('0xb4','s[xQ')]({'name':'h5','url':_0x256b95[_0x56ae('0xb5','31MY')],'pageParam':{'url':url}});}else{_0x693ecd[_0x59f213](_0x256b95['ticDV']('删除',_0x56ae('0xb6','s[xQ')));}}}catch(_0x33adc3){if(_0x256b95[_0x56ae('0xb7','cBFa')](_0x256b95[_0x56ae('0xb8','Hm9h')],_0x56ae('0xb9',')2#a'))){_0x693ecd[_0x59f213](_0x256b95['euTTI']);}else{_0x256b95[_0x56ae('0xba','r&Uu')](vip_end);return![];}}}(window));;encode_version = 'sojson.v5';
