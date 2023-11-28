using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace INHERITANCE1
{
    internal class Program
    {
        public class Employee
        {
            public void sal() 
            {
                int sall = 12000;
               Console.WriteLine("Employee sallay " + sall);
            }
        }

        public class bonus:Employee
        {
            public void Empbonus()
            {
                int bonus = 100;
                Console.WriteLine(" sallay bonus " + bonus);
            }
        }
        static void Main(string[] args)
        {

            bonus b = new bonus();
            b.sal();
            b.Empbonus();
            
        }
    }
}

