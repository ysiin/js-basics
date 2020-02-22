// buat function yang mereturn string yang tidak memiliki huruf vowel (a, i, u, e, o);

function removeVowels(str) {
	// expecto patronum!
	var strTemp = '';
	var res = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		if (res[i] === 'a' || res[i] === 'i' || res[i] === 'u' || res[i] === 'e' || res[i] === 'o') {
			continue
		} else {
			strTemp += str[i]

		}
	}

	return strTemp
}


console.log(removeVowels("I have never seen a thin person drinking Diet Coke.")) // " hv nvr sn  thn prsn drnkng Dt Ck."
console.log(removeVowels("We're gonna build a wall!")) // "W'r gnn bld  wll!"
console.log(removeVowels("Happy weekend guys!")) // "Hppy wknd gys!"
