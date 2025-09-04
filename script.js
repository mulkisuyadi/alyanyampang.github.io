

let fphase;
let ophase;
let lphase;

function calculate () {
  let mphaseStart = new Date(document.getElementById("startperiod").value);
                                                            
  let mphaseEnd = new Date(document.getElementById("endperiod").value);
  
  let cycleLength = parseInt(document.getElementById("cyclelength").value, 10);
  
  console.log(mphaseStart);
  console.log(mphaseEnd);
  console.log(cycleLength);
  
  
  let nextperiod = new Date(mphaseStart);
  nextperiod.setDate(mphaseStart.getDate() + cycleLength);
  console.log(nextperiod.toDateString());
  
  let ophase = new Date(nextperiod);
  ophase.setDate(nextperiod.getDate() - 14);
  console.log(ophase.toDateString());
  
  let lphaseStart = new Date(ophase);
  lphaseStart.setDate(ophase.getDate() + 1);
  console.log(lphaseStart.toDateString());
  let lphaseEnd = new Date(ophase);
  lphaseEnd.setDate(nextperiod.getDate() - 1);
  console.log(lphaseEnd.toDateString());
  
  let fphaseEnd = new Date(ophase);
  fphaseEnd.setDate(ophase.getDate()-1);
  console.log(fphaseEnd.toDateString());
  
  document.getElementById("menstrualphase").innerHTML = `Menstrual Phase: ${mphaseStart.toDateString()} -${mphaseEnd.toDateString()}`
  
  document.getElementById("follicularphase").innerHTML = `Follicular Phase: ${mphaseStart.toDateString()} -${fphaseEnd.toDateString()}`
  
  document.getElementById("ovulationphase").innerHTML = `Ovulation Phase: ${ophase.toDateString()}`
  
  document.getElementById("lutealphase").innerHTML = `Luteal Phase: ${lphaseStart.toDateString()} -${lphaseEnd.toDateString()}`
  
  document.getElementById("nextperiod").innerHTML = `Next Period: ${nextperiod.toDateString()}`
}

document.getElementById("calculate").addEventListener("click", calculate);

console.log("JS is working!");