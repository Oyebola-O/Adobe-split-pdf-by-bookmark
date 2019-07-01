var bm = this.bookmarkRoot;
var numBm = bm.children.length;
var path = this.path;
var currBm, newDoc, startCoppy, endCoppy, newName;
var folderPath = cleanPath(path);
var rink = rcount = dink = dcount = aink = acount = 0;
var rfrun = dfrun = afrun = 0;
var workingPage = 0;


for(var j = getBookmarkPage(bm.children[0]); j < this.numPages; j++){
  pl = this.getPageLabel(j);
  if(!isNaN(pl)){
    dink++;
  } else {
    if(pl.charAt(0).toLowerCase() == 'a'){
      aink++;
    } else {
      rink++;
    }
  }
}



for(var i = 0; i < numBm; i++){
  newDoc = app.newDoc();
  currBm = bm.children[i];
  markName = currBm.name.replace(/[?:\\/|<>"*]/g,"_");
  newName = folderPath + markName + '.pdf';
  startCoppy = getBookmarkPage(currBm);
  var quavo = startCoppy;
  

  if(bm.children[i+1] == null){
    endCoppy = this.numPages-1;
  } else {endCoppy = getBookmarkPage(bm.children[i+1])-1}

  newDoc.insertPages({ nPage: -1, cPath: path, nStart: startCoppy, nEnd: endCoppy });

  newDoc.deletePages(newDoc.numPages-1);

  rcount = dcount = 0;

  for(var k = 0; k < newDoc.numPages; k++){
    if(rink != 0){
    	if(rfrun == 0){rcount = 0; rfrun=1}
      newDoc.setPageLabels(k, [ "r", "", rcount+1+quavo]);
      rink--; rcount++; workingPage++;
      continue;
    }

    workingPage = startCoppy+k;

    if(dink != 0){
    	var p = Number(this.getPageLabel(workingPage));
    	if(dfrun == 0){dcount = 0; dfrun=1}
    	newDoc.setPageLabels(k, [ "D", "", p]);
    	dink--; dcount++; workingPage++;
      	continue;
    }

    if(aink != 0){
    	if(afrun == 0){acount = 0; afrun=1}
      	newDoc.setPageLabels(k, [ "D", "Appendix-", acount+1]);
      	aink--; acount++;
      	continue;
    }
  }

  newDoc.saveAs({ cPath: newName });
  newDoc.closeDoc(true);
}

// Function gets current folder directory
function cleanPath(path){
  var p = path.split("/");
  var newPath = "";
  for(var i = 0; i < p.length-1; i++){
      newPath += p[i] + "/";
  }
  return newPath;
}


// Function to get bookmark page
function getBookmarkPage(bm){
  bm.execute();
  return this.pageNum;
}