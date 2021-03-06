function eraseSave() {
	if (eraseSaveText.innerHTML == 'One..') { erase(); }
	else if (eraseSaveText.innerHTML == 'Two..') { eraseSaveText.innerHTML = 'One..'; eraseSaveText.style.color = randomColorPound('', 'red'); }
	else if (eraseSaveText.innerHTML == 'Three..') { eraseSaveText.innerHTML = 'Two..'; eraseSaveText.style.color = randomColorPound('', 'red');}
	else if (eraseSaveText.innerHTML == 'Are you sure?') { eraseSaveText.innerHTML = 'Three..'; eraseSaveText.style.color = randomColorPound('light', 'red');}
	else eraseSaveText.innerHTML = 'Are you sure?';
	// Must set currentBiome; it somehow doesn't get repopulated when the page refreshes
	function erase() {
		cow = {
			currentBiome: 'biome1',
			spawnNewBGgradient: true,

			creditsActivated: false,
			gameClear: false,
			gameStarted: false,

			resourceCounterWidthArray: [],
			filesPreloaded: 0,
			preloaderComplete: false,
			userWebBrowser: '',

			bgmVolume: 80,
			sfxVolume: 80,
			audioFormat: '.opus',
			hideMusicText: false,

			allowClickBoost: true,
			boostMultiplier: 0,
			boostCounter: 0,

			randomBiomesUnlocked: false,
			randomBiomesActive: false,
			bgTransitionSpeed: 5,

			resourceDiamonds: 0,
			resourceStars: 0,
			resourceHexagons: 0,
			resourceTriangles: 0,
			resourceCircles: 0,
			resourceSquares: 0,
			resourceCounterWidth: 115,
			diamondBarOwned: false,

			resourceStardust: 0,
			resourceStardustBiome1: 0,
			resourceStardustBiome2: 0,
			resourceStardustBiome3: 0,
			resourceStardustBiome4: 0,
			resourceStardustBiome5: 0,
			resourceStardustBiome6: 0,

			endgameBarOwned: false,
			resourceEndgameBarDiamonds: 0,
			resourceEndgameBarStars: 0,
			resourceEndgameBarHexagons: 0,
			resourceEndgameBarTriangles: 0,
			resourceEndgameBarCircles: 0,
			resourceEndgameBarSquares: 0,

			stardustSpawnBoost1Owned: false,
			stardustSpawnBoost2Owned: false,

			biome1Owned: true,
			biome2Owned: false,
			biome3Owned: false,
			biome4Owned: false,
			biome5Owned: false,
			biome6Owned: false,

			nextDiamondPrice: 2,
			nextStarPrice: 10,
			nextHexagonPrice: 20,
			nextTrianglePrice: 20,
			nextCirclePrice: 10,
			nextSquarePrice: 150,

			diamondCapacity: 1,
			starCapacity: 1,
			hexagonCapacity: 0,
			bgHexagonCapacity: 40,
			triangleCapacity: 0,
			circleCapacity: 0,
			squareCapacity: 0,

			maxDiamondCapacity: 10,
			maxStarCapacity: 10,
			maxHexagonCapacity: 10,
			maxTriangleCapacity: 10,
			maxCircleCapacity: 10,
			maxSquareCapacity: 100,

			biome1CurrentDiamondCount: 0,
			biome1CurrentStarCount: 0,
			biome2CurrentHexagonCount: 0,
			biome2CurrentBGHexagonCount: 0,
			biome3CurrentTriangleCount: 0,
			biome3CurrentCircleCount: 0,
			biome4CurrentSquareCount: 0,
			biome5CurrentCircleCount: 0,
			biome5CurrentHexagonCount: 0,
			biome6CurrentCircleCount: 0,
			biome6CurrentStarCount: 0
		};
		saveGame();
		window.location.reload();
	 }
}




function exportEncryptedSave() {
	console.log(window.opener.cow);
	let q = JSON.stringify(window.opener.cow);
	q = CryptoJS.AES.encrypt(q, 'notVerySecretHash');
	exportSaveTextField.value = q;
}




function importEncryptedSave() {
	let q = prompt('???????????????????????????');
	if (q != null) {
		q = CryptoJS.AES.decrypt(q, 'notVerySecretHash');		// Decrypt save file
		q = q.toString(CryptoJS.enc.Utf8);						// Required because the decrypter outputs hex instead of ascii by default. This reconverts it
		window.cow = JSON.parse(q);
		// Modify some temporary stats for a cleaner game load
		cow.currentBiome = 'biome1';
		cow.spawnNewBGgradient = true;
		cow.gameStarted = false;
		cow.resourceCounterWidth = 115;
		cow.biome1CurrentDiamondCount = 0;
		cow.biome1CurrentStarCount = 0;
		cow.biome2CurrentHexagonCount = 0;
		cow.biome3CurrentTriangleCount = 0;
		cow.biome3CurrentCircleCount = 0;
		cow.biome4CurrentSquareCount = 0;
		cow.biome5CurrentCircleCount = 0;
		cow.biome5CurrentHexagonCount = 0;
		cow.biome6CurrentSquareCount = 0;
		cow.biome6CurrentStarCount = 0;
		saveGame();
		window.location.reload();
	} else alert("?????????????????????");
	newFadePlusToggleAndVisibility(optionsMenu, 0, 0.25);
}




function saveGame() {
	const zzz = "transcendSAVEFILE";
	localStorage.removeItem(zzz);
	localStorage.setItem(zzz, JSON.stringify(cow));
}




function saveGameRecursive() {
	const zzz = "transcendSAVEFILE";
	localStorage.removeItem(zzz);
	localStorage.setItem(zzz, JSON.stringify(cow));
	setTimeout(saveGameRecursive, 60000);
}




function loadGame() {
	const zzz = "transcendSAVEFILE";
	const q = localStorage.getItem(zzz);
	const cowTemp1 = cow.filesPreloaded;
	const cowTemp2 = cow.userWebBrowser;
	const cowTemp3 = cow.audioFormat;
	if (q != null) {
		// Load the save file
		window.cow = JSON.parse(q);
		// Modify some temporary stats for a cleaner game load
		cow.spawnNewBGgradient = true;
		cow.creditsActivated = false;
		cow.gameStarted = false;
		cow.hideMusicText = false;
		cow.filesPreloaded = cowTemp1;

		cow.userWebBrowser = cowTemp2;
		cow.audioFormat = cowTemp3;

		cow.bgTransitionSpeed = 5;

		cow.resourceCounterWidth = 115;

		cow.biome1CurrentDiamondCount = 0;
		cow.biome1CurrentStarCount = 0;
		cow.biome2CurrentHexagonCount = 0;
		cow.biome2CurrentBGHexagonCount = 0;
		cow.biome3CurrentTriangleCount = 0;
		cow.biome3CurrentCircleCount = 0;
		cow.biome4CurrentSquareCount = 0;
		cow.biome5CurrentCircleCount = 0;
		cow.biome5CurrentHexagonCount = 0;
		cow.biome6CurrentSquareCount = 0;
		cow.biome6CurrentStarCount = 0;
		cow.biome6CurrentCircleCount = 0;
	}
}

function startGameResumeDemo() {
	cow.currentBiome = 'biome1';
	cow.spawnNewBGgradient = true;

	cow.creditsActivated = false;

	cow.hideMusicText = false;

	cow.randomBiomesUnlocked = true;
	cow.randomBiomesActive = true;
	cow.bgTransitionSpeed = 5;

	cow.endgameBarOwned = true;

	cow.stardustSpawnBoost1Owned = true;
	cow.stardustSpawnBoost2Owned = true;

	cow.resourceCounterWidth = 115;

	cow.biome1Owned = true;
	cow.biome2Owned = true;
	cow.biome3Owned = true;
	cow.biome4Owned = true;
	cow.biome5Owned = true;
	cow.biome6Owned = true;

	cow.diamondCapacity = 30;
	cow.starCapacity = 30;
	cow.hexagonCapacity = 30;
	cow.triangleCapacity = 30;
	cow.circleCapacity = 30;
	cow.squareCapacity = 300;

	cow.maxDiamondCapacity = 30;
	cow.maxStarCapacity = 30;
	cow.maxHexagonCapacity = 30;
	cow.maxTriangleCapacity = 30;
	cow.maxCircleCapacity = 30;
	cow.maxSquareCapacity = 300;

	// Add the extra bit of text at the bottom of the page
	let q = document.createElement('span');
	q.setAttribute('id', 'resumeText');
	q.setAttribute('style', 'text-align: center; width: 700px; padding: 0 100px; display: block; transition: opacity ease 2s; opacity: 0;');
	document.body.appendChild(q);
	setTimeout(function() { resumeText.style.opacity = 1; }, 500);	// Fadein
	resumeText.innerHTML = '<br>This is a modified demo version of Transcend created for my resume.<br><br>All content has been automatically unlocked for quick viewing. Click the buttons in the lower right to cycle through the game content. For more information on this genre, please visit <a href="https://www.reddit.com/r/incremental_games/" target="_blank">r/incremental_games</a>. The full game is located <a href="https://www.taylorcalderone.com/transcendGame/game.html" target="_blank">here</a>.<br><br><br><br>';

	// CSS
	document.body.style.overflowX = 'hidden';
	document.body.style.overflowY = 'auto';
}




// For when CSS's :hover is giving you shit
function hoverRNGColor(id) { id.style.color = randomColorPound('hax'); }
function hoverWhite(id) { id.style.color = '#FFFFFF'; }
function hoverRNGColorEraseSaveHack(id) { if (eraseSaveText.innerHTML == 'Erase Save' || eraseSaveText.innerHTML == 'Are you sure?') { id.style.color = randomColorPound('hax'); } }
function hoverWhiteEraseSaveHack(id) { if (eraseSaveText.innerHTML == 'Erase Save' || eraseSaveText.innerHTML == 'Are you sure?') { id.style.color = '#FFFFFF'; } }