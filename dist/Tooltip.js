!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var o in i)("object"==typeof exports?exports:t)[o]=i[o]}}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e,i,o){if(n(this,t),!(o instanceof Element)&&"string"!=typeof o)throw new TypeError("The tooltip passed to the constructor must be either an html string or an instance of HTMLElement");this.element=e,this.container=i,this.tooltip=o instanceof Element?o:h(o).firstChild,console.log("tooltip",this.tooltip,o),this.element_rect=this.element.getBoundingClientRect(),this.container_rect=this.container.getBoundingClientRect(),this.container_dimension=this.calculateViewportPosition(),this.tooltip_dimension={},this.element_height=this.element.offsetHeight,this.element_width=this.element.offsetWidth,this.tooltip_height=0,this.tooltip_width=0,this.centered_coordinate=void 0,this.last_coordinate=void 0,this.placeTooltip()}return l(t,[{key:"placeTooltip",value:function(){this.container.appendChild(this.tooltip),this.tooltip_height=this.tooltip.offsetHeight,this.tooltip_width=this.tooltip.offsetWidth,this.centered_coordinate=this.getCenteredStyles(),this._applyPosition(this.centered_coordinate)}},{key:"_applyPosition",value:function(t){var e=this;return t=this._composeCoordinates(t),this.tooltip.style.top=t.top+"px",this.tooltip.style.left=t.left+"px",function(t){if(t){var i;Array.isArray(t)?(i=e.tooltip.classList).add.apply(i,o(t)):e.tooltip.classList.add(t)}}}},{key:"_composeCoordinates",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.last_coordinate;return this.last_coordinate=e?{left:t.left===this.centered_coordinate.left?e.left:t.left,top:t.top===this.centered_coordinate.top?e.top:t.top}:t}},{key:"getCenteredStyles",value:function(){return{top:this.container_dimension.top-this.tooltip_height/2+this.element_rect.height/2,left:this.container_dimension.left-this.tooltip_width/2+this.element_rect.width/2}}},{key:"autoPlace",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this.determineOffsetFromElement(),o=this._autoPlaceHorizontallyStyles(i,t),n=this._autoplaceVerticallyStyles(i,e),r=this._composeCoordinates(o,n);return console.log("coordinate",r,this.tooltip,i,o,n,this.centered_coordinate),this._applyPosition(r)([i.vertical,i.horizontal,"autoplace"]),this}},{key:"autoPlaceHorizontally",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.determineOffsetFromElement(),i=this._autoPlaceHorizontallyStyles(e,t);return this._applyPosition(i)(e.horizontal),this}},{key:"_autoPlaceHorizontallyStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i="TooltipLeft"===t.horizontal,o=this.element_width/2+this.tooltip_width/2-e;return{left:i?this.centered_coordinate.left+o:this.centered_coordinate.left-o,top:this.centered_coordinate.top}}},{key:"autoPlaceVertically",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.determineOffsetFromElement(),i=this._autoplaceVerticallyStyles(e,t);return this._applyPosition(i)(e.vertical),this}},{key:"_autoplaceVerticallyStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i="TooltipAbove"===t.vertical,o=this.element_height/2+this.tooltip_height/2+e;return{top:i?this.centered_coordinate.top-o:this.centered_coordinate.top+o,left:this.centered_coordinate.left}}},{key:"above",value:function(t){var e=this._aboveStyles(t);return this._applyPosition(e)("TooltipAbove"),this}},{key:"_aboveStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{top:this.centered_coordinate.top-(this.element_height/2+this.tooltip_height/2+t),left:this.centered_coordinate.left}}},{key:"below",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._belowStyles(t);return this._applyPosition(e)("TooltipBelow"),this}},{key:"_belowStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{top:this.centered_coordinate.top+(this.element_height/2+this.tooltip_height/2+t),left:this.centered_coordinate.left}}},{key:"left",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._leftStyles(t);return this._applyPosition(e)("TooltipLeft"),this}},{key:"_leftStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{top:this.centered_coordinate.top,left:this.centered_coordinate.left-(this.element_width/2+this.tooltip_width/2+t)}}},{key:"right",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._rightStyles(t);return this._applyPosition(e)("TooltipRight"),this}},{key:"_rightStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{top:this.centered_coordinate.top,left:this.centered_coordinate.left+(this.element_width/2+this.tooltip_width/2+t)}}},{key:"alignLeft",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._alignLeftStyles(t);return this._applyPosition(e)("TooltipAlignLeft"),this}},{key:"_alignLeftStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(this.element_width-this.tooltip_width)/2;return{top:this.centered_coordinate.top,left:this.centered_coordinate.left-e-t}}},{key:"alignRight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._alignRightStyles(t);return this._applyPosition(e)("TooltipAlignRight"),this}},{key:"_alignRightStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(this.element_width-this.tooltip_width)/2;return{top:this.centered_coordinate.top,left:this.centered_coordinate.left+e+t}}},{key:"inside",value:function(){var t=this;if(arguments.length){Array.prototype.slice.call(arguments).forEach(function(e){switch(e){case"top":t._insideTop();break;case"bottom":t._insideBottom();break;case"left":t.alignLeft();break;case"right":t.alignRight()}})}return this}},{key:"_insideTop",value:function(){return this._applyPosition(r({},this.centered_coordinate,{top:this.centered_coordinate.top-this.centered_coordinate.top/4})),this}},{key:"_insideBottom",value:function(){return this._applyPosition(r({},this.centered_coordinate,{top:this.centered_coordinate.top+this.centered_coordinate.top/2})),this}},{key:"center",value:function(){return this._removeClasses(),this.element_rect=this.element.getBoundingClientRect(),this.container_rect=this.container.getBoundingClientRect(),this.container_dimension=this.calculateViewportPosition(),this.tooltip_height=this.tooltip.offsetHeight,this.tooltip_width=this.tooltip.offsetWidth,this.centered_coordinate=this.getCenteredStyles(),this._applyPosition(this.centered_coordinate),this}},{key:"_removeClasses",value:function(){return this.tooltip.classList.remove("TooltipAlignRight TooltipAlignLeft TooltipRight TooltipLeft TooltipAbove TooltipBelow"),this}},{key:"destroy",value:function(){return document.body.removeEventListener("click",this.destroy),this.tooltip.parentNode&&this.tooltip.parentNode.removeChild(this.tooltip),this}},{key:"hide",value:function(){return this.tooltip.style.display="none",this}},{key:"show",value:function(){return this.tooltip.style.display="block",this}},{key:"removeListener",value:function(){var t=this;return setTimeout(function(){document.body.addEventListener("click",t.destroy.bind(t))},50),this}},{key:"setClickCallback",value:function(t,e){var i=this;return t.stopPropagation(),document.body.addEventListener(t,function(){e.call(i,t.target,i.tooltip)}),this}},{key:"scrollWith",value:function(t){var e=this,i=t.scrollTop;return t.addEventListener("scroll",function(){var o=i-t.scrollTop;e.tooltip.style.top=e.tooltip.style.top+o,i=t.scrollTop}),this}},{key:"calculateViewportPosition",value:function(){var t=this.element_rect,e=this.container_rect;return{left:t.left-e.left+this.container.scrollLeft,top:t.top-e.top+this.container.scrollTop,right:t.right-e.right,bottom:t.bottom-e.bottom,width:t.width,height:t.height}}},{key:"determineOffsetFromElement",value:function(){var t=window.innerHeight/2,e=window.innerWidth/2;return{horizontal:this.element_rect.left>e?"TooltipRight":"TooltipLeft",vertical:this.element_rect.top>t?"TooltipAbove":"TooltipBelow"}}}]),t}(),h=function(t){var e=document.createDocumentFragment(),i=document.createElement("div");i.innerHTML=t;for(var o=void 0;o=i.firstElementChild;)e.appendChild(o);return e};e.default=s}])});