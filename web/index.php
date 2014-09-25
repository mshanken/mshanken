<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>M. Shanken Communications, Inc Media Kit | Welcome</title>
	<link rel="stylesheet" href="library/mshanken-css.css" type="text/css" />
	<script language="javascript" type="text/javascript" src="library/rollovers.js"></script>
	<meta name="description" content="M. Shanken Communications, Inc. Media kit" />
	<meta name="keywords" content="m shanken communications inc media kit, M Shanken Publications, shanken publications, wine spectator media kit, cigar aficionado media kit, food arts media kit, impact media kit, market watch media kit, wine spectator magazine media kit, cigar aficionado magazine media kit, food arts magazine madia kit, impact magazine media kit, market watch magazine media kit" />
</head>

<body>

	<div id="wrapperBox" class="addclear">
    	<div id="heading">
		<table id="TableHd" width="736" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td valign="top" height="75"><img src="images/header-img.gif" width="736" height="75" /></td>
		</tr>
		<tr>
			<td valign="middle" height="40">
			<!--Main Menu -->
				<a href="winespectator/"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-WS.jpg" width="155" height="21" border="0" name="menuh1"/></a><a href="cigaraficionado/"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-CA.jpg" width="155" height="21" border="0" name="menuh2"/></a><a href="marketwatch/"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-MW.jpg" width="155" height="21" border="0" name="menuh4"/></a><a href="impact/"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-Impact.jpg" width="150" height="21" border="0" name="menuh5"/></a><a href='#' onclick=javascript:vartarget=window.open('contact.html','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-C.U.jpg" width="121" height="21" border="0" name="menuh6"/></a></td>
			<!--Main Menu -->
			</td>
		</tr>
        </table>
        </div>
        
        <div id="contentWrapper">
            <div class="oneColumnContent">
            	<div class="container">
								<div class="image-slider-wrapper">
									<ul id="image_slider">
										<li><img src="images/mshankensiteWS-slider.jpg" /></li>
										<li><img src="images/mshankensiteCA-slider.jpg" /></li>
										<li><img src="images/mshankensiteMW-slider.jpg" /></li>
										<li><img src="images/mshankensiteIM-slider.jpg" /></li>
									</ul><!-- End: #image_slider -->
								</div><!-- End: .image-slider-wrapper -->
							</div><!-- End: .container -->
            </div>
        </div>
        
        <?php include "library/footer.inc"; ?>
        
	</div>
<script type="text/javascript">
var ul;
var li_items; 
var li_number;
var image_number = 0;
var slider_width = 0;
var image_width;
var current = 0;
function init(){	
	ul = document.getElementById('image_slider');
	li_items = ul.children;
	li_number = li_items.length;
	for (i = 0; i < li_number; i++){
		// nodeType == 1 means the node is an element.
		// in this way it's a cross-browser way.
		//if (li_items[i].nodeType == 1){
			//clietWidth and width???
			image_width = li_items[i].childNodes[0].clientWidth;
			slider_width += image_width;
			image_number++;
	}
	
	ul.style.width = parseInt(slider_width) + 'px';
	slider(ul);
}

function slider(){		
		animate({
			delay:17,
			duration: 3000,
			delta:function(p){return Math.max(0, -1 + 2 * p)},
			step:function(delta){
					ul.style.left = '-' + parseInt(current * image_width + delta * image_width) + 'px';
				},
			callback:function(){
				current++;
				if(current < li_number-1){
					slider();
				}
				else{
					var left = (li_number - 1) * image_width;					
					setTimeout(function(){goBack(left)},2000); 				
					setTimeout(slider, 4000);
				}
			}
		});
}
function goBack(left_limits){
	current = 0;	
	setInterval(function(){
		if(left_limits >= 0){
			ul.style.left = '-' + parseInt(left_limits) + 'px';
			left_limits -= image_width;
		}	
	}, 17);
}
function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration
		if(progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);
			opts.callback();
		}
	}, opts.dalay || 17);
}
window.onload = init;
</script>
</body>
</html>