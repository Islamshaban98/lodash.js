//compact
//1--using filter  

let array=[5,'',10,0,null,91,false,undefined,NaN];
var newArray=array.filter(function(n){
return n;

});
//console.log (newArray); //[ 5, 10, 91 ]

//1.1--using for loop

function compact(myarray){
 let newArray=[];
  for (let i=0;i<myarray.length;i++){
    if(myarray[i]=myarray[i]){
     newArray.push(myarray[i] );

    }
  }
  return  newArray;
}
// console.log(compact([5,'',10,0,null,91,false]));//[ 5, 10, 91 ]



function chunk(chunckArray , size){
  let arr=[];
  for(let i =0;i<chunckArray.length;i++){
   arr.push(chunckArray.slice(i,i+size+1));//if you from(i,i+size), i+size will be excluded
   i+=size;

  }
  return arr;
 }
//console.log(chunk([1,2,3,4,5,3],4));//[ [ 1, 2, 3, 4, 5 ], [ 3 ] ]


//3--is Boolean
function isBoolean(value){
  if(value==true||value==false){
    return true;
  }else{
    return false;
  }
}
/*console.log(isBoolean(true));
console.log(isBoolean(false));
console.log(isBoolean('object'));*/


//3--drop 


function drop(array,n){
  let arr=[];
  for(let i=0;i<array.length;i++){
    
    arr.push(array.slice(n,array.length));
   
    i+=n;
    array=arr;  
  }
  return arr;
}
//console.log(drop([1,2,3,4,5,13,14],3));//start count from 1  [ [ 4, 5, 13, 14 ] ]


//4--drop right

function dropRight(array,n){
  let arr=[];
  for (let i=0;i<array.length;i++){
    arr.push(array.slice(0,array.length-n));
    i+=n;
    array=arr;
  }
  return arr;
}

//console.log(dropRight([1,2,3,4,5,13,14],2)); //[ [ 1, 2, 3, 4, 5 ] ]
//console.log(dropRight([1,2,3,4,5,13,14,5,3,2],5));
//[ [ 1, 2, 3, 4, 5 ] ]
//console.log(dropRight([1,2,3,4,5,13,14],0));//[ [ 1, 2, 3, 4, 5, 13, 14 ] ]




//take
function take(array,n){
  let arr=[];
  if (n==undefined)
    n=1;
  for(let i=0;i<array.length;i++){
    arr.push(array.slice(0,n));
    array=arr;
  }
return arr;
}
/*console.log(take([1, 2, 3], 2));
console.log(take([1, 2, 3 ,4 ,5]));*/

//takeRight
function takeRight(array,n){
  let arr=[];
  if (n==undefined)
    n=1;
  for(let i=0;i<array.length;i++){
    arr.push(array.slice(array.length-n,array.length));
    array=arr;
  }
return arr;
}
/*console.log(takeRight([1, 2, 3, 4, 5 ], 4));
console.log(takeRight([1, 2, 3, 4, 5 ]));*/


//takeWhile
/*function takeWhile(array,predicate ){
for(let n of array){
if(predicate(n)){
  array.filter(array.user);
}
}
return array;

}

console.log(takeWhile([
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
],{ 'user': 'fred',    'active': false }))
*/









//5--fill
function fill (array,value,S,E){
  let arr=[];
  for(let i=S;i<=E;i++){
    array[i]=value;
    arr=array;
  }

  return arr;
}

//console.log(fill([1,2,3,4,5],'*',1,3));
//console.log(fill([1,2,3,4,5],'&',3,4));


//6--join
function joini(array,n){
  let x='';
  for(let i=0;i<array.length;i++)
    x+= array[i]+n;
  
  return x;
  
}

//console.log(joini([1,2,3],','));

//7--last

function last(array){
  for(let i=0;i<array.length;i++){

    if(i==array.length-1)
      return array[i];
  }
    
}
//console.log(last([1,2,3,9,8]));

//8--pull

function pull(array,...values){ //just take one value 
  let arr=[];
  
  for(i=0;i<array.length;i++){
    if(array[i]==values){
    continue;
    
  }
  arr.push(array[i]) ;
  }
 
return arr;
}
//console.log(pull([1,2,3,4,4,5,4,6,8,1,4,5,5,1,1],4));


function pull(array,...values){ //just take one value 
  
  
  let arr=array.filter(x=>
   !values.includes(x) );
 
return arr;
}
//console.log(pull([1,2,3,4,4,5,4,6,8,1,4,5,5,1,1],4,5));


//9--pullAll
function pullAll(array,values){  
  let arr=[];
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
      if(array[i]==values[j]){
       array.splice(i,1);
       
       }
    }
    arr.push(array[i]);
  }

return arr;
}

//console.log (pullAll([1,2,3,4,1,2,3,4],[1,2,3]));//[4,4]

//10--SUM
function Sum(array){
 let x=0;
  for(let i=0;i<array.length;i++){
  x+=array[i];

    }
     return x;
 
}
//console.log(Sum([1,2,3,4,9,7]));


//11--Zip

function zip(...arrays){
  let arr=[];
  const length=Math.max(...arrays.map(array=>array.length));
  //console.log(length);
  let numberArray=arrays.map(array=>array.length);
 //console.log(numberArray);
  for(let i=0;i<length;i++){
    arr.push(arrays.map((array=>array[i])));
   
    }
      
  
return arr;
}
//console.log(zip([1,2],['a','b','c','d'],[true,false,true]));

function zip(...arrays){
  let obj=[];
  for(let i=0;i<array.length;i++){

    obj[array[i]]=arrays[i];
  };
return obj;
}
//console.log(zip([1,2],['a','b','c',],[true,false]));


//size
function size(value){
  let len=0;

  if(typeof (value)=="object"){
    return Object.keys(value).length;

  for(let i=0;i<value.length;i++){

  len++;

    }

  }
  return len;
}
//console.log(size([1,2,3,4,5,6]));
//console.log(size('myString'));
//console.log(size({ a:1,b:2,c:3}));

//12--zipObject
function zipObject(array,values){
  let obj={};
 for(let i=0;i<array.length;i++) {
 
    obj[array[i]]=values[i];


 }
return obj;

}
//console.log(zipObject(['a','b'],[1,2]));



//13--zipObjectDeep  ['a.b[0].c', 'a.b[1].d'], [1, 2]     { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
/*function zipObjectDeep (array,values){
  let obj={};
  for(let i=0;i<array.length;i++) {
  
  obj[array[i]]=values[i];

   

 }

return obj;
}
console.log(zipObjectDeep( ['a.b[0].c', 'a.b[1].d'], [1, 2]));*/
//14--

/*var get = function(obj, path){
 
  for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
      
       if(!obj|| typeof obj!== 'object')
       return def;
       obj = obj[path[i]];
       if(obj==undefined) return def ;

     const key= path .split('.');
     key.forEach((key)=> obj= obj[key]);

             
     };
    return obj; 
};
 console.log(get( { 'a': { 'b': [ {'c': 1},{'d':2 }]} },'a.b[0].c'));*/


 //defaultTo

 function defaultTo(value,Default){
if (isNaN (value)) 
    return Default;
  else if(value==null)
    return Default;
else
return value;}
 

 /*console.log(defaultTo(undefined,10));
 console.log(defaultTo(null,10));
 console.log(defaultTo(NaN,10));
  console.log(defaultTo(2,10));
*/
//castArray

function castArray(value){
  let array=[];
   array.push(value);
   
   return array;
}
 /*console.log(castArray(null));
  console.log(castArray({'a':1,'b':2}));
 console.log(castArray('abc'));
 console.log(castArray(undefined));*/

//filter

function filter(array,predicate){
  let arr=[];
  for(let i of array){
    if(predicate(i)){
      arr.push(i.user);
    }
    
  }
  return arr;
}

/*console.log(filter([
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'pebbles',   'age': 40, 'active': false }
],function(o) { return !o.active;}));
*/
//reject
function reject(array,predicate){
  let arr=[];
  for(let i of array){
    if(!predicate(i)){
      arr.push(i.user);
    }
    
  }
  return arr;
}

/*console.log(reject([
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
  { 'user': 'pebbles',   'age': 40, 'active': false }
],function(o) { return !o.active;}));
*/



//every
/*function every(array,predicate){
 for(let n of array){
  if(predicate(n))
    return true;
  else return false;

}
}
console.log(every([0,5],function(n){return n>2} ));
console.log(every([true, 1, null, 'yes'], Boolean ));*/



//pick

function pick(object,array){
  let obj={};
  for(var i=0 in array){
        if (object[array[i]] != undefined) {
           var objectValue = object[array[i]]
            obj[array[i]] = objectValue
         }
    }
return obj;
}

console.log(pick({ 'a': 1, 'b': '2', 'c': 3 },['a', 'c']));


function omit(object,array){
  let obj={};

 
return obj;
    }


console.log(omit({ 'a': 1, 'b': '2', 'c': 3 },['a', 'c']));