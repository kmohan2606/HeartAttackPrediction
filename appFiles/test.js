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

g.clear();
var lastTime = 0;
// var gatt;
//notes for later add button that scans for iphone on button press
var Layout = require("Layout");

var layout = new Layout( {
  type:"v", c: [
    {type:"btn", font:"20%", label:"output here", id:"test", 
      cb: l => {NRF.requestDevice({timeout: 300, filters: [{services: "7905F431-B5CE-4E99-A40F-4B1E122D00D0"}] }).then(device => {device.gatt.connect(); changeVal(layout.request("connected"));})
      .catch(changeVal(test, "!connect"))}
    } // initial (maximum size) values
  ]
}, {lazy:true});
// look for ancs service id

function changeVal(obj,out)
{

  obj.label = out;
  layout.render()
}

layout.update();
layout.render();