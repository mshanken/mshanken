<?php if ( $header == "imm-adspecs" ){
		$menu = "<p class=\"immsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"im-events.php\">EVENTS</a></p>";
                
		$imageBackground = "im/im-main-image.jpg";
		
		$submenu = "<p class=\"immsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"imm-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"imm-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#impact','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"https://www.sunbeltfs.com/forms/ii/login.asp?sid=&eid=E99999\" target=\"_blank\">CUSTOMER CARE</a> | <a href=\"http://www.impactdatabank.com\" target=\"_blank\">IMPACT DATABANK</a></p></p>";
		
} elseif ( $header == "imm-calendar" ){
		$menu = "<p class=\"immsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"im-events.php\">EVENTS</a></p>";
            
		$imageBackground = "im/im-main-image.jpg";
		
		$submenu = "<p class=\"immsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"imm-prodspec.php\">PRODUCTION SPECS</a> | <span>CLOSING DATES</span> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#impact','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"https://www.sunbeltfs.com/forms/ii/login.asp?sid=&eid=E99999\" target=\"_blank\">CUSTOMER CARE</a> | <a href=\"http://www.impactdatabank.com\" target=\"_blank\">IMPACT DATABANK</a></p></p>";
				
} elseif ( $header == "imm-prodspec" ){
		$menu = "<p class=\"immsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"im-events.php\">EVENTS</a></p>";
            
		$imageBackground = "im/im-main-image.jpg";
		
		$submenu = "<p class=\"immsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <span>PRODUCTION SPECS</span> | <a href=\"imm-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#impact','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"https://www.sunbeltfs.com/forms/ii/login.asp?sid=&eid=E99999\" target=\"_blank\">CUSTOMER CARE</a> | <a href=\"http://www.impactdatabank.com\" target=\"_blank\">IMPACT DATABANK</a></p></p>";
				
} elseif ( $header == "im-events" ){
		$menu = "<p class=\"immsm\"><a href=\"index.php\">MAGAZINE</a> | <span>EVENTS</span></p>";
        
        $imageBackground = "im/im-main-image.jpg";
		
		$submenu = "";
		
} elseif ( $header == "im" ) {
		$menu = "<p class=\"immsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"im-events.php\">EVENTS</a></p>";
                
		$imageBackground = "im/im-main-image.jpg";
		
		$submenu = "<p class=\"immsm\"><span>OVERVIEW</span> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a></a> | <a href=\"imm-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"imm-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#impact','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"https://www.sunbeltfs.com/forms/ii/login.asp?sid=&eid=E99999\" target=\"_blank\">CUSTOMER CARE</a> | <a href=\"http://www.impactdatabank.com\" target=\"_blank\">IMPACT DATABANK</a></p></p>";
				
} elseif( $header == "ca-events" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"cao-overview.php\">ONLINE</a> | <span>EVENTS</span></p>";

		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "";
		
} elseif ( $header == "cam-adspec" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"cao-overview.php\">ONLINE</a> | <a href=\"ca-events.php\">EVENTS</a></p>";
                
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"cam-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"cam-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "cam-calendar" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"cao-overview.php\">ONLINE</a> | <a href=\"ca-events.php\">EVENTS</a></p>";
            
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"cam-prodspec.php\">PRODUCTION SPECS</a> | <span>CLOSING DATES</span> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "cam-prodspec" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"cao-overview.php\">ONLINE</a> | <a href=\"ca-events.php\">EVENTS</a></p>";
            
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <span>PRODUCTION SPECS</span> | <a href=\"cam-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "cao-adplace" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"cao-overview.php\"><span>ONLINE</span></a> | <a href=\"ca-events.php\">EVENTS</a></p>";
            
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><a href=\"cao-overview.php\">OVERVIEW</a> | <a href=\"cao-audience.php\">AUDIENCE</a> | <span>AD PLACEMENTS</span> | <a href=\"cao-adspecs.php\">AD SPECS</a> | <a href=\"cao-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "cao-adspecs" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"cao-overview.php\"><span>ONLINE</span></a> | <a href=\"ca-events.php\">EVENTS</a></p>";
                
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><a href=\"cao-overview.php\">OVERVIEW</a> | <a href=\"cao-audience.php\">AUDIENCE</a> | <a href=\"cao-adplace.php\">AD PLACEMENTS</a> | <span>AD SPECS</span> | <a href=\"cao-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
		
} elseif ( $header == "cao-audience" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"cao-overview.php\"><span>ONLINE</span></a> | <a href=\"ca-events.php\">EVENTS</a></p>";
                
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><a href=\"cao-overview.php\">OVERVIEW</a> | <span>AUDIENCE</span> | <a href=\"cao-adplace.php\">AD PLACEMENTS</a> | <a href=\"cao-adspecs.php\">AD SPECS</a> | <a href=\"cao-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "cao-glossary" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"cao-overview.php\"><span>ONLINE</span></a> | <a href=\"ca-events.php\">EVENTS</a></p>";
                
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><a href=\"cao-overview.php\">OVERVIEW</a> | <a href=\"cao-audience.php\">AUDIENCE</a> | <a href=\"cao-adplace.php\">AD PLACEMENTS</a> | <a href=\"cao-adspecs.php\">AD SPECS</a> | <span>GLOSSARY</span> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "cao-overview" ){
		$menu = "<p class=\"camsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"cao-overview.php\"><span>ONLINE</span></a> | <a href=\"ca-events.php\">EVENTS</a></p>";
                
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><span>OVERVIEW</span> | <a href=\"cao-audience.php\">AUDIENCE</a> | <a href=\"cao-adplace.php\">AD PLACEMENTS</a> | <a href=\"cao-adspecs.php\">AD SPECS</a> | <a href=\"cao-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "ca" ) {
		$menu = "<p class=\"camsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"cao-overview.php\">ONLINE</a> | <a href=\"ca-events.php\">EVENTS</a></p>";
                
		$imageBackground = "ca/ca-main-image.jpg";
		
		$submenu = "<p class=\"camsm\"><span>OVERVIEW</span> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"cam-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"cam-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#cigar','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "fam-adspecs" ){
		$menu = "<p class=\"famsm\"><a href=\"index.php\"><span>MAGAZINE</span></a></p>";
                
		$imageBackground = "fa/fa-main-image.jpg";
		
		$submenu = "<p class=\"famsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <!-- <a href=\"fam-prodspec.php\">PRODUCTION SPECS</a> | --><a href=\"fam-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#foodarts','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/fa/cslogin.asp\" target=\"_blank\">CUSTOMER CARE</a></p>";
				
} elseif ( $header == "fam-calendar" ){
		$menu = "<p class=\"famsm\"><a href=\"index.php\"><span>MAGAZINE</span></a></p>";
            
		$imageBackground = "fa/fa-main-image.jpg";
		
		$submenu = "<p class=\"famsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"fam-prodspec.php\">PRODUCTION SPECS</a> | <span>CLOSING DATES</span> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#foodarts','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/fa/cslogin.asp\" target=\"_blank\">CUSTOMER CARE</a></p>";
		
} elseif ( $header == "fam-prodspec" ){
		$menu = "<p class=\"famsm\"><a href=\"index.php\"><span>MAGAZINE</span></a></p>";
            
		$imageBackground = "fa/fa-main-image.jpg";
		
		$submenu = "<p class=\"famsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <span>PRODUCTION SPECS</span> | <a href=\"fam-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#foodarts','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/fa/cslogin.asp\" target=\"_blank\">CUSTOMER CARE</a></p>";
				
} elseif ( $header == "fa" ) {
		$menu = "<p class=\"famsm\"><a href=\"index.php\"><span>MAGAZINE</span></a></p>";
                
		$imageBackground = "fa/fa-main-image.jpg";
		
		$submenu = "<p class=\"famsm\"><span>OVERVIEW</span> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"fam-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"fam-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#foodarts','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/fa/cslogin.asp\" target=\"_blank\">CUSTOMER CARE</a></p>";
				
} elseif ( $header == "mwm-adspecs" ){
		$menu = "<p class=\"mwmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"mw-events.php\">EVENTS</a></p>";
                
		$imageBackground = "mw/mw-main-image.jpg";
		
		$submenu = "<p class=\"mwmsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"mwm-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"mwm-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#mwatch','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/select.asp?pid=MW&arq=customer care&addurl=eid=E99999\" target=\"_blank\">CUSTOMER CARE</a></p>";
				
} elseif ( $header == "mwm-calendar" ){
		$menu = "<p class=\"mwmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"mw-events.php\">EVENTS</a></p>";
            
		$imageBackground = "mw/mw-main-image.jpg";
		
		$submenu = "<p class=\"mwmsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"mwm-prodspec.php\">PRODUCTION SPECS</a> | <span>CLOSING DATES</span> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#mwatch','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/select.asp?pid=MW&arq=customer care&addurl=eid=E99999\" target=\"_blank\">CUSTOMER CARE</a></p>";
				
} elseif ( $header == "mwm-prodspec" ){
		$menu = "<p class=\"mwmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"mw-events.php\">EVENTS</a></p>";
            
		$imageBackground = "mw/mw-main-image.jpg";
		
		$submenu = "<p class=\"mwmsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <span>PRODUCTION SPECS</span> | <a href=\"mwm-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#mwatch','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/select.asp?pid=MW&arq=customer care&addurl=eid=E99999\" target=\"_blank\">CUSTOMER CARE</a></p>";
				
} elseif ( $header == "mw-events" ){
		$menu = "<p class=\"mwmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"mw-events.php\"><span>EVENTS</span></a></p>";
        
        $imageBackground = "mw/mw-main-image.jpg";
		
		$submenu = "";
		
} elseif ( $header == "mw" ) {
		$menu = "<p class=\"mwmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"mw-events.php\">EVENTS</a></p>";
                
		$imageBackground = "mw/mw-main-image.jpg";
		
		$submenu = "<p class=\"mwmsm\"><span>OVERVIEW</span> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"mwm-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"mwm-calender.php\">CLOSING DATES</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#mwatch','','scrollbars=yes,resizable=no,status=no,width=690,height=600');javascript:void(0);\">CONTACT US</a> | <a href=\"http://www.sunbeltfs.com/forms/select.asp?pid=MW&arq=customer care&addurl=eid=E99999\" target=\"_blank\">CUSTOMER CARE</a></p>";
				
} elseif( $header == "ws-events" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\">ONLINE</a> | <a href=\"ws-events.php\"><span>EVENTS</span></a></p>";

		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "";
		
} elseif ( $header == "wsm-adspec" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"wso-overview.php\">ONLINE</a> | <a href=\"ws-events.php\">EVENTS</a></p>";
		
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"wsm-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"wsm-calender.php\">CLOSING DATES</a> | <a href=\"wsm-classified.php\">CLASSIFIEDS</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
			
} elseif ( $header == "wsm-calendar" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"wso-overview.php\">ONLINE</a> | <a href=\"ws-events.php\">EVENTS</a></p>";
		
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"wsm-prodspec.php\">PRODUCTION SPECS</a> | <span>CLOSING DATES</span> | <a href=\"wsm-classified.php\">CLASSIFIEDS</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wsm-classified" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"wso-overview.php\">ONLINE</a> | <a href=\"ws-events.php\">EVENTS</a></p>";
				
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"wsm-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"wsm-calender.php\">CLOSING DATES</a> | <span>CLASSIFIEDS</span> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wsm-prodspec" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"wso-overview.php\">ONLINE</a> | <a href=\"ws-events.php\">EVENTS</a></p>";
		
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"index.php\">OVERVIEW</a> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <span>PRODUCTION SPECS</span> | <a href=\"wsm-calender.php\">CLOSING DATES</a> | <a href=\"wsm-classified.php\">CLASSIFIEDS</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wso-adplace" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\"><span>ONLINE</span></a> | <a href=\"ws-events.php\">EVENTS</a></p>";
		
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"wso-overview.php\">OVERVIEW</a> | <a href=\"wso-audience.php\">AUDIENCE</a> | <span>AD PLACEMENTS</span> | <a href=\"wso-adspecs.php\">AD SPECS</a> | <a href=\"wso-mobile.php\">MOBILE</a> | <a href=\"wso-classifieds.php\">CLASSIFIEDS</a> | <a href=\"wso-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wso-adspecs" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\"><span>ONLINE</span></a> | <a href=\"ws-events.php\">EVENTS</a></p>";
				
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"wso-overview.php\">OVERVIEW</a> | <a href=\"wso-audience.php\">AUDIENCE</a> | <a href=\"wso-adplace.php\">AD PLACEMENTS</a> | <span>AD SPECS</span> | <a href=\"wso-mobile.php\">MOBILE</a> | <a href=\"wso-classifieds.php\">CLASSIFIEDS</a> | <a href=\"wso-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wso-audience" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\"><span>ONLINE</span></a> | <a href=\"ws-events.php\">EVENTS</a></p>";
				
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"wso-overview.php\">OVERVIEW</a> | <span>AUDIENCE</span> | <a href=\"wso-adplace.php\">AD PLACEMENTS</a> | <a href=\"wso-adspecs.php\">AD SPECS</a> | <a href=\"wso-mobile.php\">MOBILE</a> | <a href=\"wso-classifieds.php\">CLASSIFIEDS</a> | <a href=\"wso-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wso-mobile" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\"><span>ONLINE</span></a> | <a href=\"ws-events.php\">EVENTS</a></p>";
		
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"wso-overview.php\">OVERVIEW</a> | <a href=\"wso-audience.php\">AUDIENCE</a> | <a href=\"wso-adplace.php\">AD PLACEMENTS</a> | <a href=\"wso-adspecs.php\">AD SPECS</a> | <span>MOBILE</span> | <a href=\"wso-classifieds.php\">CLASSIFIEDS</a> | <a href=\"wso-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
		
} elseif ( $header == "wso-classifieds" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\"><span>ONLINE</span></a> | <a href=\"ws-events.php\">EVENTS</a></p>";
		
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"wso-overview.php\">OVERVIEW</a> | <a href=\"wso-audience.php\">AUDIENCE</a> | <a href=\"wso-adplace.php\">AD PLACEMENTS</a> | <a href=\"wso-adspecs.php\">AD SPECS</a> | <a href=\"wso-mobile.php\">MOBILE</a> | <span>CLASSIFIEDS</span> | <a href=\"wso-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wso-glossary" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\"><span>ONLINE</span></a> | <a href=\"ws-events.php\">EVENTS</a></p>";
				
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><a href=\"wso-overview.php\">OVERVIEW</a> | <a href=\"wso-audience.php\">AUDIENCE</a> | <a href=\"wso-adplace.php\">AD PLACEMENTS</a> | <a href=\"wso-adspecs.php\">AD SPECS</a> | <a href=\"wso-mobile.php\">MOBILE</a> | <a href=\"wso-classifieds.php\">CLASSIFIEDS</a> | <span>GLOSSARY</span> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "wso-overview" ){
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\">MAGAZINE</a> | <a href=\"wso-overview.php\"><span>ONLINE</span></a> | <a href=\"ws-events.php\">EVENTS</a></p>";
				
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><span>OVERVIEW</span> | <a href=\"wso-audience.php\">AUDIENCE</a> | <a href=\"wso-adplace.php\">AD PLACEMENTS</a> | <a href=\"wso-adspecs.php\">AD SPECS</a> | <a href=\"wso-mobile.php\">MOBILE</a> | <a href=\"wso-classifieds.php\">CLASSIFIEDS</a> | <a href=\"wso-glossary.php\">GLOSSARY</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} elseif ( $header == "ws" ) {
		$menu = "<p class=\"wsmsm\"><a href=\"index.php\"><span>MAGAZINE</span></a> | <a href=\"wso-overview.php\">ONLINE</a> | <a href=\"ws-events.php\">EVENTS</a></p>";
				
		$imageBackground = "ws/ws-main-image.jpg";
		
		$submenu = "<p class=\"wsmsm\"><span>OVERVIEW</span> | <a href=\"http://mshankencustompublishing.com/\" target=\"_blank\">CUSTOM MEDIA</a> | <a href=\"wsm-prodspec.php\">PRODUCTION SPECS</a> | <a href=\"wsm-calender.php\">CLOSING DATES</a> | <a href=\"wsm-classified.php\">CLASSIFIEDS</a> | <a href=\"#\" onclick=\"javascript:vartarget=window.open('../contact.html#wine','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);\">CONTACT US</a></p>";
				
} else {
		$menu = "";
		$imageBackground = "";
		$submenu = "";
} ?>



		<table id="header" width="736" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td valign="top" height="75"><a href="../"><img src="../images/header-img.gif" width="736" height="75" border="0"/></a></td>
		</tr>
		<tr>
			<td align="left" valign="middle" height="40">
			<!--Main Menu -->
				<a href="../winespectator/"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-WS.jpg" width="155" height="21" border="0" name="menu11"/></a><a href="../cigaraficionado/"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-CA.jpg" width="155" height="21" border="0" name="menu12"/></a><a href="../marketwatch"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-MW.jpg" width="155" height="21" border="0" name="menu13"/></a><a href="../impact/"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-Impact.jpg" width="150" height="21" border="0" name="menu14"/></a><a href="#" onclick="javascript:vartarget=window.open('../contact.html','','scrollbars=yes,resizable=no,status=yes,width=690,height=600');javascript:void(0);"><img src="https://s3.amazonaws.com/assets.mshanken.com/wso/static/promos/MSCnavbar_736x40-C.U.jpg" width="121" height="21" border="0" name="menu16"/></a>
				
			<!--Main Menu -->
			</td>
		</tr>
		<tr>
			<td id="menu" valign="bottom" background="<?php echo $imageBackground ?>" height="164"><?php echo $menu ?></td>
		</tr>
		<tr>
			<td id="submenu"><?php echo $submenu ?></td>
		</tr>
        </table>