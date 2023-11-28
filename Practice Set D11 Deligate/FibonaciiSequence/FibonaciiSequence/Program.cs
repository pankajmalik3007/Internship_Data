using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FibonaciiSequence
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 0;
            int b = 1;
            int c ;
            int n = 10;
            Console.WriteLine(a + b);
            for(int i = 0; i < n; i++)
            {
                c= a + b;
                Console.WriteLine(c);
                a = b; b = c;
            }
            
        }
    }
}
