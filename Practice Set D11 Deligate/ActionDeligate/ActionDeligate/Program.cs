using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ActionDeligate
{
     class Program
    {
        public delegate void Action<in T1, in T2>(T1 x, T2 y);

        static void add (int x, int y)
        {
            if (x > y)
            {
                Console.WriteLine("x is greater");
            }
            else
            {
                Console.WriteLine("y is Greater");
            }

        }
        static void mul(int x, int y)
        {
            int c = x* y;
            Console.WriteLine("The number" +x+" Multiply With"+y+" the answer is -" +c);
        }
        static void Main(string[] args)
        {
            int x = 10;
            int y = 12;
            Action<int, int> obj,obj2;
            obj=add;
            obj2=mul;

            obj(x, y);
            obj2(x,y);


        }
    }
}
