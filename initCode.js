//Basic Settings
Bangle.setOptions
({
  wakeOnBTN1: true,
  wakeOnFaceUp: false,
  wakeOnTwist: false,
  powerSave: true,
  lockTimeout: 10000,
  lcdPowerTimeout: 0,
  backlightTimeout: 10000,
  hrmPollInterval: 40,
});

E.setTimeZone(-5);

//Custom Font
Graphics.prototype.setFontNexaHeavy = function() {
  // Actual height 30 (29 - 0)
  // 1 BPP
  return this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+eAP/++AP/+/AP/+/AP/++AP/+eAMAAMAAAAAAAAAAAP+AAAP+AAAP+AAAP+AAAP+AAAP8AAAP+AAAP+AAAP+AAAP+AAAP+AAAAAAAAAAHgAAAHgAAcH+AA+H+AA//+AA//+AH//+AP//+AP//wAP//iAP+H+AP+P+AI//+AA//+AP//+AP//+AP//gAP//gAP+HgAP+DgAA+AAAAcAAAAAAAAAGAGAA/wPAB/4fAB/4fgD/8fgD/8Pgf/8Pw/5+P+/x+H+/w+H+/w+H+/w+P+Hw/P8D4//gD4f/gD8f/gB4P/ABwP+AAAD8AAAAAAAwAAAH8AAAH+AAAP+ACAP/AGAf/AeAePA+Af/D+AP/H+AP+f+AH8/4AD7/wAAP/AAAf8AAB/74AD/n8AP/P+AP8f+AP4f/APgePAPAf/AMAf+AIAP+AAAP8AAAH8AAAAgAAAAAAAAAAAAAH4AAQP8AD8f+AH//+AP//+AP///Af/8fAfP4fAfH8fAfP+fAf//fAP//+AP/f+AH+P8AH8/8ABw/+AAA/+AAA//AAAeeAAAAMAAAAAAAAAAAP+AAAP+AAAP+AAAP+AAAP+AAAAAAAAAA+AAAP/4AA//+AD///gH///wP///4f/j/8/4AP+/gAD+eAAA8MAAAYAAAAAMAAAQeAAA8/AAB+/wAH+f+A/8f///4P///wD///gB///AAf/8AAD/gAAAAAAAAAAABgAAAHsAAAH+AAAP+AAAP/AAAP+AAAP+AAAP/AAAD+AAAHsAAAHkAAAAgAAAAAAAAAAAAAAB4AAAB8AAAB8AAAB8AAAf/gAAf/wAAf/wAAf/wAAf/wAAf/wAAB8AAAB8AAAB8AAAB8AAAB4AAAAAAAAAAIAAAAeIAAA/4AAA/4AAA/4AAA/4AAAfgAAAMAAAAAAAAAAAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAAAAAAAAAAAAAeAAAA+AAAA/AAAA/AAAA/AAAA+AAAAMAAAAAAAAABwAAAPwAAA/wAAH/wAAf/wAD//gAf/+AB//4AP//AA//8AA//gAA/8AAA/wAAA+AAAA4AAAAAAAAAAAAAAAf/AAB//wAD//4AH//8AP//+AP//+AP4D+AfgA/AfgA/AfAAfAfAAfAfgA/AfwA/AP8H+AP//+AP//+AH//8AD//4AB//wAAf/AAAAAAAAAAAAD4AeAD4AeAH4AeAHwAeAH//+AP//+AP//+AP//+Af//+Af//+AAAAeAAAAeAAAAeAAAAAAAAD+AB4P+AD4f+AH4/+AP4/+AP5/+AP5/+APh8+Afh8+AfB4+AfB4+AfD4+Afn4+AP/4+AP/4+AP/w+AH/w+AD/g+AB/A+AAIAAAAAAAAAQDgAB4D4AD4D4AH4D8AP4D+AP5z+AP77+Afj4/AfD4fAfD4fAfD4fAfj4/AP/8/AP//+AP//+AH//+AH//8AD+f4AA8PwAAAAAAAAHAAAAfwAAA/wAAB/wAAD/wAAH/wAAP/wAAf/wAB/3wAD/nwAH+HwAP8HwAP//+AP//+AP//+AP//+AP//+AP//+AAAHwAAAHwAAAAAAAADAAP/z4AP/z8AP/z8AP/z+AP/z+AP/z+APnw/APnwfAPnwfAPnwfAPnw/APn//APn/+APj/+APj/8APh/8APA/4AAAfgAAAAAAAAAAAA//gAD//4AH//8AH//8AP//+AP//+APz9+Afnw/AfHwfAfHwfAfHwfAfnw/AP35+AP3/+APz/+APz/8AHx/8ADx/4AAwfwAAAAAAPgAAAPgACAPgAOAPgA+APgD+APgP+APg/+APj/+APv/+AP//4AP//gAP/+AAP/4AAP/gAAP+AAAP4AAAPgAAAAAAAAAAAAAA4PwAD+f4AH//8AH//+AP//+AP//+Af/8/AfD4/AfDwfAfDwfAfD4fAfj4/Af/9/AP//+AP//+AH//+AH//8AD+f4AA4PwAAAAAAAAAAAB/BwAD/x4AH/x8AH/5+AP/5+AP/9+Afz8/Afh8fAfB8fAfB8fAfB8fAfh8/AP//+AP//+AP//+AH//8AD//8AD//4AA//gAAAAAAAAAAAADweAAD4+AAH4/AAH4/AAD4/AAD4+AABgMAAAAAAAAgIAADweIAD4/4AH4/4AH4/4AD4/4ADwfgAAgMAAAAAAAAYAAAA8AAAB+AAAD/AAAH/gAAP/wAAf/4AA/v4AA/H4AAeDwAAMBgAAAAAAAHHAAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAPngAAAAAAAAAAAAAAAAAMBgAAeDwAA/H4AA/v4AAf/4AAP/wAAH/gAAD/AAAB+AAAA8AAAAQAAAAAAAAAAAAB4AAAD4AAAH4AAAP4AAAP4AIAP4+eAPh++Afh+/AfD+/Afj++APn+eAP/4AAP/wAAP/gAAH/gAAD/AAAB+AAAAAAAAAACAAAB/4AAH/+AAP//gAf//wA///wA/wf4B/f38B8/78D5/98D7/8+Dz/++Dz/++Dzwe+Dzwe+Dz4++Dz/8+Dz/88D7/+8D7/+MB//+AB+AeAA//+AA//+AAf/8AAP/8AAD/4AAA/gAAAAAAAAAeAAAB+AAAP+AAA/+AAD/+AAP/+AB//4AH//wAP//wAP/nwAP+HwAP4HwAP+HwAP/3wAP//wAH//wAB//4AAP/+AAD/+AAA/+AAAP+AAAB+AAAAeAAAAGAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+APD4+APD4+APD4+APD4+APD4+APj4+AP/4+AP//+AP//+AH//+AH//8AD+f4AB8P4AAADAAAAAAAABwAAAf/AAA//gAB//4AD//4AH//8AP//+AP8H+APwB+AfgA/AfgA/AfAAfAfAAfAfAAfAfgA/AfgA/APwB+APwB+AHwB+AHgA8ADAAYAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+APgA+APgA+APgA+APgA+APgA+APgA+APwB+AP8D+AH//8AH//8AD//4AB//wAA//gAAf/AAAD4AAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+APj4+APj4+APj4+APj4+APj4+APj4+APj4+APj4+APj4+APj4+APjw+AAAAeAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+APh8AAPh8AAPh8AAPh8AAPh8AAPh8AAPh8AAPh8AAPh8AAPh8AAPAAAAAAAAAABwAAAf/AAA//gAB//4AD//4AH//8AP//+AP4D+APwB+AfgA/AfgAfAfD4fAfD4fAfD4fAfD4fAfj4/APz/+APz/+APz/+AHj/8ADD/4AAD/4AAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAD4AAAD4AAAD4AAAD4AAAD4AAAD4AAAD4AAP//+AP//+AP//+AP//+AP//+AP//+AP//+AAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAAAAAAAPAAAAPwAAAP4AAAP8AAAP+AAAP+AAAH+APAA/APgA/APgAfAPgAfAPgA/APgA/APgD+AP//+AP//+AP//8AP//4AP//wAP//AAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAP+AAAf/AAB//gAD//wAH//8AP+P+AP8H+AP4D+APgB+APAA+AOAAeAMAAOAIAAGAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAA+AAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AH/AAAD/wAAB/4AAAf8AAAP+AAAH/AAAH/AAAP+AAAf8AAB/4AAD/wAAH/AAAP//+AP//+AP//+AP//+AP//+AP//+AP//+AAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AH//+AD/wAAB/4AAAf+AAAP/AAAH/gAAB/4AAA/8AP//+AP//+AP//+AP//+AP//+AP//+AAAAAAABwAAAf/AAA//gAD//4AD//4AH//8AP//+AP8H+APwB+AfgA/AfgA/AfAAfAfAAfAfAAfAfgA/AfgA/APwB+AP4D+AP//+AH//8AD//4AD//4AB//wAAf/AAAD4AAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+APg+AAPg+AAPg+AAPg+AAPg+AAPg+AAPx+AAP/+AAP/+AAH/8AAH/8AAD/4AAA/gAAAAAAAABwAAAf/AAA//gAD//4AD//4AH//8AP//+AP8H+APwB+AfgA/AfgA/AfAAfAfAAfAfAAfAfgA/AfgA/APwB+AP4D+AP//+AH///AD///gD///gB///gAf/PAAD4GAAAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+APg8AAPg8AAPg/AAPg/gAPg/wAPh/8AP//+AP//+AP//+AH/5+AH/4+AD/wOAA/AGAAAACAAAAAAAYAYAD/A8AH/h8AH/h+AP/x+AP/w+Af/w/Afn4/AfH4fAfD4fAfD4fAfD4/AfD8/APj/+APh/+APx/+AHg/8AHA/4AAAPwAAAAAAPgAAAPgAAAPgAAAPgAAAPgAAAPgAAAP//+AP//+AP//+AP//+AP//+AP//+APgAAAPgAAAPgAAAPgAAAPgAAAPgAAAPAAAAAAAAAAAAAAAAAAAP//gAP//wAP//4AP//8AP//+AP//+AAAD+AAAA/AAAA/AAAAfAAAAfAAAA/AAAA/AAAD+AP//+AP//+AP//8AP//4AP//wAP//AAAAAAAMAAAAPgAAAP4AAAP/AAAP/wAAP/+AAP//gAD//4AAf/+AAH/+AAA/+AAAH+AAAf+AAD/+AAf/+AB//8AP//gAP/+AAP/4AAP/AAAP8AAAPgAAAAAAAAOAAAAPwAAAP+AAAP/wAAP/8AAP//gAP//8AB//+AAP/+AAA/+AAA/+AAH/+AA//+AH//8AP//gAP/8AAP/gAAP/4AAP//AAH//4AA//+AAH/+AAA/+AAAf+AAH/+AA//+AH//+AP//wAP/+AAP/wAAP+AAAP4AAAPAAAAAAAAAMAAGAOAAeAPgA+APwD+AP8H+AP+f+AP//+AH//8AD//wAA//gAAf/AAA//gAD//4AP//8AP//+AP+P+AP4H+APwB+APAA+AOAAOAIAAGAAAAAAMAAAAOAAAAPgAAAPwAAAP8AAAP+AAAP/gAAH/wAAB//+AA//+AAP/+AAP/+AA//+AB//+AH/4AAP/gAAP/AAAP8AAAP4AAAPgAAAPAAAAAAAAAPAAOAPgAeAPgB+APgD+APgP+APgf+APh/+APj/+APv/+AP/++AP/8+AP/w+AP/g+AP+A+AP8A+APwA+APgA+AOAA+AMAAeAAAAAAAAAAAP///8f///8f///8f///8f///8f///8fAAA8fAAA8fAAA8PAAA8AAAAAwAAAA+AAAA/gAAA/8AAA//AAA//4AAP/+AAD//wAAf/+AAH//gAA//wAAH/wAAB/wAAAPwAAADwAAAAAAAAAAfAAA8fAAA8fAAA8f///8f///8f///8f///8f///8f///8AAAAAAAgAAADgAAAHgAAAfgAAA/gAAD/gAAP/AAAP+AAAP4AAAP4AAAP8AAAP/AAAD/gAAB/gAAAfgAAAPgAAADgAAABgAAAAAAAAAAA4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAB4AAAAAPgAAAPgAAAPgAAADgAAAAAAAAAAfAAAB/wAAD/4AAH/8AAP/+AAP/+AAP//AAPg/AAfAfAAPAfAAPgeAAPw+AAP/+AAP/+AAP/+AAP/+AAP/+AAP/+AAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAPw+AAPgeAAPAfAAfAfAAPg/AAP//AAP/+AAP/+AAH/8AAD/4AAB/wAAAOAAAAAAAAA/gAAD/4AAD/8AAH/8AAP/+AAP/+AAPx/AAPg/AAfAfAAfAfAAPg/AAPg+AAPg+AAHAeAAGAMAAAAAAAAfAAAB/wAAD/4AAH/8AAP/+AAP/+AAP//AAPg/AAfAfAAPAfAAPgeAAPw+AP//+AP//+AP//+AP//+AP//+AP//+AAAAAAAA/gAAD/4AAH/8AAH/8AAP/+AAP/+AAPu/AAfOfAAfOfAAfOfAAPufAAP+fAAP++AAH++AAH+cAAD+MAAA+AAAAAAAAPAAAAPAAAAPAAAB//+AH//+AP//+AP//+Af//+Af//+AfvAAAfPAAAfPAAAAAAAAAAAAAAD+DwAP/D8Af/j8Af/z+A//z+A//7/A+H4/B8D4fB8D4fB8D4fA+H8/A////B///+D///+D///8B//f8A7+P4AAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAPgAAAPAAAAPAAAAfgAAAP/+AAP/+AAP/+AAP/+AAH/+AAB/+AAAP+AAAAAAAAAAAPP/+APv/+Afv/+Afv/+Afv/+APP/+AGAAAAAAAAAAAAAeef///ff//+/f//+/f//+/f//8ef//4MAAAAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAB/wAAH/4AAP/+AAP/+AAP7+AAPh+AAPA+AAOAeAAIAGAAAACAAAAAAAAAAAP//+AP//+AP//+AP//+AP//+AP//+AAAAAAAAAAAAP/+AAP/+AAP/+AAP/+AAP/+AAP/+AAPgAAAPAAAAfAAAAf/+AAP/+AAP/+AAP/+AAH/+AAP/+AAP/+AAPgAAAfAAAAfgAAAP/+AAP/+AAP/+AAP/+AAH/+AAD/+AAAAAAAAAAAAP/+AAP/+AAP/+AAP/+AAP/+AAP/+AAPgAAAPAAAAPAAAAfgAAAP/+AAP/+AAP/+AAP/+AAH/+AAB/+AAAP+AAAAAAAAAAAAA/gAAD/4AAH/8AAH/+AAP/+AAP/+AAPw/AAfgfAAfAfAAfAfAAPg/AAP/+AAP/+AAH/+AAH/8AAD/4AAB/wAAAAAAAAAAAAP///AP///AP///AP///AP///AP///APw+AAPgeAAPAfAAfAfAAPg/AAP//AAP/+AAP/+AAH/8AAD/4AAB/wAAAOAAAAAAAAAfAAAB/wAAD/8AAH/8AAP/+AAP/+AAP//AAPg/AAfAfAAPAfAAPgeAAPw+AAP///AP///AP///AP///AP///AP///AAAAAAAAAAAP/+AAP/+AAP/+AAP/+AAP/+AAP/+AAPwAAAPgAAAfAAAAfgAAAPgAAAPgAAAOAAAAAAAAAAAAAAD4cAAH8+AAH++AAP++AAP+fAAP/fAAfffAAfffAAff/AAPP/AAPv+AAPv+AAPn8AAGH8AAAAAAAPAAAAPAAAD//wAD//8AD//+AD//+AD///AD///AAPA/AAPAfAAPAeAAPAeAAAAGAAAAAAAH/AAAP/4AAP/8AAP/+AAP/+AAP//AAP//AAAA/AAAAfAAAAeAAAB+AAP/+AAP/+AAP/+AAP/+AAP/+AAP/+AAAAAAAMAAAAPAAAAP4AAAP+AAAP/gAAP/8AAP/+AAB/+AAAf+AAAH+AAA/+AAD/+AAP/+AAP/4AAP/AAAP8AAAPwAAAAAAAAPAAAAP4AAAP/AAAP/4AAP/+AAP/+AAD/+AAAP+AAA/+AAD/+AAP/+AAP/wAAP+AAAP/wAAP/+AAD/+AAAf+AAAP+AAD/+AAP/+AAP/+AAP/4AAP/AAAP4AAAPAAAAAAAAAIAGAAOAOAAPg+AAPx+AAP/+AAP/+AAP/+AAH/4AAB/wAAH/8AAP/+AAP/+AAP/+AAPx+AAPAeAAOAOAAAAAAAOAAAAPwAAAP8AAAP/gHAP/4/AP///AH///AA///AAH//AAf/8AD//wAP//AAP/4AAP/gAAP+AAAPwAAAPAAAAAAAAAAAGAAPAOAAPg+AAPh+AAPn+AAPv+AAP/+AAP/+AAP/+AAP/+AAP8+AAP4+AAPw+AAPA+AAOA+AAAAAAAAcAAAA+AAA//+AH///wP///4P///8f///8f/3/8f/B/8fAAA8fAAA8AAAAAAAAAAAAAAA////w////w////w////w////w////wAAAAAOAAA4fAAA8fAAA8f/A/8f/3/8f///8P///8P///4H///wB///AAA+AAAAAAAAAAAAAAcAAAA8AAAB8AAAB+AAAB8AAAB4AAAB8AAAB8AAAB+AAAA+AAAA+AAAA+AAAB+AAAB+AAAA8AAAA8AAAAwAAAAAAAA='),
    32,
    atob("BwoNFxQbFgcMDA4RCQ8JEBYPFRQVFBUSFRUJCQwQDhMdGRcWGBUUFxcJFRYTHBcaFhoXFBQXFyIWFhQMEAsTEQUTFBATEg0TEwkJEggbExMUEw8QDhISGhESEAwJDBM="),
    30|65536
  );
};

//Images
stepsIcon = atob("FBSBADgAB8AA/gDP4D7/B//wf/8P//j/f4/3+f8/H/PB/gGP4Ph8H4AA+fAPn4Ah8AAfAADg");
heartIcon = atob("DgyBAAAA88P/H/5/+P/D/wf4D8AeADAAAA==");
calIcon = atob("EhSBAADAAHAAPAAfIA/cB/+B/+D//D//H//n//n//n//n8/j7fDzPD3vB3uAzMAIQA==");
notifIcon = atob("FBSBAABgAYYYEGCDH4wj/EZ/5k//JP/yT/8g//AP/wD/8A//Af/4H/+D//w//8H5+AGYAA8A");

function mainWindow() 
{
  g.clear();
  g.setColor(0,0,0);
  
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();

  let dayMonth = d.getDate();
  let dayWeek = d.getDay();
  let month = d.getMonth();
  month +=1;
  let year = d.getFullYear();

  let steps = Bangle.getStepCount();

  let battery = E.getBattery();

  switch (dayWeek)
  {
    case 0:
      dayWeek = "Sun";
      break;
    case 1:
      dayWeek = "Mon";
      break;
    case 2:
      dayWeek = "Tues";
      break;
    case 3:
      dayWeek = "Wed";
      break;
    case 4:
      dayWeek = "Thur";
      break;
    case 5:
      dayWeek = "Fri";
      break;
    case 6:
      dayWeek = "Sat";
  }


  let am = h < 12;
  h = h % 12;
  if(h == 0) h = 12;

  g.clear();
  g.setFont("NexaHeavy");
  g.setFontAlign(0,0,0);
  g.drawString(h + ":" + String(m).padStart(2, "0") + " " + (am?"AM":"PM"), 176/2, (176/2)-20);

  g.setFont("12x20");
  g.drawString(dayWeek + " " + month + "/" + dayMonth, 176/2, (176/2)+15);

  g.setFontAlign(1,0,0);
  g.drawString(steps, 176-2, 12);

  g.setFont("12x20");
  g.setFontAlign(-1,0,0);
  g.drawString(battery + "%", 4, 12);

  
  g.drawImage(stepsIcon, 155, 78, {scale: 0.8});
  g.drawImage(heartIcon, 176/2-10, 160);
  g.drawImage(calIcon, 5, 78, {scale: 0.9});
  g.drawImage(notifIcon, 176/2-9, 5, {scale: 0.9});
}

function topWindow()
{
  g.clear();
  g.setFontAlign(0,0,0);
}

function bottomWindow()
{
  g.clear();
  g.setFontAlign(0,0,0);
  g.drawString("bottomWindow", 176/2, 176/2);
}

function leftWindow()
{
  g.clear();
  g.setFontAlign(0,0,0);
  g.drawString("leftWindow", 176/2, 176/2);
}

function rightWindow()
{
  g.clear();
  
  var trackedSteps = 1426;
  var stepsProgress = trackedSteps / 10000;

  g.setFont("12x20");
  g.setFontAlign(0,0,0);
  g.drawString(trackedSteps, 176/2, 176/2);

  function drawSlice(start, end) {
    var angle, steps = 24;
    var x = 176/2, y = 176/2, innerRadius = 60, outerRadius = 80;
    var polyCoords = [];
    for (var cStep = start*steps; cStep < end*steps; cStep++) {
      angle = cStep*Math.PI*2/steps;
      polyCoords.push(x + outerRadius*Math.cos(angle), y + outerRadius*Math.sin(angle));
      polyCoords.unshift(x + innerRadius*Math.cos(angle), y + innerRadius*Math.sin(angle));
    }

    angle = end*Math.PI*2;
    polyCoords.push(x + outerRadius*Math.cos(angle), y + outerRadius*Math.sin(angle));
    polyCoords.unshift(x + innerRadius*Math.cos(angle), y + innerRadius*Math.sin(angle));
    g.fillPoly(polyCoords);
  }

  g.setColor(0,1,0);
  drawSlice(0.25, stepsProgress + 0.25);
  g.setColor(1,0,0);
  drawSlice(stepsProgress + 0.25, 1.25);
}

let windowFunction = mainWindow;

function changeWindow(win)
{
  if(win == windowFunction) return;
  windowFunction = win;
  windowFunction();
}

function main()
{
  windowFunction();
}

Bangle.on("swipe", function(lr, ud)
{
  if(windowFunction == mainWindow && ud == 1)
    {
      changeWindow(topWindow);
    } else if(windowFunction == topWindow && ud == -1)
    {
      changeWindow(mainWindow);
    } else if (windowFunction == mainWindow && ud == -1)
    {
      changeWindow(bottomWindow);
    } else if(windowFunction == bottomWindow && ud == 1)
    {
      changeWindow(mainWindow);
    } else if(windowFunction == mainWindow && lr == 1)
    {
      changeWindow(leftWindow);
    } else if(windowFunction == leftWindow && lr == -1)
    {
      changeWindow(mainWindow);
    } else if(windowFunction == mainWindow && lr == -1)
    {
      changeWindow(rightWindow);
    } else if(windowFunction == rightWindow && lr == 1)
    {
      changeWindow(mainWindow);
    }
});

setInterval(main,60000);
main();