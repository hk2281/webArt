var target = $x("/html/body/div[1]/div[1]/span[3]/span/span[1]/span[1]")

const config={
  attributes: true,
  childList: true, 
  subtree: true
};

const callback = function(mutationsList, observer){
  console.log(target["0"].innerText);

  //do  nothing 
}

const observer = new MutationObserver(callback);
observer.observe(target, config);
observer.disconnect();