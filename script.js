function Convert() {
    let from = document.getElementById("from").value.toUpperCase();
    let amount = parseFloat(document.getElementById("amount").value);
    let to = document.getElementById("to").value.toUpperCase();
    // EUR Starting
    if ((from === "EUR" || from === "EURO") && (to === "USD" || to === "DOLLAR" || to === "UNITED STATES DOLLAR")) {
        document.getElementById("result").innerHTML = (amount * 1.09) + " " + to;
    } else if ((from === "EUR" || from === "EURO") && (to === "GBP" || to === "BRITISH POUND" || to === "POUND STERLING" || to === "STERLING")) {
        document.getElementById("result").innerHTML = (amount * 0.86) + " " + to;
    } else if ((from === "EUR" || from === "EURO") && (to === "JPY" || to === "JAPANESE YEN" || to === "YEN")) {
        document.getElementById("result").innerHTML = (amount * 161.68) + " " + to;
    } else if ((from === "EUR" || from === "EURO") && (to === "EGYPTIAN POUND" || to === "EGP")) {
        document.getElementById("result").innerHTML = (amount * 33.52) + " " + to;
    } else if ((from === "EUR" || from === "EURO") && (to === "KRW" || to === "SOUTH KOREAN WON" || to === "WON")) {
        document.getElementById("result").innerHTML = (amount * 1422.78) + " " + to;
    } else if ((from === "EUR" || from === "EURO") && (to == "AED" || to == "UNITED ARAB EMIRATES DIRHAM" || to == "DIRHAM")) {
        document.getElementById("result").innerHTML = (amount * 4.00) + " " + to;
    }
    // EUR Ending

    // GBP Starting
    else if ((from === "GBP" || from === "BRITISH POUND" || from === "POUND STERLING") && (to === "USD" || to === "DOLLAR" || to === "UNITED STATES DOLLAR")) {
        document.getElementById("result").innerHTML = (amount * 1.26) + " " + to;
    } else if ((from === "GBP" || from === "BRITISH POUND" || from === "POUND STERLING") && (to === "EUR" || to === "EURO")) {
        document.getElementById("result").innerHTML = (amount * 1.16) + " " + to;
    } else if ((from === "GBP" || from === "BRITISH POUND" || from === "POUND STERLING") && (to === "JPY" || to === "JAPANESE YEN" || to === "YEN")) {
        document.getElementById("result").innerHTML = (amount * 187.29) + " " + to;
    } else if ((from === "GBP" || from === "BRITISH POUND" || from === "POUND STERLING") && (to === "EGYPTIAN POUND" || to === "EGP")) {
        document.getElementById("result").innerHTML = (amount * 39.03) + " " + to;
    } else if ((from === "GBP" || from === "BRITISH POUND" || from === "POUND STERLING") && (to === "KRW" || to === "SOUTH KOREAN WON" || to === "WON")) {
        document.getElementById("result").innerHTML = (amount * 1649.41) + " " + to;
    } else if ((from === "GBP" || from === "BRITISH POUND" || from === "POUND STERLING") && (to == "AED" || to == "UNITED ARAB EMIRATES DIRHAM" || to == "DIRHAM")) {
        document.getElementById("result").innerHTML = (amount * 4.64) + " " + to;
    }
    // GBP Ending
    // JPY Starting
    else if ((from === "JPY" || from === "JAPANESE YEN" || from === "YEN") && (to === "GBP" || to === "BRITISH POUND" || to === "POUND STERLING" || to === "STERLING")) {
        document.getElementById("result").innerHTML = (amount * 0.0053) + " " + to;
    } else if ((from === "JPY" || from === "JAPANESE YEN" || from === "YEN") && (to === "EUR" || to === "EURO")) {
        document.getElementById("result").innerHTML = (amount * 0.0062) + " " + to;
    } else if ((from === "JPY" || from === "JAPANESE YEN" || from === "YEN") && (to === "USD" || to === "DOLLAR" || to === "UNITED STATES DOLLAR")) {
        document.getElementById("result").innerHTML = (amount * 0.0068) + " " + to;
    } else if ((from === "JPY" || from === "JAPANESE YEN" || from === "YEN") && (to === "EGYPTIAN POUND" || to === "EGP")) {
        document.getElementById("result").innerHTML = (amount * 0.21) + " " + to;
    } else if ((from === "JPY" || from === "JAPANESE YEN" || from === "YEN") && (to === "KRW" || to === "SOUTH KOREAN WON" || to === "WON")) {
        document.getElementById("result").innerHTML = (amount * 8.81) + " " + to;
    } else if ((from === "JPY" || from === "JAPANESE YEN" || from === "YEN") && (to == "AED" || to == "UNITED ARAB EMIRATES DIRHAM" || to == "DIRHAM")) {
        document.getElementById("result").innerHTML = (amount * 0.025) + " " + to;
    }
    // JPY Ending
    // USD Starting
    else if ((from === "USD" || from === "DOLLAR" || from === "UNITED STATES DOLLAR") && (to === "GBP" || to === "BRITISH POUND" || to === "POUND STERLING" || to === "STERLING")) {
        document.getElementById("result").innerHTML = (amount * 0.79) + " " + to;
    } else if ((from === "USD" || from === "DOLLAR" || from === "UNITED STATES DOLLAR") && (to === "EUR" || to === "EURO")) {
        document.getElementById("result").innerHTML = (amount * 0.92) + " " + to;
    } else if ((from === "USD" || from === "DOLLAR" || from === "UNITED STATES DOLLAR") && (to === "JPY" || to === "JAPANESE YEN" || to === "YEN")) {
        document.getElementById("result").innerHTML = (amount * 148.25) + " " + to;
    } else if ((from === "USD" || from === "DOLLAR" || from === "UNITED STATES DOLLAR") && (to === "EGYPTIAN POUND" || to === "EGP")) {
        document.getElementById("result").innerHTML = (amount * 30.90) + " " + to;
    } else if ((from === "USD" || from === "DOLLAR" || from === "UNITED STATES DOLLAR") && (to === "KRW" || to === "SOUTH KOREAN WON" || to === "WON")) {
        document.getElementById("result").innerHTML = (amount * 1305.60) + " " + to;
    } else if ((from === "USD" || from === "DOLLAR" || from === "UNITED STATES DOLLAR") && (to == "AED" || to == "UNITED ARAB EMIRATES DIRHAM" || to == "DIRHAM")) {
        document.getElementById("result").innerHTML = (amount * 3.67) + " " + to;
    } else if ((from === "USD" || from === "DOLLAR" || from === "UNITED STATES DOLLAR") && (to === "USD" || to === "DOLLAR" || to === "UNITED STATES DOLLAR")) {
        document.getElementById("result").innerHTML = (amount * 1) + " " + to;
    }
    // USD Ending
    // EGP Starting
    else if ((from === "EGP" || from === "EGYPTION POUND") && (to === "GBP" || to === "BRITISH POUND" || to === "POUND STERLING" || to === "STERLING")) {
        document.getElementById("result").innerHTML = (amount * 0.026) + " " + to;
    } else if ((from === "EGP" || from === "EGYPTION POUND") && (to === "EUR" || to === "EURO")) {
        document.getElementById("result").innerHTML = (amount * 0.030) + " " + to;
    } else if ((from === "EGP" || from === "EGYPTION POUND") && (to === "JPY" || to === "JAPANESE YEN" || to === "YEN")) {
        document.getElementById("result").innerHTML = (amount * 4.79) + " " + to;
    } else if ((from === "EGP" || from === "EGYPTION POUND") && (to === "USD" || to === "DOLLAR" || to === "UNITED STATES DOLLAR")) {
        document.getElementById("result").innerHTML = (amount * 0.032) + " " + to;
    } else if ((from === "EGP" || from === "EGYPTION POUND") && (to === "KRW" || to === "SOUTH KOREAN WON" || to === "WON")) {
        document.getElementById("result").innerHTML = (amount * 42.20) + " " + to;
    } else if ((from === "EGP" || from === "EGYPTION POUND") && (to == "AED" || to == "UNITED ARAB EMIRATES DIRHAM" || to == "DIRHAM")) {
        document.getElementById("result").innerHTML = (amount * 0.12) + " " + to;
    } else if ((from === "EGP" || from === "EGYPTION POUND") && (to === "EGYPTIAN POUND" || to === "EGP")) {
        document.getElementById("result").innerHTML = (amount * 1) + " " + to;
    }
    // EGP Ending
    // AED Starting
    else if ((from === "AED" || from === "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to === "GBP" || to === "BRITISH POUND" || to === "POUND STERLING" || to === "STERLING")) {
        document.getElementById("result").innerHTML = (amount * 0.22) + " " + to;
    } else if ((from === "AED" || from === "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to === "EUR" || to === "EURO")) {
        document.getElementById("result").innerHTML = (amount * 0.25) + " " + to;
    } else if ((from === "AED" || from === "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to === "JPY" || to === "JAPANESE YEN" || to === "YEN")) {
        document.getElementById("result").innerHTML = (amount * 40.27) + " " + to;
    } else if ((from === "AED" || from === "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to === "USD" || to === "DOLLAR" || to === "UNITED STATES DOLLAR")) {
        document.getElementById("result").innerHTML = (amount * 0.27) + " " + to;
    } else if ((from == "AED" || from == "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to === "KRW" || to === "SOUTH KOREAN WON" || to === "WON")) {
        document.getElementById("result").innerHTML = (amount * 355.02) + " " + to;
    } else if ((from === "AED" || from === "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to === "EGYPTIAN POUND" || to === "EGP")) {
        document.getElementById("result").innerHTML = (amount * 8.41) + " " + to;
    } else if ((from === "AED" || from === "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to == "AED" || to == "UNITED ARAB EMIRATES DIRHAM" || to == "DIRHAM")) {
        document.getElementById("result").innerHTML = (amount * 1) + " " + to;
    }
    // AED Ending
    // KRW Starting
    else if ((from === "KRW" || from === "SOUTH KOREAN WON" || from === "WON") && (to === "GBP" || to === "BRITISH POUND" || to === "POUND STERLING" || to === "STERLING")) {
        document.getElementById("result").innerHTML = (amount * 0.00061) + " " + to;
    } else if ((from === "KRW" || from === "SOUTH KOREAN WON" || from === "WON") && (to === "EUR" || to === "EURO")) {
        document.getElementById("result").innerHTML = (amount * 0.00070) + " " + to;
    } else if ((from === "KRW" || from === "SOUTH KOREAN WON" || from === "WON") && (to === "JPY" || to === "JAPANESE YEN" || to === "YEN")) {
        document.getElementById("result").innerHTML = (amount * 0.11) + " " + to;
    } else if ((from === "KRW" || from === "SOUTH KOREAN WON" || from === "WON") && (to === "USD" || to === "DOLLAR" || to === "UNITED STATES DOLLAR")) {
        document.getElementById("result").innerHTML = (amount * 0.00077) + " " + to;
    } else if ((from === "KRW" || from === "SOUTH KOREAN WON" || from === "WON") && (to === "EGYPTIAN POUND" || to === "EGP")) {
        document.getElementById("result").innerHTML = (amount * 0.024) + " " + to;
    } else if ((from === "KRW" || from === "SOUTH KOREAN WON" || from === "WON") && (to === "AED" || to === "UNITED ARAB EMIRATES DIRHAM" || to === "DIRHAM")) {
        document.getElementById("result").innerHTML = (amount * 0.0028) + " " + to;
     }else if ((from === "AED" || from === "UNITED ARAB EMIRATES DIRHAM" || from == "DIRHAM") && (to === "KRW" || to === "SOUTH KOREAN WON" || to === "WON")) {
        document.getElementById("result").innerHTML = (amount * 1) + " " + to;
    }
    // KRW Ending
    else {
        document.getElementById("result").innerHTML = "Invalid conversion"
    }
}