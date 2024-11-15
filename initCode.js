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

E.setTimeZone(-4);

function mainWindow() 
{
  g.clear();
  var Layout = require("Layout");
  var layout = new Layout( {
    type:"v", c: [
      {type:"txt", font:"20%", label:"12:00", id:"time" },
      {type:"txt", font:"6x8", label:"The Date", id:"date" }
    ]
  });
  g.clear();
  layout.render();
}

function topWindow()
{
  
}

function bottomWindow()
{

}

function leftWindow()
{

}

function rightWindow()
{

}

let windowFunction = mainWindow;


function changeWindow()
{
  if(win == windowFunction) return;
  windowFunction = win;
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