function firstNonRepeatedChar(str) {
 let map={};
 for(let i=0;i<s.length;i++){
	map[s[i]]=(map[s[i]]??0)+1
 }
 let ans = null;
 let keys = Object.keys(map);
 for(let i=0;i<keys.length;i++){
	if(map[keys[i]]===1){
		ans=keys[i];
		break;
	}
 }
 return ans;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
