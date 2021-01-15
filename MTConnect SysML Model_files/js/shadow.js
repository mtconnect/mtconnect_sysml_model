/**
 * Shadow functions
 * Library require: animate.js
 * @author Siri Chongasamethaworn (goonohc@gmail.com)
 * @version 1.0 December 26, 2006
 * @since December 26, 2006
 */
Library.load({'js/animate.js':['Graphics']});var Shadow=function(aa,ba,ca,da,ea){this.element=this.createShadow(aa,ba,ca,da,ea);this.element.repaint();};Shadow.prototype={createShadow:function(fa,ga,ha,ia,ja){var ka=document.createElement('div');ka.id=(fa.id?fa.id:'')+'.shadow';ka.className='nm-content dialogShadow';ka.style.zIndex=fa.style.zIndex?fa.style.zIndex-1:89;ka.style.background=ia?ia:'#555555';ka.style.position='absolute';ka.offsetX=ga?ga:3;ka.offsetY=ha?ha:ga?ga:3;Graphics.setOpacity(ka,ja?ja:30);ka.parent=fa;ka.repaint=this.repaint;ka.removeShadow=this.removeShadow;return ka;},removeShadow:function(){if(this.parentNode)this.parentNode.removeChild(this);},repaint:function(){var la=this.parent;var ma=Graphics.findPosition(la);var na=la.offsetWidth;var oa=la.offsetHeight;this.style.left=ma.x+this.offsetX+'px';this.style.top=ma.y+this.offsetY+'px';this.style.height=oa+'px';this.style.width=na+'px';}};Shadow.castShadow=function(pa,qa){if(!pa.shadow){var ra=new Shadow(pa,qa);pa.shadow=ra.element;} document.body.appendChild(pa.shadow);pa.shadow.repaint();return pa.shadow;};Shadow.removeShadow=function(sa){if(sa.shadow&&sa.shadow.parentNode){sa.shadow.parentNode.removeChild(sa.shadow);}};