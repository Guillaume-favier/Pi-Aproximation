/*

    recoucres : https://blogs.sas.com/content/iml/2016/03/14/monte-carlo-estimates-of-pi.html
    inspiration : https://www.youtube.com/watch?v=5cNnf_7e92Q
    first 50 digits :  3.14159265358979323846264338327950288419716939937510
    best Ic ould find: 3.1415926535979644
    
*/
let framerate = 10000000
let n = 0
let i = 1
while(true){
    if (i%2==1) n+=1/((i*2)-1)
    else n-=1/((i*2)-1)
    i++
    if (i%framerate==0) process.stdout.write(" "+n*4+"\r")
}
