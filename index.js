
//**31-3 যদি কোণ এরে যোগ করে বা গুন করে ডাবল করার হিসাব*** video--31-3;;

// শুধু এরে push করার হিসাব**

// const nambar=[4, 5, 10, 20, 52, 25, 60, 63, 23];

// const dauble=[];
// for(const num of nambar){
//     dauble.push(num)
// }
// console.log(dauble)
// ******************************

// **এরে গুন করার বিষয় --**

// const nambar=[4, 5, 10, 20, 52, 25, 60, 63, 23];
// const gun=[];
// for(const num of nambar){
//     const Gun=num*2;
//     gun.push(Gun)
// }
// console.log(gun)

// ****************************************

// map দিয়ে গুন যোগ বিয়োগ ভাগ করেতে পারি****//

// const nambar=[4, 5, 10, 20, 52, 25, 60, 63, 23];
// function doubleIt(num){
//     return num*2;
// }
// const Rabbi=nambar.map(doubleIt);
// console.log(Rabbi)

// ********************************

// map দিয়ে ভাগ করেতে পারি

// const Rayhan=[10, 20, 30, 50, 60, 23, 40, 80];
// function Rabbi(num){
//     return num/2;
// }
// const vag=Rayhan.map(Rabbi);
// console.log(vag)

// ****************************************

// সটকাট ফাংশন দিয়ে গুন কাজ করার নিয়েম******

// const Rokib=[10,20, 50, 60, 50, 60];
// const doubled=Rokib.map(num=>num*2);
// console.log(doubled)

// **********************************************//

// সটকাট ফাংশন দিয়ে ভাগ কাজ করার নিয়েম***

// const Rabbi=[10, 60, 50, 100, 50, 60, 70];
// const Rayhan=Rabbi.map(num=>num/2);
// console.log(Rayhan)

// impoutent array kaj******

// const Name=['Rabbi', 'Rakib,', 'Rayhan', 'Rifat', 'Najim'];
// const lengths=Name.map(friend =>friend.length)
// console.log(lengths)

// ------------------------------------------------------------------------------;

// **vi--31-4 forEach filter fiter কাজ করার নিয়েম***

// forEach দ্বারা এরে গুলো নিচে নিচে আসবে****

// const numbar=[20, 20, 30, 40, 50, 5, 2];
// const Rabbi=numbar.forEach(n=>console.log(n))

// *****************************************************

// filter সম্পর্কে > < এরের ভিতরে নিচে উপরের মান খজা**

// const Players=[75, 85, 65, 52, 56, 64, 69, 68, 57,79, 78, 59];
// const selected=Players.filter(p=>p>66);
// console.log(selected)

// *********************************************************************

// filter বিজোড় সংখ্যা খোজার নিয়ম***

// const Players=[75, 85, 65, 52, 56, 64, 69, 68, 57,79, 78, 59];
// const selected=Players.filter(p=>p %2===1);
// console.log(selected)

// এরে ''এরে কাজ নাম ভিতর ৪ টি বেশি নিবে না****

// const Name=['Rabbi', 'jim', 'top', 'Rayhan', 'Najims', 'Chabbir'];
// const Players=Name.filter(f=>f.length>4);
// console.log(Players)

// --------------------------------------------------------------------------------;

// **vi-31-5 সব বিষয় কাজ করার নিয়েম *****vi--31-5;

// const products=[
//     {id:1, name:'Vivo', price:30000},
//     {id:2, name:'Walton', price:20000},
//     {id:3, name:'Lg', price:50000},
//     {id:4, name:'Iphone', price:200000},
   
// ]
// map**
// const  names=products.map(p=>p.name)
// console.log(names)
// const name=products.map(pr=>pr.price);
// console.log(name)

// forEach

// products.forEach(p=> console.log(p.id))

// filter**
// const total=products.filter(p=>p.price>30000);
// console.log(total)
// -----------------------------------------------------------------------------------;

// function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);
// const {x, y, z} = {x: 1, y1: 2, z: 3};
// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);

// *******************************************************************************************************************************************************************
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// video--32-3 চেক করার নিয়ম সত্য না কি মিথ্যা তার বিষয় *******

// যে কোন নামবার সত্য হয় 0 bade।।

// const y=10;
// if(y){
//     console.log('This is a truth')
// }
// else {
//     console.log('This is a falsy')
// }
// ****************************************

// const z=0;
// if(z){
//     console.log('truth')
// }
// else {
//     console.log('falsy')
// }
// --------------------------------------------------------------------------------;

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));