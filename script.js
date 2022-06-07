let IBT = document.getElementById("ibt");
let PBT = document.getElementById("pbt");
let CBT = document.getElementById("cbt");
let IELTS = document.getElementById("ielts");
let TOEIC = document.getElementById("toeic");
let allData_1 = {};
let allData_2 = {};
let allData_3 = {};
function read(){
    fetch("./UniqueIBT.json")
      .then(response => {
    return response.json();
    })
    .then(jsondata => allData_1 = jsondata
    );
    fetch("./UniqueCBT.json")
      .then(response => {
    return response.json();
    })
    .then(jsondata => allData_2 = jsondata
    );
    fetch("./UniqueIELTS.json")
      .then(response => {
    return response.json();
    })
    .then(jsondata => allData_3 = jsondata
    );
}
read();

function convert_1(){
    console.log(IBT.value);
    let output = convertion(IBT.value);
    console.log(output);
    // disabled();
    
if(IBT.value!=''){
//  console.log(output1);
PBT.value = output.PBTvalue;
//  console.log(minTvalue.value);
 CBT.value = output.CBTvalue;
 IELTS.value = output.IELTSvalue;
 TOEIC.value = output.TOEICvalue;
}
else{
    // console.log('HHHHHHHH');
    PBT.value = '';
    CBT.value = '';
    IELTS.value = '';
    TOEIC.value = '';
}
}

function convertion(IBT){
    console.log(typeof(IBT));
    let PBTvalue;
    let CBTvalue;
    let IELTSvalue;
    let TOEICvalue;
    // console.log(allData_1[IBT]['TOEFL PBT']);
    if(IBT == ''){
        PBTvalue = '';
        CBTvalue = '';
        IELTSvalue = '';
        TOEICvalue = '';
    }

    else if(IBT>=0 && IBT<=120){
        PBTvalue=allData_1[IBT]['TOEFL PBT'];
        CBTvalue=allData_1[IBT]['TOEFL CBT'];
        IELTSvalue=allData_1[IBT]['IELTS'];
        TOEICvalue=allData_1[IBT]['TOEIC'];
    }
    else {
        return{PBTvalue : 'Enter Valid IBT Value[0-120]', CBTvalue : 'Enter Valid IBT Value[0-120]',IELTSvalue : 'Enter Valid IBT Value[0-120]',TOEICvalue : 'Enter Valid IBT Value[0-120]'}
    }
    
    return{PBTvalue : PBTvalue,CBTvalue : CBTvalue,IELTSvalue : IELTSvalue,TOEICvalue : TOEICvalue}
}

function convert_2(){
    console.log(CBT.value);
    let output = convertion_2(CBT.value);
    console.log(output);
    // disabled();
    
if(CBT.value!=''){
//  console.log(output1);
IBT.value = output.IBTvalue;
//  console.log(minTvalue.value);
 PBT.value = output.PBTvalue;
 IELTS.value = output.IELTSvalue;
 TOEIC.value = output.TOEICvalue;
}
else{
    console.log('HHHHHHHH');
    IBT.value = '';
    PBT.value = '';
    IELTS.value = '';
    TOEIC.value = '';
}
}
function convertion_2(CBT){
    console.log(typeof(CBT));
    let IBTvalue;
    let PBTvalue;
    let IELTSvalue;
    let TOEICvalue;

    // console.log(allData_1[IBT]['TOEFL PBT']);
    if(CBT == ''){
        IBTvalue = '';
        PBTvalue = '';
        IELTSvalue = '';
        TOEICvalue = '';
    }

    else if(CBT>=3 && CBT<=300){
        IBTvalue=allData_2[CBT]['TOEFL PBT'];
        PBTvalue=allData_2[CBT]['TOEFL CBT'];
        IELTSvalue=allData_2[CBT]['IELTS'];
        TOEICvalue=allData_2[CBT]['TOEIC'];
    }
    else {
        return{IBTvalue : undefined, PBTvalue : undefined,IELTSvalue : undefined,TOEICvalue : undefined}
    }
    
    return{IBTvalue : IBTvalue,PBTvalue : PBTvalue,IELTSvalue : IELTSvalue,TOEICvalue : TOEICvalue}
}

function convert_4(){
    console.log(IELTS.value);
    let output = convertion_3(IELTS.value);
    console.log(output);
    // disabled();
    
if(IELTS.value!=''){
//  console.log(output1);
IBT.value = output.IBTvalue;
//  console.log(minTvalue.value);
 PBT.value = output.PBTvalue;
 CBT.value = output.CBTvalue;
 TOEIC.value = output.TOEICvalue;
}
else{
    // console.log('HHHHHHHH');
    IBT.value = '';
    PBT.value = '';
    CBT.value = '';
    TOEIC.value = '';
}
}

function convertion_3(IELTS){
    console.log(typeof(IELTS));
    let IBTvalue;
    let PBTvalue;
    let CBTvalue;
    let TOEICvalue;
    // console.log(allData_1[IBT]['TOEFL PBT']);
    if(IELTS == ''){
        IBTvalue = '';
        PBTvalue = '';
        CBTvalue = '';
        TOEICvalue = '';
    }

    else if(IELTS>=0 && IELTS<=9){
        IBTvalue=allData_3[IELTS]['TOEFL IBT'];
        PBTvalue=allData_3[IELTS]['TOEFL PBT'];
        CBTvalue=allData_3[IELTS]['TOEFL CBT'];
        TOEICvalue=allData_3[IELTS]['TOEIC'];
    }
    else {
        return{IBTvalue : 'Enter Valid IELTS Score[0-9]', PBTvalue : 'Enter Valid IELTS Score[0-9]',CBTvalue : 'Enter Valid IELTS Score[0-9]',TOEICvalue : 'Enter Valid IELTS Score[0-9]'}
    }
    
    return{IBTvalue : IBTvalue,PBTvalue : PBTvalue,CBTvalue : CBTvalue,TOEICvalue : TOEICvalue}
}