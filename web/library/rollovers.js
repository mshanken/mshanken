// JavaScript Document

bname= navigator.appName;
	bver= parseInt(navigator.appVersion);
	if((bname== "Netscape" && bver>=3) ||
  		(bname== "Microsoft Internet Explorer" && bver>=4)) br="n3";
	else br="n2";
	
		<!-- ws menu buttons // -->
		menu01on = new Image();
		menu02on = new Image();
		menu03on = new Image();
		<!-- ca menu buttons // -->
		menu04on = new Image();
		menu05on = new Image();
		menu06on = new Image();
		<!-- mw menu buttons // -->
		menu07on = new Image();
		menu08on = new Image();
		<!-- im menu buttons // -->
		menu09on = new Image();
		menu10on = new Image();
		
		<!-- MAIN MENU // -->
		menu11on = new Image();
		menu12on = new Image();
		menu13on = new Image();
		menu14on = new Image();
		menu15on = new Image();
		menu16on = new Image();
		
		<!-- HOMEPAGE MENU // -->
		menuh1on = new Image();
		menuh2on = new Image();
		menuh3on = new Image();
		menuh4on = new Image();
		menuh5on = new Image();
		menuh6on = new Image();
		
		
		<!-- ws menu buttons // -->
		menu01off = new Image();
		menu02off = new Image();
		menu03off = new Image();
		<!-- ca menu buttons // -->
		menu04off = new Image();
		menu05off = new Image();
		menu06off = new Image();
		<!-- mw menu buttons // -->
		menu07off = new Image();
		menu08off = new Image();
		<!-- mw menu buttons // -->
		menu09off = new Image();
		menu10off = new Image();
		
		<!-- MAIN MENU // -->
		menu11off = new Image();
		menu12off = new Image();
		menu13off = new Image();
		menu14off = new Image();
		menu15off = new Image();
		menu16off = new Image();
		
		<!-- HOMEPAGE MENU // -->
		menuh1off = new Image();
		menuh2off = new Image();
		menuh3off = new Image();
		menuh4off = new Image();
		menuh5off = new Image();
		menuh6off = new Image();
			
			
			
	<!-- ws menu buttons // -->
	menu01on.src = "../images/ws-menu-1-1.gif";
	menu02on.src = "../images/ws-menu-2-1.gif";
	menu03on.src = "../images/ws-menu-3-1.gif";
	<!-- ca menu buttons // -->
	menu04on.src = "../images/ca-menu-1-1.gif";
	menu05on.src = "../images/ca-menu-2-1.gif";
	menu06on.src = "../images/ca-menu-3-1.gif";
	<!-- mw menu buttons // -->
	menu07on.src = "../images/mw-menu-1-1.gif";
	menu08on.src = "../images/mw-menu-3-1.gif";
	<!-- mw menu buttons // -->
	menu09on.src = "../images/im-menu-1-1.gif";
	menu10on.src = "../images/im-menu-3-1.gif";
	
	<!-- MAIN MENU // -->
	menu11on.src = "../images/main-nav-01-1.gif";
	menu12on.src = "../images/main-nav-02-1.gif";
	menu13on.src = "../images/main-nav-03-1.gif";
	menu14on.src = "../images/main-nav-04-1.gif";
	menu15on.src = "../images/main-nav-05-1.gif";
	menu16on.src = "../images/main-nav-06-1.gif";
	
	<!-- HOMEPAGE MENU // -->
	menuh1on.src = "images/main-nav-01-1.gif";
	menuh2on.src = "images/main-nav-02-1.gif";
	menuh3on.src = "images/main-nav-03-1.gif";
	menuh4on.src = "images/main-nav-04-1.gif";
	menuh5on.src = "images/main-nav-05-1.gif";
	menuh6on.src = "images/main-nav-06-1.gif";
	
	
	
	<!-- ws menu buttons // -->
	menu01off.src = "../images/ws-menu-1.gif";
	menu02off.src = "../images/ws-menu-2.gif";
	menu03off.src = "../images/ws-menu-3.gif";
	<!-- ca menu buttons // -->
	menu04off.src = "../images/ws-menu-1.gif";
	menu05off.src = "../images/ws-menu-2.gif";
	menu06off.src = "../images/ws-menu-3.gif";
	<!-- mw menu buttons // -->
	menu07off.src = "../images/ws-menu-1.gif";
	menu08off.src = "../images/ws-menu-3.gif";
	<!-- mw menu buttons // -->
	menu09off.src = "../images/ws-menu-1.gif";
	menu10off.src = "../images/ws-menu-3.gif";
	
	<!-- MAIN MENU // -->
	menu11off.src = "../images/main-nav-01.gif";
	menu12off.src = "../images/main-nav-02.gif";
	menu13off.src = "../images/main-nav-03.gif";
	menu14off.src = "../images/main-nav-04.gif";
	menu15off.src = "../images/main-nav-05.gif";
	menu16off.src = "../images/main-nav-06.gif";
	
	<!-- HOMEPAGE MENU // -->
	menuh1off.src = "images/main-nav-01.gif";
	menuh2off.src = "images/main-nav-02.gif";
	menuh3off.src = "images/main-nav-03.gif";
	menuh4off.src = "images/main-nav-04.gif";
	menuh5off.src = "images/main-nav-05.gif";
	menuh6off.src = "images/main-nav-06.gif";
	
	
	function activate_nav(imgName)  {
   		if(br=="n3")   {
   			document[imgName].src = eval(imgName+ "on.src");
   		}
	}

	function deactivate_nav(imgName)  {
   		if(br=="n3")   {
   		document[imgName].src = eval(imgName+ "off.src");
   		}
	}
	