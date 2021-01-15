/**
 * Cookies functions
 * @author Siri Chongasamethaworn (goonohc@gmail.com)
 * @version 1.0 November 21, 2005
 * @since November 21, 2005
 */
var Cookies=function(){};Cookies.setCookie=function(aa,ba,da){var ea;if(da){var fa=new Date();fa.setTime(fa.getTime()+(da*24*60*60*1000));ea="; expires="+fa.toGMTString();} else ea="";document.cookie=aa+"="+ba+ea+"; path=/";};Cookies.getCookie=function(ga){var ha=ga+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(ha)==0)return c.substring(ha.length,c.length);} return null;};Cookies.removeCookie=function(ia){Cookies.setCookie(ia,"",-1);};