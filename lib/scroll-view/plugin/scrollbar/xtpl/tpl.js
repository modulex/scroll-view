/*compiled by xtemplate#3.3.1*/
var ret = module.exports = function tpl(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];


buffer.data += '<div class="';
var id0 = ((t=(affix.axis)) !== undefined ? t:((t = data.axis) !== undefined ? t :scope.resolveLooseUp(["axis"])));
var exp1 = id0;
exp1 = (id0)+('-arrow-up arrow-up');
var callRet2
callRet2 = callFnUtil(tpl, scope, {escape:1,params:[exp1]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet2);
buffer.data += '">\r\n    <a href="javascript:void(\'up\')">up</a>\r\n</div>\r\n<div class="';
pos.line = 4;
var id3 = ((t=(affix.axis)) !== undefined ? t:((t = data.axis) !== undefined ? t :scope.resolveLooseUp(["axis"])));
var exp4 = id3;
exp4 = (id3)+('-arrow-down arrow-down');
var callRet5
callRet5 = callFnUtil(tpl, scope, {escape:1,params:[exp4]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet5);
buffer.data += '">\r\n    <a href="javascript:void(\'down\')">down</a>\r\n</div>\r\n<div class="';
pos.line = 7;
var id6 = ((t=(affix.axis)) !== undefined ? t:((t = data.axis) !== undefined ? t :scope.resolveLooseUp(["axis"])));
var exp7 = id6;
exp7 = (id6)+('-track track');
var callRet8
callRet8 = callFnUtil(tpl, scope, {escape:1,params:[exp7]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet8);
buffer.data += '">\r\n<div class="';
pos.line = 8;
var id9 = ((t=(affix.axis)) !== undefined ? t:((t = data.axis) !== undefined ? t :scope.resolveLooseUp(["axis"])));
var exp10 = id9;
exp10 = (id9)+('-drag drag');
var callRet11
callRet11 = callFnUtil(tpl, scope, {escape:1,params:[exp10]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet11);
buffer.data += '">\r\n<div class="';
pos.line = 9;
var id12 = ((t=(affix.axis)) !== undefined ? t:((t = data.axis) !== undefined ? t :scope.resolveLooseUp(["axis"])));
var exp13 = id12;
exp13 = (id12)+('-drag-top');
var callRet14
callRet14 = callFnUtil(tpl, scope, {escape:1,params:[exp13]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet14);
buffer.data += '">\r\n</div>\r\n<div class="';
pos.line = 11;
var id15 = ((t=(affix.axis)) !== undefined ? t:((t = data.axis) !== undefined ? t :scope.resolveLooseUp(["axis"])));
var exp16 = id15;
exp16 = (id15)+('-drag-center');
var callRet17
callRet17 = callFnUtil(tpl, scope, {escape:1,params:[exp16]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet17);
buffer.data += '">\r\n</div>\r\n<div class="';
pos.line = 13;
var id18 = ((t=(affix.axis)) !== undefined ? t:((t = data.axis) !== undefined ? t :scope.resolveLooseUp(["axis"])));
var exp19 = id18;
exp19 = (id18)+('-drag-bottom');
var callRet20
callRet20 = callFnUtil(tpl, scope, {escape:1,params:[exp19]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet20);
buffer.data += '">\r\n</div>\r\n</div>\r\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;