/**
 * JS & AJAX Dialog framework
 * Library require: jwindow.js
 * @author Siri Chongasamethaworn (goonohc@gmail.com)
 * @version 2.0 March 13, 2007
 * @since November 22, 2006
 */
Library.load({"js/jwindow.js":["JWindow"]});var Dialog=function(){this.dialog=new JWindow("dialog");this.dialog.setContentClass("dialogContent");this.dialog.setBackground("#AAAAAA");this.dialog.setDragable(false);this.content=this.dialog.content;window.dialogObj=this};Dialog.prototype={setRenderFunction:function(A){this.dialog.setRenderFunction(A)},setHtml:function(A){this.dialog.setHtml(A)},setSize:function(B,A){this.dialog.setSize(B,A)},setContentClass:function(A){this.dialog.setContentClass(A)},setBackgroundColor:function(A){this.dialog.setBackground(A)},setShadow:function(A){this.dialog.setShadow(A)},getWindow:function(){return this.dialog},appendChild:function(A){this.dialog.appendChild(A)},show:function(){this.dialog.content=this.content;this.dialog.show()},hide:function(){this.dialog.hide()},pack:function(){this.dialog.pack()}};