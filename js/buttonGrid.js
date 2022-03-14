let div = document.createElement('div');
document.body.appendChild(div);
for(let i=1; i<10; i++){
      let btn = document.createElement('button');
      btn.id = `btn${i}`;
      btn.innerHTML = i;
      div.appendChild(btn);
  }
let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5 = document.getElementById('btn5');
btn5.onclick = function(){
    nums.unshift(nums.pop());
    for(i=0;i<=7;i++){
        document.getElementById(`btn${ids[i]}`).innerHTML = nums[i];
    }
}