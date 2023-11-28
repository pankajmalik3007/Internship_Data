using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace function
{
    class Program
    {
        //Addition Method 
        public static int sum(int x, int y, int z)
        {
            return x + y + z;
        }

        public static int factorial(int x)
        {
            int fact = 1;
            for (int i = 1; i <= x; i++)
            {
                fact *= i;
            }
            Console.WriteLine(fact);
            return fact;
        }


        public static string biodata(string name, string rno, string mob)
        {
            return name + rno + mob;
        }
        static void Main(string[] args)
        {
            Func<int, int, int, int> add = sum;
            int result = add(10, 20, 30);
            Console.WriteLine(result);

            Func<int, int> facto = factorial;
            int resule = facto(5);

            Func<string, string, string, string> func = biodata;
            string n = func(" Pankaj ", " 14 ", " 9284 ");
            Console.WriteLine(n);
        }
    }
}
