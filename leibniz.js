let n = 0
let i = 1
while(true){
    if (i%2==1) n+=(1)/((i*2)-1)
    else n-=1/((i*2)-1)
    i++
    if (i%10000000==0) process.stdout.write(" "+n*4+"\r")
}