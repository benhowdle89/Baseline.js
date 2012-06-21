/*
* BaselineJS.js 1.0
*
* Copyright 2012, Ben Howdle http://twostepmedia.co.uk
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu June 21 20:58 2012 GMT
*/

/*
	//call like so
	baseline.init('img', '24');
	baseline.init('.post img', '48');
*/

var baseline = function(){

	var tall, newHeight, target, imgl, cur, images = [];

	return {

		init: function(selector, target){
			if(selector === undefined || target === undefined) return false;
			this.images = document.querySelectorAll(selector);
			this.target = target;
			this.setbase(this.images);
			var me = this;
			window.onresize = function() {
				me.setbase(me.images);
			};
		},

		setbase: function(imgs){
			this.imgl = imgs.length;
			if(this.imgl !== 0){
				while(this.imgl--){
					this.cur = imgs[this.imgl];
					this.cur.removeAttribute("style");
					this.tall = this.cur.offsetHeight;
					this.newHeight = Math.floor(this.tall / this.target) * this.target;
					this.cur.style.maxHeight = this.newHeight + 'px';
				}
			} else {
				return false;
			}
		}

	};

}();