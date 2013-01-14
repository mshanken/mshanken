<!-- cam-calendar cam-adspec cam-prodspec ca -->
<?php
if (($header == "cam-calendar") || ($header == "cam-adspec") || ($header == "cam-prodspec") || ($header == "ca"))
	echo "<div class=\"toaPDFfile\"><p><a href=\"ca/CA_MediaKit2013_web.pdf\" target=\"_blank\"><em>Cigar Aficionado</em> Magazine<br />Readership at Glance</a></a></p></div>";
?>

<!-- ca-events  -->
<?php
if ($header == "ca-events")
	echo "<!-- <div class=\"toaPDFfile\"><p><a href=\"ca/CAE_BigSmok.pdf\" target=\"_blank\"><br />Big Smoke Schedule Sheet</a></p></div> -->";
?>

<!-- cao-adspecs cao-audience cao-overview cao-glossary -->
<?php
if (($header == "cao-adspecs") || ($header == "cao-audience") || ($header == "cao-overview") || ($header == "cao-glossary"))
	echo "<div class=\"toaPDFfile\"><p><a href=\"ca/CAOmediakit2012.pdf\" target=\"_blank\"><br /><em>Cigar Aficionado</em> Online Media Kit</a></a></p></div>";
?>

<!-- cam-calendar cam-adspec cam-prodspec  -->
<?php
if (($header == "cam-calendar") || ($header == "cam-adspec") || ($header == "cam-prodspec"))
	//echo "<div class=\"toaPDFfile\"><p><a href=\"ca/CA_Insertion_Order.pdf\" target=\"_blank\">Download <em>Cigar Aficionado</em><br />Insertion Order</a></p></div>";
	echo "<div class=\"toaPDFfile\"><p><a href=\"ca/CA_Specs10.pdf\" target=\"_blank\">Download <em>Cigar Aficionado</em><br />Production Specs</a></p></div>";
?>

<!-- cam-adspec cam-prodspec -->
<?php
if (($header == "cam-adspec") || ($header == "cam-prodspec"))
	echo "<table border=\"0\" id=\"righttablecigar\">
<tr>
    <td>
        <h3 style=\"color:#c29a2e;\">Digital File Specification</h3><hr color=\"#c47440\" style=\"margin:0 0 0 10px;\" width=\"250\">
        <p><b>PDF/X-1a</b></p>
        <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-4.gif)\">
            <li>PDF/X1a file (Only one ad per file)</li>
			<li>Images must be CMYK or Grayscale TIFF or EPS prepared for the SWOP3 color environment</li>
			<li>Total Area Coverage for CMYK color builds should not exceed 300%</li>
		</ul>
		
		<p><small>SWOP&reg; is a registered trademark of SWOP, Inc.</small></p>
    </td>
</tr>
</table>";
?>

<!-- cao-adspecs -->
<?php
if ($header == "cao-adspecs")
	echo "<table border=\"0\" id=\"righttablecigar\">
<tr>
    <td>
        <h3>Technical Ad Specs</h3>
        <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-4.gif)\">
            <li><b>Format:</b> We accept GIF, JPEG, HTML, FLASH, IFrame, Javascript, and all other pre-approved, DART-compatible Rich Media files.
            All ads must have a border.</li>
            <li><b>Linking URL:</b> Each creative should be accompanied by a click-through URL.</li>
            <li><b>Due Dates:</b> All creative(s) must be delivered a minimum of 5 business days prior to launch.</li>
        </ul>
        
        <h3>Rich Media Ad Specs</h3>
        <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-4.gif)\">
            <li><b>Flash Files:</b><br /><br />
                <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-4.gif)\">
                    <li>Flash files are accepted in .swf format only</li>
                    <li>To ensure proper tracking, files should contain an action script inserted in this fashion:<br /><br />
                    &nbsp;&nbsp; on (release) {<br />
                    &nbsp;&nbsp; getURL (_level0.clickTag,<br /> 
                    &nbsp;&nbsp; \"_blank\");<br /> 
                    &nbsp;&nbsp; }<br /><br />
                    (This action script will replace the click-through url within the file but urls must still be provided.)</li>
                    <li>All flash files also require a default .gif or .jpeg with a max file size of 30k.</li>
                    <li>Flash 6 or higher</li>
                </ul></li>
                
            <li><b>Expandable Units:</b>
                <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-4.gif)\">
                    <li>300 x 250; max expansion 500 x 500</li>
                    <li>728 x 90; max expansion 728 x 270</li>
		    <li>No expandable ads on the homepage</li>
		    <li>Only one ad can expand on a page at a time</li>
                </ul></li>

            <li><b>Other Rich Media:</b>
                <ul class=\"list\" style=\"list-style-image:url(../images/list-icon-4.gif)\">
                    <li>All Rich Media files also require a default .gif or .jpeg with a max file size of 30K</li>
                    <li>Sound is permitted but must be user initiated</li>
                    <li>Please contact us for additional Rich Media-specific requirements</li>
                </ul></li>
        </ul>
    </td>
</tr>
</table>";
?>

<!-- cao-overview -->
<?php
if ($header == "cao-overview")
	echo "<table border=\"0\" id=\"righttablecigar\">
<tr>
    <td>
        <h3>A Sample of Our Advertisers</h3>
		
		
		<p>BMW<br />
		Casa Fernandez<br />
		CAO<br />
		Cereus<br />
		City National Bank<br />
		Colibri<br />
		Davidoff<br />
		Diageo<br />
		Grauer Chocolates<br />
		Illusione<br />
		Klin/Hammer & Sickle<br />
		La Flor Dominican<br />
		Olivia<br />
		Padron<br />
		Reyes<br />
		Rocky Patel<br />
		Talbott<br />
		Villiger<br />
		Zeneth<br />
		Zippo</p>

        <!-- <h3>Cigar Industry</h3>
        <p>Arganese International<br />
	Davidoff<br />
	Difazio Cigars<br />
	General Cigar<br />
	Illusione<br />
	Menendez Cigars<br />
	Oliva Cigars<br />
	Puro Humidors<br />
	S. T. Dupont<br />
	The Cigar In</p>
        
        <h3>Automotive/Travel/Financial</h3>
        <p>Acura<br />
	Air New Zealand<br />
	American Express<br />
	Delta Airlines<br />
	Hyatt<br />
	Las Vegas Convention and<br />
	Visitors Authority<br />
	Porsche<br />
	Ritz-Carlton</p>
        
        <h3>Fashion/Misc.</h3>
        <p>Best Buy<br />
	Callaway Golf<br />
	Grauer Chocolates<br />
	Gucci<br />
	Max Benjamin<br />
	Playboy Legacy Collection<br />
	Zippo</p> --><br />
    </td>
</tr>
</table>";
?>

<!-- index -->
<?php
if ($header == "ca")
	echo "<table border=\"0\" id=\"righttablecigar\">
<tr>
    <td colspan=\"2\"><p><b>Mendelsohn Affluent Study 2010</b><br /><br />Audience 286,000</p></td>
</tr>
<!-- <tr>
    <td><p>Readers Per Copy*</p></td>
    <td><p>7.63</p></td>
</tr> -->
<tr>
    <td colspan=\"2\"><h3>Sex/Martial Status</h3></td>
</tr>
<tr>	
    <td valign=\"top\">
    <p>Male</p>
    <p>Female</p>
    <p>Married</p>
    </td>
    <td valign=\"top\">
    <p>75%</p>
    <p>25%</p>
    <p>90%</p>
    </td>
</tr>
<tr>
    <td colspan=\"2\"><h3>Age</h3></td>
</tr>
<tr>
    <td valign=\"top\">
    <p>21+</p>
    <p>25-54</p>	
    <p>35-64</p>
    <p>Median Age</p>
    </td>
    <td valign=\"top\">
    <p>100%</p>
    <p>72%</p>
    <p>78%</p>
    <p>50</p>
    </td>
</tr>
<tr>
    <td colspan=\"2\"><h3>Household Income/Assets</h3></td>
</tr>
<tr>
	<td valign=\"top\">
		<p>Median HHI</p>	
		<p>HHI $100,000+</p>	
		<p>HHI $150,000+</p>	
		<p>HHI $200,000+</p>	
		<p>Median Total HH Net Worth</p>	
		<p>Median Value of Financial Accounts	 plus Real Estate</p>
	</td>
    <td valign=\"top\">
		<p>$178,305</p>
		<p>100%</p>
		<p>62%</p>
		<p>38%</p>
		<p>$720,991</p>
		<p>$960, 965</p>
	</td>
</tr>
<tr>
    <td colspan=\"2\"><h3>Education &amp; Occupation</h3></td>
</tr>
<tr>
    <td valign=\"top\">
		<p>Any Top Management/Chief Officer Title</p>	
		<p>College Degree+</p>	
	</td>
	<td valign=\"top\">
		<p>31%</p>
		<p><br />68%</p>
	</td>
</tr>
<tr>
    <td colspan=\"2\"><h3>Property & Real Estate</h3></td>
</tr>
<tr>
    <td valign=\"top\">
    	<p>Own Home</p>
		<p>Own 2+ Homes</p>	
		<p>Value of Principal Residence $250,000+</p>	
		<p>Value of Principal Residence $500,000+</p>	
	</td>
    <td valign=\"top\">
    	<p>96%</p>
		<p>30%</p>
		<p>70%</p>
		<p><br />31%</p>
	</td>
</tr>
<tr>
    <td colspan=\"2\"><h3>Passions, Hobbies & interests</h3></td>
</tr>
<tr>
    <td valign=\"top\">
    	<p>Own a Valid Passport</p>	
		<p>Average Vacations per Year</p>
		<p>Average Business Trips per Year</p>	
		<p>Flies First Class or Business Class</p>	
		<p>Travel Outside the U.S.</p>	
		<p>Spent $3,000+ on Apparel</p>	
		<p>$5,000+ on Leisure, Entertainment, and Dining</p>	
		<p>Purchased Wine by the Case</p>
		<p>Have Wine Cellar/ Refrigerator</p>
		<p>Willing to Spend More on Gourmet Food</p>
		<p>Entertains At Home</p>
		<p>Attends Live Theater</p>
		<p>Visits Museums</p>
		<p>Attends Art Auctions / Gallery Exhibits</p>
		<p>Golf 24+ Times per Year</p>
		<p>Owns / Leases 2+ Vehicles</p>
		<p>Spent $5,000+ on Watch or Jewelry</p>
	</td>
    <td valign=\"top\">
    	<p>81%</p>
		<p>5</p>
		<p>10</p>
		<p> <br />28%</p>
		<p> <br />60%</p>
		<p>78%</p>
		<p>41%</p>
		<p> <br />35%</p>
		<p>32%</p>
		<p> <br />56%</p>
		<p> <br />65%</p>
		<p>60%</p>
		<p>55%</p>
		<p>44%</p>
		<p> <br />240 index</p>
		<p>91%</p>
		<p>401 index</p>
	</td>
</tr>
<!-- <tr>
    <td colspan=\"2\"><h3>Quality of readerSHiP</h3></td>
</tr>
<tr>
    <td valign=\"top\">
    	<p>Read 4 Of The Last 4 Issue</p>
	</td>
    <td valign=\"top\">
    	<p>51%<br />&nbsp;11,223 (Index)</p>
	</td>
</tr> -->
<tr>
    <td colspan=\"2\"><h3>Digital</h3></td>
</tr>
<tr>
    <td valign=\"top\">
    	<p>Computers/Mobiles Owned in Home</p>
		<p>Any Smartphone/Other Mobile</p>
		<p>Any Smartphone</p>
		<p>Any Tablet</p>
		<p>Any Apps Installed on Smartphone</p>
		<p>5+ Apps Installed on Smartphone</p>
		<p>11+ Apps Installed on Smartphone</p>
	</td>
    <td valign=\"top\">
    	<p>100%</p>
		<p><br />91%</p>
		<p><br />60%</p>
		<p>179 index</p>
		<p>55%</p>
		<p><br />211 index</p>
		<p><br />130 index</p>
	</td>
</tr>
<tr>
    <td colspan=\"2\"><br /><p style=\"font:11px Arial;color:#657381;\"><i>Data Source: Mendelsohn Affluent Study 2010, Heads of Household, $100,000</i></p><br /></td>
</tr>
</table>

<!-- <table border=\"0\" id=\"righttablecigar\">
<tr>
    <td valign=\"bottom\" width=\"70%\"><p>Median HHI</p></td>
    <td width=\"30%\"><p><b>MMR 2009</b><br />$164,400</p></td>
</tr>
</table>-->";
?>
