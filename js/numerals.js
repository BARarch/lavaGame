var NUMERALS = [
["dddddddddddddddd",
 "dddddddddddddddd",
 "dd            dd",
 "dd            dd",
 "dd            dd",
 "dd            dd",
 "dd            dd",
 "dd            dd",
 "dddddddddddddddd",
 "dddddddddddddddd"],
 
["      dd        ",
 "      dd        ",
 "      dd        ",
 "      dd        ",
 "      dd        ",
 "      dd        ",
 "      dd        ",
 "      dd        ",
 "      dd        ",
 "      dd        "],
 
["dddddddddddddddd",
 "dddddddddddddddd",
 "              dd",
 "              dd",
 "dddddddddddddddd",
 "dddddddddddddddd",
 "dd              ",
 "dd              ",
 "dddddddddddddddd",
 "dddddddddddddddd"],
 
["dddddddddddddddd",
 "dddddddddddddddd",
 "              dd",
 "              dd",
 "dddddddddddddddd",
 "dddddddddddddddd",
 "              dd",
 "              dd",
 "dddddddddddddddd",
 "dddddddddddddddd"],
 
["dd            dd",
 "dd            dd",
 "dd            dd",
 "dd            dd",
 "dddddddddddddddd",
 "dddddddddddddddd",
 "              dd",
 "              dd",
 "              dd",
 "              dd"],  
 
["dddddddddddddddd",
 "dddddddddddddddd",
 "dd              ",
 "dd              ",
 "dddddddddddddddd",
 "dddddddddddddddd",
 "              dd",
 "              dd",
 "dddddddddddddddd",
 "dddddddddddddddd"],
 
["dddddddddddddddd",
 "dddddddddddddddd",
 "dd              ",
 "dd              ",
 "dddddddddddddddd",
 "dddddddddddddddd",
 "dd            dd",
 "dd            dd",
 "dddddddddddddddd",
 "dddddddddddddddd"],
 
["dddddddddddddddd",
 "dddddddddddddddd",
 "              dd",
 "              dd",
 "              dd",
 "              dd",
 "              dd",
 "              dd",
 "              dd",
 "              dd"],
 
["dddddddddddddddd",
 "dddddddddddddddd",
 "dd            dd",
 "dd            dd",
 "dddddddddddddddd",
 "dddddddddddddddd",
 "dd            dd",
 "dd            dd",
 "dddddddddddddddd",
 "dddddddddddddddd"],
 
["dddddddddddddddd",
 "dddddddddddddddd",
 "dd            dd",
 "dd            dd",
 "dddddddddddddddd",
 "dddddddddddddddd",
 "              dd",
 "              dd",
 "dddddddddddddddd",
 "dddddddddddddddd"] 
];

var LEV = [
"dd              ",
"dd              ",
"dd              ",
"dd              ",
"dd              ",
"dd              ",
"dd              ",
"dd              ",
"dddddddddddddddd",
"dddddddddddddddd"
];

var TIMES = [
"            ",
"            ",
"            ",
"            ",
"  xx  xx    ",
"  xx  xx    ",
"    xx      ",
"    xx      ",
"  xx  xx    ",
"  xx  xx    "
];

var OVER = [
"            ",
"            ",
"            ",
"            ",
"      xx    ",
"      xx    ",
"    xx      ",
"    xx      ",
"  xx        ",
"  xx        "
];

var HEART = [
"                ",
"                ",
"  rwrr    rrrr  ",
"rrwwwrrrrrrrrrrr",
"rrrwrrrrrrrrrrrr",
"  rrrrrrrrrrrr  ",
"    rrrrrrrr    ",
"      rrrr      ",
"                ",
"                "
];

var COIN = [
"      gggg    ",
"     gggggg   ",
"     ggwwgg   ",
"    ggwggbgg  ",
"    ggwggbgg  ",
"    ggwggbgg  ",
"     ggbbgg   ",
"     gggggg   ",
"      gggg    ",
"              "
];

var PAUSED = [
"dddddddddddddddd  dddddddddddddddd  dd            dd  dddddddddddddddd  dddddddddddddddd  ddddddddddddddd ",
"dddddddddddddddd  dddddddddddddddd  dd            dd  dddddddddddddddd  dddddddddddddddd  dddddddddddddddd",
"dd            dd  dd            dd  dd            dd  dd                dd                dd            dd",
"dd            dd  dd            dd  dd            dd  dd                dd                dd            dd",
"dddddddddddddddd  dddddddddddddddd  dd            dd  dddddddddddddddd  dddddddddddddddd  dd            dd",
"dddddddddddddddd  dddddddddddddddd  dd            dd  dddddddddddddddd  dddddddddddddddd  dd            dd",
"dd                dd            dd  dd            dd                dd  dd                dd            dd",
"dd                dd            dd  dd            dd                dd  dd                dd            dd",
"dd                dd            dd  dddddddddddddddd  dddddddddddddddd  dddddddddddddddd  dddddddddddddddd",
"dd                dd            dd  dddddddddddddddd  dddddddddddddddd  dddddddddddddddd  ddddddddddddddd "
];

var GAME_OVER = [
"dddddddddddddddd  dddddddddddddddd  dddddddddddddddddd  dddddddddddddddd    dddddddddddddddd  dd              dd  dddddddddddddddd  dddddddddddddddd",
"dddddddddddddddd  dddddddddddddddd  dddddddddddddddddd  dddddddddddddddd    dddddddddddddddd  dd              dd  dddddddddddddddd  dddddddddddddddd",
"dd                dd            dd  dd      dd      dd  dd                  dd            dd  dd              dd  dd                dd            dd",
"dd                dd            dd  dd      dd      dd  dd                  dd            dd   dd            dd   dd                dd            dd",
"dd    dddddddddd  dddddddddddddddd  dd      dd      dd  dddddddddddddddd    dd            dd    dd          dd    dddddddddddddddd  dd            dd",
"dd    dddddddddd  dddddddddddddddd  dd      dd      dd  dddddddddddddddd    dd            dd     dd        dd     dddddddddddddddd  dddddddddddddddd",
"dd            dd  dd            dd  dd      dd      dd  dd                  dd            dd      dd      dd      dd                dddddddddddddddd",
"dd            dd  dd            dd  dd      dd      dd  dd                  dd            dd       dd    dd       dd                dd          dd  ",
"dddddddddddddddd  dd            dd  dd      dd      dd  dddddddddddddddd    dddddddddddddddd        dddddd        dddddddddddddddd  dd           dd ",
"dddddddddddddddd  dd            dd  dd      dd      dd  dddddddddddddddd    dddddddddddddddd         dddd         dddddddddddddddd  dd            dd"
];
