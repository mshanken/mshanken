<!-- im imm-calendar imm-adspecs imm-prodspec -->
<?php
if (($header == "im") || ($header == "im-events") || ($header == "imm-calendar") || ($header == "imm-adspecs") || ($header == "imm-prodspec")){
	echo "<div class=\"toaExternalSite\"><p><a href=\"http://www.impactdatabank.com\" target=\"_blank\" class=\"big\">IMPACT DATABANK<br />ANNUAL STUDIES</a></p></div>";
	echo "<div class=\"toaPDFfile\"><p><a href=\"https://s3.amazonaws.com/assets.mshanken.com/wso/pdf/Impact+Media+Kit+2014.pdf\" target=\"_blank\"><em>Impact</em> Magazine Readership<br />at Glance</a></p></div>";
} ?>

<!-- imm-calendar imm-adspecs imm-prodspec -->
<?php
/*
if (($header == "imm-calendar") || ($header == "imm-adspecs") || ($header == "imm-prodspec")){
	echo "<div class=\"toaPDFfile\"><p><a href=\"im/IM_Calendar2012.pdf\" target=\"_blank\">Download <em>Impact</em><br />Editorial Calendar</a></p></div>";
}
*/ ?>

<!-- imm-adspecs imm-prodspec -->
<?php
if (($header == "imm-adspecs") || ($header == "imm-prodspec")){
	echo "<table width=\"267\" border=\"0\" id=\"righttableimpact\">
<tr>
    <td>
        <h3>Digital File Specification</h3><hr color=\"#a53276\" style=\"margin:0 0 0 10px;\" width=\"250\">
        <p><b>PDF/X-1a</b></p>
        <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-9.gif)\">
            <!-- <li>PDF/X-1a file saved on a CD or DVD. Only one ad per file</li>
            <li>All high-resolution images and fonts must be included when the PDF/X-1a file is saved</li>
            <li>Only use type 1 Font - No True Type fonts or font substitutions</b></li>
            <li>Images must be CMYK or Grayscale TIFF or EPS prepared for the SWOP/TR001 color environment</li>
            <li>Total Area Coverage for CMYK color builds cannot exceed 300%</li>
            <li>No RGB or JPEG images. Do not nest EPS file into other EPS files. Do not embed ICC Profiles within images</li>
            <li>All required image trapping must be included in the file(s)</li>
        </ul>

        <hr color=\"#a53276\" style=\"margin:0 0 0 10px;\" width=\"250\">
        <p><b>TIFF/IT-P1</b></p>
        <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-9.gif)\">
            <li>TIFF/IT-P1 Format on a 100 Mb Zip or CD-ROM.</li>
            <li>The Final Page (FP), Continuous Tone (CT), and Linework (LW) files for each ad.</li>
            <li>The files should be named with the following extensions.<br /><br />
            <b>Final Page file</b>: Filename.FP<br />
            <b>Continuous Tone file:</b> Filename.CT<br />
            <b>Line Work file:</b> Filename.LW<br /><br />
            After the TIFF/IT files are created, DO NOT RE-NAME the files</li>
            <li>The LW and HC file must be 2,400 dpi to avoid metric conversion issues</li>
            <li>The CT file should be SWOP (CMYK) 300 dpi. Total area density should not exceed SWOP 300% TAC</li>
            <li>Any 5th or Spot color should be in a separate file set </li>
            <li>All required image trapping must be included in the file(s)</li>
            <li>The black text should be merged with the Linework file</li>
        </ul> -->
			<li>PDF/X1a file (Only one ad per file)</li>
			<li>Images must be CMYK or Grayscale TIFF or EPS prepared for the SWOP3 color environment</li>
			<li>Total Area Coverage for CMYK color builds should not exceed 300%</li>
		</ul>
		
		<p><small>SWOP&reg; is a registered trademark of SWOP, Inc.</small></p>

    </td>
</tr>
</table>";
} ?>

