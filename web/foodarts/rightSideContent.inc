<!-- fa fam-adspecs fam-calendar fam-prodspec -->
<?php
if (($header == "fa") || ($header == "fam-adspecs") || ($header == "fam-calendar") || ($header == "fam-prodspec")){
	echo "<div class=\"toaPDFfile\"><p><a href=\"fa/FA_MediaKit2013_Web.pdf\" target=\"_blank\"><em>Food Arts</em> Magazine Readership<br />at Glance</a></a></p></div>";
	//echo "<div class=\"toaPDFfile\"><p><a href=\"fa/FA_EditCalendar10.pdf\" target=\"_blank\"><em>Food Arts</em> Magazine Readership<br />at Glance</a></a></p></div>";
} ?>

<!-- fam-adspecs fam-calendar fam-prodspec -->
<?php
if (($header == "fam-adspecs") || ($header == "fam-calendar") || ($header == "fam-prodspec")){
	//echo "<div class=\"toaPDFfile\"><p><a href=\"fa/FA_Letterhead_IO.pdf\" target=\"_blank\">Download <em>Food Arts</em><br />Insertion Order</a></p></div>";
	echo "<div class=\"toaPDFfile\"><p><a href=\"fa/FA_Specs.pdf\" target=\"_blank\">Download <em>Food Arts</em><br />Production Specs</a></p></div>";
} ?>

<!-- fam-adspecs fam-adspecs -->
<?php
if ($header == "fam-prodspec"){
	echo "<table width=\"267\" border=\"0\" id=\"righttablefood\">
<tr>
    <td>
        <h3>Digital File Specification</h3><hr color=\"#e68749\" style=\"margin:0 0 0 10px;\" width=\"250\">
        <p><b>PDF/X-1a</b></p>
        <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-8.gif)\">
            <li>PDF/X1a file (Only one ad per file)</li>
			<li>Images must be CMYK or Grayscale TIFF or EPS prepared for the SWOP3 color environment</li>
			<li>Total Area Coverage for CMYK color builds should not exceed 300%</li>
        </ul>
		
		<p><small>SWOP&reg; is a registered trademark of SWOP, Inc.</small></p>
    </td>
</tr>
</table>";
} ?>

