gdjs.HurdlerMenuCode = {};
gdjs.HurdlerMenuCode.GDStartObjects1= [];
gdjs.HurdlerMenuCode.GDStartObjects2= [];
gdjs.HurdlerMenuCode.GDStartObjects3= [];
gdjs.HurdlerMenuCode.GDMainMenuObjects1= [];
gdjs.HurdlerMenuCode.GDMainMenuObjects2= [];
gdjs.HurdlerMenuCode.GDMainMenuObjects3= [];
gdjs.HurdlerMenuCode.GDResumeObjects1= [];
gdjs.HurdlerMenuCode.GDResumeObjects2= [];
gdjs.HurdlerMenuCode.GDResumeObjects3= [];
gdjs.HurdlerMenuCode.GDInstructionsObjects1= [];
gdjs.HurdlerMenuCode.GDInstructionsObjects2= [];
gdjs.HurdlerMenuCode.GDInstructionsObjects3= [];
gdjs.HurdlerMenuCode.GDControlsObjects1= [];
gdjs.HurdlerMenuCode.GDControlsObjects2= [];
gdjs.HurdlerMenuCode.GDControlsObjects3= [];
gdjs.HurdlerMenuCode.GDTitleObjects1= [];
gdjs.HurdlerMenuCode.GDTitleObjects2= [];
gdjs.HurdlerMenuCode.GDTitleObjects3= [];

gdjs.HurdlerMenuCode.conditionTrue_0 = {val:false};
gdjs.HurdlerMenuCode.condition0IsTrue_0 = {val:false};
gdjs.HurdlerMenuCode.condition1IsTrue_0 = {val:false};


gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.HurdlerMenuCode.GDStartObjects2});
gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.HurdlerMenuCode.GDStartObjects1});
gdjs.HurdlerMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.HurdlerMenuCode.condition0IsTrue_0.val = false;
{
gdjs.HurdlerMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.HurdlerMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HurdlerMain", false);
}}

}


};gdjs.HurdlerMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.HurdlerMenuCode.GDStartObjects2);

gdjs.HurdlerMenuCode.condition0IsTrue_0.val = false;
{
gdjs.HurdlerMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDStartObjects2Objects, runtimeScene, true, true);
}if (gdjs.HurdlerMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HurdlerMenuCode.GDStartObjects2 */
{for(var i = 0, len = gdjs.HurdlerMenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.HurdlerMenuCode.GDStartObjects2[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.HurdlerMenuCode.GDStartObjects1);

gdjs.HurdlerMenuCode.condition0IsTrue_0.val = false;
{
gdjs.HurdlerMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.HurdlerMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HurdlerMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.HurdlerMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.HurdlerMenuCode.GDStartObjects1[i].setColor("218;218;218");
}
}
{ //Subevents
gdjs.HurdlerMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.HurdlerMenuCode.eventsList2 = function(runtimeScene) {

};gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDControlsObjects1Objects = Hashtable.newFrom({"Controls": gdjs.HurdlerMenuCode.GDControlsObjects1});
gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDControlsObjects1Objects = Hashtable.newFrom({"Controls": gdjs.HurdlerMenuCode.GDControlsObjects1});
gdjs.HurdlerMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.HurdlerMenuCode.condition0IsTrue_0.val = false;
{
gdjs.HurdlerMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.HurdlerMenuCode.condition0IsTrue_0.val) {
}

}


};gdjs.HurdlerMenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.HurdlerMenuCode.eventsList1(runtimeScene);
}


{


gdjs.HurdlerMenuCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.HurdlerMenuCode.GDControlsObjects1);

gdjs.HurdlerMenuCode.condition0IsTrue_0.val = false;
{
gdjs.HurdlerMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDControlsObjects1Objects, runtimeScene, true, true);
}if (gdjs.HurdlerMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HurdlerMenuCode.GDControlsObjects1 */
{for(var i = 0, len = gdjs.HurdlerMenuCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.HurdlerMenuCode.GDControlsObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.HurdlerMenuCode.GDControlsObjects1);

gdjs.HurdlerMenuCode.condition0IsTrue_0.val = false;
{
gdjs.HurdlerMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HurdlerMenuCode.mapOfGDgdjs_46HurdlerMenuCode_46GDControlsObjects1Objects, runtimeScene, true, false);
}if (gdjs.HurdlerMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HurdlerMenuCode.GDControlsObjects1 */
{for(var i = 0, len = gdjs.HurdlerMenuCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.HurdlerMenuCode.GDControlsObjects1[i].setColor("218;218;218");
}
}
{ //Subevents
gdjs.HurdlerMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.HurdlerMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HurdlerMenuCode.GDStartObjects1.length = 0;
gdjs.HurdlerMenuCode.GDStartObjects2.length = 0;
gdjs.HurdlerMenuCode.GDStartObjects3.length = 0;
gdjs.HurdlerMenuCode.GDMainMenuObjects1.length = 0;
gdjs.HurdlerMenuCode.GDMainMenuObjects2.length = 0;
gdjs.HurdlerMenuCode.GDMainMenuObjects3.length = 0;
gdjs.HurdlerMenuCode.GDResumeObjects1.length = 0;
gdjs.HurdlerMenuCode.GDResumeObjects2.length = 0;
gdjs.HurdlerMenuCode.GDResumeObjects3.length = 0;
gdjs.HurdlerMenuCode.GDInstructionsObjects1.length = 0;
gdjs.HurdlerMenuCode.GDInstructionsObjects2.length = 0;
gdjs.HurdlerMenuCode.GDInstructionsObjects3.length = 0;
gdjs.HurdlerMenuCode.GDControlsObjects1.length = 0;
gdjs.HurdlerMenuCode.GDControlsObjects2.length = 0;
gdjs.HurdlerMenuCode.GDControlsObjects3.length = 0;
gdjs.HurdlerMenuCode.GDTitleObjects1.length = 0;
gdjs.HurdlerMenuCode.GDTitleObjects2.length = 0;
gdjs.HurdlerMenuCode.GDTitleObjects3.length = 0;

gdjs.HurdlerMenuCode.eventsList4(runtimeScene);

return;

}

gdjs['HurdlerMenuCode'] = gdjs.HurdlerMenuCode;
