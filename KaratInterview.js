// You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times you showed an ad on each individual domain. Every line consists of a count and a domain name. It looks like this:

// counts = [ "900,google.com",
//      "60,mail.yahoo.com",
//      "10,mobile.sports.yahoo.com",
//      "40,sports.yahoo.com",
//      "300,yahoo.com",
//      "10,stackoverflow.com",
//      "2,en.wikipedia.org",
//      "1,es.wikipedia.org" ]

// Write a function that takes this input as a parameter and returns a data structure containing the number of hits that were recorded on each domain AND each domain under it. For example, an impression on "sports.yahoo.com" counts for "sports.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "sports" and "sports.yahoo" are not valid domains.)

// Expected output (in any order):
// 1320    com
//  900    google.com
//  410    yahoo.com
//   60    mail.yahoo.com
//   10    mobile.sports.yahoo.com
//   50    sports.yahoo.com
//   10    stackoverflow.com
//    3    org
//    3    wikipedia.org
//    2    en.wikipedia.org
//    1    es.wikipedia.org


var counts = ["900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org"
];

// function looks at each string in the array, and derives the count, and the domain for each count.
// Next have function or another function to derive further detail from each string and accumlate the count for the further detail

function howMany(counts) {
    var output = {}

    for (var i = 0; i < counts.length; i++) {
        var line = counts[i];
        var split = line.split(",");
        var count = parseInt(split[0]);
        var rootdomain = split[1];
        //console.log("" + count + " for " + domain);

        var domains = generateDomains(rootdomain);

        for (var domain of domains) {
            if (output[domain] === undefined) {
                output[domain] = count;
            } else {
                output[domain] += count;
            }
        }
        // how many times 'google.com' show up and derive the number from the string
    }

    return output;

}

function generateDomains(domain) {
    var split = domain.split(".");

    var output = [];
    var currentDomain = "";

    for (var i = split.length - 1; i >= 0; i--) {
        if (currentDomain == "") {
            currentDomain = split[i];
        } else {
            currentDomain = split[i] + "." + currentDomain;
        }
        output.push(currentDomain);
    }
    console.log(domain + " => [" + output + "]");
    return output;
}

console.log(howMany(counts));
