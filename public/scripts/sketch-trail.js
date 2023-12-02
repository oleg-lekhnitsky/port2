var bkgdColor, foreColor, headBlock;
var colorA = [];

var trailOn = false;
var headTrailOn = false;
var imageTrailOn = true;

var colorBkgdOn = true;
var imageBkgdOn = false;
var bkgdImage;

var imageTrailers = [];
var imageTicker = 0;
var headTicker = 0;

var pgImage = [];
var pgImageHoldCount = 7;

var trailPace = 3;

var head = "INTL 2023";
var headFontSize = 100;
var headFont;

var coreAnimWindow = 60;

///// SLIDERS HERE
var overlapFactor = 0.6;
var imageAvg = 100;
var imageVar = imageAvg * 0.5;

var imageAnimate = true;
var imageBreak = false;
var imageRandomize = false;

var headScaleAnim = false;
var headSkewAnim = false;
var headVertAnim = false;
var headlineBlock = true;

var animDelay = 5;
var holdDelay = 60;

var stackMode = 1;

var processOn = false;
var coreTicker = 0;

var fullAnimComplete = false;
var previewFactor = 1;

var saveStatic = false;
var saveMotion = false;
var recordedFrames = 0;
var numFrames = 500;
var thisDensity = 1;
var frate = 30;

var saveSize = 0;
var widgetOn = true;
let recMessageOn = false;

var isScreenTypeMouseMediaQuery = window.matchMedia(
  "(any-hover: hover), (hover: hover) and (pointer: fine)"
);

function preload() {
  for (var m = 0; m < pgImageHoldCount; m++) {
    // #Images загрузка картинок для трейл эффекта здесь 👇
    pgImage[m] = loadImage("trail-effect-pictures/" + (m + 1) + ".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  var isScreenTypeMouse = isScreenTypeMouseMediaQuery.matches;

  if (isScreenTypeMouse) {
    frameRate(60);
  } else {
    frameRate(45);
  }
  thisDensity = pixelDensity();

  bkgdColor = color("#ffffff");
  foreColor = color("#0000ff");
  headBlock = color("#e2e2e2");

  rectMode(CENTER);
  imageMode(CENTER);

  window.dispatchEvent(new Event("traileffectloaded"));
}

function draw() {
  background(bkgdColor);

  if (saveStatic || saveMotion) {
    scale(previewFactor);
  }

  if (stackMode == 0) {
    for (var m = imageTrailers.length - 1; m >= 0; m--) {
      imageTrailers[m].run();
    }
  } else {
    for (var m = 0; m < imageTrailers.length; m++) {
      imageTrailers[m].run();
    }
  }

  if (
    imageTrailOn &&
    trailOn &&
    dist(
      imageTrailers[imageTrailers.length - 1].x,
      imageTrailers[imageTrailers.length - 1].y,
      mouseX,
      mouseY
    ) >=
      imageTrailers[imageTrailers.length - 1].rMax * overlapFactor
  ) {
    imageTrailers[imageTrailers.length] = new ImageTrailer(
      mouseX,
      mouseY,
      imageTicker,
      imageTrailers.length
    );
    imageTicker++;

    ///////// NATURAL BREAK
    if (imageBreak && imageTicker % pgImage.length == 0) {
      trailOn = false;
    }
  }

  if (processOn) {
    coreTicker++;
  }

  if (
    coreTicker ==
    round((imageTrailers.length * animDelay) / 2) + coreAnimWindow + holdDelay
  ) {
    runOutro();
  }

  if (fullAnimComplete) {
    coreTicker = 0;
    runAnimation();
    fullAnimComplete = false;
  }

  if (saveStatic) {
    save("INTL_static.jpg");

    setSaveSize(saveSize);
    saveStatic = false;
  }

  runRecording();
}

function runOutro() {
  for (var m = 0; m < imageTrailers.length; m++) {
    imageTrailers[m].mode = 1;
    imageTrailers[m].ticker = -m * animDelay;
  }
}

var previousPointerCoordinates = { x: 0, y: 0 };
var pointerDistanceFromLastImage = 0;
var THRESHOLD_POINTER_DISTANCE_VALUE = 70;

function mouseMoved() {
  var isScreenTypeMouse = isScreenTypeMouseMediaQuery.matches;

  if (isScreenTypeMouse) {
    var pointerCoordinates = {
      x: mouseX,
      y: mouseY,
    };

    pointerDistanceFromLastImage += Math.sqrt(
      (previousPointerCoordinates.x - pointerCoordinates.x) ** 2 +
        (previousPointerCoordinates.y - pointerCoordinates.y) ** 2
    );

    if (pointerDistanceFromLastImage > THRESHOLD_POINTER_DISTANCE_VALUE) {
      pointerDistanceFromLastImage = 0;

      imageTrailers[imageTrailers.length] = new ImageTrailer(
        mouseX,
        mouseY,
        imageTicker,
        imageTrailers.length
      );
      imageTicker++;
    }

    previousPointerCoordinates = pointerCoordinates;
  }
}

function mousePressed() {
  var isScreenTypeMouse = isScreenTypeMouseMediaQuery.matches;

  if (!isScreenTypeMouse) {
    var mouseOn = true;

    if (mouseOn) {
      if (imageTrailOn) {
        imageTrailers[imageTrailers.length] = new ImageTrailer(
          mouseX,
          mouseY,
          imageTicker,
          imageTrailers.length
        );
        imageTicker++;
      }
      trailOn = true;
    }
  }
}

function windowResized() {
  if (saveSize == 0) {
    resizeCanvas(windowWidth, windowHeight);
  } else if (saveSize == 1) {
    if (windowWidth > (windowHeight * 9) / 16) {
      resizeCanvas((windowHeight * 9) / 16, windowHeight);
    } else {
      resizeCanvas(windowWidth, (windowWidth * 16) / 9);
    }
  } else if (saveSize == 2) {
    if (windowWidth > windowHeight) {
      resizeCanvas(windowHeight, windowHeight);
    } else {
      resizeCanvas(windowWidth, windowWidth);
    }
  }
}

function mouseReleased() {
  var isScreenTypeMouse = isScreenTypeMouseMediaQuery.matches;

  if (!isScreenTypeMouse) {
    trailOn = false;
  }
}
