<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<?php 
		$header = "wso-mobile";
		$title = "M. Shanken Communications, Inc | WineSpectator | Online | Overview";
		
		 include "../library/headerTags.inc";
	?>
	<title><?php echo $title ?></title>
		
</head>

<body>

	<div id="wrapperBox" class="addclear">
	
		<div id="heading">
        	<?php include "../library/headersNav.inc"; ?>
        </div>
        <div id="contentWrapper">
			<!--Start: left side body-->
        	<div class="leftCoumnContent">
				<h1 class="ws">WINE SPECTATOR MOBILE</h1>
				<hr class="ws">
				
                <p><big>A new way to reach WineSpectator.com members &mdash; sponsor Wine Spectator Mobile today!</big></p><br />			
                
                <h2 class="ws">About Wine Spectator Mobile</h2>
				<hr class="ws">
                
				<p>Launched in October 2008, Wine Spectator Mobile is for everyone who has ever wanted more information when buying wine on the go.</p>
                
                <ul style="list-style-image:url(../images/list-icon-1-1.gif)">
					<li>Search Wine Spectator's database of more than 200,000 wine ratings</li>
					<li>View our vintage charts</li>
					<li>Reference your shopping lists and current cellar inventory via Personal Wine List/My Cellar </li>
                </ul>
				
                <p align="center"><img src="ws/screenshots/mobile.jpg" width="440" height="378" border="0" alt="Wine Spectator Mobile" /></p>
                
                <h2 class="ws">Additional Information</h2>
				<hr class="ws">
                
                <ul style="list-style-image:url(../images/list-icon-1-1.gif)">
					<li>Third party serving and tracking not accepted.</li>
					<li>Click through URL must link to a mobile web site specifically optimized for mobile phones. If you do not have a mobile web site, your ad must click through to a landing page that is optimized for mobile phones.</li>
                </ul>
                
              
				<p></p>
			</div>
			<!--left side body-->
			
			<!--right side body-->
            <div class="rightColumnContent">
            	<?php include "rightSideContent.inc"; ?>
            </div>
			<!--right side body-->
			
		</div>
        
        <?php include "../library/footer.inc"; ?>
	</div>


</body>
</html>
