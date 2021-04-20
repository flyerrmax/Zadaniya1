var a = prompt("Введите число","");
var b = prompt("Введите число","");
var sum = 0;
while (a<b)
{
  a++;
  
  if(a<b) 
    {
      sum+=a;
    }
}    
document.write(sum);





for(let a = 0; a < 10 / 2; ++a)
{
for(let b = 0; b < 20; ++b)
{
document.write("*");
}
document.write("<br>");

}