﻿let framerate = 8000000
let i = 0
let ratio = 0
while (true){
    let d = Math.sqrt((Math.random()*100-50)**2+(Math.random()*100-50)**2)
    if (d<=50) ratio++
    i++
    if (i%framerate==0) process.stdout.write(" "+4*(ratio/i)+", "+i+",  "+ratio+"\r")
}

