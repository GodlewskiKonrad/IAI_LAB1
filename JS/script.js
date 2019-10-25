let spacja1="    ";
let zmienna="";
for (i=1;i<=10;i++)
{
    for (j=1;j<=10;j++)
    {
        if (i*j<10){
        zmienna+=(i*j)+spacja1;
        }else{
        zmienna+=(i*j)+"   ";
        }

    }
    zmienna+="\n";
}
console.log(zmienna);
