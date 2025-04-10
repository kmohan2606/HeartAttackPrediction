Bangle.setOptions({
  wakeOnBTN1: true,
  wakeOnFaceUp: false,
  wakeOnTwist: false,
  powerSave: true,
  lockTimeout: 10000,
  lcdPowerTimeout: 0,
  backlightTimeout: 10000,
  hrmPollInterval: 40,
});

g.clear();

x = 176/2;
y = 176/2;
rad = 75;

g.drawCircle(x, y, rad);
g.setColor(1, 0, 0); // red
g.fillCircle(x, y, rad);
g.setFont("6x8:2"); //fixed with font
g.setFontAlign(0, 0, 0); //centers

Bangle.setHRMPower(1);

var Layout = require("Layout");
  var layout = new Layout( {
  type:"v", c: [
    {type:"txt", font:"10%", label:"HEART RATE", id:"mainTitle", bgCol:"#f00", col:"f000"},
    {type:"txt", font:"20%", label:"BPM", id:"bpmLabel", col:"#000", bgCol:"#f00"},
    //{type:"txt", font:"8%", label:"Confidence", id:"confidenceLabel", bgCol:"#f00", col:"f000"},
    {type:"txt", font:"8%", label:"Calibrate for 15s", id:"confidenceLabel", bgCol:"#f00", col:"f000"}
  ]
}, {lazy:true});
layout.update();
layout.render();

//make a calibration mode to just run nothing for 10 seconds then clear that text and move on

Bangle.on('HRM',function(hrm) {
  let bpm = hrm.bpm;
  let conf = hrm.confidence;
  console.log(hrm);
  layout.bpmLabel.label = bpm + "";
  layout.confidenceLabel.label = conf + "";
  layout.render();
});