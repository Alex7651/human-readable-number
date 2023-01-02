module.exports = function toReadable(num) {
    help = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "hundred",
        "ty",
        "teen",
        "thir",
        "eigh",
        "twen",
        "fif",
        "for",
    ];
    if (num < 13) {
        return help[num];
    } else {
        const a = String(num).split("");
        let b = "";
        if (a.length === 3) {
            b = help[a[0]] + " " + help[13] + " ";
            a.shift();
        }
        if (a[0] === "1") {
            d =
                a[1] === "3"
                    ? b + help[16] + help[15]
                    : a[1] === "8"
                    ? b + help[17] + help[15]
                    : a[1] === "0"
                    ? b + help[10]
                    : a[1] === "1"
                    ? b + help[11]
                    : a[1] === "2"
                    ? b + help[12]
                    : a[1] === "5"
                    ? b + help[19] + help[15]
                    : b + help[a[1]] + help[15];
        } else {
            if (a[0] === "0") {
                d = a[1] === "0" ? b.slice(0, -1) : b + help[a[1]];
            } else {
                d =
                    a[1] === "0"
                        ? a[0] === "2"
                            ? b + help[18] + help[14]
                            : a[0] === "8"
                            ? b + help[17] + help[14]
                            : a[0] === "3"
                            ? b + help[16] + help[14]
                            : a[0] === "4"
                            ? b + help[20] + help[14]
                            : a[0] === "5"
                            ? b + help[19] + help[14]
                            : b + help[a[0]] + help[14]
                        : a[0] === "2"
                        ? b + help[18] + help[14] + " " + help[a[1]]
                        : a[0] === "8"
                        ? b + help[17] + help[14] + " " + help[a[1]]
                        : a[0] === "3"
                        ? b + help[16] + help[14] + " " + help[a[1]]
                        : a[0] === "4"
                        ? b + help[20] + help[14] + " " + help[a[1]]
                        : a[0] === "5"
                        ? b + help[19] + help[14] + " " + help[a[1]]
                        : b + help[a[0]] + help[14] + " " + help[a[1]];
            }
        }
        return d;
    }
};
