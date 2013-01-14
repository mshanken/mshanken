<!-- mw mw-events mwm-calendar mwm-prodspec mwm-adspecs -->
<?php
if (($header == "mw") || ($header == "mw-events") || ($header == "mwm-calendar") || ($header == "mwm-prodspec") || ($header == "mwm-adspecs")){
	echo "<div class=\"toaPDFfile\"><p><a href=\"mw/MW_Mediakit2013_Web.pdf\" target=\"_blank\"><em>Market Watch</em> Magazine Readership<br />at Glance</a></p></div>";
} ?>

<!-- mwm-calendar mwm-prodspec mwm-adspecs -->
<?php
if (($header == "mwm-calendar") || ($header == "mwm-prodspec") || ($header == "mwm-adspecs")){
	//echo "<div class=\"toaPDFfile\"><p><a href=\"mw/MWIO.pdf\" target=\"_blank\">Download <em>Market Watch</em><br />Insertion Order</a></p></div>";
	echo "<div class=\"toaPDFfile\"><p><a href=\"mw/MW_Specs10.pdf\" target=\"_blank\">Download <em>Market Watch</em><br />Production Specs</a><p></div>";
} ?>

<!-- mwm-prodspec mwm-adspecs -->
<?php
if ($header == "mwm-prodspec"){
	echo "<table width=\"267\" border=\"0\" id=\"righttablemarket\">
<tr>
    <td>
    <h3>Digital File Specification</h3><hr color=\"#919240\" style=\"margin:0 0 0 10px;\" width=\"250\">
    <p><b>PDF/X-1a</b></p>
    <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-10.gif)\">
        <li>PDF/X1a file (Only one ad per file)</li>
        <li>Images must be CMYK or Grayscale TIFF or EPS prepared for the SWOP3 color environment</li>
        <li>Total Area Coverage for CMYK color builds should not exceed 300%</li>        
    </ul>
	<p><small>SWOP&reg; is a registered trademark of SWOP, Inc.</small></p>
    </td>
</tr>
</table>";
} ?>
