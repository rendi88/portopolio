function kotakOtak()
{
	var angkablue = [
		'asset/0-blue.png',
		'asset/1-blue.png',
		'asset/2-blue.png',
		'asset/3-blue.png',
		'asset/4-blue.png',
		'asset/5-blue.png',
		'asset/6-blue.png',
		'asset/7-blue.png',
		'asset/8-blue.png',
		'asset/9-blue.png',
		'asset/slash-blue.png'
	];

	var angkared = [
		'asset/0-red.png',
		'asset/1-red.png',
		'asset/2-red.png',
		'asset/3-red.png',
		'asset/4-red.png',
		'asset/5-red.png',
		'asset/6-red.png',
		'asset/7-red.png',
		'asset/8-red.png',
		'asset/9-red.png',
		'asset/slash-red.png'
	];

	var angkagreen = [
		'asset/0-green.png',
		'asset/1-green.png',
		'asset/2-green.png',
		'asset/3-green.png',
		'asset/4-green.png',
		'asset/5-green.png',
		'asset/6-green.png',
		'asset/7-green.png',
		'asset/8-green.png',
		'asset/9-green.png',
		'asset/slash-green.png'
	];
	
	var char1 = [
		'asset/p1-b.png',
		'asset/p1-g.png',
		'asset/p1-uo.png'
	]
	
	var char1press = [
		'asset/p1-b-press.png',
		'asset/p1-g-press.png',
		'asset/p1-uo-press.png'
	]
	
	var char1glow = [
		'asset/p1-b-glow.png',
		'asset/p1-g-glow.png',
		'asset/p1-uo-glow.png'
	]

	var char2 = [
		'asset/p2-b.png',
		'asset/p2-g.png',
		'asset/p2-uo.png'
	]
	
	var char2press = [
		'asset/p2-b-press.png',
		'asset/p2-g-press.png',
		'asset/p2-uo-press.png'
	]
	
	var char2glow = [
		'asset/p2-b-glow.png',
		'asset/p2-g-glow.png',
		'asset/p2-uo-glow.png'
	]

	var char3 = [
		'asset/comp.png'
	]

	var char3glow = [
		'asset/comp-glow.png'
	]

	var tutTurnText = [
		'asset/tutor-1.5.png',
		'asset/tutor-2.5.png',
		'asset/tutor-3.5.png',
		'asset/tutor-4.5.png',
		'asset/tutor-5.5.png'
	]

	var btn = {
		'btnhelp' : 'asset/help.png',
		'btnlang' : 'asset/eng.png',
		'btnhome' : 'asset/home.png',
		'btnvscomp' : 'asset/vscomp-btn-1.png',
		'btnvsfriend' : 'asset/vsfriend-btn-2.png',
		'btnplay' : 'asset/play-btn.png',
		
		'btnleft' : 'asset/left-btn.png',
		'btnright' : 'asset/right-btn.png',
		
		'btnChar1' : char1[0],
		'btnChar2' : char2[1],
		'btnComp' : 'asset/comp.png',
		
		'btnpause' : 'asset/pause.png',
		
		'btnclosepop' : 'asset/close-popup.png',
		'btnchangegrid' : 'asset/cg-eng.png',
		'btnchangeplayer' : 'asset/change-player.png',
		'btnhelppopup' : 'asset/help-pop-up.png',
		'btnreset' : 'asset/reset.png',
		'btnresume' : 'asset/resume.png',
		
		'btnnext' : 'asset/next-btn.png',
		'btnclosetutor' : 'asset/close-btn.png',
		'btnreplay' : 'asset/vr-btn.png',
		'btnskiptutor' : 'asset/skip-btn.png',

		'btnhomesmall' : 'asset/homeSmall.png',
		'btnresetsmall' : 'asset/resetSmall.png'
	}
	
	var btn_press = {
		'btnhelp' : 'asset/help-press.png',
		'btnlang' : 'asset/eng-press.png',
		'btnhome' : 'asset/home-press.png',
		
		'btnvscomp' : 'asset/vscomp-press-2.png',
		'btnvsfriend' : 'asset/vsfriend-press-2.png',
		'btnplay' : 'asset/play-press.png',
		
		'btnleft' : 'asset/left-press.png',
		'btnright' : 'asset/right-press.png',
		
		'btnChar1' : char1press[0],
		'btnChar2' : char2press[1],
		'btnComp' : 'asset/comp.png',
		
		'btnpause' : 'asset/pause-press.png',
		
		'btnclosepop' : 'asset/close-popup-press.png',
		'btnchangegrid' : 'asset/cg-eng-press.png',
		'btnchangeplayer' : 'asset/change-player-press.png',
		'btnhelppopup' : 'asset/help-popup-press.png',
		'btnreset' : 'asset/reset-press.png',
		'btnresume' : 'asset/resume-press.png',
		
		'btnnext' : 'asset/next-press.png',
		'btnclosetutor' : 'asset/close-press.png',
		'btnreplay' : 'asset/vr-btn-press.png',
		'btnskiptutor' : 'asset/skip-press.png',

		'btnhomesmall' : 'asset/homeSmall-press.png',
		'btnresetsmall' : 'asset/resetSmall-press.png'
	}

	var btnindo = {
		'btnhelp' : 'asset/help.png',
		'btnlang' : 'asset/ind.png',
		'btnhome' : 'asset/home.png',
		'btnvscomp' : 'asset/vskomp-btn-2.png',
		'btnvsfriend' : 'asset/vsteman-btn-2.png',
		'btnplay' : 'asset/main-btn.png',
		
		'btnleft' : 'asset/left-btn.png',
		'btnright' : 'asset/right-btn.png',
		
		'btnChar1' : char1[0],
		'btnChar2' : char2[1],
		'btnComp' : 'asset/comp.png',
		
		'btnpause' : 'asset/pause.png',
		
		'btnclosepop' : 'asset/close-popup.png',
		'btnchangegrid' : 'asset/cg-ind.png',
		'btnchangeplayer' : 'asset/change-player-indo.png',
		'btnhelppopup' : 'asset/bantu-btn.png',
		'btnreset' : 'asset/reset.png',
		'btnresume' : 'asset/resume.png',
		
		'btnnext' : 'asset/lanjut-btn.png',
		'btnclosetutor' : 'asset/selesai-btn.png',
		'btnreplay' : 'asset/tayangulang-btn.png',
		'btnskiptutor' : 'asset/lewat-btn.png',

		'btnhomesmall' : 'asset/homeSmall.png',
		'btnresetsmall' : 'asset/resetSmall.png'
	}
	
	var btnindo_press = {
		'btnhelp' : 'asset/help-press.png',
		'btnlang' : 'asset/ind-press.png',
		'btnhome' : 'asset/home-press.png',
		'btnvscomp' : 'asset/vskomp-press-2.png',
		'btnvsfriend' : 'asset/vsteman-press-2.png',
		'btnplay' : 'asset/main-press.png',
		
		'btnleft' : 'asset/left-press.png',
		'btnright' : 'asset/right-press.png',
		
		'btnChar1' : char1press[0],
		'btnChar2' : char2press[1],
		'btnComp' : 'asset/comp.png',
		
		'btnpause' : 'asset/pause-press.png',
		
		'btnclosepop' : 'asset/close-popup-press.png',
		'btnchangegrid' : 'asset/cg-ind-press.png',
		'btnchangeplayer' : 'asset/change-player-indo-press.png',
		'btnhelppopup' : 'asset/bantu-press.png',
		'btnreset' : 'asset/reset-press.png',
		'btnresume' : 'asset/resume-press.png',
		
		'btnnext' : 'asset/lanjut-press.png',
		'btnclosetutor' : 'asset/selesai-press.png',
		'btnreplay' : 'asset/tayangulang-press.png',
		'btnskiptutor' : 'asset/lewat-press.png',

		'btnhomesmall' : 'asset/homeSmall-press.png',
		'btnresetsmall' : 'asset/resetSmall-press.png'
	}
	
	var gbr = {
		"logo" : 'asset/logo.png',
		"chooseavatar" : 'asset/chooseavatar.png',
		"choosegrid" : 'asset/choosegrid.png',
		"player1" : 'asset/player1.png',
		"player2" : 'asset/player2.png',
		//"grid4" : 'asset/4x4-btn.png',
		"grid5" : 'asset/5x5-btn.png',
		"grid6" : 'asset/6x6-btn.png',
		"grid7" : 'asset/7x7-btn.png',
		"grid8" : 'asset/8x8-btn.png',
		"grid9" : 'asset/9x9-btn.png',
		
		"grid5big" : 'asset/5x5-btn-168.png',
		"grid6big" : 'asset/6x6-btn-168.png',
		"grid7big" : 'asset/7x7-btn-168.png',
		"grid8big" : 'asset/8x8-btn-168.png',
		"grid9big" : 'asset/9x9-btn-168.png',

		"texttut1" : 'asset/1-eng.png',
		"texttut2" : 'asset/2-eng.png',
		"texttut3" : 'asset/3-eng.png',
		"texttut4" : 'asset/4-eng.png',
		"texttut5" : 'asset/5-eng.png',
		"texttut6" : 'asset/6-eng.png',
		
		"win" : 'asset/win.png',
		"lose" : 'asset/lose.png',
		"draw" : 'asset/draw.png',

		"player1win" : 'asset/player1-win.png',
		"player2win" : 'asset/player2-win.png',

		"viewReplayText" : 'asset/view-replay-text.png'
	}
	
	var gbrindo = {
		"logo" : 'asset/logo.png',
		"chooseavatar" : 'asset/pilihavatar.png',
		"choosegrid" : 'asset/pilihareabermain.png',
		"player1" : 'asset/pemain1.png',
		"player2" : 'asset/pemain2.png',
		//"grid4" : 'asset/4x4-btn.png',
		"grid5" : 'asset/5x5-btn.png',
		"grid6" : 'asset/6x6-btn.png',
		"grid7" : 'asset/7x7-btn.png',
		"grid8" : 'asset/8x8-btn.png',
		"grid9" : 'asset/9x9-btn.png',
		
		"grid5big" : 'asset/5x5-btn-168.png',
		"grid6big" : 'asset/6x6-btn-168.png',
		"grid7big" : 'asset/7x7-btn-168.png',
		"grid8big" : 'asset/8x8-btn-168.png',
		"grid9big" : 'asset/9x9-btn-168.png',

		"texttut1" : 'asset/1-bhs.png',
		"texttut2" : 'asset/2-bhs.png',
		"texttut3" : 'asset/3-bhs.png',
		"texttut4" : 'asset/4-bhs.png',
		"texttut5" : 'asset/5-bhs.png',
		"texttut6" : 'asset/6-bhs.png',
		
		"win" : 'asset/menang.png',
		"lose" : 'asset/kalah.png',
		"draw" : 'asset/seri.png',

		"player1win" : 'asset/pemain1-win.png',
		"player2win" : 'asset/pemain2-win.png',
		"viewReplayText" : 'asset/tayang-ulang-text.png'		
	}
	
	var sources = {
		bg1 : 'asset/bg-homepage-04.png',
		bg2 : 'asset/bg-screen-play-03.png',
		bgtut : 'asset/bg-tutor.png',
		
		bgpopup : 'asset/bg-popup.png',
		bgpopresult : 'asset/bg-popup-small.png',
		
		
		dot_blank : 'asset/grey-dot.png',
		dot_glow : 'asset/grey-glow-dot.png',
		dot_blue : 'asset/blue-dot.png',
		dot_green : 'asset/comp-green-dot.png',
		dot_red : 'asset/red-dot.png',
		dot_blue_glow : 'asset/blue-dot-glow.png',
		dot_green_glow : 'asset/comp-green-dot-glow.png',
		dot_red_glow : 'asset/red-dot-glow.png',

		char1 : char1[0],
		char2 : char2[1],
		char3 : char3[0],

		char1Glow : char1glow[0],
		char2Glow : char2glow[1],
		char3Glow : char3glow[0],

		tutgbr2: 'asset/tutor1.png',
		tutgbr3: 'asset/tutor2.png',
		//tutgbr4: 'asset/img-41.png',
		tutgbr4: 'asset/tutor3.png',
		tutgbr41: 'asset/tutor4.png',
		tutgbr5: 'asset/img-5.png',
		
		boyWin: 'asset/boy-win.png',
		boyLose: 'asset/boy-lose.png',
		
		girlWin: 'asset/girl-win.png',
		girlLose: 'asset/girl-lose.png',
		
		uoWin: 'asset/uo-win.png',
		uoLose: 'asset/uo-lose.png',
		
		boyCompDraw : 'asset/drawBoyComp.png',
		girlCompDraw : 'asset/drawGirlComp.png',
		uoCompDraw : 'asset/drawUoComp.png',

		draw12 : 'asset/draw12.png',
		draw13 : 'asset/draw13.png',
		draw21 : 'asset/draw21.png',
		draw23 : 'asset/draw23.png',
		draw31 : 'asset/draw31.png',
		draw32 : 'asset/draw32.png',

		pageSelect : 'asset/pagination-select-page.png',
		pageUnselect : 'asset/pagination-unselect-page.png',

		arrow : 'asset/arrow.png',
		hand : 'asset/hand.png',

		btnleft : 'asset/left-btn.png',
		btnright : 'asset/right-btn.png',
	};

	var confeti = [
		'asset/p1.png',
		'asset/p2.png',
		'asset/p3.png',
		'asset/p4.png',
		'asset/p5.png',
		'asset/p6.png',
		'asset/p7.png',
		'asset/p8.png',
		'asset/p9.png'
	];
	
	function AssetManager()
	{
		this.successCount = 0;
		this.errorCount = 0;
		this.cache = {};
		this.downloadQueue = [];
	}
	
	AssetManager.prototype.queueDownload = function(path)
	{
		this.downloadQueue.push(path);
	}
	
	AssetManager.prototype.downloadAll = function(downloadCallback)
	{
		if (this.downloadQueue.length === 0) {
			downloadCallback();
		}
		for (var i = 0; i < this.downloadQueue.length; i++) {
			var path = this.downloadQueue[i];
			var img = new Image();
			var that = this;
			img.addEventListener("load", function() {
				//console.log(this.src + ' is loaded');
				that.successCount += 1;
				if (that.isDone()) {
					downloadCallback();
				}
			}, false);
			img.addEventListener("error", function() {
				console.log(this.src + ' is error');
				that.errorCount += 1;
				if (that.isDone()) {
					downloadCallback();
				}
			}, false);
			img.src = path;
			this.cache[path] = img;
		}
	}
	
	AssetManager.prototype.isDone = function()
	{
		return (this.downloadQueue.length == this.successCount + this.errorCount);
	}
	
	AssetManager.prototype.getAsset = function(path)
	{
		return this.cache[path];
	}
	
	var ASSET_MANAGER = new AssetManager();
	for(var i in sources)
		ASSET_MANAGER.queueDownload(sources[i]);
	for(var i in btn)
		ASSET_MANAGER.queueDownload(btn[i]);
	for(var i in btn_press)
		ASSET_MANAGER.queueDownload(btn_press[i]);
	for(var i in btnindo)
		ASSET_MANAGER.queueDownload(btnindo[i]);
	for(var i in btnindo_press)
		ASSET_MANAGER.queueDownload(btnindo_press[i]);
	for(var i in gbr)
		ASSET_MANAGER.queueDownload(gbr[i]);
	for(var i in gbrindo)
		ASSET_MANAGER.queueDownload(gbrindo[i]);
		
	for(var i in char1)
		ASSET_MANAGER.queueDownload(char1[i]);
	for(var i in char1press)
		ASSET_MANAGER.queueDownload(char1press[i]);
	for(var i in char1glow)
		ASSET_MANAGER.queueDownload(char1glow[i]);

	for(var i in char2)
		ASSET_MANAGER.queueDownload(char2[i]);
	for(var i in char2press)
		ASSET_MANAGER.queueDownload(char2press[i]);
	for(var i in char2glow)
		ASSET_MANAGER.queueDownload(char2glow[i]);

	for(var i in char3)
		ASSET_MANAGER.queueDownload(char3[i]);
	for(var i in char3glow)
		ASSET_MANAGER.queueDownload(char3glow[i]);
	
	for(var i in confeti)
		ASSET_MANAGER.queueDownload(confeti[i]);

	for(var i in tutTurnText)
		ASSET_MANAGER.queueDownload(tutTurnText[i]);

	for(var i in angkablue)
		ASSET_MANAGER.queueDownload(angkablue[i]);
	for(var i in angkared)
		ASSET_MANAGER.queueDownload(angkared[i]);
	for(var i in angkagreen)
		ASSET_MANAGER.queueDownload(angkagreen[i]);

	var ua = navigator.userAgent.toLowerCase();
	var checks = Boolean(ua.match(/android/))||
				 Boolean(ua.match(/ipod/))||
				 Boolean(ua.match(/ipad/))||
				 Boolean(ua.match(/tablet/))||
				 Boolean(ua.match(/tablet pc/))
				
	var touchable = checks && (typeof (document.ontouchstart) != 'undefined');	
	
	this.start = function(containerName, size, warna) {	
		init(containerName, size, warna);
	};
	
	var canvasWidth = 640;
	var canvasHeight = 640;
	var xScale = 1;
	var yScale = 1;
	var ctx;
	var canvas;
	var btnClick = "";
	var btnHover = "";
	var stateScene = "";
	var lang = "ind";
	var vsWho = "";
	var player1 = 0;
	var player2 = 1;
	var gridPos = 3;
	var gridCurrent = 3;
	var turn = 1;
	var redTurn = new Array();
	var blueTurn = new Array();
	var winSide = 0;
	var turnCount = 0;
	var onPause = false;
	var listButton = {};
	var listGambar = {};
	var flagConstruct = false;
	var stateFromPlayTo = "";
	var stateFrom = "";
	var stateFromPause = "";
	var change = 0;
	var dot;
	var tutorTurn = 0;
	var stateFromHelpTo = "";
	var listDot = [];
	var playerArray;
	var comArray;
	var winSquare = new Array();
	var penSquare = [];
	var listConf = {};
	var firstTurn = 0;
	
	function setSize(canvas,context, containerParam, containerSizeParam)
	{
		var size = containerSizeParam;
		switch (size) {
			case "":
			case "default":
				containerParam.style.width = canvasWidth + "px";
				containerParam.style.height = canvasHeight + "px";
				xScale = 1; yScale = 1;
				canvas.width=canvasWidth;
				canvas.height=canvasHeight;
				canvas.style.left = canvas.style.left+"px";
				canvas.style.top = canvas.style.top+"px";
				break;
			case "auto":
				var ws = containerParam.offsetWidth/canvasWidth;
				var hs = containerParam.offsetHeight/canvasHeight;
				xScale = Math.min(ws,hs);
				yScale = xScale;
				canvas.width=canvasWidth*xScale;
				canvas.height=canvasHeight*yScale;
				context.scale(xScale, yScale);
				canvas.style.left= ((containerParam.offsetWidth-canvasWidth*xScale)/2)+"px";
				canvas.style.top=((containerParam.offsetHeight-canvasHeight*yScale)/2)+"px";
				break;
			case "fit":
				xScale = containerParam.offsetWidth/canvasWidth;
				yScale = containerParam.offsetHeight/canvasHeight;
				canvas.width=containerParam.offsetWidth;
				canvas.height=containerParam.offsetHeight;
				context.scale(xScale, yScale);
				canvas.style.left= ((containerParam.offsetWidth-canvasWidth*xScale)/2)+"px";
				canvas.style.top=((containerParam.offsetHeight-canvasHeight*yScale)/2)+"px";
				break;
			case "fitwidth":
				xScale = containerParam.offsetWidth/canvasWidth;
				yScale = xScale;
				containerParam.style.height = (canvasHeight*yScale) + "px";
				canvas.width=containerParam.offsetWidth;
				canvas.height=canvasHeight*yScale;
				context.scale(xScale, yScale);
				canvas.style.left= ((containerParam.offsetWidth-canvasWidth*xScale)/2)+"px";
				canvas.style.top=((containerParam.offsetHeight-canvasHeight*yScale)/2)+"px";
				break;
			case "fitheight":
				yScale = containerParam.offsetHeight/canvasHeight;
				xScale = yScale;
				containerParam.style.width = (canvasWidth*xScale) + "px";
				canvas.height=containerParam.offsetHeight;
				canvas.width=canvasWidth*xScale;
				context.scale(xScale, yScale);
				canvas.style.left= ((containerParam.offsetWidth-canvasWidth*xScale)/2)+"px";
				canvas.style.top=((containerParam.offsetHeight-canvasHeight*yScale)/2)+"px";
				break;
		}
	}
	
	function init(containerName, size, warna)
	{
		container = document.getElementById(containerName);	
		canvas = document.createElement("canvas");
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		canvas.style.position = "absolute";	
		canvas.style.left = "0px";	
		canvas.style.top = "0px";	
		canvas.style.zIndex = 0;		
		ctx = canvas.getContext("2d");
		container.appendChild(canvas);
		
		if(touchable){
			canvas.addEventListener('touchstart',mouseDown,false);	
			canvas.addEventListener('touchmove',mouseMove,false);	
			document.addEventListener('touchend',mouseUp,false);	
		}else{
			canvas.addEventListener('mousedown',mouseDown,false);	
			canvas.addEventListener('mousemove',mouseMove,false);	
			document.addEventListener('mouseup',mouseUp,false);	
		}
		
		setSize(canvas, ctx, container, size);
		ASSET_MANAGER.downloadAll(function() {
			ready();
		});
	}
	
	function getMousePos(evt)
	{
		if(touchable && evt.touches.length>1)return;	
		if(touchable)evt = evt.changedTouches[0];
		
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}
	
	function ObjectProp()
	{
		var name = "";
		var x = x||0;
		var y = y||0;
		var width = 0;
		var height = 0;
		var alpha = 1;
		var rotation = 0;
		var img;
		var changeX = 0;
		var changeY = 0;
	}

	function buatButton(btnsrcimg, xParam, yParam)
	{
		this.name = btnsrcimg;
		this.img = ASSET_MANAGER.getAsset(lang == "eng" ? btn[btnsrcimg] : btnindo[btnsrcimg]);
		this.width = this.img.width;
		this.height = this.img.height;
		this.x = xParam;
		this.y = yParam;
		
		this.changeX = 0;
		this.changeY = 0;
		
		this.onDown = function(e){
			mousePos = getMousePos(e);
			if(	mousePos.x > this.x * xScale && mousePos.x < (this.x + this.width) * xScale &&
				mousePos.y > this.y * yScale && mousePos.y < (this.y + this.height) * yScale)
			{
				btnClick = btnsrcimg;
			}
			e.preventDefault();
			e.stopPropagation();
		}
		
		this.onMove = function(e)
		{
		}
		
		this.onUp = function(e){
			if(btnClick == btnsrcimg)
			{
				btnClick = "";
			}
		}
		
		this.draw = function(_ctx){
			this.img = ASSET_MANAGER.getAsset(btnClick == btnsrcimg ? lang == "eng" ? btn_press[btnsrcimg] : btnindo_press[btnsrcimg] : lang == "eng" ? btn[btnsrcimg] : btnindo[btnsrcimg]);
			_ctx.drawImage(this.img, this.x + this.changeX, this.y + this.changeY, this.width, this.height);
		}
	}
	buatButton.prototype = new ObjectProp();
	
	function buatTouchPad(xParam, yParam, widthParam, heightParam)
	{
		this.x = xParam;
		this.y = yParam;
		this.width = widthParam;
		this.height = heightParam;
		this.onclick = false;
		this.changeX = 0;
		this.changeY = 0;
		this.lastPosX = 0;
		this.lastPosY = 0;

		this.onDown = function(e){
			if(!onPause)
			{
				mousePos = getMousePos(e);
				if(	mousePos.x > this.x * xScale && mousePos.x < (this.x + this.width) * xScale &&
					mousePos.y > this.y * yScale && mousePos.y < (this.y + this.height) * yScale)
				{
					this.onclick = true;
					this.lastPosX = mousePos.x;
					this.lastPosY = mousePos.y;
					this.downCustomFunction(mousePos);
				}
				e.preventDefault();
				e.stopPropagation();
			}
		}
		
		this.onMove = function(e)
		{
			if(this.onclick)
			{
				mousePos = getMousePos(e);
				this.changeX = mousePos.x - this.lastPosX;
				this.changeY = mousePos.y - this.lastPosY;
				this.moveCustomFunction(mousePos);
			}
		}
		
		this.onUp = function(e)
		{
			if(this.onclick)
			{
				mousePos = getMousePos(e);
				this.upCustomFunction(mousePos);
				this.onclick = false;
			}
		}

		this.downCustomFunction = function(pos){

		}

		this.moveCustomFunction = function (pos)
		{

		}

		this.upCustomFunction = function (pos)
		{

		}

		this.draw = function(_ctx){
			/*_ctx.beginPath();
			_ctx.rect(this.x, this.y, this.width, this.height);
			_ctx.fillStyle = 'yellow';
			_ctx.fill();
			_ctx.lineWidth = 7;
			_ctx.strokeStyle = 'black';
			_ctx.stroke();*/
		}
	}

	function buatDot(xParam, yParam, colParam, rowParam)
	{
		this.img = ASSET_MANAGER.getAsset(sources.dot_blank);
		this.x = xParam;
		this.y = yParam;
		this.col = colParam;
		this.row = rowParam;
		//this.width = this.img.width;
		//this.height = this.img.height;
		this.width = 25;
		this.height = 25;
		this.side = 0;
		this.changeX = 0;
		
		this.onDown = function(e){
			if(winSide == 0 && !onPause && turn != 3 && winSide == 0)
			{
				mousePos = getMousePos(e);
				if(	mousePos.x > this.x * xScale && mousePos.x < (this.x + this.width) * xScale &&
					mousePos.y > this.y * yScale && mousePos.y < (this.y + this.height) * yScale)
				{
					btnClick = (xParam+"-"+yParam);
				}
			}
			e.preventDefault();
			e.stopPropagation();
		}
	
		this.onUp = function(e){
			if(btnClick == (xParam+"-"+yParam))
			{
				btnClick = "";
				if(this.side == 0)
				{
					this.side = (turn == 1 ? 1 : (vsWho == "man" ? 2 : 3));
					if(turn == 1)
					{
						redTurn[redTurn.length] = (this.col + "," + this.row);
						checkSquare(1);
					}
					else 
					{
						blueTurn[blueTurn.length] = (this.col + "," + this.row);
						checkSquare(2);
					}

					turn = turn == 1 ? (vsWho == "man" ? 2 : 3) : 1;

					turnCount++;
					if(turnCount == listDot.length)
					{
						winSide = -1;
					}
					
					if(vsWho == "comp" && turn == 3 && winSide == 0)
					{
						setTimeout(function() {
							comTurn();
						}, 1000);
					}
				}
			}
		}
		
		this.comSelect = function()
		{
			btnClick = "";
			if(this.side == 0)
			{
				this.side = (turn == 1 ? 1 : (vsWho == "man" ? 2 : 3));
				blueTurn[blueTurn.length] = (this.col + "," + this.row);
				checkSquare(2);
				turn = turn == 1 ? (vsWho == "man" ? 2 : 3) : 1;

				turnCount++;
				if(turnCount == listDot.length)
				{
					winSide = -1;
				}
			}
		}
		
		this.draw = function(_ctx){
			switch (this.side){
				case 0 :
					this.img = ASSET_MANAGER.getAsset(sources.dot_blank);
					break;
				case 1 :
					this.img = ASSET_MANAGER.getAsset(sources.dot_red);
					break;
				case 2 :
					this.img = ASSET_MANAGER.getAsset(sources.dot_blue);
					break;
				case 3 :
					this.img = ASSET_MANAGER.getAsset(sources.dot_green);
					break;
				case 4 :
					this.img = ASSET_MANAGER.getAsset(sources.dot_glow);
					break;
			}
			_ctx.drawImage(this.img, this.x + this.changeX, this.y, this.width, this.height);
		}
	}
	buatDot.prototype = new ObjectProp();
	
	function buatGambar(btnsrcimg, xParam, yParam)
	{
		this.name = btnsrcimg;
		this.img = ASSET_MANAGER.getAsset(lang == "eng" ? gbr[btnsrcimg] : gbrindo[btnsrcimg]);
		this.width = this.img.width;
		this.height = this.img.height;
		this.x = xParam;
		this.y = yParam;
		this.changeX = 0;
		this.changeY = 0;
		
		this.draw = function(_ctx){
			//this.img = ASSET_MANAGER.getAsset(lang == "eng" ? gbr[btnsrcimg] : gbrindo[btnsrcimg]);
			_ctx.drawImage(this.img, this.x + this.changeX, this.y + this.changeY, this.width, this.height);
		}
	}
	buatGambar.prototype = new ObjectProp();
	
	function buatConf(xParam, yParam, index, speed)
	{
		this.img = ASSET_MANAGER.getAsset(confeti[index]);
		this.x = xParam;
		this.y = 0;
		this.changeX = 0;
		this.changeY = yParam;
		this.width = this.img.width;
		this.height = this.img.height;
		this.speed = speed;
		/*
		var kel = 2*Math.PI*img.width/2;
		var speed = 100;
		this.update = function(t){
			this.x = (this.x+t*speed)%(canvasWidth+img.width);
			this.rotation = (this.x/kel*360);
		}*/
		this.draw = function(_ctx, rotationParam){
			if(this.changeY > 640)
			{
				this.x = Math.floor((Math.random()*600)+20);
				this.changeY = Math.floor((Math.random()*60)-60);
				this.speed = Math.floor((Math.random()*10)+1);
			}
			this.changeY += this.speed;
			//this.changeY += this.speed;
			_ctx.save();
			_ctx.translate(this.x + this.changeX, this.y + this.changeY);
			_ctx.rotate(rotationParam * Math.PI / 180);
			_ctx.translate(-(this.x + this.changeX), -(this.y + this.changeY));
			_ctx.drawImage(this.img, this.x + this.changeX - this.width / 2, this.y + this.changeY - this.height / 2);
			_ctx.restore();
		}
	}
	buatConf.prototype = new ObjectProp;
		
	function mouseDown(e)
	{
		for(var i in listButton)
		{
			listButton[i].onDown(e);
		}
		for(var i in listDot)
		{
			listDot[i].onDown(e);
		}
	}
	
	function mouseMove(e)
	{
		for(var i in listButton)
		{
			listButton[i].onMove(e);
		}
	}
	
	function mouseUp(e)
	{
		for(var i in listButton)
		{
			listButton[i].onUp(e);
		}
		for(var i in listDot)
		{
			listDot[i].onUp(e);
		}
	}

	function clearScreen()
	{
		if (canvas.getContext) {
			ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		}
	}
	
	function ready()
	{
		if (canvas.getContext) {
			stateScene = "drawJudul";
			flagConstruct = true;
			update();
		}
	}
	
	window.requestAnimFrame = (function(callback)
	{
		return 	window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	})();

	function update()
	{
		switch(stateScene)
		{
			case "drawJudul":
				drawJudul();
				break;
			case "transGeserPilihChar":
				transGeserPilihChar();
				break;
			case "drawPilihChar" :
				drawPilihChar();
				break;
			case "transGeserBacktohome":
				transGeserBacktohome();
				break;
			case "fadeOutToPlay" :
				fadeOutToPlay();
				break;
			case "fadeInToPlay" :
				fadeInToPlay();
				break;
			case "drawDot":
				drawDot();
				break;
			case "drawPlay":
				drawPlay();
				break;
			case "drawPause" : 
				drawPause();
				break;
			case "fadeOutFromPlay":
				fadeOutFromPlay();
				break;
			case "fadeInFromPlay":
				fadeInFromPlay();
				break;
			case "drawHelp":
				drawHelp();
				break;
			case "drawWin" :
				drawWin();
				break;
			case "drawReplay" :
				drawReplay();
				break;
			case "drawPauseReplay" :
				drawPauseReplay();
				break;
		}

		requestAnimFrame(function() {
			update();
		});
	}
	
	function drawJudul()
	{
		if(stateScene == "drawJudul" || stateFromPlayTo == "drawJudul" || stateFrom == "drawJudul")
		{
			if(flagConstruct)
			{
				redTurn = new Array();
				blueTurn = new Array();
				winSide = 0;
				winSquare = new Array();
				//stateFromPlayTo = "";
				//stateFrom = "";
				
				listButton = {};
				listGambar = {};
				btnHelp = new buatButton("btnhelp", 562, 17);
				listButton['btnhelp'] = btnHelp;
				btnHelp.onUp = function(e){
					if(btnClick == "btnhelp")
					{
						btnClick = "";
						ctx.globalAlpha = 1;
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawHelp";
						stateFromHelpTo = "drawJudul";
						flagConstruct = true;
					}
				}
	
				btnvscomp = new buatButton("btnvscomp", 320 - 174 - 20, 370);
				listButton['btnvscomp'] = btnvscomp;
				btnvscomp.onUp = function(e){
					if(btnClick == "btnvscomp")
					{
						btnClick = "";
						ctx.globalAlpha = 1;
						vsWho = "comp";
						stateScene = "transGeserPilihChar";
						flagConstruct = true;
					}
				}
				
				btnvsfriend = new buatButton("btnvsfriend", 320 + 20, 370);
				listButton['btnvsfriend'] = btnvsfriend;
				btnvsfriend.onUp = function(e){
					if(btnClick == "btnvsfriend")
					{
						btnClick = "";
						ctx.globalAlpha = 1;
						vsWho = "man";
						stateScene = "transGeserPilihChar";
						flagConstruct = true;
					}
				}
				
				btnLang = new buatButton("btnlang", 470, 17);
				listButton['btnlang'] = btnLang;
	
				btnLang.onUp = function(e){
					if(btnClick == "btnlang")
					{
						btnClick = "";
						ctx.globalAlpha = 1;
						lang = lang == "eng" ? "ind" : "eng";
					}
				}
				
				gbrLogo = new buatGambar("logo", 101, 86);
				listGambar['logo'] = gbrLogo;
				
				flagConstruct = false;
			}
			
			clearScreen();
			
			sprite = ASSET_MANAGER.getAsset(sources.bg1);
			ctx.drawImage(sprite, 0, 0, 640, 640);
			
			listButton['btnhelp'].draw(ctx);
			listButton['btnvscomp'].draw(ctx);
			listButton['btnvsfriend'].draw(ctx);
			listButton['btnlang'].draw(ctx);
			listGambar['logo'].draw(ctx);
		}
	}
	
	function transGeserPilihChar()
	{
		if(stateScene == "transGeserPilihChar")
		{
			if(flagConstruct)
			{
				listButton = {};
				listGambar = {};
				
				// drawjudul
				btnHelp = new buatButton("btnhelp", 562, 17);
				listButton['btnhelp'] = btnHelp;
				
				btnvscomp = new buatButton("btnvscomp", 320 - 174 - 20, 370);
				listButton['btnvscomp'] = btnvscomp;
				
				btnvsfriend = new buatButton("btnvsfriend", 320 + 20, 370);
				listButton['btnvsfriend'] = btnvsfriend;
				
				btnLang = new buatButton("btnlang", 470, 17);
				listButton['btnlang'] = btnLang;
	
				gbrLogo = new buatGambar("logo", 101, 86);
				listGambar['logo'] = gbrLogo;
				
				//drawPilihChar
				btnhome = new buatButton("btnhome", 16, 18);
				btnhome.changeY = 640;
				listButton['btnhome'] = btnhome;
				
				gbrchooseavatar = new buatGambar("chooseavatar", 195, 47);
				gbrchooseavatar.changeY = 640;
				listGambar['chooseavatar'] = gbrchooseavatar;
				
				gbrchoosegrid = new buatGambar("choosegrid", 197, 293);
				gbrchoosegrid.changeY = 640;
				listGambar['choosegrid'] = gbrchoosegrid;
				
				btnplay = new buatButton("btnplay", 238, 530);
				btnplay.changeY = 640;
				listButton['btnplay'] = btnplay;
				
				btnleft = new buatButton("btnleft", 30, 388);
				btnleft.changeY = 640;
				listButton['btnleft'] = btnleft;
				
				btnright = new buatButton("btnright", 570, 388);
				btnright.changeY = 640;
				listButton['btnright'] = btnright;
				
				gbplayer1 = new buatGambar("player1", 165, 235);
				gbplayer1.changeY = 640;
				listGambar['player1'] = gbplayer1;
				
				btnChar1 = new buatButton("btnChar1", 137, 83);
				btnChar1.changeY = 640;
				listButton['btnChar1'] = btnChar1;
				
				if(vsWho == "man")
				{
					gbplayer2 = new buatGambar("player2", 392, 235);
					gbplayer2.changeY = 640;
					listGambar['player2'] = gbplayer2;
		
					btnChar2 = new buatButton("btnChar2", 364, 83);
					btnChar2.changeY = 640;
					listButton['btnChar2'] = btnChar2;
				}
				else
				{
					gbcomp = new buatButton("btnComp", 364, 83);
					gbcomp.changeY = 640;
					listButton['btnComp'] = gbcomp;
				}
				
				//gbgrid4 = new buatGambar("grid4", 700, 357);
				//listGambar['grid4'] = gbgrid4;
				gbgrid5 = new buatGambar("grid5", 700, 357);
				listGambar['grid5'] = gbgrid5;
				gbgrid6 = new buatGambar("grid6", 700, 357);
				listGambar['grid6'] = gbgrid6;
				gbgrid7 = new buatGambar("grid7", 700, 357);
				listGambar['grid7'] = gbgrid7;
				gbgrid8 = new buatGambar("grid8", 700, 357);
				listGambar['grid8'] = gbgrid8;
				gbgrid9 = new buatGambar("grid9", 700, 357);
				listGambar['grid9'] = gbgrid9;
				
				gridData = [
					//listGambar['grid4'],
					listGambar['grid5'],
					listGambar['grid6'],
					listGambar['grid7'],
					listGambar['grid8'],
					listGambar['grid9']
				]
				if(gridPos - 1 >= 0)
				{
					gridData[gridPos-1].x = 92;
					gridData[gridPos-1].y = 357;
					gridData[gridPos-1].width = 130;
					gridData[gridPos-1].height = 130;
					gridData[gridPos-1].changeY = 640;
				}
				
				gridData[gridPos].x = 241;
				gridData[gridPos].y = 338;
				gridData[gridPos].width = 168;
				gridData[gridPos].height = 168;
				gridData[gridPos].changeY = 640;
				gridData[gridPos].draw(ctx);
				if(gridPos + 1 < gridData.length)
				{
					gridData[gridPos+1].x = 430;
					gridData[gridPos+1].y = 357;
					gridData[gridPos+1].width = 130;
					gridData[gridPos+1].height = 130;
					gridData[gridPos+1].changeY = 640;
				}
				
				flagConstruct = false;
			}
			
			clearScreen();
		
			sprite = ASSET_MANAGER.getAsset(sources.bg1);
			ctx.drawImage(sprite, 0, 0, 640, 640);
			
			listButton['btnhelp'].draw(ctx);
			listButton['btnvscomp'].draw(ctx);
			listButton['btnvsfriend'].draw(ctx);
			listButton['btnlang'].draw(ctx);
			listGambar['logo'].draw(ctx);
			
			listButton['btnhome'].draw(ctx);
			listGambar['chooseavatar'].draw(ctx);
			listGambar['choosegrid'].draw(ctx);
			listButton['btnplay'].draw(ctx);

			if(gridPos > 0)
				listButton['btnleft'].draw(ctx);
			if(gridPos < 4)
				listButton['btnright'].draw(ctx);

			//listButton['btnleft'].draw(ctx);
			//listButton['btnright'].draw(ctx);
			
			listGambar['player1'].draw(ctx);
			listButton['btnChar1'].draw(ctx);
			if(vsWho == "man")
			{
				listGambar['player2'].draw(ctx);
				listButton['btnChar2'].draw(ctx);
			}
			else
				listButton['btnComp'].draw(ctx);
			
			if(gridPos - 1 >= 0)
				gridData[gridPos-1].draw(ctx);
			gridData[gridPos].draw(ctx);
			if(gridPos + 1 < gridData.length)
				gridData[gridPos+1].draw(ctx);
			
			var speed = 10;
			if(listButton['btnhelp'].changeY > -640)
			{
				listButton['btnhelp'].changeY -= speed;
				listButton['btnvscomp'].changeY -= speed;
				listButton['btnvsfriend'].changeY -= speed;
				listButton['btnlang'].changeY -= speed;
				listGambar['logo'].changeY -= speed;
				
				listButton['btnhome'].changeY -= speed;
				listGambar['chooseavatar'].changeY -= speed;
				listGambar['choosegrid'].changeY -= speed;
				listButton['btnplay'].changeY -= speed;
				listButton['btnleft'].changeY -= speed;
				listButton['btnright'].changeY -= speed;
				
				listGambar['player1'].changeY -= speed;
				listButton['btnChar1'].changeY -= speed;
				if(vsWho == "man")
				{
					listGambar['player2'].changeY -= speed;
					listButton['btnChar2'].changeY -= speed;
				}
				else
					listButton['btnComp'].changeY -= speed;
	
				if(gridPos - 1 >= 0)
					gridData[gridPos-1].changeY -= speed;
				gridData[gridPos].changeY -= speed;
				if(gridPos + 1 < gridData.length)
					gridData[gridPos+1].changeY -= speed;
			}
			else
			{
				stateScene = "drawPilihChar";
				flagConstruct = true;
			}
		}
	}
	
	function drawPilihChar()
	{
		if(stateScene == "drawPilihChar" || stateFromPlayTo == "drawPilihChar" || stateFrom == "drawPilihChar")
		{
			if(flagConstruct)
			{
				onPause = false;
				listButton = {};
				listGambar = {};

				firstTurn = 0;

				//drawPilihChar
				btnhome = new buatButton("btnhome", 16, 18);
				listButton['btnhome'] = btnhome;
				btnhome.onUp = function(e){
					if(btnClick == "btnhome")
					{
						btnClick = "";
						stateScene = "transGeserBacktohome";
						flagConstruct = true;
					}
				}
				
				gbrchooseavatar = new buatGambar("chooseavatar", 195, 47);
				listGambar['chooseavatar'] = gbrchooseavatar;
				
				gbrchoosegrid = new buatGambar("choosegrid", 197, 293);
				listGambar['choosegrid'] = gbrchoosegrid;
				
				btnplay = new buatButton("btnplay", 238, 530);
				listButton['btnplay'] = btnplay;
				btnplay.onUp = function(e){
					if(btnClick == "btnplay")
					{
						turn = Math.floor((Math.random()*10)+1) % 2;
						if(turn == 0)
							turn = vsWho == "comp" ? 3  : 2;
						firstTurn = turn;

						btnClick = "";
						stateScene = "fadeOutToPlay";
						flagConstruct = true;
					}
				}
				
				btnleft = new buatButton("btnleft", 30, 388);
				listButton['btnleft'] = btnleft;
				btnleft.onUp = function(e){
					if(btnClick == "btnleft")
					{
						btnClick = "";
						gridPos = (gridPos == 0 ? 0 : --gridPos);
					}
				}
							
				btnright = new buatButton("btnright", 570, 388);
				listButton['btnright'] = btnright;
				btnright.onUp = function(e){
					if(btnClick == "btnright")
					{
						btnClick = "";
						gridPos = (gridPos == 4 ? 4 : ++gridPos);
					}
				}
				
				gbplayer1 = new buatGambar("player1", 165, 235);
				listGambar['player1'] = gbplayer1;
				
				btnChar1 = new buatButton("btnChar1", 137, 83);
				listButton['btnChar1'] = btnChar1;
				btnChar1.onUp = function(e){
					if(btnClick == "btnChar1")
					{
						
						btnClick = "";
						player1++;
						if(vsWho == "man")
						{
							player1 = (player1 == 3 ? 0 : player1);
							player1 = (player1 == player2 ? ++player1 : player1);
						}
						player1 = (player1 == 3 ? 0 : player1);
						sources.char1 = char1[player1];
						sources.char1Glow = char1glow[player1];
					}
				}
				btnChar1.draw = function(_ctx){
					btn["btnChar1"] = char1[player1];
					btn_press["btnChar1"] = char1press[player1];
					
					btnindo["btnChar1"] = char1[player1];
					btnindo_press["btnChar1"] = char1press[player1];
					
					this.img = ASSET_MANAGER.getAsset(btnClick == "btnChar1" ? lang == "eng" ? btn_press["btnChar1"] : btnindo_press["btnChar1"] : lang == "eng" ? btn["btnChar1"] : btnindo["btnChar1"]);
					_ctx.drawImage(this.img, this.x + this.changeX, this.y + this.changeY, this.width, this.height);
				}
				
				if(vsWho == "man")
				{
					sources.char2 = char2[player2];
					
					gbplayer2 = new buatGambar("player2", 392, 235);
					listGambar['player2'] = gbplayer2;
		
					btnChar2 = new buatButton("btnChar2", 364, 83);
					listButton['btnChar2'] = btnChar2;
					
					btnChar2.onUp = function(e){
						if(btnClick == "btnChar2")
						{
							btnClick = "";
							player2++;
							player2 = (player2 == 3 ? 0 : player2);
							player2 = (player1 == player2 ? ++player2 : player2);
							player2 = (player2 == 3 ? 0 : player2);
							sources.char2 = char2[player2];
							sources.char2Glow = char2glow[player2];
						}
					}
					btnChar2.draw = function(_ctx){
						btn["btnChar2"] = char2[player2];
						btn_press["btnChar2"] = char2press[player2];
						
						btnindo["btnChar2"] = char2[player2];
						btnindo_press["btnChar2"] = char2press[player2];
						
						this.img = ASSET_MANAGER.getAsset(btnClick == "btnChar2" ? lang == "eng" ? btn_press["btnChar2"] : btnindo_press["btnChar2"] : lang == "eng" ? btn["btnChar2"] : btnindo["btnChar2"]);
						_ctx.drawImage(this.img, this.x + this.changeX, this.y + this.changeY, this.width, this.height);
					}
				}
				else
				{
					gbcomp = new buatButton("btnComp", 364, 83);
					listButton['btnComp'] = gbcomp;
					sources.char2 = btn['btnComp'];
				}
	
				//gbgrid4 = new buatGambar("grid4", 700, 357);
				//listGambar['grid4'] = gbgrid4;
				gbgrid5 = new buatGambar("grid5", 700, 357);
				listGambar['grid5'] = gbgrid5;
				gbgrid6 = new buatGambar("grid6", 700, 357);
				listGambar['grid6'] = gbgrid6;
				gbgrid7 = new buatGambar("grid7", 700, 357);
				listGambar['grid7'] = gbgrid7;
				gbgrid8 = new buatGambar("grid8", 700, 357);
				listGambar['grid8'] = gbgrid8;
				gbgrid9 = new buatGambar("grid9", 700, 357);
				listGambar['grid9'] = gbgrid9;
				
				gridData = [
					//listGambar['grid4'],
					listGambar['grid5'],
					listGambar['grid6'],
					listGambar['grid7'],
					listGambar['grid8'],
					listGambar['grid9']
				]
				
				gbgrid5 = new buatGambar("grid5big", 700, 357);
				listGambar['grid5big'] = gbgrid5;
				gbgrid6 = new buatGambar("grid6big", 700, 357);
				listGambar['grid6big'] = gbgrid6;
				gbgrid7 = new buatGambar("grid7big", 700, 357);
				listGambar['grid7big'] = gbgrid7;
				gbgrid8 = new buatGambar("grid8big", 700, 357);
				listGambar['grid8big'] = gbgrid8;
				gbgrid9 = new buatGambar("grid9big", 700, 357);
				listGambar['grid9big'] = gbgrid9;

				gridDataBig = [
					//listGambar['grid4'],
					listGambar['grid5big'],
					listGambar['grid6big'],
					listGambar['grid7big'],
					listGambar['grid8big'],
					listGambar['grid9big']
				]

				flagConstruct = false;
			}
			clearScreen();
			sprite = ASSET_MANAGER.getAsset(sources.bg1);
			ctx.drawImage(sprite, 0, 0, 640, 640);
			
			listButton['btnhome'].draw(ctx);
			listGambar['chooseavatar'].draw(ctx);
			listGambar['choosegrid'].draw(ctx);
			listButton['btnplay'].draw(ctx);
	
			
			listGambar['player1'].draw(ctx);
			listButton['btnChar1'].draw(ctx);
			if(vsWho == "man")
			{
				listGambar['player2'].draw(ctx);
				listButton['btnChar2'].draw(ctx);
			}
			else
				listButton['btnComp'].draw(ctx);
		
			if(gridPos - 2 >= 0)
			{
				gridData[gridPos-2].x = -640 - 130;
				gridData[gridPos-2].draw(ctx);
			}
			if(gridPos - 1 >= 0)
			{
				gridData[gridPos-1].x = 92;
				gridData[gridPos-1].y = 357;
				gridData[gridPos-1].width = 130;
				gridData[gridPos-1].height = 130;
				gridData[gridPos-1].draw(ctx);
			}
			
			gridDataBig[gridPos].x = 241;
			gridDataBig[gridPos].y = 338;
			gridDataBig[gridPos].width = 168;
			gridDataBig[gridPos].height = 168;
			gridDataBig[gridPos].draw(ctx);
			
			if(gridPos + 1 < gridData.length)
			{
				gridData[gridPos+1].x = 430;
				gridData[gridPos+1].y = 357;
				gridData[gridPos+1].width = 130;
				gridData[gridPos+1].height = 130;
				gridData[gridPos+1].draw(ctx);
			}
			if(gridPos + 2 < gridData.length)
			{
				gridData[gridPos+2].x = 640;
				gridData[gridPos+2].draw(ctx);
			}
			
			if(gridPos > 0)
				listButton['btnleft'].draw(ctx);
			if(gridPos < 4)
				listButton['btnright'].draw(ctx);
		}
	}
	
	function transGeserBacktohome()
	{
		if(flagConstruct)
		{
			listButton = {};
			listGambar = {};
			
			// drawjudul
			btnHelp = new buatButton("btnhelp", 562, 17);
			btnHelp.changeY = -640;
			listButton['btnhelp'] = btnHelp;
			
			btnvscomp = new buatButton("btnvscomp", 320 - 174 - 20, 370);
			btnvscomp.changeY = -640;
			listButton['btnvscomp'] = btnvscomp;
			
			btnvsfriend = new buatButton("btnvsfriend", 320 + 20, 370);
			btnvsfriend.changeY = -640;
			listButton['btnvsfriend'] = btnvsfriend;
			
			btnLang = new buatButton("btnlang", 470, 17);
			btnLang.changeY = -640;
			listButton['btnlang'] = btnLang;

			gbrLogo = new buatGambar("logo", 101, 86);
			gbrLogo.changeY = -640;
			listGambar['logo'] = gbrLogo;
			
			//drawPilihChar
			btnhome = new buatButton("btnhome", 16, 18);
			listButton['btnhome'] = btnhome;
			
			gbrchooseavatar = new buatGambar("chooseavatar", 195, 47);
			listGambar['chooseavatar'] = gbrchooseavatar;
			
			gbrchoosegrid = new buatGambar("choosegrid", 197, 293);
			listGambar['choosegrid'] = gbrchoosegrid;
			
			btnplay = new buatButton("btnplay", 238, 530);
			listButton['btnplay'] = btnplay;
			
			btnleft = new buatButton("btnleft", 30, 388);
			listButton['btnleft'] = btnleft;
			
			btnright = new buatButton("btnright", 570, 388);
			listButton['btnright'] = btnright;
			
			gbplayer1 = new buatGambar("player1", 165, 235);
			listGambar['player1'] = gbplayer1;
			
			btnChar1 = new buatButton("btnChar1", 137, 83);
			listButton['btnChar1'] = btnChar1;
			
			if(vsWho == "man")
			{
				gbplayer2 = new buatGambar("player2", 392, 235);
				listGambar['player2'] = gbplayer2;
	
				btnChar2 = new buatButton("btnChar2", 364, 83);
				listButton['btnChar2'] = btnChar2;
			}
			else
			{
				gbcomp = new buatButton("btnComp", 364, 83);
				listButton['btnComp'] = gbcomp;
			}
			
			//gbgrid4 = new buatGambar("grid4", 700, 357);
			//listGambar['grid4'] = gbgrid4;
			gbgrid5 = new buatGambar("grid5", 700, 357);
			listGambar['grid5'] = gbgrid5;
			gbgrid6 = new buatGambar("grid6", 700, 357);
			listGambar['grid6'] = gbgrid6;
			gbgrid7 = new buatGambar("grid7", 700, 357);
			listGambar['grid7'] = gbgrid7;
			gbgrid8 = new buatGambar("grid8", 700, 357);
			listGambar['grid8'] = gbgrid8;
			gbgrid9 = new buatGambar("grid9", 700, 357);
			listGambar['grid9'] = gbgrid9;
			
			gridData = [
				//listGambar['grid4'],
				listGambar['grid5'],
				listGambar['grid6'],
				listGambar['grid7'],
				listGambar['grid8'],
				listGambar['grid9']
			]
			if(gridPos - 1 >= 0)
			{
				gridData[gridPos-1].x = 92;
				gridData[gridPos-1].y = 357;
				gridData[gridPos-1].width = 130;
				gridData[gridPos-1].height = 130;
			}
			
			gridData[gridPos].x = 241;
			gridData[gridPos].y = 338;
			gridData[gridPos].width = 168;
			gridData[gridPos].height = 168;
			gridData[gridPos].draw(ctx);
			if(gridPos + 1 < gridData.length)
			{
				gridData[gridPos+1].x = 430;
				gridData[gridPos+1].y = 357;
				gridData[gridPos+1].width = 130;
				gridData[gridPos+1].height = 130;
			}
			
			flagConstruct = false;
		}
		
		clearScreen();
	
		sprite = ASSET_MANAGER.getAsset(sources.bg1);
		ctx.drawImage(sprite, 0, 0, 640, 640);
		
		listButton['btnhelp'].draw(ctx);
		listButton['btnvscomp'].draw(ctx);
		listButton['btnvsfriend'].draw(ctx);
		listButton['btnlang'].draw(ctx);
		listGambar['logo'].draw(ctx);
		
		listButton['btnhome'].draw(ctx);
		listGambar['chooseavatar'].draw(ctx);
		listGambar['choosegrid'].draw(ctx);
		listButton['btnplay'].draw(ctx);

		if(gridPos > 0)
			listButton['btnleft'].draw(ctx);
		if(gridPos < 4)
			listButton['btnright'].draw(ctx);

		//listButton['btnleft'].draw(ctx);
		//listButton['btnright'].draw(ctx);
		
		listGambar['player1'].draw(ctx);
		listButton['btnChar1'].draw(ctx);
		if(vsWho == "man")
		{
			listGambar['player2'].draw(ctx);
			listButton['btnChar2'].draw(ctx);
		}
		else
			listButton['btnComp'].draw(ctx);
		
		if(gridPos - 1 >= 0)
			gridData[gridPos-1].draw(ctx);
		gridData[gridPos].draw(ctx);
		if(gridPos + 1 < gridData.length)
			gridData[gridPos+1].draw(ctx);
		
		var speed = 10;
		if(listButton['btnhelp'].changeY < 0)
		{
			listButton['btnhelp'].changeY += speed;
			listButton['btnvscomp'].changeY += speed;
			listButton['btnvsfriend'].changeY += speed;
			listButton['btnlang'].changeY += speed;
			listGambar['logo'].changeY += speed;
			
			listButton['btnhome'].changeY += speed;
			listGambar['chooseavatar'].changeY += speed;
			listGambar['choosegrid'].changeY += speed;
			listButton['btnplay'].changeY += speed;
			listButton['btnleft'].changeY += speed;
			listButton['btnright'].changeY += speed;
			
			listGambar['player1'].changeY += speed;
			listButton['btnChar1'].changeY += speed;
			if(vsWho == "man")
			{
				listGambar['player2'].changeY += speed;
				listButton['btnChar2'].changeY += speed;
			}
			else
				listButton['btnComp'].changeY += speed;
				
			if(gridPos - 1 >= 0)
				gridData[gridPos-1].changeY += speed;
			gridData[gridPos].changeY += speed;
			if(gridPos + 1 < gridData.length)
				gridData[gridPos+1].changeY += speed;
		}
		else
		{
			stateScene = "drawJudul";
			flagConstruct = true;
		}
	}
	
	
	function fadeOutToPlay()
	{
		if(flagConstruct)
		{
			listButton = {};
			listGambar = {};

			//drawPilihChar
			btnhome = new buatButton("btnhome", 16, 18);
			listButton['btnhome'] = btnhome;
			
			gbrchooseavatar = new buatGambar("chooseavatar", 195, 47);
			listGambar['chooseavatar'] = gbrchooseavatar;
			
			gbrchoosegrid = new buatGambar("choosegrid", 197, 293);
			listGambar['choosegrid'] = gbrchoosegrid;
			
			btnplay = new buatButton("btnplay", 238, 530);
			listButton['btnplay'] = btnplay;
			
			btnleft = new buatButton("btnleft", 30, 388);
			listButton['btnleft'] = btnleft;
			
			btnright = new buatButton("btnright", 570, 388);
			listButton['btnright'] = btnright;
			
			gbplayer1 = new buatGambar("player1", 165, 235);
			listGambar['player1'] = gbplayer1;
			
			btnChar1 = new buatButton("btnChar1", 137, 83);
			listButton['btnChar1'] = btnChar1;
			
			if(vsWho == "man")
			{
				gbplayer2 = new buatGambar("player2", 392, 235);
				listGambar['player2'] = gbplayer2;
	
				btnChar2 = new buatButton("btnChar2", 364, 83);
				listButton['btnChar2'] = btnChar2;
			}
			else
			{
				gbcomp = new buatButton("btnComp", 364, 83);
				listButton['btnComp'] = gbcomp;
			}
			
			//gbgrid4 = new buatGambar("grid4", 700, 357);
			//listGambar['grid4'] = gbgrid4;
			gbgrid5 = new buatGambar("grid5", 700, 357);
			listGambar['grid5'] = gbgrid5;
			gbgrid6 = new buatGambar("grid6", 700, 357);
			listGambar['grid6'] = gbgrid6;
			gbgrid7 = new buatGambar("grid7", 700, 357);
			listGambar['grid7'] = gbgrid7;
			gbgrid8 = new buatGambar("grid8", 700, 357);
			listGambar['grid8'] = gbgrid8;
			gbgrid9 = new buatGambar("grid9", 700, 357);
			listGambar['grid9'] = gbgrid9;
			
			gridData = [
				//listGambar['grid4'],
				listGambar['grid5'],
				listGambar['grid6'],
				listGambar['grid7'],
				listGambar['grid8'],
				listGambar['grid9']
			]
			if(gridPos - 1 >= 0)
			{
				gridData[gridPos-1].x = 92;
				gridData[gridPos-1].y = 357;
				gridData[gridPos-1].width = 130;
				gridData[gridPos-1].height = 130;
			}
			
			gridData[gridPos].x = 241;
			gridData[gridPos].y = 338;
			gridData[gridPos].width = 168;
			gridData[gridPos].height = 168;
			gridData[gridPos].draw(ctx);
			if(gridPos + 1 < gridData.length)
			{
				gridData[gridPos+1].x = 430;
				gridData[gridPos+1].y = 357;
				gridData[gridPos+1].width = 130;
				gridData[gridPos+1].height = 130;
			}
			
			flagConstruct = false;
		}
		
		//clearScreen();
		ctx.globalAlpha = 1;
		sprite = ASSET_MANAGER.getAsset(sources.bg1);
		ctx.drawImage(sprite, 0, 0, 640, 640);
		
		listButton['btnhome'].draw(ctx);
		listGambar['chooseavatar'].draw(ctx);
		listGambar['choosegrid'].draw(ctx);
		listButton['btnplay'].draw(ctx);

		if(gridPos > 0)
			listButton['btnleft'].draw(ctx);
		if(gridPos < 4)
			listButton['btnright'].draw(ctx);

		//listButton['btnleft'].draw(ctx);
		//listButton['btnright'].draw(ctx);
		
		listGambar['player1'].draw(ctx);
		listButton['btnChar1'].draw(ctx);
		if(vsWho == "man")
		{
			listGambar['player2'].draw(ctx);
			listButton['btnChar2'].draw(ctx);
		}
		else
			listButton['btnComp'].draw(ctx);
		
		if(gridPos - 1 >= 0)
			gridData[gridPos-1].draw(ctx);
		gridData[gridPos].draw(ctx);
		if(gridPos + 1 < gridData.length)
			gridData[gridPos+1].draw(ctx);
		
		ctx.fillStyle= "#000000";
		ctx.globalAlpha = 0 + change; // Half opacity
		ctx.fillRect(0,0,640,640);
			
		change += 0.05;
		if(change >= 1)
		{
			stateScene = "fadeInToPlay";
			flagConstruct = true;
		}
	}


	var dotHelp = new Array();
	function createDot(countItem, forHelp)
	{
		spaceFill = 475;
		span = (spaceFill / countItem).toFixed(4);
		span2 = (span / 2).toFixed(4);
		radius = (span2 / 2).toFixed(4);
		startPos = ((640 - spaceFill) / 2).toFixed(4);
		
		if(forHelp)
		{
			dotHelp = new Array();
			for(var i = 0; i < countItem; i++) {
				dotHelp[i] = new Array();
				for(var j = 0; j < countItem; j++) {
					dotHelp[i][j] = {	x : parseFloat((parseFloat(startPos) + parseFloat(span2) + parseFloat(span * j)).toFixed(4) - 16),
										y : parseFloat((140 + parseFloat(span2) + parseFloat(span * i)).toFixed(4)),
										sel : 0
								};
				}
			}
		}
		else
		{
			dot = new Array();
			for(var i = 0; i < countItem; i++) {
				dot[i] = new Array();
				for(var j = 0; j < countItem; j++) {
					dot[i][j] = {	x : parseFloat((parseFloat(startPos) + parseFloat(span2) + parseFloat(span * j)).toFixed(4) - 16),
									y : parseFloat((140 + parseFloat(span2) + parseFloat(span * i)).toFixed(4)),
									sel : 0
								};
				}
			}
		}
	}
	
	function fadeInToPlay()
	{
		if(flagConstruct)
		{
			createDot(gridPos + 5, false);
			flagConstruct = false;
		}
		
		ctx.globalAlpha = 1;
		sprite = ASSET_MANAGER.getAsset(sources.bg2);
		ctx.drawImage(sprite, 0, 0, 640, 640);

		if(change >= 0)
		{
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0 + change; // Half opacity
			ctx.fillRect(0,0,640,640);
			change -= 0.05;
		}
		else
		{
			change = 0;
			stateScene = "drawDot";
			flagConstruct = true;
		}
	}
	
	function drawDot()
	{
		if(change < dot.length * dot.length * 1)
		{
			z = Math.floor(change / 1);
			y = Math.floor(z / dot.length);
			x = Math.floor(z % dot.length);

			if(change % 1 == 0)
			{
				sprite = ASSET_MANAGER.getAsset(sources.dot_blank);
				ctx.drawImage(sprite, dot[y][x].x, dot[y][x].y, 25, 25);
			}
			change++;
		}
		else
		{
			i = change - dot.length * dot.length * 1;
			sprite = ASSET_MANAGER.getAsset(sources.char1);
			ctx.drawImage(sprite, 167 + 25 - i * 5, 11 + 25 - i * 5, 59 + i * 10, 59 + i * 10);
			
			sprite = ASSET_MANAGER.getAsset(sources.char2);
			ctx.drawImage(sprite, 354 + 25 - i * 5, 11 + 25 - i * 5, 59 + i * 10, 59 + i * 10);
			change++;

			if(i >= 5)
			{
				stateScene = "drawPlay";
				change = 0;
			}
		}
	}
	
	function drawPause()
	{
		if(stateScene == "drawPause")
		{
			if(flagConstruct)
			{
				listButton = {};
				listGambar = {};
				stateFrom = "drawPause";
				onPause = true;
				btnpause = new buatButton("btnpause", 563, 17);
				listButton['btnpause'] = btnpause;
				btnpause.onDown = function(e){
					e.preventDefault();
					e.stopPropagation();
				}
			
				btnclosepop = new buatButton("btnclosepop", 463, 212);
				listButton['btnclosepop'] = btnclosepop;
				btnclosepop.onUp = function(e){
					if(btnClick == "btnclosepop")
					{
						btnClick = "";
						stateScene = "drawPlay";
						flagConstruct = true;
					}
				}
				
				btnchangeplayer = new buatButton("btnchangeplayer", 178, 261);
				listButton['btnchangeplayer'] = btnchangeplayer;
				btnchangeplayer.onUp = function(e){
					if(btnClick == "btnchangeplayer")
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawPilihChar";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = new Array();
						listDot = [];
						onPause = false;
						flagConstruct = true;
					}
				}
				
				btnchangegrid = new buatButton("btnchangegrid", 178, 323);
				listButton['btnchangegrid'] = btnchangegrid;
				btnchangegrid.onUp = function(e){
					if(btnClick == "btnchangegrid")
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawPilihChar";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = new Array();
						listDot = [];
						onPause = false;
						flagConstruct = true;
					}
				}
				
				btnhelppopup = new buatButton("btnhelppopup", 178, 388);
				listButton['btnhelppopup'] = btnhelppopup;
				btnhelppopup.onUp = function(e){
					if(btnClick == "btnhelppopup")
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawHelp";
						stateFromHelpTo = "drawPause";
						flagConstruct = true;
					}
				}
				
				btnhome = new buatButton("btnhome", 227, 467);
				listButton['btnhome'] = btnhome;
				btnhome.onUp = function(e){
					if(btnClick == "btnhome")
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawJudul";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = new Array();
						listDot = [];
						onPause = false;
						flagConstruct = true;
					}
				}
				
				btnreset = new buatButton("btnreset", 350, 467);
				listButton['btnreset'] = btnreset;
				btnreset.onUp = function(e){
					if(btnClick == "btnreset")
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawDot";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = {};
						onPause = false;
						flagConstruct = true;

						firstTurn = firstTurn == 1 ? (vsWho == "man" ? 2 : 3) : 1;
						turn = firstTurn;
					}
				}
				
				flagConstruct = false;
			}
			
			clearScreen();
			ctx.globalAlpha = 1;
			drawPlay();
			
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0.25; // Half opacity
			ctx.fillRect(0,0,640,640);
			
			ctx.globalAlpha = 1;
			sprite = ASSET_MANAGER.getAsset(sources.bgpopup);
			ctx.drawImage(sprite, 145, 224, 352, 339);
			listButton['btnclosepop'].draw(ctx);
			listButton['btnchangeplayer'].draw(ctx);
			listButton['btnchangegrid'].draw(ctx);
			listButton['btnhelppopup'].draw(ctx);
			listButton['btnhome'].draw(ctx);
			listButton['btnreset'].draw(ctx);
		}
	}
	
	function fadeOutFromPlay()
	{
		if(flagConstruct)
		{
			change = 0;
			flagConstruct = false;
		}
		
		ctx.globalAlpha = 1;
		
		switch(stateFrom)
		{
			case "drawJudul":
				drawJudul();
				break
			case "drawPause":
				drawPause();
				break
			case "drawHelp":
				drawHelp();
				break;
			case "drawPauseReplay":
				drawPauseReplay();
				break;
		}
		
		ctx.fillStyle= "#000000";
		ctx.globalAlpha = 0 + change; // Half opacity
		ctx.fillRect(0,0,640,640);
		change += 0.05;
		if(change >= 1)
		{
			stateFrom = "";
			stateScene = "fadeInFromPlay";
			flagConstruct = true;
		}
	}
	
	function fadeInFromPlay()
	{
		ctx.globalAlpha = 1;
		switch (stateFromPlayTo)
		{
			case "drawPilihChar":
				drawPilihChar();
				break;
			case "drawJudul":
				drawJudul();
				break;
			case "drawDot":
				sprite = ASSET_MANAGER.getAsset(sources.bg2);
				ctx.drawImage(sprite, 0, 0, 640, 640);
				break;
			case "drawHelp":
				drawHelp();
				break;
			case "drawPause":
				drawPause();
				break;
			case "drawPauseReplay":
				drawPauseReplay();
				break;
		}
		
		
		if(change >= 0)
		{
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0 + change; // Half opacity
			ctx.fillRect(0,0,640,640);
			change -= 0.1;
		}
		else
		{
			ctx.globalAlpha = 1;
			switch (stateFromPlayTo)
			{
				case "drawPilihChar":
					stateScene = "drawPilihChar";
					break;
				case "drawJudul":
					stateScene = "drawJudul";
					break;
				case "drawDot":
					stateScene = "drawDot";
					break;
				case "drawHelp":
					stateScene = "drawHelp";
					break;
				case "drawPause":
					stateScene = "drawPause";
					break;
				case "drawPauseReplay":
					stateScene = "drawPauseReplay";
					break;
			}
			flagConstruct = true;
			change = 0;
		}
	}
	
	function drawHelp()
	{
		if(stateScene == "drawHelp" || stateFromPlayTo == "drawHelp" || stateFrom == "drawHelp")
		{
			if(flagConstruct)
			{
				listButton = {};
				listGambar = {};
				
				//createDot(9, true);
				/*
				btnpause = new buatButton("btnpause", 563, 17);
				listButton['btnpause'] = btnpause;
				btnpause.onDown = function(e){
					e.preventDefault();
					e.stopPropagation();
				}*/
				
				gbrtexttut1 = new buatGambar("texttut1", 40, 530);
				listGambar['texttut1'] = gbrtexttut1;
				gbrtexttut2 = new buatGambar("texttut2", 40, 530);
				listGambar['texttut2'] = gbrtexttut2;
				gbrtexttut3 = new buatGambar("texttut3", 40, 530);
				listGambar['texttut3'] = gbrtexttut3;
				gbrtexttut4 = new buatGambar("texttut4", 40, 530);
				listGambar['texttut4'] = gbrtexttut4;
				gbrtexttut5 = new buatGambar("texttut5", 40, 530);
				listGambar['texttut5'] = gbrtexttut5;
				gbrtexttut6 = new buatGambar("texttut6", 40, 530);
				listGambar['texttut6'] = gbrtexttut6;
				
				btnnext = new buatButton("btnnext", 336, 576);
				listButton['btnnext'] = btnnext;

				btnskiptutor = new buatButton("btnskiptutor", 540, 55);
				listButton['btnskiptutor'] = btnskiptutor;
				
				btnclosetutor = new buatButton("btnclosetutor", -100, -100);
				listButton['btnclosetutor'] = btnclosetutor;
				
				btnskiptutor.onUp = function(e){
					if(btnClick == "btnskiptutor")
					{
						btnClick = "";
						tutorTurn = 7;
					}
				}

				btnnext.onUp = function(e){
					if(btnClick == "btnnext")
					{
						btnClick = "";
						tutorTurn++;

						if(tutorTurn == 6)
						{
							btnclosetutor.x = 336;
							btnclosetutor.y = 576;
							btnnext.x = -100;
							btnnext.y = -100;
						}
					}
				}

				btnclosetutor.onUp = function(e){
					if(btnClick == "btnclosetutor")
					{
						btnClick = "";
						tutorTurn++;
					}
				}

				tutorTurn = 1;
				flagConstruct = false;
			}
			clearScreen();
			
			ctx.globalAlpha = 1;
			sprite = ASSET_MANAGER.getAsset(sources.bg2);
			ctx.drawImage(sprite, 0, 0, 640, 640);
	
			sprite = ASSET_MANAGER.getAsset(sources.char1);
			ctx.drawImage(sprite, 167, 11, 109, 109);
			
			sprite = ASSET_MANAGER.getAsset(sources.char2);
			ctx.drawImage(sprite, 354, 11, 109, 109);
	
			//listButton['btnpause'].draw(ctx);
			
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0.5; // Half opacity
			ctx.fillRect(0,0,640,640);
			
			ctx.globalAlpha = 1;

			if(tutorTurn > 1 && tutorTurn < 7)
			{
				sprite = ASSET_MANAGER.getAsset(tutTurnText[tutorTurn-2]);
				ctx.drawImage(sprite, 555, 17, sprite.width, sprite.height);
				listButton['btnskiptutor'].draw(ctx);
			}

			switch(tutorTurn)
			{
				case 2 :
					sprite = ASSET_MANAGER.getAsset(sources.tutgbr2);
					ctx.drawImage(sprite, 145, 200, sprite.width, sprite.height);
					break;
				case 3 :
					sprite = ASSET_MANAGER.getAsset(sources.tutgbr3);
					ctx.drawImage(sprite, 145, 200, sprite.width, sprite.height);
					break;
				case 4 :
					sprite = ASSET_MANAGER.getAsset(sources.tutgbr4);
					ctx.drawImage(sprite, 145, 200, sprite.width, sprite.height);
					break;
				case 5 :
					sprite = ASSET_MANAGER.getAsset(sources.tutgbr41);
					ctx.drawImage(sprite, 145, 200, sprite.width, sprite.height);
					break;
				case 6 :
					sprite = ASSET_MANAGER.getAsset(sources.tutgbr5);
					ctx.drawImage(sprite, 75, 90, sprite.width, sprite.height);
					break;
			}
			
			sprite = ASSET_MANAGER.getAsset(sources.bgtut);
			ctx.drawImage(sprite, 19, 483, sprite.width, sprite.height);
			if(tutorTurn < 6)
			{
				listGambar['texttut' + tutorTurn].draw(ctx);
				listButton['btnnext'].draw(ctx);
			}
			else if(tutorTurn == 6)
			{
				listGambar['texttut' + tutorTurn].draw(ctx);
				listButton['btnclosetutor'].draw(ctx);
			}
			else 
			{
				stateFromPlayTo = stateFromHelpTo;
				stateScene = "fadeOutFromPlay";
				flagConstruct = true;
				tutorTurn = 0;
			}
		}
	}
	

	function drawPlay()
	{
		if(flagConstruct)
		{
			listButton = {};
			listGambar = {};
			
			if(!onPause)
			{
				listDot = [];
				for(var i = 0; i < dot.length; i++) {
					for(var j = 0; j < dot.length; j++) {
						var dotPoint = new buatDot(dot[i][j].x, dot[i][j].y, j, i);
						listDot.push(dotPoint);
					}
				}
			
				redTurn = new Array();
				blueTurn = new Array();
				winSide = 0;
				winSquare = new Array();
						
				playerArray = new Array();
				comArray = new Array();
				//firstTurn = 0;
				turnCount = 0;
				if(turn == 3)
				{
					setTimeout(function() {
						comTurn();
					}, 1000);
				}
			}
			onPause = false;
			btnpause = new buatButton("btnpause", 563, 17);
			listButton['btnpause'] = btnpause;
			btnpause.onUp = function(e){
				if(btnClick == "btnpause")
				{
					btnClick = "";
					stateScene = "drawPause";
					flagConstruct = true;
				}
			}
			
			penListArray = new Array();
			change = 0;
			flagConstruct = false;
		}
		clearScreen();
		
		ctx.globalAlpha = 1;
		sprite = ASSET_MANAGER.getAsset(sources.bg2);
		ctx.drawImage(sprite, 0, 0, 640, 640);

		sprite = ASSET_MANAGER.getAsset(sources.char1);
		ctx.drawImage(sprite, 167, 11, 109, 109);
		
		sprite = ASSET_MANAGER.getAsset(sources.char2);
		ctx.drawImage(sprite, 354, 11, 109, 109);

		switch(turn)
		{
			case 1:
				sprite = ASSET_MANAGER.getAsset(sources.char1Glow);
				ctx.drawImage(sprite, 160, 4, 123, 123);
				break;
			case 2:
				sprite = ASSET_MANAGER.getAsset(sources.char2Glow);
				ctx.drawImage(sprite, 347, 4, 123, 123);
				break;
			case 3:
				sprite = ASSET_MANAGER.getAsset(sources.char3Glow);
				ctx.drawImage(sprite, 347, 4, 123, 123);
				break;
		}

		/*
		if(turn == 1)
		{
			sprite = ASSET_MANAGER.getAsset(turn == 1 ? sources.turnRedOn : sources.turnRedOff);
			ctx.drawImage(sprite, 210, 125, sprite.width, sprite.height);
		}
		if(vsWho == "man" && turn == 2)
		{
			sprite = ASSET_MANAGER.getAsset(turn == 2 ? sources.turnBlueOn : sources.turnBlueOff);
			ctx.drawImage(sprite, 400, 125, sprite.width, sprite.height);
		}
		if(vsWho == "comp" && turn == 3)
		{
			sprite = ASSET_MANAGER.getAsset(turn == 3 ? sources.turnGreenOn : sources.turnGreenOff);
			ctx.drawImage(sprite, 400, 125, sprite.width, sprite.height);
		}*/

		listButton['btnpause'].draw(ctx);
		
		for(var i in listDot)
		{
			listDot[i].draw(ctx);
		}

		if(turnCount > 0)
		{
			if(turn == 2 || turn == 3)
			{
				var split = redTurn[redTurn.length-1].split(',');
				dotSelect = listDot[parseInt(split[1])*dot.length + parseInt(split[0])];
				sprite = ASSET_MANAGER.getAsset(sources.dot_red_glow);
				ctx.drawImage(sprite, dotSelect.x, dotSelect.y, sprite.width, sprite.height);		
			}
			else
			{
				var split = blueTurn[blueTurn.length-1].split(',');
				dotSelect = listDot[parseInt(split[1])*dot.length + parseInt(split[0])];
				sprite = ASSET_MANAGER.getAsset(vsWho == "man" ? sources.dot_blue_glow : sources.dot_green_glow);
				ctx.drawImage(sprite, dotSelect.x, dotSelect.y, sprite.width, sprite.height);
			}
		}

		if(winSide > 0)
		{
			checkWin(ctx);
			
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0 + change; // Half opacity
			ctx.fillRect(0,0,640,640);
			
			if(change < 0.25)
				change += 0.05;
			else
			{
				stateScene = "drawWin";
				flagConstruct = true;
			}
		}
		else if (winSide < 0)
		{
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0 + change; // Half opacity
			ctx.fillRect(0,0,640,640);
			
			if(change < 0.25)
				change += 0.05;
			else
			{
				stateScene = "drawWin";
				flagConstruct = true;
			}
		}
	}
	
	var penListArray;
	var penArray;
	function checkSquare(turnTemp)
	{
		var data;
		var temp1, temp2;
		var arrayTemp = new Array();
		penArray = new Array();

		if(turnTemp == 1 && redTurn.length > 1)
		{
			data = redTurn;
		}
		
		if(turnTemp == 2 && blueTurn.length > 1)
		{
			data = blueTurn;
		}
		
		if(data)
		{
			for(var i = 0; i < data.length; i++)
			{
				temp1 = data[i].split(",");
				for(var j = 0; j < data.length; j++)
				{
					if(i == j) continue;
					temp2 = data[j].split(",");
					var a = Math.sqrt(Math.pow((temp1[0]-temp2[0]), 2) + Math.pow((temp1[1]-temp2[1]),2));
					arrayTemp = pushDistance(arrayTemp, a, data[i], data[j], turnTemp, '');
				}
			}
			
			if(turnTemp == 1)
				playerArray = arrayTemp;
			else if(turnTemp == 2)
				comArray = arrayTemp;
		}

		penListArray[penListArray.length] = 
		{
			side : turn,
			turn : data == null ? "" : data[data.length-1],
			array : penArray
		};
	}
	
	function pushDistance(array, a, fromPos, toPos, turnTemp, lastTurn)
	{
		if(array.length == 0)
		{
			var toTemp = new Array;
			toTemp[0] = toPos;
			array[array.length] = {d : a, count : 1, from: fromPos, to : toTemp, winpos: "-1,-1", tpen : ""};
		}
		else
		{
			var flag = true;
			var tpen = "";
			for(var i = 0; i < array.length; i++)
			{
				if(array[i].from == fromPos)
				{
					if(array[i].d == a)
					{
						array[i].count++;
						array[i].to[array[i].to.length] = toPos;
						flag = false;
					}
					else if(array[i].count > 1 && Math.sqrt(2 * Math.pow((array[i].d), 2)).toFixed(4) == a.toFixed(4) && stateScene != "drawReplay")
					{
						for(var j = 0; j < array[i].to.length; j++)
						{
							for(var k = 0; k < array[i].to.length; k++)
							{
								if(j == k) continue;
								temppos = searchResultPos(array[i].from, array[i].to[j], array[i].to[k]);
								if(temppos == toPos)
								{
									array[i].winpos = toPos;
									flag = false;
									winSquare[0] = array[i].from;
									winSquare[1] = array[i].to[j];
									winSquare[2] = array[i].winpos;
									winSquare[3] = array[i].to[k];
									winSide = turnTemp;
									break;
								}
							}
							if(flag == false) break;
						}
					}
				}

				if(array[i].to.length > 1)
				{
					for(var j = 0; j < array[i].to.length; j++)
					{
						for(var k = 0; k < array[i].to.length; k++)
						{
							if(j == k) continue;
							var arrTo = array[i].to;
							temppos = searchResultPos(array[i].from, array[i].to[j], array[i].to[k]);
							if(temppos != "")
							{
								// ABCD
								// AB
								var dis1 = Math.sqrt(
											Math.pow(splitxy(array[i].from).x - splitxy(array[i].to[j]).x, 2) + 
											Math.pow(splitxy(array[i].from).y - splitxy(array[i].to[j]).y, 2)).toFixed(4);
								//AD
								var dis2 = Math.sqrt(
											Math.pow(splitxy(array[i].from).x - splitxy(array[i].to[k]).x, 2) + 
											Math.pow(splitxy(array[i].from).y - splitxy(array[i].to[k]).y, 2)).toFixed(4);
								//AC
								var dis3 = Math.sqrt(
											Math.pow(splitxy(array[i].from).x - splitxy(temppos).x, 2) + 
											Math.pow(splitxy(array[i].from).y - splitxy(temppos).y, 2)).toFixed(4);
								//DB
								var dis4 = Math.sqrt(
											Math.pow(splitxy(temppos).x - splitxy(array[i].to[j]).x, 2) + 
											Math.pow(splitxy(temppos).y - splitxy(array[i].to[j]).y, 2)).toFixed(4);
								//
								var dis5 = Math.sqrt(2 * Math.pow(dis1, 2)).toFixed(4);
								if(	temppos != array[i].from && temppos != array[i].to[j] &&
									temppos != array[i].to[k] && dis1 == dis2 &&
									dis1 == dis4 && dis5 == dis3
									)
								{
									var square = new Array();
									var tempSquare = new Array();
									tempSquare [0] = square[0] = array[i].from;
									tempSquare [1] = square[1] = array[i].to[j];
									tempSquare [2] = square[2] = temppos;
									tempSquare [3] = square[3] = array[i].to[k];

									tempSquare.sort();
									var flagPen = true;
									for(var l in penArray)
									{
										var penItem = new Array();
										penItem[0] = penArray[l][0];
										penItem[1] = penArray[l][1];
										penItem[2] = penArray[l][2];
										penItem[3] = penArray[l][3];
										penItem.sort();
										if(	penItem[0] == tempSquare[0] && penItem[1] == tempSquare[1] &&
											penItem[2] == tempSquare[2] && penItem[3] == tempSquare[3])
										{
											flagPen = false;
											break;
										}
									}
									if(flagPen)
										penArray[penArray.length] = square;
								}
							}
						}
					}
				}
			}
			if(flag)
			{
				var toTemp = new Array;
				toTemp[0] = toPos;
				array[array.length] = {d : a, count : 1, from: fromPos, to : toTemp, winpos: "-1,-1", tpen : tpen};
			}
		}
		return array;
	}
	
	function splitxy(xy)
	{
		var returnxy = xy.split(",");
		return{x: parseInt(returnxy[0]), y: parseInt(returnxy[1])}
	}

	function searchResultPos(from, pos1, pos2)
	{
		point1 = from.split(",");
		point2 = pos1.split(",");
		point3 = pos2.split(",");
		
		x1 = point2[0] - point1[0];
		y1 = point2[1] - point1[1];
		
		x2 = point3[0] - point1[0];
		y2 = point3[1] - point1[1];
		
		x3 = x1 + x2 + parseInt(point1[0]);
		y3 = y1 + y2 + parseInt(point1[1]);
		if(x3 > dot.length-1 || y3 > dot.length-1 || x3 < 0 || y3 < 0)
			return "";
		else
			return x3 + "," + y3;
	}
	
	function checkWin(ctx)
	{
		if(winSide > 0)
		{
			ctx.save();
			ctx.globalAlpha = 0.35;
			ctx.beginPath();
			ctx.fillStyle = winSide == 1 ? "#FF5542" : (vsWho == "man" ? "#249389" : "#009334"); //rbg
			temp2 = winSquare[0].split(",");
			ctx.moveTo(dot[temp2[1]][temp2[0]].x + 13, dot[temp2[1]][temp2[0]].y + 13);
			for(var i = 1; i < winSquare.length; i++) {
				temp2 = winSquare[i].split(",");
				ctx.lineTo(dot[temp2[1]][temp2[0]].x + 13, dot[temp2[1]][temp2[0]].y + 13);
			}
			ctx.closePath();
			ctx.fill();
			ctx.strokeStyle = "black";
			ctx.lineWidth = 2;
			ctx.stroke();
			ctx.restore();
		}
	}
	
	var drawNow = false;
	function drawWin()
	{
		if(flagConstruct)
		{

			tls1win = new buatGambar("player1win", 230, 20);
			listGambar['player1win'] = tls1win;
			tls2win = new buatGambar("player2win", 230, 20);
			listGambar['player2win'] = tls2win;

			tlswin = new buatGambar("win", 230, 20);
			listGambar['win'] = tlswin;
			tlslose = new buatGambar("lose", 230, 20);
			listGambar['lose'] = tlslose;
			tlsdraw = new buatGambar("draw", 230, 20);
			listGambar['draw'] = tlsdraw;
			btnreplay = new buatButton("btnreplay", 235, 70);
			listButton['btnreplay'] = btnreplay;
			btnreplay.onUp = function(e){
				if(btnClick == "btnreplay")
				{
					btnClick = "";
					stateScene = "drawReplay";
					change = 0;
					xTujuan = 0;
					flagConstruct = true;
				}
			}
			
			btnhome = new buatButton("btnhomesmall", 427, 70);
			listButton['btnhomesmall'] = btnhome;
			btnhome.onUp = function(e){
				if(btnClick == "btnhomesmall")
				{
					btnClick = "";
					stateScene = "fadeOutFromPlay";
					stateFromPlayTo = "drawJudul";
					flagConstruct = true;
				}
			}
			
			btnreset = new buatButton("btnresetsmall", 470, 70);
			listButton['btnresetsmall'] = btnreset;
			btnreset.onUp = function(e){
				if(btnClick == "btnresetsmall")
				{
					btnClick = "";
					stateScene = "fadeOutFromPlay";
					stateFromPlayTo = "drawDot";

					redTurn = new Array();
					blueTurn = new Array();
					winSide = 0;
					winSquare = new Array();
					listDotReplay = [];
					listDot = [];
					onPause = false;
					flagConstruct = true;
					
					firstTurn = firstTurn == 1 ? (vsWho == "man" ? 2 : 3) : 1;
					turn = firstTurn;
				}
			}
			
			btnpause.onDown = function(e){
				e.preventDefault();
				e.stopPropagation();
			}
			
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 0, Math.floor((Math.random()*10)+1));
			listConf[0] = conf1;
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 1, Math.floor((Math.random()*10)+1));
			listConf[1] = conf1;
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 2, Math.floor((Math.random()*10)+1));
			listConf[2] = conf1;
			
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 3, Math.floor((Math.random()*10)+1));
			listConf[3] = conf1;
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 4, Math.floor((Math.random()*10)+1));
			listConf[4] = conf1;
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 5, Math.floor((Math.random()*10)+1));
			listConf[5] = conf1;
			
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 6, Math.floor((Math.random()*10)+1));
			listConf[6] = conf1;
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 7, Math.floor((Math.random()*10)+1));
			listConf[7] = conf1;
			conf1 = new buatConf(Math.floor((Math.random()*600)+20), Math.floor((Math.random()*60)-60), 8, Math.floor((Math.random()*10)+1));
			listConf[8] = conf1;
			
			change = 0;
			drawNow = false;
			setTimeout(function() {
							drawNow = true;
						}, 1000);
			flagConstruct = false;
		}
		
		if(drawNow)
		{
			ctx.globalAlpha = 1;
			sprite = ASSET_MANAGER.getAsset(sources.bg2);
			ctx.drawImage(sprite, 0, 0, 640, 640);
			
			sprite = ASSET_MANAGER.getAsset(sources.char1);
			ctx.drawImage(sprite, 167, 11, 109, 109);
			
			sprite = ASSET_MANAGER.getAsset(sources.char2);
			ctx.drawImage(sprite, 354, 11, 109, 109);

			listButton['btnpause'].draw(ctx);
			
			for(var i in listDot)
			{
				listDot[i].draw(ctx);
			}
			
			checkWin(ctx);
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0.25; // Half opacity
			ctx.fillRect(0,0,640,640);
			ctx.globalAlpha = 1;

			sprite = ASSET_MANAGER.getAsset(sources.bgpopresult);
			ctx.drawImage(sprite, 89, 10, 462, 125);

			switch (vsWho)
			{
				case 'comp' :
					switch (winSide) 
					{
						case -1:
							switch (player1)
							{
								case 0 :
									sprite = ASSET_MANAGER.getAsset(sources.boyCompDraw);
									ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
									break;
								case 1 :
									sprite = ASSET_MANAGER.getAsset(sources.girlCompDraw);
									ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
									break;
								case 2:
									sprite = ASSET_MANAGER.getAsset(sources.uoCompDraw);
									ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
									break;
							}
							listGambar['draw'].draw(ctx);
							break;
						case 1 :
							switch (player1)
							{
								case 0 :
									sprite = ASSET_MANAGER.getAsset(sources.boyWin);
									ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
									break;
								case 1 :
									sprite = ASSET_MANAGER.getAsset(sources.girlWin);
									ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
									break;
								case 2:
									sprite = ASSET_MANAGER.getAsset(sources.uoWin);
									ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
									break;
							}
							listGambar['win'].draw(ctx);
							for(var i in listConf)
							{
								listConf[i].draw(ctx, change);
							}
							change = change > 360 ? change = 0 : change + 5;
							break;
						case 2 :
							switch (player1)
							{
								case 0 :
									sprite = ASSET_MANAGER.getAsset(sources.boyLose);
									ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
									break;
								case 1 :
									sprite = ASSET_MANAGER.getAsset(sources.girlLose);
									ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
									break;
								case 2:
									sprite = ASSET_MANAGER.getAsset(sources.uoLose);
									ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
									break;
							}
							listGambar['lose'].draw(ctx);
							break;
					}
					break;
				case 'man' :
					switch (winSide) 
						{
							case -1:
								var player = String(player1) + String(player2);
								switch (player)
								{
									case '01' :
										sprite = ASSET_MANAGER.getAsset(sources.draw12);
										ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
										break;
									case '02' :
										sprite = ASSET_MANAGER.getAsset(sources.draw13);
										ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
										break;
									case '10' :
										sprite = ASSET_MANAGER.getAsset(sources.draw21);
										ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
										break;
									case '12' :
										sprite = ASSET_MANAGER.getAsset(sources.draw23);
										ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
										break;
									case '20' :
										sprite = ASSET_MANAGER.getAsset(sources.draw31);
										ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
										break;
									case '21' :
										sprite = ASSET_MANAGER.getAsset(sources.draw32);
										ctx.drawImage(sprite, 95, 30, sprite.width, sprite.height);
										break;
								}
								listGambar['draw'].draw(ctx);
								break;
							case 1 :
								switch (player1)
								{
									case 0 :
										sprite = ASSET_MANAGER.getAsset(sources.boyWin);
										ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
										break;
									case 1 :
										sprite = ASSET_MANAGER.getAsset(sources.girlWin);
										ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
										break;
									case 2:
										sprite = ASSET_MANAGER.getAsset(sources.uoWin);
										ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
										break;
								}
								listGambar['player1win'].draw(ctx);
								for(var i in listConf)
								{
									listConf[i].draw(ctx, change);
								}
								change = change > 360 ? change = 0 : change + 5;
								break;
							case 2 :
								switch (player2)
								{
									case 0 :
										sprite = ASSET_MANAGER.getAsset(sources.boyWin);
										ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
										break;
									case 1 :
										sprite = ASSET_MANAGER.getAsset(sources.girlWin);
										ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
										break;
									case 2:
										sprite = ASSET_MANAGER.getAsset(sources.uoWin);
										ctx.drawImage(sprite, 100, 12.5, sprite.width, sprite.height);
										break;
								}
								listGambar['player2win'].draw(ctx);
								for(var i in listConf)
								{
									listConf[i].draw(ctx, change);
								}
								change = change > 360 ? change = 0 : change + 5;
								break;
						}
					break;
			}
			listButton['btnreplay'].draw(ctx);
			listButton['btnhomesmall'].draw(ctx);
			listButton['btnresetsmall'].draw(ctx);
		}
	}
	
	function comTurn()
	{
		var flag = false;
		if(turnCount > 1)
		{
			// win
			if(!flag)
			{
				for(var i in penListArray[turnCount-2].array)
				{
					for(var j in penListArray[turnCount-2].array[i])
					{
						var varxy = splitxy(penListArray[turnCount-2].array[i][j]);
						if(listDot[varxy.y *dot.length + varxy.x ].side == 0)
						{
							listDot[varxy.y *dot.length + varxy.x ].comSelect();
							flag = true;
							break;
						}
					}
					if(flag == true) break;
				}
			}

			// block win
			if(!flag && turnCount > 2)
			{
				for(var i in penListArray[turnCount-1].array)
				{
					for(var j in penListArray[turnCount-1].array[i])
					{
						var varxy = splitxy(penListArray[turnCount-1].array[i][j]);
						if(listDot[varxy.y *dot.length + varxy.x ].side == 0)
						{
							listDot[varxy.y *dot.length + varxy.x ].comSelect();
							flag = true;
							break;
						}
					}
					if(flag == true) break;
				}
			}

			// estimate player third dot
			if(!flag)
			{
				for(var i in playerArray)
				{
					if(playerArray[i].to.length > 1)
					{
						for(j in playerArray[i].to)
						{
							temp1 = splitxy(playerArray[i].from);
							temp2 = splitxy(playerArray[i].to[j]);
							x = temp2.x - temp1.x;
							y = temp2.y - temp1.y;

							//rotate 90
							tempX = (-y + temp1.x);
							tempY = (x + temp1.y);
							if(tempX >= 0 && tempX < dot.length && tempY >= 0 && tempY < dot.length && !flag)
							{
								if(listDot[tempY*dot.length + tempX].side == 0)
								{
									listDot[tempY*dot.length + tempX].comSelect();
									flag = true;
									break;
								}
							}
							//rotate -90
							tempX = (y + temp1.x);
							tempY = (-x + temp1.y);
							if(tempX >= 0 && tempX < dot.length && tempY >= 0 && tempY < dot.length && !flag)
							{
								if(listDot[tempY*dot.length + tempX].side == 0)
								{
									listDot[tempY*dot.length + tempX].comSelect();
									flag = true;
									break;
								}
							}

							if(flag) break;
						}
					}
					if(flag) break;
				}
			}

			// search 3rd dot
			if(!flag)
			{
				var x, y, tempX, tempY, temp1, temp2;
				for(var i = 0; i < blueTurn.length; i++)
				{
					for(var j = i+1; j < blueTurn.length; j++)
					{
						temp1 = splitxy(blueTurn[i]);
						temp2 = splitxy(blueTurn[j]);
						x = temp2.x - temp1.x;
						y = temp2.y - temp1.y;

						//rotate 90
						tempX = (-y + temp1.x);
						tempY = (x + temp1.y);
						if(tempX >= 0 && tempX < dot.length && tempY >= 0 && tempY < dot.length && !flag)
						{
							if(listDot[tempY*dot.length + tempX].side == 0)
							{
								var tempPos = searchResultPos(blueTurn[i], blueTurn[j], tempX+","+tempY);
								if(tempPos != "")
								{
									try
									{
										var resPos = splitxy(tempPos);
										if(listDot[resPos.y *dot.length + resPos.x].side == 0)
										{
											listDot[tempY*dot.length + tempX].comSelect();
											flag = true;
											break;
										}
									}
									catch(err)
									{
										console.log("err 90 : ", resPos, '-', tempPos, blueTurn[i], blueTurn[j], tempX+","+tempY);
									}
								}
							}
						}

						//rotate -90
						tempX = (y + temp1.x);
						tempY = (-x + temp1.y);
						if(tempX >= 0 && tempX < dot.length && tempY >= 0 && tempY < dot.length && !flag)
						{
							if(listDot[tempY*dot.length + tempX].side == 0)
							{
								var tempPos = searchResultPos(blueTurn[i], blueTurn[j], tempX+","+tempY);
								try
								{
									if(tempPos != "")
									{
										var resPos = splitxy(tempPos);
										if(listDot[resPos.y *dot.length + resPos.x].side == 0)
										{
											listDot[tempY*dot.length + tempX].comSelect();
											flag = true;
											break;
										}
									}
								}
								catch(e)
								{
									console.log("err -90 : ", resPos, '-', tempPos, blueTurn[i], blueTurn[j], tempX+","+tempY);
								}
							}
						}
					}
					if(flag) break;
				}
			}
		}

		// random
		while(!flag)
		{
			if(turnCount > 0)
			{
				var x = (Math.floor(Math.random() * 100) % 3) - 1;
				var y = (Math.floor(Math.random() * 100) % 3) - 1;
				try{
					var posxy = splitxy(redTurn[0]);
					if(listDot[(posxy.y + y)*dot.length + (posxy.x + x)].side == 0)
					{
						listDot[(posxy.y + y)*dot.length + (posxy.x + x)].comSelect();
						flag = true;
						break;
					}
				}
				catch (e)
				{
					console.log("err random", redTurn[0])
				}
			}

			if(!flag)
			{
				var x = Math.floor((Math.random()*(dot.length-4))) + 2;
				var y = Math.floor((Math.random()*(dot.length-4))) + 2;
				
				if(listDot[y*dot.length + x].side == 0)
				{
					listDot[y*dot.length + x].comSelect();
					flag = true;
					break;
				}
			}
		}
		turn = 1;
	}

	var listDotReplay = [];
	var xTujuan = 0;
	var penyArray = new Array();
	var indexPen = -1;
	var turnList = new Array();
	var listPaging = [];
	var startPosPagination = 0;
	var turnCountReplay;
	var changeMove = 0;
	var changeHand = 0;
	function drawReplay()
	{
		if(stateScene == "drawReplay" || stateScene == "drawPauseReplay")
		{
			if(flagConstruct)
			{
				var objTurn = [redTurn, blueTurn];
				var localTurn = firstTurn == 1 ? 0 : 1;
				var localIndex = 0;
				listButton = [];
				if(xTujuan == 0)
				{
					change = 0;
					xTujuan = 0;
					listButton = [];
					listDotReplay = [];
					turnCountReplay = [firstTurn == 1 ? 1 : 0, firstTurn != 1 ? 1 : 0];
				}
				
				for(var z=0;z<turnCount;z++)
				{
					var a = localTurn == 0 ? 1 :(vsWho=="comp"?3:2);
					turnList[z] = a + '-'+ objTurn[localTurn][localIndex];

					listDotTemp = new Array();
					for(var i = 0; i < dot.length; i++) {
						for(var j = 0; j < dot.length; j++) {
							var dotPoint = new buatDot(dot[i][j].x, dot[i][j].y, j, i);
							dotPoint.x += z * 640;
							listDotTemp.push(dotPoint);
						}
					}
					listDotReplay[z] = listDotTemp;

					localTurn = localTurn == 0 ? 1 : 0;
					if(z % 2 != 0) localIndex++;
				}

				for(var i=0;i<listDotReplay.length;i++)
				{
					for(var j=0;j<=i;j++)
					{
						var side = turnList[j].split('-');
						var turnSide = parseInt(side[0]);
						var x = parseInt(side[1].split(',')[0]);
						var y = parseInt(side[1].split(',')[1]);
						listDotReplay[i][y*dot.length + x].side = turnSide;
					}
				}

				btnpause = new buatButton("btnpause", 563, 17);
				listButton['btnpause'] = btnpause;
				btnpause.onUp = function(e){
					if(btnClick == "btnpause")
					{
						btnClick = "";
						stateScene = "drawPauseReplay";
						flagConstruct = true;
					}
				}

				touchpad = new buatTouchPad(0, 125, canvasWidth, canvasHeight - 125);
				listButton['touchPad'] = touchpad;

				touchpad.upCustomFunction = function(pose)
				{
					if(this.changeX < -200)
					{
						xTujuan = (xTujuan == turnCount-1 ? turnCount-1 : ++xTujuan);

						if(turnList[xTujuan].split("-")[0] == 1)
							turnCountReplay[0] = (turnCountReplay[0] == redTurn.length ? redTurn.length : ++turnCountReplay[0]);
						else 
							turnCountReplay[1] = (turnCountReplay[1] == blueTurn.length ? blueTurn.length : ++turnCountReplay[1]);
					}
					else if (this.changeX > 200)
					{
						xTujuan = (xTujuan == 0 ? 0 : --xTujuan);

						if(turnList[xTujuan].split("-")[0] != 1)
							turnCountReplay[0] = (turnCountReplay[0] == (firstTurn == 1 ? 1 : 0) ? (firstTurn == 1 ? 1 : 0) : --turnCountReplay[0]);
						else
							turnCountReplay[1] = (turnCountReplay[1] == (firstTurn != 1 ? 1 : 0) ? (firstTurn != 1 ? 1 : 0) : --turnCountReplay[1]);
					}
					this.changeX = 0;
				}

				gbrviewReplayText = new buatGambar("viewReplayText", 10, 10);
				listGambar['viewReplayText'] = gbrviewReplayText;
				
				btnleft1 = new buatButton("btnleft", 30, 388);
				btnleft1.onUp = function(e){
					if(btnClick == "btnleft")
					{
						btnClick = "";
						xTujuan = (xTujuan == 0 ? 0 : --xTujuan);

						if(turnList[xTujuan].split("-")[0] != 1)
							turnCountReplay[0] = (turnCountReplay[0] == (firstTurn == 1 ? 1 : 0) ? (firstTurn == 1 ? 1 : 0) : --turnCountReplay[0]);
						else
							turnCountReplay[1] = (turnCountReplay[1] == (firstTurn != 1 ? 1 : 0) ? (firstTurn != 1 ? 1 : 0) : --turnCountReplay[1]);
					}
				}
				listButton['btnleft1'] = btnleft1;
				

				btnright1 = new buatButton("btnright", 570, 388);
				btnright1.onUp = function(e){
					if(btnClick == "btnright")
					{
						btnClick = "";
						xTujuan = (xTujuan == turnCount-1 ? turnCount-1 : ++xTujuan);

						if(turnList[xTujuan].split("-")[0] == 1)
							turnCountReplay[0] = (turnCountReplay[0] == redTurn.length ? redTurn.length : ++turnCountReplay[0]);
						else 
							turnCountReplay[1] = (turnCountReplay[1] == blueTurn.length ? blueTurn.length : ++turnCountReplay[1]);
					}
				}
				listButton['btnright1'] = btnright1;

				changeHand = 0;
				changeMove = -2;
				this.changeX = 0;

				flagConstruct = false;
			}

			clearScreen();
			ctx.globalAlpha = 1;
			sprite = ASSET_MANAGER.getAsset(sources.bg2);
			ctx.drawImage(sprite, 0, 0, 640, 640);
	
			sprite = ASSET_MANAGER.getAsset(sources.char1);
			ctx.drawImage(sprite, 167, 11, 109, 109);
			
			sprite = ASSET_MANAGER.getAsset(sources.char2);
			ctx.drawImage(sprite, 354, 11, 109, 109);

			listGambar['viewReplayText'].draw(ctx);
			/*
			ctx.fillStyle = "#FF5542";
			ctx.font = "bold 30px Arial";
			ctx.fillText(turnCountReplay[0] + "/" + redTurn.length, 10, 625);*/

			// create text turn count
			var turnCountRed = ('0' + turnCountReplay[0].toString()).substr(-2);
			for(var i in turnCountRed)
			{
				sprite = ASSET_MANAGER.getAsset(angkared[turnCountRed[i]]);
				ctx.drawImage(sprite, 70 + 20 * i, 90, sprite.width, sprite.height);
			}

			sprite = ASSET_MANAGER.getAsset(angkared[10]);
			ctx.drawImage(sprite, 70 + 40, 90, sprite.width, sprite.height);

			var totalturnCountRed = ('0' + redTurn.length.toString()).substr(-2);
			for(var i in totalturnCountRed)
			{
				sprite = ASSET_MANAGER.getAsset(angkared[totalturnCountRed[i]]);
				ctx.drawImage(sprite, 70 + 50 + 20 * i, 90, sprite.width, sprite.height);
			}

			//create text turn count 2
			var turnCountBlue = ('0' + turnCountReplay[1].toString()).substr(-2);
			for(var i in turnCountBlue)
			{
				sprite = ASSET_MANAGER.getAsset(angkablue[turnCountBlue[i]]);
				ctx.drawImage(sprite, 470 + 20 * i, 90, sprite.width, sprite.height);
			}

			sprite = ASSET_MANAGER.getAsset(angkablue[10]);
			ctx.drawImage(sprite, 470 + 40, 90, sprite.width, sprite.height);

			var turnCountBlue = ('0' + blueTurn.length.toString()).substr(-2);
			for(var i in turnCountBlue)
			{
				sprite = ASSET_MANAGER.getAsset(angkablue[turnCountBlue[i]]);
				ctx.drawImage(sprite, 470 + 50 + 20 * i, 90, sprite.width, sprite.height);
			}

			/*
			if(vsWho == "comp")
				ctx.fillStyle = "#009334";
			else
				ctx.fillStyle = "#249389"; // blue
			ctx.font = "bold 30px Arial";
			ctx.fillText(turnCountReplay[1] +"/" + blueTurn.length, 555, 625);*/

			listButton['btnpause'].draw(ctx);

			/*
			for(var i = 0;i<listDotReplay.length;i++)
			{
				if(xTujuan == i)
					sprite = ASSET_MANAGER.getAsset(sources.pageSelect);
				else
					sprite = ASSET_MANAGER.getAsset(sources.pageUnselect);
				ctx.drawImage(sprite, startPosPagination + 20 * i, 640-20, 12, 12);
			}*/

			for(var k = (xTujuan-1<0 ? 0 : Math.abs(Math.floor(change/640))-1);k< (xTujuan==listDotReplay.length?listDotReplay.length : Math.abs(Math.floor(change/640)) + 1);k++)
			{
				for(var j in listDotReplay[k])
				{
					listDotReplay[k][j].changeX = change;
					listDotReplay[k][j].draw(ctx);
				}

				if(xTujuan == k)
				{
					var side = turnList[k].split('-');
					var turnSide = parseInt(side[0]);
					var x = parseInt(side[1].split(',')[0]);
					var y = parseInt(side[1].split(',')[1]);

					switch(turnSide)
					{
						case 1:
							sprite = ASSET_MANAGER.getAsset(sources.char1Glow);
							ctx.drawImage(sprite, 160, 4, 123, 123);
							break;
						case 2:
							sprite = ASSET_MANAGER.getAsset(sources.char2Glow);
							ctx.drawImage(sprite, 347, 4, 123, 123);
							break;
						case 3:
							sprite = ASSET_MANAGER.getAsset(sources.char3Glow);
							ctx.drawImage(sprite, 347, 4, 123, 123);
							break;
					}

					dotSelect = listDotReplay[k][y * dot.length + x];
					var sprite;
					switch(turnSide)
					{
						case 1:
							sprite = ASSET_MANAGER.getAsset(sources.dot_red_glow);
							break;
						case 2:
							sprite = ASSET_MANAGER.getAsset(sources.dot_blue_glow);
							break;
						case 3:
							sprite = ASSET_MANAGER.getAsset(sources.dot_green_glow);
							break;
					}
					ctx.drawImage(sprite, (dotSelect.x + change)-2, dotSelect.y-2, sprite.width, sprite.height);
				}

				// draw winsquare
				if(xTujuan == listDotReplay.length-1 && change == -(xTujuan * 640))
				{
					ctx.save();
					ctx.globalAlpha = 0.35;
					ctx.beginPath();
					ctx.fillStyle = winSide == 1 ? "#FF5542" : (vsWho == "comp" ? "#009334" : "#249389"); // rgb
					temp2 = winSquare[0].split(",");
					var tempX = parseInt(temp2[0]);
					var tempY = parseInt(temp2[1]);
					var objA = listDotReplay[xTujuan][tempY*dot.length + tempX];
					ctx.moveTo(objA.x + objA.changeX + 13, objA.y + 13);

					temp2 = winSquare[1].split(",");
					tempX = parseInt(temp2[0]);
					tempY = parseInt(temp2[1]);
					objA = listDotReplay[xTujuan][tempY*dot.length + tempX];
					ctx.lineTo(objA.x + objA.changeX + 13, objA.y + 13);

					temp2 = winSquare[2].split(",");
					tempX = parseInt(temp2[0]);
					tempY = parseInt(temp2[1]);
					objA = listDotReplay[xTujuan][tempY*dot.length + tempX];
					ctx.lineTo(objA.x + objA.changeX + 13, objA.y + 13);

					temp2 = winSquare[3].split(",");
					tempX = parseInt(temp2[0]);
					tempY = parseInt(temp2[1]);
					objA = listDotReplay[xTujuan][tempY*dot.length + tempX];
					ctx.lineTo(objA.x + objA.changeX + 13, objA.y + 13);

					ctx.closePath();
					ctx.fill();
					ctx.strokeStyle = "black";
					ctx.lineWidth = 2;
					ctx.stroke();
					ctx.restore();
				}

				if(xTujuan > 2)
				{
					if(	change == -(xTujuan * 640) && xTujuan != listDotReplay.length-1 &&
						penListArray[xTujuan-2].array.length > 0)
					{
						var countPenSquare = 0;
						for(var i=0;i<penListArray[xTujuan-2].array.length;i++)
						{
							var dotLocal = penListArray[xTujuan-2].array[i];
							var flagSalah = true;
							var countIsi = 0;
							for(var dl in dotLocal)
							{
								temp2 = dotLocal[dl].split(",");
								var tempX = parseInt(temp2[0]);
								var tempY = parseInt(temp2[1]);

								if(listDotReplay[xTujuan][tempY*dot.length + tempX].side != 0)
								{
									countIsi++;
									if(countIsi == 4)
										flagSalah = false;
								}								
								
								if(	listDotReplay[xTujuan][tempY*dot.length + tempX].side != 0 && 
									listDotReplay[xTujuan][tempY*dot.length + tempX].side != penListArray[xTujuan-2].side)
									flagSalah = false;	
							}

							if(flagSalah && countPenSquare < 2)
							{
								temp2 = dotLocal[2].split(",");
								tempX = parseInt(temp2[0]);
								tempY = parseInt(temp2[1]);
								sprite = ASSET_MANAGER.getAsset(sources.dot_glow);
								objA = listDotReplay[xTujuan][tempY*dot.length + tempX];
								ctx.drawImage(sprite, objA.x + objA.changeX, objA.y, sprite.width, sprite.height);

								temp2 = dotLocal[0].split(",");
								var tempX = parseInt(temp2[0]);
								var tempY = parseInt(temp2[1]);
								var objA = listDotReplay[xTujuan][tempY*dot.length + tempX];
								ctx.save();
								ctx.globalAlpha = 0.25;
								ctx.beginPath();
								ctx.setLineDash([5,3]);
								ctx.fillStyle = penListArray[xTujuan-2].side == 1 ? "#FF5542" : (vsWho == "comp" ? "#009334" : "#249389"); //rgb
								ctx.moveTo(objA.x + objA.changeX + 13, objA.y + 13);
								for(var z = 1; z < dotLocal.length; z++) {
									temp2 = dotLocal[z].split(",");
									tempX = parseInt(temp2[0]);
									tempY = parseInt(temp2[1]);
									objA = listDotReplay[xTujuan][tempY*dot.length + tempX];
									ctx.lineTo(objA.x + objA.changeX + 13, objA.y + 13);
								}
								ctx.closePath();
								ctx.fill();
								ctx.strokeStyle = "black";
								ctx.lineWidth = 2;
								ctx.stroke();
								ctx.restore();

								countPenSquare++;
							}
						}
					}
				}
			}

			if(xTujuan > 0)
			{
				listButton['btnleft1'].draw(ctx);
			}
			if(xTujuan < listDotReplay.length - 1)
			{
				listButton['btnright1'].draw(ctx);
			}

			if(change > -(xTujuan * 640))
			{
				change-=10;
			}
			else if(change < -(xTujuan * 640))
			{
				change+=10;
			}
		}
	}

	function drawPauseReplay()
	{
		if(stateScene == "drawPauseReplay")
		{
			if(flagConstruct)
			{
				listButton = {};
				listGambar = {};
				stateFrom = "drawPauseReplay";
				onPause = true;
				btnpause = new buatButton("btnpause", 563, 17);
				listButton['btnpause'] = btnpause;
				btnpause.onDown = function(e){
					e.preventDefault();
					e.stopPropagation();
				}
			
				btnclosepop = new buatButton("btnclosepop", 463, 212);
				listButton['btnclosepop'] = btnclosepop;
				btnclosepop.onUp = function(e){
					if(btnClick == "btnclosepop" && onPause)
					{
						onPause = false;
						btnClick = "";
						stateScene = "drawReplay";
						flagConstruct = true;
					}
				}
				
				btnchangeplayer = new buatButton("btnchangeplayer", 178, 261);
				listButton['btnchangeplayer'] = btnchangeplayer;
				btnchangeplayer.onUp = function(e){
					if(btnClick == "btnchangeplayer" && onPause)
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawPilihChar";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = new Array();
						listDot = [];
						onPause = false;
						flagConstruct = true;
					}
				}
				
				btnchangegrid = new buatButton("btnchangegrid", 178, 323);
				listButton['btnchangegrid'] = btnchangegrid;
				btnchangegrid.onUp = function(e){
					if(btnClick == "btnchangegrid" && onPause)
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawPilihChar";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = new Array();
						listDot = [];
						onPause = false;
						flagConstruct = true;
					}
				}
				
				btnhelppopup = new buatButton("btnhelppopup", 178, 388);
				listButton['btnhelppopup'] = btnhelppopup;
				btnhelppopup.onUp = function(e){
					if(btnClick == "btnhelppopup" && onPause)
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawHelp";
						stateFromHelpTo = "drawPauseReplay";
						flagConstruct = true;
					}
				}
				
				btnhome = new buatButton("btnhome", 227, 467);
				listButton['btnhome'] = btnhome;
				btnhome.onUp = function(e){
					if(btnClick == "btnhome" && onPause)
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawJudul";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = new Array();
						listDot = [];
						onPause = false;
						flagConstruct = true;
					}
				}
				
				btnreset = new buatButton("btnreset", 350, 467);
				listButton['btnreset'] = btnreset;
				btnreset.onUp = function(e){
					if(btnClick == "btnreset" && onPause)
					{
						btnClick = "";
						stateScene = "fadeOutFromPlay";
						stateFromPlayTo = "drawDot";
						redTurn = new Array();
						blueTurn = new Array();
						winSide = 0;
						winSquare = {};
						onPause = false;
						flagConstruct = true;

						firstTurn = firstTurn == 1 ? (vsWho == "man" ? 2 : 3) : 1;
						turn = firstTurn;
						xTujuan = 0;
					}
				}
				
				gbrviewReplayText = new buatGambar("viewReplayText", 10, 10);
				listGambar['viewReplayText'] = gbrviewReplayText;

				btnleft1 = new buatButton("btnleft", 30, 388);
				listButton['btnleft1'] = btnleft1;
				

				btnright1 = new buatButton("btnright", 570, 388);
				listButton['btnright1'] = btnright1;

				flagConstruct = false;
			}
			
			clearScreen();
			ctx.globalAlpha = 1;
			if(xTujuan != 0)
				change = xTujuan * -640;
			drawReplay();
			
			ctx.fillStyle= "#000000";
			ctx.globalAlpha = 0.25; // Half opacity
			ctx.fillRect(0,0,640,640);
			
			ctx.globalAlpha = 1;
			sprite = ASSET_MANAGER.getAsset(sources.bgpopup);
			ctx.drawImage(sprite, 145, 224, 352, 339);
			listButton['btnclosepop'].draw(ctx);
			listButton['btnchangeplayer'].draw(ctx);
			listButton['btnchangegrid'].draw(ctx);
			listButton['btnhelppopup'].draw(ctx);
			listButton['btnhome'].draw(ctx);
			listButton['btnreset'].draw(ctx);
		}
	}
}