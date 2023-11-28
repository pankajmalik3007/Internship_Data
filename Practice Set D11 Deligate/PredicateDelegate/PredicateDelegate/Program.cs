using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PredicateDelegate
{  
    
    //Deligate for Predicate value
    public delegate bool Predicate<in T>(int num);

    //Deligate for annoynys type
    public delegate void Value(string name);
    class Program
    {
         static  bool div(int num)
        {
           
            return num %2==0;
        }

        static void Main(string[] args)
        {
            //Annonys
            Value e = delegate (string name)
            {
                Console.WriteLine(name);
            };
            e("Pankaj");


            //Predicate
            Predicate<int> num1 = div;
            bool res = num1(11);
            Console.WriteLine(res);
        }
    }
}
