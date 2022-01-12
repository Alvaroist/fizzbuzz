var numero=100;
for(var i=1; i<=numero; i++)
{
  if(i%3!=0 && i%5!=0)
  {
   document.write(i);
  }
  else if (i%3==0 && i%5==0)
  {
   document.write("fizzbuzz");
  }
  else if (i%3==0)
  {
    document.write("fizz");
  }
  else
  {
    document.write("buzz");
  }
  document.write("<br />");
}
