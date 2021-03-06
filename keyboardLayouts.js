// ANSI layout is assumed (and this won't make sense otherwise).
// Descriptions of the layouts below use terms like columns and rows.  A column
// would refer to the collection of keys "zaq1" (column 1) or "xsw2" (column
// 2).  A row would refer to the collection of keys "zxcvbnm,/" Ascending a
// column would mean moving from "z" to "a" to "q" (away from your chest) and
// descending is the inverted direction.  Likewise, ascending a row would mean
// moving from "z" to "x" to "c" to "v" and descending the inversion as well.

// melodic layout
// columns ascending in perfect 4ths
// rows ascending in major 2nds
//
// This an oddly useful layout, optimized for melodic playing.  The major
// scale modes are very easily accessible (as well as chromatic should you
// desire).  Perfect fifths are a comfortable keypress away.
let melodicLayout = {
    // col 1
    "z": 0,
    "a": 5,
    "q": 10,
    "1": 15,
    // col 2
    "x": 2,
    "s": 7,
    "w": 12,
    "2": 17,
    // col 3
    "c": 4,
    "d": 9,
    "e": 14,
    "3": 19,
    // col 4
    "v": 6,
    "f": 11,
    "r": 16,
    "4": 21,
    // col 5
    "b": 8,
    "g": 13,
    "t": 18,
    "5": 23,
    // col 6
    "n": 10,
    "h": 15,
    "y": 20,
    "6": 25,
    // col 7
    "m": 12,
    "j": 17,
    "u": 22,
    "7": 27,
    // col 8
    ",": 14,
    "k": 19,
    "i": 24,
    "8": 29,
    // col 9
    ".": 16,
    "l": 21,
    "o": 26,
    "9": 31,
    // col 10
    "/": 18,
    ";": 23,
    "p": 28,
    "0": 33,
    // col 11 (somewhat incomplete)
    "'": 25,
    "[": 30,
    "-": 35,
    // col 12 (somewhat incomplete)
    "]": 32,
    "=": 37,
}

// melodic layout (vers 2)
// columns ascending in minor 3rds
// rows ascending in major 2nds
//
let melodicLayout2 = {
    // col 1
    "z": 0,
    "a": 3,
    "q": 6,
    "1": 9,
    // col 2
    "x": 2,
    "s": 5,
    "w": 8,
    "2": 11,
    // col 3
    "c": 4,
    "d": 7,
    "e": 10,
    "3": 13,
    // col 4
    "v": 6,
    "f": 9,
    "r": 12,
    "4": 15,
    // col 5
    "b": 8,
    "g": 11,
    "t": 14,
    "5": 17,
    // col 6
    "n": 10,
    "h": 13,
    "y": 16,
    "6": 19,
    // col 7
    "m": 12,
    "j": 15,
    "u": 18,
    "7": 21,
    // col 8
    ",": 14,
    "k": 17,
    "i": 20,
    "8": 23,
    // col 9
    ".": 16,
    "l": 19,
    "o": 22,
    "9": 25,
    // col 10
    "/": 18,
    ";": 21,
    "p": 24,
    "0": 27,
    // col 11 (somewhat incomplete)
    "'": 23,
    "[": 26,
    "-": 29,
    // col 12 (somewhat incomplete)
    "]": 28,
    "=": 31,
}

// major 3rds inverted layout
// columns descending in minor 2nds
// rows ascending  in major 3rds
//
// This layout has an odd descending note layout in its columns but is useful
// for harmony.  The right hand has convenient access to 7th chords.  There are
// no redundant notes (maximizing voicing options).
let major3rdsInvertedLayout = {
    // col 1
    "z": 3,
    "a": 2,
    "q": 1,
    "1": 0,
    // col 2
    "x": 7,
    "s": 6,
    "w": 5,
    "2": 4,
    // col 3
    "c": 11,
    "d": 10,
    "e": 9,
    "3": 8,
    // col 4
    "v": 15,
    "f": 14,
    "r": 13,
    "4": 12,
    // col 5
    "b": 19,
    "g": 18,
    "t": 17,
    "5": 16,
    // col 6
    "n": 23,
    "h": 22,
    "y": 21,
    "6": 20,
    // col 7
    "m": 27,
    "j": 26,
    "u": 25,
    "7": 24,
    // col 8
    ",": 31,
    "k": 30,
    "i": 29,
    "8": 28,
    // col 9
    ".": 35,
    "l": 34,
    "o": 33,
    "9": 32,
    // col 10
    "/": 39,
    ";": 38,
    "p": 37,
    "0": 36,
    // col 11 (somewhat incomplete)
    "'": 42,
    "[": 41,
    "-": 40,
    // col 12 (somewhat incomplete)
    "]": 45,
    "=": 44,
}

// minor 3rds layout
// columns ascending in minor 2nds
// rows    ascending in minor 3rds
let minor3rdsLayout = {
    // col 1
    "z": 0,
    "a": 1,
    "q": 2,
    "1": 3,
    // col 2
    "x": 3,
    "s": 4,
    "w": 5,
    "2": 6,
    // col 3
    "c": 6,
    "d": 7,
    "e": 8,
    "3": 9,
    // col 4
    "v": 9,
    "f": 10,
    "r": 11,
    "4": 12,
    // col 5
    "b": 12,
    "g": 13,
    "t": 14,
    "5": 15,
    // col 6
    "n": 15,
    "h": 16,
    "y": 17,
    "6": 18,
    // col 7
    "m": 18,
    "j": 19,
    "u": 20,
    "7": 21,
    // col 8
    ",": 21,
    "k": 22,
    "i": 23,
    "8": 24,
    // col 9
    ".": 24,
    "l": 25,
    "o": 26,
    "9": 27,
    // col 10
    "/": 27,
    ";": 28,
    "p": 29,
    "0": 30,
    // col 11 (somewhat incomplete)
    "'": 31,
    "[": 32,
    "-": 33,
    // col 12 (somewhat incomplete)
    "]": 35,
    "=": 36,
}

// whole tone scale layout
// columns ascending irregularly (z a q 1 => 0, 1, 12, 13) for chromatic notes
// rows ascending in major 2nds
//
// This has an irregular column ascension to account for the lack of chromatic
// coverage present in the whole tone scale.
let wholeToneScaleLayout = {
    // col 1
    "z": 0,
    "a": -1,
    "q": 12,
    "1": 11,
    // col 2
    "x": 2,
    "s": 1,
    "w": 14,
    "2": 13,
    // col 3
    "c": 4,
    "d": 3,
    "e": 16,
    "3": 15,
    // col 4
    "v": 6,
    "f": 5,
    "r": 18,
    "4": 17,
    // col 5
    "b": 8,
    "g": 7,
    "t": 20,
    "5": 19,
    // col 6
    "n": 10,
    "h": 9,
    "y": 22,
    "6": 21,
    // col 7
    "m": 12,
    "j": 11,
    "u": 24,
    "7": 23,
    // col 8
    ",": 14,
    "k": 13,
    "i": 26,
    "8": 25,
    // col 9
    ".": 16,
    "l": 15,
    "o": 28,
    "9": 27,
    // col 10
    "/": 18,
    ";": 17,
    "p": 30,
    "0": 29,
    // col 11 (somewhat incomplete)
    "'": 19,
    "[": 32,
    "-": 31,
    // col 12 (somewhat incomplete)
    "]": 34,
    "=": 33,
}

// diatonic scale layout
// columns ascending irregularly (z a q 1 => 0, 1, 12, 13) for chromatic notes
// rows ascending irregularly in diatonic notes (z,q: white notes & a,1: accidentals)
let diatonicLayout = {
    // col 1
    "z": 0,
    // "a": -1,
    "q": 12,
    // "1": 11,
    // col 2
    "x": 2,
    "s": 1,
    "w": 14,
    "2": 13,
    // col 3
    "c": 4,
    "d": 3,
    "e": 16,
    "3": 15,
    // col 4
    "v": 5,
    // "f": 5,
    "r": 17,
    // "4": 17,
    // col 5
    "b": 7,
    "g": 6,
    "t": 19,
    "5": 18,
    // col 6
    "n": 9,
    "h": 8,
    "y": 21,
    "6": 20,
    // col 7
    "m": 11,
    "j": 10,
    "u": 23,
    "7": 22,
    // col 8
    ",": 12,
    // "k": 13,
    "i": 24,
    // "8": 25,
    // col 9
    ".": 14,
    "l": 13,
    "o": 26,
    "9": 25,
    // col 10
    "/": 16,
    ";": 15,
    "p": 28,
    "0": 27,
    // col 11 (somewhat incomplete)
    // "'": 19,
    "[": 29,
    // "-": 28,
    // col 12 (somewhat incomplete)
    "]": 31,
    "=": 30,
}


// perfect 4ths layout
// columns ascending in perfect 4ths
// rows ascending in minor 2nds
//
// This is basically a bass guitar layout.
let perfect4thsLayout = {
    // col 1
    "z": 0,
    "a": 5,
    "q": 10,
    "1": 15,
    // col 2
    "x": 1,
    "s": 6,
    "w": 11,
    "2": 16,
    // col 3
    "c": 2,
    "d": 7,
    "e": 12,
    "3": 17,
    // col 4
    "v": 3,
    "f": 8,
    "r": 13,
    "4": 18,
    // col 5
    "b": 4,
    "g": 9,
    "t": 14,
    "5": 19,
    // col 6
    "n": 5,
    "h": 10,
    "y": 15,
    "6": 20,
    // col 7
    "m": 6,
    "j": 11,
    "u": 16,
    "7": 21,
    // col 8
    ",": 7,
    "k": 12,
    "i": 17,
    "8": 22,
    // col 9
    ".": 8,
    "l": 13,
    "o": 18,
    "9": 23,
    // col 10
    "/": 9,
    ";": 14,
    "p": 19,
    "0": 24,
    // col 11 (somewhat incomplete)
    "'": 15,
    "[": 20,
    "-": 25,
    // col 12 (somewhat incomplete)
    "]": 21,
    "=": 26,
}

// tritone layout
// columns ascending in tritones
// rows ascending in minor 2nds
//
// This layout is convenient for its easy access to perfect 5ths as well as
// being similar to the layout of a guitar.
let tritoneLayout = {
    // col 1
    "z": 0,
    "a": 6,
    "q": 12,
    "1": 18,
    // col 2
    "x": 1,
    "s": 7,
    "w": 13,
    "2": 19,
    // col 3
    "c": 2,
    "d": 8,
    "e": 14,
    "3": 20,
    // col 4
    "v": 3,
    "f": 9,
    "r": 15,
    "4": 21,
    // col 5
    "b": 4,
    "g": 10,
    "t": 16,
    "5": 22,
    // col 6
    "n": 5,
    "h": 11,
    "y": 17,
    "6": 23,
    // col 7
    "m": 6,
    "j": 12,
    "u": 18,
    "7": 24,
    // col 8
    ",": 7,
    "k": 13,
    "i": 19,
    "8": 25,
    // col 9
    ".": 8,
    "l": 14,
    "o": 20,
    "9": 26,
    // col 10
    "/": 9,
    ";": 15,
    "p": 21,
    "0": 27,
    // col 11 (somewhat incomplete)
    "'": 16,
    "[": 22,
    "-": 28,
    // col 12 (somewhat incomplete)
    "]": 23,
    "=": 29,
}
