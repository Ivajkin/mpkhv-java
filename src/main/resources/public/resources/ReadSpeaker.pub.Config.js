ReadSpeaker.pub||(ReadSpeaker.pub={});
ReadSpeaker.pub.Config=function(){var e={extraMods:[["enlargeHL/ReadSpeaker.enlargeHL.js"],["enlargeHL/ReadSpeaker.enlargeHL.css"]],general:{cookieLifetime:36E7,cookieName:"ReadSpeakerSettings",cookieDomain:null,cookiePath:"/",defaultSpeedValue:100,domain:"readspeaker.com",popupCloseTime:2E3,protocol:document.location.protocol||"http:",proxyVersion:"2",region:"eu",rscall:null,rsent:"rsent",subdomain:"app",syncContainer:"default",selectionEngine:"old",useCompactPopupButton:!0,usePost:!1,sentOnlyLang:["ja_jp",
"zh_cn"],popupHref:"",parseMathJax:!1,enableSkipAlways:!1},survey:{allowed:!1,url:function(){return e.general.protocol+"//sf1-eu.readspeaker.com/survey/survey.php"},cookieName:"rspkrsurvey",cookieLifeTime:15552E6},settings:{hltoggle:"hlon",hl:"wordsent",hlicon:"iconon",hlspeed:"medium",hlword:"#a4cbff",hlsent:"#beffd6",hlscroll:"scrolloff",hltext:"#000000"},defaultsettings:{hltoggle:"hlon",hl:"wordsent",hlicon:"iconon",hlspeed:"medium",hlword:"#a4cbff",hlsent:"#beffd6",hlscroll:"scrolloff",hltext:"#000000"},
phrases:{
en_us:{listen:"Listen",closeplayer:"Close Player",fast:"Fast",hide:"Hide",highlightingoptions:"Highlighting options",listentoselectedtext:"Listen to selected text",medium:"Medium",nohighlighting:"No highlighting",pause:"Pause",playerwidth:"310",play:"Play",popupbutton:"Pop-up button",sentonly:"Sentence only",settings:"Settings",show:"Show",slow:"Slow",speechenabled:'Speech-enabled by <a href="http://www.readspeaker.com/?ref='+encodeURIComponent(document.location.href)+'" target="_blank">ReadSpeaker</a>',
newwindow:"New Window",speed:"Speed",stop:"Stop",volume:"Volume",wordonly:"Word only",wordsent:"Word and sentence",nosound:"No sound? Click here",download:"Download mp3",highlighting:"Highlighting",wordcolor:"Word color",sentcolor:"Sentence color",lightgreen:"Light green",lightblue:"Light blue",lightyellow:"Light yellow",white:"White",black:"Black",underline:"Underline",none:"None",on:"On",off:"Off",autoscroll:"Automatic scrolling",general:"General",reading:"Reading",showhighlighting:"Text highlighting",
help:"Help",hltoggleinfo:"Enables synchronized highlighting of the text that is currently being read.",hloptionsinfo:"Controls the behavior of synchronized highlighting.",hlwordinfo:"Sets the style or color of highlighted words.",hlsentinfo:"Sets the style or color of highlighted sentences.",hlspeedinfo:"Controls the reading speed.",hlscrollinfo:"Toggles automatic scrolling. When switched on, the page will automatically scroll to follow the highlighted text.",hliconinfo:"Controls whether or not a pop-up button should be displayed when text is selected.",
close:"Close",sliderseek:"Seek bar",slidervolume:"Volume bar",slidervolumedesc:"Change volume",touheading:"Terms of use for downloaded audio",toubody:"<p>Thank you for using the ReadSpeaker service.</p><p>The audio file you are about to download can be used for personal use only. This means that you are not allowed to distribute this file to anyone else, or use it for any other purpose than to listen to it yourself.</p>",touaccept:"Agree and Download file",toudecline:"Cancel",textcolor:"Text color",
hltextinfo:"Sets the foreground color of the highlighted text.",darkred:"Dark red",darkgreen:"Dark green",darkblue:"Dark blue",yellow:"Yellow",loaderror:"An error has occurred, try again",hlrestore:"Restore default settings",hlrestoreinfo:"Restore all settings to their original defaults.",red:"Red",chunkbutton:"Continue",chunkcontinue:"Click the \u201ccontinue\u201d button to continue the reading.",chunkwait:"Please wait. The reading will continue shortly."}},ui:{rsbtnClass:"rsbtn",progressHandleClass:"rsbtn_progress_handle rsimg",progressDir:"h",volumeHandleClass:"rsbtn_volume_handle rsimg",volumeDir:"v",autoscrollOffset:0,usePin:!1,settingsListenButton:!0,listenBtn:'<div id="readspeaker_button_settings" class="rs_skip rsbtn rs_preserve readspeaker_button_settings">;\t<a class="rsbtn_play" href="">;\t\t<span class="rsbtn_left rsimg rspart">;\t\t\t<span class="rsbtn_text">;\t\t\t\t<span>rsLISTENrs</span>;\t\t\t</span>;\t\t</span>;\t\t<span class="rsbtn_right rsimg rsplay rspart"></span>;\t</a>;</div>'.split(";"),
player:'<a class="rsbtn_pause rsimg rspart" href="javascript:void(0);" title="Pause" role="button"><span class="rsbtn_btnlabel">Pause</span></a>,<a class="rsbtn_stop rsimg rspart" href="javascript:void(0);" title="Stop" role="button"><span class="rsbtn_btnlabel">Stop</span></a>,<span class="rsbtn_player rsimg rspart">,\t<span class="rsbtn_progress_container rsimg rsplaypart rsloading">,\t\t<span class="rsbtn_progress_played rsimg"></span>,\t</span>\t,\t<a class="rsbtn_volume rsimg rsplaypart" href="javascript:void(0);" title="Volume" role="button"><span class="rsbtn_btnlabel">Volume</span></a>,\t<span class="rsbtn_volume_container rsimg">,\t\t<span class="rsbtn_volume_slider"></span>,\t</span>,\t<a class="rsbtn_settings rsimg rsplaypart" href="javascript:void(0);" title="Settings" role="button"><span class="rsbtn_btnlabel">Settings</span></a>,\t<a class="rsbtn_dl rsimg rsplaypart" href="javascript:void(0);" title="Download MP3" role="button"><span class="rsbtn_btnlabel">Download mp3</span></a>,\t<a class="rsbtn_pin turnedOff rsplaypart" href="javascript:void(0);" title="Pin player" role="button"><span class="rsbtn_btnlabel">Pin player</span></a>,</span>,<a class="rsbtn_closer rsimg rspart" href="javascript:void(0);" title="Close Player" role="button"><span class="rsbtn_btnlabel">Close</span></a>,<span class="rsbtn_powered rsimg"><span class="rsbtn_btnlabel">Speech-enabled by ReadSpeaker</span></span>'.split(","),
popupbutton:['<a class="rsbtn_play" accesskey="L" title="" href="">','<span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span></span></span></span>','<span class="rsbtn_right rsimg rsplay rspart"></span>',"</a>"],popupplayer:function(){return this.player},settings:{form:'<div id="rsform_wrapper" dir="ltr">;\t<h1 class="rs_preserve">rsSETTINGS_HEADINGrs</h1>;\trsLISTEN_BUTTONrs;\t<form id="rssettings_form" class="rsform rs_preserve">;\trsSECTIONS_STARTrs;\trsSECTIONSrs;\trsSECTIONS_ENDrs;\t</form>;</div>'.split(";"),
formsection:['<fieldset id="rsSECTION_IDrs" class="rsform-section">',"\t<legend>rsSECTION_HEADINGrs</legend>","\trsSECTION_ROWSrs","</fieldset>"],formrow:['\t<div class="rsform-row rsCONTROL_CLASSESrs" id="rscontrol_rsCONTROL_IDrs" data-rsform-type="rsCONTROL_TYPErs">',"\t\trsCONTROLrs","\t</div>"],formbuttons:['\t\t<a class="rssettings-button-close rsdialog-button" href="javascript:void(0);" title="rsSETTINGS_BUTTON_CLOSErs" role="button">rsSETTINGS_BUTTON_CLOSErs</a>']},overlay:{overlayStyles:"position: absolute;top: 0;left: 0;bottom: 0;width: 100%;background-color: #fff;opacity: 0.5;filter: alpha(opacity=50);z-index: 1001".split(";"),
contentStyles:"position: absolute;width: 500px;height: 500px;background-color: #eee;z-index: 10002;border-radius: 10px;-moz-box-shadow: 0px 0px 20px #000;-webkit-box-shadow: 0px 0px 20px #000;box-shadow: 0px 0px 20px #000;display: block".split(";"),contentTemplate:'<div id="rslightbox_content" style="overflow:auto;"></div>,<div id="rslightbox_toolbar">,\t<a id="rslightbox_closer" href="javascript: void(0);" title="rsLIGHTBOX_CLOSE_LABELrs" role="button"><span class="rsbtn_btnlabel">rsLIGHTBOX_CLOSE_LABELrs</span></a>,</div>,<div id="rslightbox_buttons" class="rsform-buttons"></div>,<div id="rslightbox_logo" class="rsimg"></div>'.split(",")},
dldialog:'<div id="rsdl_container">;\t<div class="rsdl_textwrapper">;\t\t<h2>rsTERMS_OF_USE_HEADINGrs</h2>;\t\trsTERMS_OF_USE_BODYrs;\t</div>;</div>'.split(";"),dlbuttons:['\t\t<a id="rsdl_button_accept" class="rsdialog-button" href="javascript:void(0);" title="rsTERMS_OF_USE_ACCEPTrs" role="button">rsTERMS_OF_USE_ACCEPTrs</a>','\t\t<a id="rsdl_button_decline" class="rsdialog-button" href="javascript:void(0);" title="rsTERMS_OF_USE_DECLINErs" role="button">rsTERMS_OF_USE_DECLINErs</a>'],survey:{buttons:['\t\t<a id="rssurvey_button_close" class="rsdialog-button" href="javascript:void(0);" title="rsSURVEY_BUTTON_CLOSErs" role="button">rsSURVEY_BUTTON_CLOSErs</a>']}},
flash:{allowScriptAccess:"always",flashSrc:function(){var a=-1===e.general.protocol.indexOf("https")?e.general.protocol+"//f1."+e.general.region+".readspeaker.com/flash/readspeaker_1x1.swf":e.general.protocol+"//sf1-"+e.general.region+".readspeaker.com/flash/readspeaker_1x1.swf";return rs.cfg.item("general.customProxy")?rs.cfg.item("general.customProxy")+encodeURIComponent(a):a}},cb:{ui:{open:function(){rspkr.log("conf.cb.ui.open: "+this)},play:function(){rspkr.log("conf.cb.ui.play")},pause:function(){rspkr.log("conf.cb.ui.pause")},
stop:function(){rspkr.log("conf.cb.ui.stop")},beforeclose:function(){rspkr.log("conf.cb.ui.beforeclose")},close:function(){rspkr.log("conf.cb.ui.close")},settingsopened:function(){rspkr.log(this)},volumechanged:function(a){rspkr.log("conf.cb.ui.volumechanged: "+a+"%")},timeupdated:function(a,b){},progresschanged:function(a){0<a&&0==a%10&&rspkr.log("conf.cb.ui.progresschanged: "+a+"%")}},chunking:{pause:void 0}}},h={highlighting:{phrase:"ph_highlighting",items:{hltoggle:{phrase:"ph_showhighlighting",
type:"radio",info:"ph_hltoggleinfo",options:[{value:"hlon",phrase:"ph_on"},{value:"hloff",phrase:"ph_off",dims:["hl","hlword","hlsent","hltext","enlarge"]}]},hl:{phrase:"ph_highlightingoptions",type:"select",info:"ph_hloptionsinfo",options:[{value:"wordsent",phrase:"ph_wordsent"},{value:"sent",phrase:"ph_sentonly",dims:["hlword"]},{value:"word",phrase:"ph_wordonly",dims:["hlsent"]},{value:"none",phrase:"ph_nohighlighting",dims:["hlword","hlsent","hltext"]}]},hlword:{phrase:"ph_wordcolor",type:"colorpicker",
info:"ph_hlwordinfo",options:[{value:"#beffd6",phrase:"ph_lightgreen"},{value:"#a4cbff",phrase:"ph_lightblue"},{value:"#ffffcc",phrase:"ph_lightyellow"},{value:"#ffffff",phrase:"ph_white"},{value:"#000000",phrase:"ph_black"},{value:"#770000",phrase:"ph_darkred"},{value:"#ED0000",phrase:"ph_red"},{value:"underline",phrase:"ph_underline"},{value:"none",phrase:"ph_none"}]},hlsent:{phrase:"ph_sentcolor",type:"colorpicker",info:"ph_hlsentinfo",options:[{value:"#beffd6",phrase:"ph_lightgreen"},{value:"#a4cbff",
phrase:"ph_lightblue"},{value:"#ffffcc",phrase:"ph_lightyellow"},{value:"#ffffff",phrase:"ph_white"},{value:"#000000",phrase:"ph_black"},{value:"#770000",phrase:"ph_darkred"},{value:"#ED0000",phrase:"ph_red"},{value:"underline",phrase:"ph_underline"},{value:"none",phrase:"ph_none"}]},hltext:{phrase:"ph_textcolor",type:"colorpicker",info:"ph_hltextinfo",options:[{value:"#003f00",phrase:"ph_darkgreen"},{value:"#0000aa",phrase:"ph_darkblue"},{value:"#ffff00",phrase:"ph_yellow"},{value:"#ffffff",phrase:"ph_white"},
{value:"#000000",phrase:"ph_black"},{value:"#a4cbff",phrase:"ph_lightblue"}]}}},reading:{phrase:"ph_reading",items:{hlspeed:{phrase:"ph_speed",type:"radio",info:"ph_hlspeedinfo",options:[{value:"slow",phrase:"ph_slow"},{value:"medium",phrase:"ph_medium"},{value:"fast",phrase:"ph_fast"}]}}},general:{phrase:"ph_general",items:{hlscroll:{phrase:"ph_autoscroll",type:"radio",info:"ph_hlscrollinfo",options:[{value:"scrollon",phrase:"ph_on"},{value:"scrolloff",phrase:"ph_off"}]},hlicon:{phrase:"ph_popupbutton",
type:"radio",info:"ph_hliconinfo",options:[{value:"iconon",phrase:"ph_on"},{value:"iconoff",phrase:"ph_off"}]}}},restore:{phrase:"ph_hlrestore",items:{hlrestore:{phrase:"ph_hlrestoreinfo",type:"restore"}}}},g=function(a,b,c,d){if(void 0!==a[b[c]])return c<b.length-1?g(a[b[c]],b,c+1,d):void 0===d?a[b[c]]:a[b[c]]=d;if(void 0!==d){var e;if(c<b.length-1)for(e=b.length;c<e-1;c++)a[b[c]]={},a=a[b[c]];return a[b[c]]=d}},f=function(a,b){b=b||e;for(var c in a)a.hasOwnProperty(c)&&(void 0!==b[c]?$rs.isArray(b[c])?
b[c]=a[c]:"object"==typeof a[c]&&0<Object.size(a[c])&&!$rs.isArray(a[c])?f(a[c],b[c]):b[c]=a[c]:b[c]=a[c])};return{meta:{revision:"3406"},defaultsettings:e.defaultsettings,init:function(){rspkr.log("[rspkr.cfg] Initialized!")},item:function(a,b,c){if(void 0===b){if("."==a)b=e;else if(b=a.split("."),a=g(e,b,0),"function"!=typeof a||c)b=a;else{var d=e;c=e;if(b.length){b.splice(b.length-1,1);for(var d=0,f=b.length;d<f;d++)if(c[b[d]])c=c[b[d]];else break;d=c}b=a.apply(d)}return b}a=a.split(".");return g(e,
a,0,b)},getPhrase:function(a,b,c){c=c||"en_us";b=(b||rspkr.c.data.params.lang||c).toLowerCase();var d=this.item("phrases."+b);if(d&&d[a])return this.item("phrases."+b)[a];if(this.item("phrases."+c+"."+a))return this.item("phrases."+c+"."+a)},getPhrases:function(a,b){b=b||"en_us";var c;if((c=this.item("phrases."+(a||b).toLowerCase()))||(c=this.item("phrases."+b)))return c},extendPhrases:function(a){for(var b in a)this.item("phrases."+b)||delete a[b];f({phrases:a})},getSettingsConf:function(){return h},
isSentOnly:function(a){for(var b=this.item("general.sentOnlyLang")||[],c=0,d=b.length;c<d;c++)if(b[c]==a.toLowerCase())return!0;return!1},setup:function(){"object"==typeof window.rsConf&&f(window.rsConf);rspkr.devt("onConfigSetup",window)},execCallback:function(a,b,c){"function"==typeof this.item(a,void 0,!0)&&this.item(a,void 0,!0).apply(b,$rs.isArray(c)?c:[])},c:e}}();